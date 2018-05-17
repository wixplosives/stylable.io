/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	(function(){
/******/ 	    if (typeof document !== 'undefined') {
/******/ 	        var style = document.getElementById("dist/stage.css");
/******/ 	        if(!style){
/******/ 	            style = document.createElement('style');
/******/ 	            style.id = "dist/stage.css";
/******/ 	            document.head.appendChild(style);
/******/ 	        }
/******/ 	        style.textContent = "";
/******/ 	    }
/******/ 	    return ;
/******/ 	}())
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 519);
/******/ })
/************************************************************************/
/******/ ({

/***/ 132:
/*!*************************************!*\
  !*** ./lib/rabbit/module-system.ts ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const eventemitter3_1 = __webpack_require__(/*! eventemitter3 */ 36);
exports.ModuleSystemEvents = {
    RELOAD: 'reload'
};
class ModuleSystem {
    constructor(rabbit, targetScope = 'window', wrapModules = {}) {
        this.rabbit = rabbit;
        this.targetScope = targetScope;
        this.wrapModules = wrapModules;
        this.loadedModules = {};
        this.events = new eventemitter3_1.EventEmitter();
        this.reload = async (changedFiles) => {
            let needsReload = new Set();
            // console.log('started eval changed '+Date.now())
            Object.keys(changedFiles).forEach(path => {
                if (this.loadedModules[path]) {
                    needsReload.add(path);
                }
            });
            const needsNewResolutionMap = !!Array.from(needsReload.values()).filter((updatedFile) => changedFiles[updatedFile]).find((updatedFile) => {
                return !!(Object.values(changedFiles[updatedFile]).find((dependency) => {
                    return !this.loadedModules[dependency];
                }));
            });
            if (needsNewResolutionMap) {
                this.loadedModules = {};
                return this.resolveAndRender();
            }
            needsReload.forEach(path => {
                this.getDependants(path, needsReload);
            });
            if (needsReload.size) {
                const fetchMap = {};
                needsReload.forEach(path => {
                    delete this.loadedModules[path];
                    fetchMap[path] = this.rabbit.generateCompiledCode(path);
                });
                await this.evalModule(this.renderedModule, this.resolutionMap, fetchMap);
                this.events.emit(exports.ModuleSystemEvents.RELOAD, {
                    rootReloaded: true,
                    reloadedModules: needsReload
                });
            }
            // console.log('evaled '+Date.now())
        };
        this.renderedModule = '';
        this.resolutionMap = {};
        this.reversedResolutionMap = {};
    }
    async require(modulePath) {
        this.renderedModule = modulePath;
        return this.resolveAndRender();
    }
    async resolveAndRender() {
        this.resolutionMap = await this.rabbit.generateResolutionMap(this.renderedModule);
        this.reversedResolutionMap = this.createReverseMap(this.resolutionMap);
        const fetchMap = this.fetchModuleWithDeps(this.renderedModule, this.resolutionMap);
        return await this.evalModule(this.renderedModule, this.resolutionMap, fetchMap);
    }
    getDependants(path, dependants) {
        let moduleDeps = [];
        if (this.reversedResolutionMap[path]) {
            Object.values(this.reversedResolutionMap[path]).forEach((path) => {
                dependants.add(path);
            });
            if (moduleDeps.length) {
                moduleDeps.forEach(dependant => this.getDependants(dependant, dependants));
            }
        }
        ;
        return dependants;
    }
    createReverseMap(map) {
        const res = {};
        Object.keys(map).forEach(importer => {
            const imports = map[importer];
            if (imports) {
                Object.keys(imports).forEach(imported => {
                    res[imports[imported]] = res[imports[imported]] || {};
                    res[imports[imported]][importer] = importer;
                });
            }
        });
        return res;
    }
    async evalModule(fileName, importsMap, fetchMap) {
        if (!this.loadedModules[fileName]) {
            const moduleImports = this.getModuleImports(fileName, importsMap);
            // wait for all dependencies to load before proceeding
            if (moduleImports !== null) {
                for (let importFileName of Object.values(moduleImports)) {
                    await this.evalModule(importFileName, importsMap, fetchMap);
                }
            }
            // wait for the fetching of this module's code
            const moduleCode = await fetchMap[fileName];
            if (fileName.endsWith('.json')) {
                // json-loader
                this.loadedModules[fileName] = JSON.parse(moduleCode);
            }
            else {
                // js loader
                const require = (importName) => {
                    return moduleImports && this.loadedModules[moduleImports[importName]];
                };
                const process = { env: {}, argv: [] };
                try {
                    const moduleCtx = { exports: {}, id: fileName, filename: fileName };
                    const win = this.targetScope === 'window' ? ', window' : '';
                    // we use eval instead of function constructor because function constructor offsets the line numbers, invalidating source maps
                    eval(`(function(exports, require, module, __filename, __dirname, process, global){${moduleCode}\n})(moduleCtx.exports, require, moduleCtx, moduleCtx.filename, '', process ${win});`);
                    if (this.wrapModules[fileName]) {
                        this.loadedModules[fileName] = this.wrapModules[fileName](moduleCtx.exports);
                    }
                    else {
                        this.loadedModules[fileName] = moduleCtx.exports;
                    }
                }
                catch (e) {
                    console.error(e);
                    this.loadedModules[fileName] = `error loading ${fileName}`;
                }
            }
        }
        return this.loadedModules[fileName];
    }
    fetchModuleWithDeps(fileName, importsMap, fetchMap = {}) {
        if (!fetchMap[fileName]) {
            const request = this.rabbit.generateCompiledCode(fileName);
            fetchMap[fileName] = request;
            request.catch((err) => {
                debugger;
            });
            const moduleImports = this.getModuleImports(fileName, importsMap);
            if (moduleImports !== null) {
                for (let importFileName of Object.values(moduleImports)) {
                    if (!fetchMap[importFileName]) {
                        this.fetchModuleWithDeps(importFileName, importsMap, fetchMap);
                    }
                }
            }
        }
        return fetchMap;
    }
    getModuleImports(fileName, importsMap) {
        const moduleImports = importsMap[fileName];
        if (moduleImports === undefined) {
            if (fileName.startsWith('#')) {
                return {};
            }
            throw new Error(`error locating ${fileName}`);
        }
        return moduleImports;
    }
}
exports.ModuleSystem = ModuleSystem;


/***/ }),

/***/ 262:
/*!*************************************!*\
  !*** ./src/core/stage/stage-api.ts ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(/*! ../../../lib/simple-link/index */ 52);
async function exposeStage(config, stage) {
    return await index_1.connect(config, stage);
}
exports.exposeStage = exposeStage;
async function exposeServices(rabbit, config) {
    const methods = {
        generateCompiledCode: rabbit.generateCompiledCode.bind(rabbit),
        generateResolutionMap: rabbit.generateResolutionMap.bind(rabbit)
    };
    return await index_1.connect(config, methods);
}
exports.exposeServices = exposeServices;


/***/ }),

/***/ 36:
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ 519:
/*!****************************************!*\
  !*** multi ./src/core/stage/stage.tsx ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/core/stage/stage.tsx */520);


/***/ }),

/***/ 52:
/*!**********************************!*\
  !*** ./lib/simple-link/index.ts ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isMessageType(t, m) {
    return m.type === t;
}
function isMessagePort(endpoint) {
    return endpoint.constructor.name === 'MessagePort';
}
function activateEndpoint(endpoint) {
    if (isMessagePort(endpoint))
        endpoint.start();
}
function shallowClone(target) {
    const res = {};
    Object.keys(target).forEach((key) => {
        res[key] = target[key];
    });
    return res;
}
function fillProxy(proxy, inner) {
    Object.keys(inner).forEach((key) => {
        if (!proxy[key]) {
            proxy[key] = (...args) => inner[key].apply(inner, args);
        }
    });
    return proxy;
}
;
const connections = [];
async function connect(config, offeredAPI) {
    activateEndpoint(config.target);
    const offeredCapabilites = getCapablities(offeredAPI);
    let otherTargets = [];
    const wrappedOfferedApi = { api: offeredAPI };
    let proxyCreated = false;
    let remoteApi;
    remoteApi = await new Promise((resolveConnection) => {
        config.target.addEventListener('message', (event) => {
            const payload = extractMessage(event);
            if (payload.senderId !== config.otherSideId) {
                return;
            }
            if (isMessageType('handshake', payload)) {
                post(config, {
                    type: 'handshake-confirm',
                    targets: offeredCapabilites,
                    senderId: config.thisSideId
                });
                otherTargets = payload.targets;
                proxyCreated = true;
                resolveConnection(buildProxy(config, otherTargets, wrappedOfferedApi));
            }
            else if (isMessageType('handshake-confirm', payload)) {
                otherTargets = payload.targets;
                if (!proxyCreated) {
                    resolveConnection(buildProxy(config, otherTargets, wrappedOfferedApi));
                }
            }
        });
        post(config, {
            type: 'handshake',
            targets: offeredCapabilites,
            senderId: config.thisSideId
        });
    });
    connections.push({
        config,
        localApi: wrappedOfferedApi,
        remoteApi
    });
    return remoteApi.proxy;
}
exports.connect = connect;
function post(config, message) {
    try {
        config.target.postMessage(message);
        //  console.log(config.thisSideId + '->' + config.otherSideId + ':', message.type, (message as any).target || (message as any).description || '')//JSON.stringify(message, null, 4))
        //  console.log(config.thisSideId + '->' + config.otherSideId + ':', message.type, JSON.stringify(message, null, 4))
    }
    catch (err) {
        console.log(config.thisSideId + '->' + config.otherSideId + ':failed to execute PostMessage \n target:', config.target, 'message:', message);
    }
}
function getCapablities(api) {
    return Object.keys(api);
}
let counter = 0;
function nextId() {
    return counter++;
}
function extractMessage(event) {
    let payload = event.data;
    if (isMessageType('wrapped', payload)) {
        payload = payload.inner;
    }
    return payload;
}
function buildProxy(config, targets, offeredAPI) {
    const proxy = {};
    const inner = {};
    const pendingCallbacks = [];
    const dispose = (fromOtherSide = false) => {
        config.target.removeEventListener('message', messageListener);
        const notifyDisposed = (event) => {
            const payload = extractMessage(event);
            if (payload.senderId === config.otherSideId) {
                post(config, { type: 'dispose', senderId: config.thisSideId });
                config.target.removeEventListener('message', notifyDisposed);
            }
        };
        config.target.addEventListener('message', notifyDisposed);
        Object.keys(proxy).forEach((key) => {
            proxy[key] = () => {
                throw new Error(fromOtherSide ? 'Connection has been disposed from the other side' : 'Connection has been disposed');
            };
        });
    };
    const res = {
        proxy,
        dispose,
        innerRemoteApi: inner
    };
    targets.forEach((target) => {
        inner[target] = function (...args) {
            const id = nextId();
            const promise = new Promise((resolve, reject) => {
                pendingCallbacks.push({
                    id, reject, resolve,
                    toString() {
                        return `${target}(${args.map(a => JSON.stringify(a, null, 4)).join()})`;
                    }
                });
            });
            const message = {
                type: 'apply',
                target: target,
                id,
                arguments: args,
                senderId: config.thisSideId
            };
            post(config, message);
            return promise;
        };
        proxy[target] = function (...args) {
            return res.innerRemoteApi[target].apply(res.innerRemoteApi, args);
        };
    });
    const messageListener = async (event) => {
        const payload = extractMessage(event);
        // console.log('got:'+ (payload as any).id + config.thisSideId + '->' + config.otherSideId + ':', payload.type, (payload as any).target || (payload as any).description || '')//JSON.stringify(message, null, 4))
        // console.log(config.otherSideId + '->' + config.thisSideId + ':', payload.type, JSON.stringify(payload, null, 4))
        if (payload.senderId !== config.otherSideId) {
            return;
        }
        if (isMessageType('dispose', payload)) {
            pendingCallbacks.forEach(pending => {
                pending.reject('Connection has been disposed from the other side');
            });
            dispose(true);
        }
        if (isMessageType('apply', payload)) {
            let method = offeredAPI.api[payload.target];
            if (method) {
                let message;
                try {
                    const res = await method.apply(offeredAPI.api, payload.arguments);
                    message = {
                        type: 'resolve',
                        description: payload.target,
                        id: payload.id,
                        res,
                        senderId: config.thisSideId
                    };
                }
                catch (err) {
                    let reason = 'unknown-error';
                    let stack = undefined;
                    if (typeof err === 'string') {
                        reason = err;
                    }
                    else if (err instanceof Error) {
                        reason = err.message;
                        stack = err.stack;
                    }
                    message = {
                        type: 'reject',
                        description: payload.target,
                        id: payload.id,
                        reason,
                        stack,
                        senderId: config.thisSideId
                    };
                }
                post(config, message);
            }
            else {
                throw new Error(`has no target ${payload.target}`);
            }
        }
        else if (isMessageType('resolve', payload)) {
            const pendingIndex = pendingCallbacks.findIndex((pending) => pending.id === payload.id);
            if (pendingIndex === -1) {
                console.error('simple-link unexpected callback:' + payload.id + config.thisSideId + '->' + config.otherSideId + ':', payload.type, payload.target || payload.description || '' + JSON.stringify(event, null, 4));
                throw (new Error('simple-link unexpected callback ' + payload.description));
            }
            const cb = pendingCallbacks.splice(pendingIndex, 1)[0];
            cb.resolve(payload.res);
        }
        else if (isMessageType('reject', payload)) {
            const pendingIndex = pendingCallbacks.findIndex((pending) => pending.id === payload.id);
            if (pendingIndex === -1) {
                console.error('simple-link unexpected callback rejection:' + payload.id + config.thisSideId + '->' + config.otherSideId + ':', payload.type, payload.target || payload.description || '' + JSON.stringify(event, null, 4));
                throw (new Error('simple-link unexpected callback rejection ' + payload.description));
            }
            const cb = pendingCallbacks.splice(pendingIndex, 1)[0];
            cb.reject(new RejectionError(cb.toString(), payload.senderId, payload.reason, payload.stack));
        }
    };
    config.target.addEventListener('message', messageListener);
    return res;
}
class RejectionError extends Error {
    constructor(action, originName, message, stack) {
        super(message);
        this.name = `Rejection of ${action} by '${originName}'`;
        this.message = message;
        Object.defineProperty(this, 'stack', { value: stack ? this.stack + '\n---\nRemote stack:\n' + stack : this.stack });
    }
}
/**
 * wrap an endpoint so it never receives its own messages
 * for communication over pub-sub
 */
class NoFeedbackEndpoint {
    constructor(ep) {
        this.ep = ep;
        this.id = nextId() + '';
        this.listeners = [];
    }
    postMessage(inner) {
        this.ep.postMessage({ type: 'wrapped', senderId: this.id, inner });
    }
    addEventListener(type, handler) {
        const wrappedListener = (event) => {
            if (!isMessageType('wrapped', event.data) || event.data.senderId !== this.id) {
                handler(event);
            }
        };
        this.ep.addEventListener(type, wrappedListener);
        this.listeners.push({
            orig: handler,
            wrapped: wrappedListener
        });
    }
    removeEventListener(type, listener, options) {
        const idx = this.listeners.findIndex((listenerObj) => listenerObj.orig === listener);
        if (idx === -1) {
            throw new Error('connect remove unexisting listener');
        }
        const listenerObj = this.listeners.splice(idx, 1)[0];
        this.ep.removeEventListener(type, listenerObj.wrapped);
    }
}
exports.NoFeedbackEndpoint = NoFeedbackEndpoint;
function windowEndpoint(targetWindow, sourceWindow = self) {
    const listeners = [];
    return {
        sourceWindow, targetWindow,
        addEventListener(type, handler) {
            const wrappedListener = (event) => {
                if (targetWindow === event.source) {
                    handler(event);
                }
            };
            sourceWindow.addEventListener(type, wrappedListener);
            listeners.push({
                orig: handler,
                wrapped: wrappedListener
            });
        },
        removeEventListener(type, listener, options) {
            const idx = listeners.findIndex((listenerObj) => listenerObj.orig === listener);
            if (idx === -1) {
                throw new Error('connect remove unexisting listener');
            }
            const listenerObj = listeners.splice(idx, 1)[0];
            sourceWindow.removeEventListener(type, listenerObj.wrapped);
        },
        postMessage: (message) => targetWindow.postMessage(message, '*'),
    };
}
exports.windowEndpoint = windowEndpoint;
function disposeConnection(proxy) {
    const connectionDataIndex = connections.findIndex((connection) => connection.remoteApi.proxy === proxy);
    if (connectionDataIndex === -1) {
        throw new Error('cannot clear unknown connection');
    }
    const connectionData = connections.splice(connectionDataIndex, 1)[0];
    connectionData.remoteApi.dispose();
}
exports.disposeConnection = disposeConnection;
function disposeAllConnections() {
    while (connections.length) {
        disposeConnection(connections[0].remoteApi.proxy);
    }
}
exports.disposeAllConnections = disposeAllConnections;
function replaceRemoteApi(fromLink, toLink, proxy) {
    const connectionData = connections.find((connection) => {
        return (connection.config.thisSideId === fromLink && connection.config.otherSideId === toLink);
    });
    if (!connectionData) {
        throw new Error('replaceRemoteApi failed ' + fromLink + '->' + toLink);
    }
    connectionData.remoteApi.innerRemoteApi = fillProxy(proxy(connectionData.remoteApi.innerRemoteApi), connectionData.remoteApi.innerRemoteApi);
}
exports.replaceRemoteApi = replaceRemoteApi;
function replaceLocalApi(fromLink, toLink, proxy) {
    const connectionData = connections.find((connection) => {
        return (connection.config.otherSideId === fromLink && connection.config.thisSideId === toLink);
    });
    if (!connectionData) {
        throw new Error('replaceLocalApi failed ' + fromLink + '->' + toLink);
    }
    connectionData.localApi.api = fillProxy(proxy(connectionData.localApi.api), connectionData.localApi.api);
}
exports.replaceLocalApi = replaceLocalApi;


/***/ }),

/***/ 520:
/*!**********************************!*\
  !*** ./src/core/stage/stage.tsx ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const module_system_1 = __webpack_require__(/*! ../../../lib/rabbit/module-system */ 132);
const stage_api_1 = __webpack_require__(/*! ./stage-api */ 262);
const simple_link_1 = __webpack_require__(/*! ../../../lib/simple-link */ 52);
const patch_react_1 = __webpack_require__(/*! ./patch-react */ 521);
window.initPlayground = async (targetWindow) => {
    const renderers = {};
    const simulations = {};
    let currentPreviewPath;
    const stageElement = document.body.appendChild(document.createElement('div'));
    stageElement.setAttribute('style', ` position: absolute;
                                top:0px;
                                left:0px;
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                align-items: center;`);
    const stage = {
        render: async (renderPath, changedFiles, previewables, simulationPath) => {
            const neededRenderers = new Set();
            if (simulationPath && (!simulations[renderPath] || changedFiles[simulationPath] !== undefined)) {
                simulations[renderPath] = (await moduleSystem.require(simulationPath));
            }
            previewables.forEach(p => {
                if (!!p.renderer && !renderers[p.renderer]) {
                    neededRenderers.add(p.renderer);
                }
            });
            const neededRenderersArr = Array.from(neededRenderers);
            for (let rendererPath of neededRenderersArr) {
                const renderer = (await moduleSystem.require(rendererPath)).default;
                renderers[rendererPath] = renderer;
            }
            await moduleSystem.reload(changedFiles);
            const evaledModule = await moduleSystem.require(renderPath);
            const usedContainers = [];
            previewables.forEach(p => {
                usedContainers.push(p.exportName);
            });
            let currentIndex = 0;
            Array.from(document.body.querySelectorAll(`[data-stage-container]`)).forEach((element) => {
                const id = element.getAttribute('data-stage-container');
                if (usedContainers[currentIndex] === id) {
                    currentIndex++;
                }
                else {
                    element.remove();
                }
            });
            for (var i = currentIndex; i < previewables.length; i++) {
                const p = previewables[i];
                let container = document.body.querySelector(`[data-stage-container="${p.exportName}"]`);
                if (!container) {
                    container = stageElement.appendChild(document.createElement('div'));
                    container.setAttribute('data-stage-container', p.exportName);
                }
            }
            for (let p of previewables) {
                let container = document.body.querySelector(`[data-stage-container="${p.exportName}"]`);
                if (previewables.length > 1) {
                    container.setAttribute('style', `
                                box-sizing: border-box;
                                height:250px;
                                width:200px;
                                padding-top:50px;
                                overflow:hidden;
                                display:flex;
                                align-items: center;
                                justify-content: center;
                                margin: 10px;`);
                }
                else {
                    container.setAttribute('style', `
                                padding-top:50px;
                                margin: 10px;`);
                }
                if (renderers[p.renderer]) {
                    if (p.simulation && simulations[renderPath] && simulations[renderPath][p.exportName] && simulations[renderPath][p.exportName][p.simulation]) {
                        const sim = await simulations[renderPath][p.exportName][p.simulation]();
                        renderers[p.renderer](evaledModule[p.exportName], container, sim);
                    }
                    else {
                        renderers[p.renderer](evaledModule[p.exportName], container, null);
                    }
                }
            }
        }
    };
    let rabbit = await stage_api_1.exposeStage({
        thisSideId: 'preview',
        otherSideId: 'main',
        target: simple_link_1.windowEndpoint(targetWindow)
    }, stage);
    const moduleSystem = new module_system_1.ModuleSystem(rabbit, 'window', Object.assign({}, patch_react_1.patchReact));
};


/***/ }),

/***/ 521:
/*!***************************************!*\
  !*** ./src/core/stage/patch-react.ts ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const isPatched = 'isPatched' + Math.random();
exports.patchReact = {
    "/node_modules/react/cjs/react.development.js": (module) => {
        function fixRenderRes(props, root) {
            const nodeIds = [];
            const nodeId = root.props['data-src-pointer'];
            if (nodeId) {
                nodeIds.push(nodeId);
            }
            if (props['data-src-pointer']) {
                nodeIds.push(props['data-src-pointer']);
            }
            return module.cloneElement(root, {
                'data-src-pointer': nodeIds.join(' ')
            });
        }
        return Object.assign({}, module, { createElement(type, props, ...children) {
                if (!type[isPatched]) {
                    if (type.prototype && type.prototype.render) {
                        const originalRender = type.prototype.render;
                        type.prototype.render = function () {
                            const res = originalRender.apply(this);
                            return fixRenderRes(this.props, res);
                        };
                        type[isPatched] = true;
                    }
                    else if (typeof type === 'function') {
                        const originalStateless = type;
                        type = (props) => {
                            const res = originalStateless(props);
                            return fixRenderRes(props, res);
                        };
                    }
                }
                return module.createElement(type, props, ...children);
            } });
    }
};


/***/ })

/******/ });