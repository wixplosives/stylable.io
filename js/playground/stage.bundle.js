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
/******/ 	        var style = document.getElementById("stage.css");
/******/ 	        if(!style){
/******/ 	            style = document.createElement('style');
/******/ 	            style.id = "stage.css";
/******/ 	            document.head.appendChild(style);
/******/ 	        }
/******/ 	        style.textContent = "";
/******/ 	    }
/******/ 	    return ;
/******/ 	}())
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 866);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar has = Object.prototype.hasOwnProperty\n  , prefix = '~';\n\n/**\n * Constructor to create a storage for our `EE` objects.\n * An `Events` instance is a plain object whose properties are event names.\n *\n * @constructor\n * @api private\n */\nfunction Events() {}\n\n//\n// We try to not inherit from `Object.prototype`. In some engines creating an\n// instance in this way is faster than calling `Object.create(null)` directly.\n// If `Object.create(null)` is not supported we prefix the event names with a\n// character to make sure that the built-in object properties are not\n// overridden or used as an attack vector.\n//\nif (Object.create) {\n  Events.prototype = Object.create(null);\n\n  //\n  // This hack is needed because the `__proto__` property is still inherited in\n  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.\n  //\n  if (!new Events().__proto__) prefix = false;\n}\n\n/**\n * Representation of a single event listener.\n *\n * @param {Function} fn The listener function.\n * @param {Mixed} context The context to invoke the listener with.\n * @param {Boolean} [once=false] Specify if the listener is a one-time listener.\n * @constructor\n * @api private\n */\nfunction EE(fn, context, once) {\n  this.fn = fn;\n  this.context = context;\n  this.once = once || false;\n}\n\n/**\n * Minimal `EventEmitter` interface that is molded against the Node.js\n * `EventEmitter` interface.\n *\n * @constructor\n * @api public\n */\nfunction EventEmitter() {\n  this._events = new Events();\n  this._eventsCount = 0;\n}\n\n/**\n * Return an array listing the events for which the emitter has registered\n * listeners.\n *\n * @returns {Array}\n * @api public\n */\nEventEmitter.prototype.eventNames = function eventNames() {\n  var names = []\n    , events\n    , name;\n\n  if (this._eventsCount === 0) return names;\n\n  for (name in (events = this._events)) {\n    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);\n  }\n\n  if (Object.getOwnPropertySymbols) {\n    return names.concat(Object.getOwnPropertySymbols(events));\n  }\n\n  return names;\n};\n\n/**\n * Return the listeners registered for a given event.\n *\n * @param {String|Symbol} event The event name.\n * @param {Boolean} exists Only check if there are listeners.\n * @returns {Array|Boolean}\n * @api public\n */\nEventEmitter.prototype.listeners = function listeners(event, exists) {\n  var evt = prefix ? prefix + event : event\n    , available = this._events[evt];\n\n  if (exists) return !!available;\n  if (!available) return [];\n  if (available.fn) return [available.fn];\n\n  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {\n    ee[i] = available[i].fn;\n  }\n\n  return ee;\n};\n\n/**\n * Calls each of the listeners registered for a given event.\n *\n * @param {String|Symbol} event The event name.\n * @returns {Boolean} `true` if the event had listeners, else `false`.\n * @api public\n */\nEventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return false;\n\n  var listeners = this._events[evt]\n    , len = arguments.length\n    , args\n    , i;\n\n  if (listeners.fn) {\n    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);\n\n    switch (len) {\n      case 1: return listeners.fn.call(listeners.context), true;\n      case 2: return listeners.fn.call(listeners.context, a1), true;\n      case 3: return listeners.fn.call(listeners.context, a1, a2), true;\n      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;\n      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;\n      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;\n    }\n\n    for (i = 1, args = new Array(len -1); i < len; i++) {\n      args[i - 1] = arguments[i];\n    }\n\n    listeners.fn.apply(listeners.context, args);\n  } else {\n    var length = listeners.length\n      , j;\n\n    for (i = 0; i < length; i++) {\n      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);\n\n      switch (len) {\n        case 1: listeners[i].fn.call(listeners[i].context); break;\n        case 2: listeners[i].fn.call(listeners[i].context, a1); break;\n        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;\n        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;\n        default:\n          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {\n            args[j - 1] = arguments[j];\n          }\n\n          listeners[i].fn.apply(listeners[i].context, args);\n      }\n    }\n  }\n\n  return true;\n};\n\n/**\n * Add a listener for a given event.\n *\n * @param {String|Symbol} event The event name.\n * @param {Function} fn The listener function.\n * @param {Mixed} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @api public\n */\nEventEmitter.prototype.on = function on(event, fn, context) {\n  var listener = new EE(fn, context || this)\n    , evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;\n  else if (!this._events[evt].fn) this._events[evt].push(listener);\n  else this._events[evt] = [this._events[evt], listener];\n\n  return this;\n};\n\n/**\n * Add a one-time listener for a given event.\n *\n * @param {String|Symbol} event The event name.\n * @param {Function} fn The listener function.\n * @param {Mixed} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @api public\n */\nEventEmitter.prototype.once = function once(event, fn, context) {\n  var listener = new EE(fn, context || this, true)\n    , evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;\n  else if (!this._events[evt].fn) this._events[evt].push(listener);\n  else this._events[evt] = [this._events[evt], listener];\n\n  return this;\n};\n\n/**\n * Remove the listeners of a given event.\n *\n * @param {String|Symbol} event The event name.\n * @param {Function} fn Only remove the listeners that match this function.\n * @param {Mixed} context Only remove the listeners that have this context.\n * @param {Boolean} once Only remove one-time listeners.\n * @returns {EventEmitter} `this`.\n * @api public\n */\nEventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return this;\n  if (!fn) {\n    if (--this._eventsCount === 0) this._events = new Events();\n    else delete this._events[evt];\n    return this;\n  }\n\n  var listeners = this._events[evt];\n\n  if (listeners.fn) {\n    if (\n         listeners.fn === fn\n      && (!once || listeners.once)\n      && (!context || listeners.context === context)\n    ) {\n      if (--this._eventsCount === 0) this._events = new Events();\n      else delete this._events[evt];\n    }\n  } else {\n    for (var i = 0, events = [], length = listeners.length; i < length; i++) {\n      if (\n           listeners[i].fn !== fn\n        || (once && !listeners[i].once)\n        || (context && listeners[i].context !== context)\n      ) {\n        events.push(listeners[i]);\n      }\n    }\n\n    //\n    // Reset the array, or remove it completely if we have no more listeners.\n    //\n    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;\n    else if (--this._eventsCount === 0) this._events = new Events();\n    else delete this._events[evt];\n  }\n\n  return this;\n};\n\n/**\n * Remove all listeners, or those of the specified event.\n *\n * @param {String|Symbol} [event] The event name.\n * @returns {EventEmitter} `this`.\n * @api public\n */\nEventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {\n  var evt;\n\n  if (event) {\n    evt = prefix ? prefix + event : event;\n    if (this._events[evt]) {\n      if (--this._eventsCount === 0) this._events = new Events();\n      else delete this._events[evt];\n    }\n  } else {\n    this._events = new Events();\n    this._eventsCount = 0;\n  }\n\n  return this;\n};\n\n//\n// Alias methods names because people roll like that.\n//\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n\n//\n// This function doesn't apply anymore.\n//\nEventEmitter.prototype.setMaxListeners = function setMaxListeners() {\n  return this;\n};\n\n//\n// Expose the prefix.\n//\nEventEmitter.prefixed = prefix;\n\n//\n// Allow `EventEmitter` to be imported as module namespace.\n//\nEventEmitter.EventEmitter = EventEmitter;\n\n//\n// Expose the module.\n//\nif (true) {\n  module.exports = EventEmitter;\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/eventemitter3/index.js\n// module id = 100\n// module chunks = 0 1 2 3 4 5 6 7 8\n\n//# sourceURL=webpack:///./node_modules/eventemitter3/index.js?");

/***/ }),

/***/ 102:
/*!****************************************!*\
  !*** ./src/simple-link/simple-link.ts ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction isMessageType(t, m) {\r\n    return m.type === t;\r\n}\r\nfunction isMessagePort(endpoint) {\r\n    return endpoint.constructor.name === 'MessagePort';\r\n}\r\nfunction activateEndpoint(endpoint) {\r\n    if (isMessagePort(endpoint))\r\n        endpoint.start();\r\n}\r\nfunction shallowClone(target) {\r\n    const res = {};\r\n    Object.keys(target).forEach((key) => {\r\n        res[key] = target[key];\r\n    });\r\n    return res;\r\n}\r\nfunction fillProxy(proxy, inner) {\r\n    Object.keys(inner).forEach((key) => {\r\n        if (!proxy[key]) {\r\n            proxy[key] = (...args) => inner[key].apply(inner, args);\r\n        }\r\n    });\r\n    return proxy;\r\n}\r\n;\r\nconst connections = [];\r\nasync function connect(config, offeredAPI) {\r\n    activateEndpoint(config.target);\r\n    const offeredCapabilites = getCapablities(offeredAPI);\r\n    let otherTargets = [];\r\n    await new Promise((resolveConnection) => {\r\n        config.target.addEventListener('message', (event) => {\r\n            const payload = extractMessage(event);\r\n            if (payload.senderId !== config.otherSideId) {\r\n                return;\r\n            }\r\n            if (isMessageType('handshake', payload)) {\r\n                post(config, {\r\n                    type: 'handshake-confirm',\r\n                    targets: offeredCapabilites,\r\n                    senderId: config.thisSideId\r\n                });\r\n                otherTargets = payload.targets;\r\n                resolveConnection();\r\n            }\r\n            else if (isMessageType('handshake-confirm', payload)) {\r\n                otherTargets = payload.targets;\r\n                resolveConnection();\r\n            }\r\n        });\r\n        post(config, {\r\n            type: 'handshake',\r\n            targets: offeredCapabilites,\r\n            senderId: config.thisSideId\r\n        });\r\n    });\r\n    const wrappedOfferedApi = { api: offeredAPI };\r\n    const remoteApi = buildProxy(config, otherTargets, wrappedOfferedApi);\r\n    connections.push({\r\n        config,\r\n        localApi: wrappedOfferedApi,\r\n        remoteApi\r\n    });\r\n    return remoteApi.proxy;\r\n}\r\nexports.connect = connect;\r\nfunction post(config, message) {\r\n    try {\r\n        config.target.postMessage(message);\r\n        //  console.log(config.thisSideId + '->' + config.otherSideId + ':', JSON.stringify(message, null, 4))\r\n    }\r\n    catch (err) {\r\n        console.log(config.thisSideId + '->' + config.otherSideId + ':failed to execute PostMessage \\n target:', config.target, 'message:', message);\r\n    }\r\n}\r\nfunction getCapablities(api) {\r\n    return Object.keys(api);\r\n}\r\nlet counter = 0;\r\nfunction nextId() {\r\n    return counter++;\r\n}\r\nfunction extractMessage(event) {\r\n    let payload = event.data;\r\n    if (isMessageType('wrapped', payload)) {\r\n        payload = payload.inner;\r\n    }\r\n    return payload;\r\n}\r\nfunction buildProxy(config, targets, offeredAPI) {\r\n    const proxy = {};\r\n    const inner = {};\r\n    const pendingCallbacks = [];\r\n    const dispose = (fromOtherSide = false) => {\r\n        config.target.removeEventListener('message', messageListener);\r\n        const notifyDisposed = (event) => {\r\n            const payload = extractMessage(event);\r\n            if (payload.senderId === config.otherSideId) {\r\n                post(config, { type: 'dispose', senderId: config.thisSideId });\r\n                config.target.removeEventListener('message', notifyDisposed);\r\n            }\r\n        };\r\n        config.target.addEventListener('message', notifyDisposed);\r\n        Object.keys(proxy).forEach((key) => {\r\n            proxy[key] = () => {\r\n                throw new Error(fromOtherSide ? 'Connection has been disposed from the other side' : 'Connection has been disposed');\r\n            };\r\n        });\r\n    };\r\n    const res = {\r\n        proxy,\r\n        dispose,\r\n        innerRemoteApi: inner\r\n    };\r\n    targets.forEach((target) => {\r\n        inner[target] = function (...args) {\r\n            const id = nextId();\r\n            const promise = new Promise((resolve, reject) => {\r\n                pendingCallbacks.push({\r\n                    id, reject, resolve,\r\n                    toString() {\r\n                        return `${target}(${args.map(a => JSON.stringify(a, null, 4)).join()})`;\r\n                    }\r\n                });\r\n            });\r\n            const message = {\r\n                type: 'apply',\r\n                target: target,\r\n                id,\r\n                arguments: args,\r\n                senderId: config.thisSideId\r\n            };\r\n            post(config, message);\r\n            return promise;\r\n        };\r\n        proxy[target] = function (...args) {\r\n            return res.innerRemoteApi[target].apply(res.innerRemoteApi, args);\r\n        };\r\n    });\r\n    const messageListener = async (event) => {\r\n        const payload = extractMessage(event);\r\n        if (payload.senderId !== config.otherSideId) {\r\n            return;\r\n        }\r\n        if (isMessageType('dispose', payload)) {\r\n            pendingCallbacks.forEach(pending => {\r\n                pending.reject('Connection has been disposed from the other side');\r\n            });\r\n            dispose(true);\r\n        }\r\n        if (isMessageType('apply', payload)) {\r\n            let method = offeredAPI.api[payload.target];\r\n            if (method) {\r\n                let message;\r\n                try {\r\n                    const res = await method.apply(offeredAPI.api, payload.arguments);\r\n                    message = {\r\n                        type: 'resolve',\r\n                        description: payload.target,\r\n                        id: payload.id,\r\n                        res,\r\n                        senderId: config.thisSideId\r\n                    };\r\n                }\r\n                catch (err) {\r\n                    let reason = 'unknown-error';\r\n                    let stack = undefined;\r\n                    if (typeof err === 'string') {\r\n                        reason = err;\r\n                    }\r\n                    else if (err instanceof Error) {\r\n                        reason = err.message;\r\n                        stack = err.stack;\r\n                    }\r\n                    message = {\r\n                        type: 'reject',\r\n                        description: payload.target,\r\n                        id: payload.id,\r\n                        reason,\r\n                        stack,\r\n                        senderId: config.thisSideId\r\n                    };\r\n                }\r\n                post(config, message);\r\n            }\r\n            else {\r\n                throw new Error(`has no target ${payload.target}`);\r\n            }\r\n        }\r\n        else if (isMessageType('resolve', payload)) {\r\n            const pendingIndex = pendingCallbacks.findIndex((pending) => pending.id === payload.id);\r\n            if (pendingIndex === -1) {\r\n                throw (new Error('simple-link unexpected callback ' + payload.description));\r\n            }\r\n            const cb = pendingCallbacks.splice(pendingIndex, 1)[0];\r\n            cb.resolve(payload.res);\r\n        }\r\n        else if (isMessageType('reject', payload)) {\r\n            const pendingIndex = pendingCallbacks.findIndex((pending) => pending.id === payload.id);\r\n            if (pendingIndex === -1) {\r\n                throw (new Error('simple-link unexpected callback rejection ' + payload.description));\r\n            }\r\n            const cb = pendingCallbacks.splice(pendingIndex, 1)[0];\r\n            cb.reject(new RejectionError(cb.toString(), payload.senderId, payload.reason, payload.stack));\r\n        }\r\n    };\r\n    config.target.addEventListener('message', messageListener);\r\n    return res;\r\n}\r\nclass RejectionError extends Error {\r\n    constructor(action, originName, message, stack) {\r\n        super(message);\r\n        this.name = `Rejection of ${action} by '${originName}'`;\r\n        this.message = message;\r\n        Object.defineProperty(this, 'stack', { value: stack ? this.stack + '\\n---\\nRemote stack:\\n' + stack : this.stack });\r\n    }\r\n}\r\n/**\r\n * wrap an endpoint so it never receives its own messages\r\n * for communication over pub-sub\r\n */\r\nclass NoFeedbackEndpoint {\r\n    constructor(ep) {\r\n        this.ep = ep;\r\n        this.id = nextId() + '';\r\n        this.listeners = [];\r\n    }\r\n    postMessage(inner) {\r\n        this.ep.postMessage({ type: 'wrapped', senderId: this.id, inner });\r\n    }\r\n    addEventListener(type, handler) {\r\n        const wrappedListener = (event) => {\r\n            if (!isMessageType('wrapped', event.data) || event.data.senderId !== this.id) {\r\n                handler(event);\r\n            }\r\n        };\r\n        this.ep.addEventListener(type, wrappedListener);\r\n        this.listeners.push({\r\n            orig: handler,\r\n            wrapped: wrappedListener\r\n        });\r\n    }\r\n    removeEventListener(type, listener, options) {\r\n        const idx = this.listeners.findIndex((listenerObj) => listenerObj.orig === listener);\r\n        if (idx === -1) {\r\n            throw new Error('connect remove unexisting listener');\r\n        }\r\n        const listenerObj = this.listeners.splice(idx, 1)[0];\r\n        this.ep.removeEventListener(type, listenerObj.wrapped);\r\n    }\r\n}\r\nexports.NoFeedbackEndpoint = NoFeedbackEndpoint;\r\nfunction windowEndpoint(targetWindow, sourceWindow = self) {\r\n    const listeners = [];\r\n    return {\r\n        sourceWindow, targetWindow,\r\n        addEventListener(type, handler) {\r\n            const wrappedListener = (event) => {\r\n                if (targetWindow === event.source) {\r\n                    handler(event);\r\n                }\r\n            };\r\n            sourceWindow.addEventListener(type, wrappedListener);\r\n            listeners.push({\r\n                orig: handler,\r\n                wrapped: wrappedListener\r\n            });\r\n        },\r\n        removeEventListener(type, listener, options) {\r\n            const idx = listeners.findIndex((listenerObj) => listenerObj.orig === listener);\r\n            if (idx === -1) {\r\n                throw new Error('connect remove unexisting listener');\r\n            }\r\n            const listenerObj = listeners.splice(idx, 1)[0];\r\n            sourceWindow.removeEventListener(type, listenerObj.wrapped);\r\n        },\r\n        postMessage: (message) => targetWindow.postMessage(message, '*'),\r\n    };\r\n}\r\nexports.windowEndpoint = windowEndpoint;\r\nfunction disposeConnection(proxy) {\r\n    const connectionDataIndex = connections.findIndex((connection) => connection.remoteApi.proxy === proxy);\r\n    if (connectionDataIndex === -1) {\r\n        throw new Error('cannot clear unknown connection');\r\n    }\r\n    const connectionData = connections.splice(connectionDataIndex, 1)[0];\r\n    connectionData.remoteApi.dispose();\r\n}\r\nexports.disposeConnection = disposeConnection;\r\nfunction disposeAllConnections() {\r\n    while (connections.length) {\r\n        disposeConnection(connections[0].remoteApi.proxy);\r\n    }\r\n}\r\nexports.disposeAllConnections = disposeAllConnections;\r\nfunction replaceRemoteApi(fromLink, toLink, proxy) {\r\n    const connectionData = connections.find((connection) => {\r\n        return (connection.config.thisSideId === fromLink && connection.config.otherSideId === toLink);\r\n    });\r\n    if (!connectionData) {\r\n        throw new Error('replaceRemoteApi failed ' + fromLink + '->' + toLink);\r\n    }\r\n    connectionData.remoteApi.innerRemoteApi = fillProxy(proxy(connectionData.remoteApi.innerRemoteApi), connectionData.remoteApi.innerRemoteApi);\r\n}\r\nexports.replaceRemoteApi = replaceRemoteApi;\r\nfunction replaceLocalApi(fromLink, toLink, proxy) {\r\n    const connectionData = connections.find((connection) => {\r\n        return (connection.config.otherSideId === fromLink && connection.config.thisSideId === toLink);\r\n    });\r\n    if (!connectionData) {\r\n        throw new Error('replaceLocalApi failed ' + fromLink + '->' + toLink);\r\n    }\r\n    connectionData.localApi.api = fillProxy(proxy(connectionData.localApi.api), connectionData.localApi.api);\r\n}\r\nexports.replaceLocalApi = replaceLocalApi;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/simple-link/simple-link.ts\n// module id = 102\n// module chunks = 0 1 2 3 4 5 6 7 8\n\n//# sourceURL=webpack:///./src/simple-link/simple-link.ts?");

/***/ }),

/***/ 445:
/*!******************************!*\
  !*** ./src/module-system.ts ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst eventemitter3_1 = __webpack_require__(/*! eventemitter3 */ 100);\r\nexports.ModuleSystemEvents = {\r\n    RELOAD: 'reload'\r\n};\r\nclass ModuleSystem {\r\n    constructor(rabbit, targetScope = 'window') {\r\n        this.rabbit = rabbit;\r\n        this.targetScope = targetScope;\r\n        this.loadedModules = {};\r\n        this.events = new eventemitter3_1.EventEmitter();\r\n        this.reload = async (changedFiles) => {\r\n            let needsReload = new Set();\r\n            Object.keys(changedFiles).forEach(path => {\r\n                if (this.loadedModules[path]) {\r\n                    needsReload.add(path);\r\n                }\r\n            });\r\n            const needsNewResolutionMap = !!Array.from(needsReload.values()).filter((updatedFile) => changedFiles[updatedFile]).find((updatedFile) => {\r\n                return !!(Object.values(changedFiles[updatedFile]).find((dependency) => {\r\n                    return !this.loadedModules[dependency];\r\n                }));\r\n            });\r\n            if (needsNewResolutionMap) {\r\n                this.loadedModules = {};\r\n                return this.resolveAndRender();\r\n            }\r\n            needsReload.forEach(path => {\r\n                this.getDependants(path, needsReload);\r\n            });\r\n            if (needsReload.size) {\r\n                const fetchMap = {};\r\n                needsReload.forEach(path => {\r\n                    delete this.loadedModules[path];\r\n                    fetchMap[path] = this.rabbit.generateCompiledCode(path);\r\n                });\r\n                const m = await this.evalModule(this.renderedModule, this.resolutionMap, fetchMap);\r\n                console.log('re-rendered');\r\n                this.events.emit(exports.ModuleSystemEvents.RELOAD, {\r\n                    rootReloaded: true,\r\n                    reloadedModules: needsReload\r\n                });\r\n            }\r\n        };\r\n    }\r\n    async require(modulePath) {\r\n        this.renderedModule = modulePath;\r\n        // resetRootModule();\r\n        // this.rabbit.init(this.reload);\r\n        return this.resolveAndRender();\r\n    }\r\n    async resolveAndRender() {\r\n        this.resolutionMap = await this.rabbit.generateResolutionMap(this.renderedModule);\r\n        this.reversedResolutionMap = this.createReverseMap(this.resolutionMap);\r\n        const fetchMap = this.fetchModuleWithDeps(this.renderedModule, this.resolutionMap);\r\n        return await this.evalModule(this.renderedModule, this.resolutionMap, fetchMap);\r\n    }\r\n    getDependants(path, dependants) {\r\n        let moduleDeps = [];\r\n        if (this.reversedResolutionMap[path]) {\r\n            Object.values(this.reversedResolutionMap[path]).forEach((path) => {\r\n                dependants.add(path);\r\n            });\r\n            if (moduleDeps.length) {\r\n                moduleDeps.forEach(dependant => this.getDependants(dependant, dependants));\r\n            }\r\n        }\r\n        ;\r\n        return dependants;\r\n    }\r\n    createReverseMap(map) {\r\n        const res = {};\r\n        Object.keys(map).forEach(importer => {\r\n            const imports = map[importer];\r\n            if (imports) {\r\n                Object.keys(imports).forEach(imported => {\r\n                    res[imports[imported]] = res[imports[imported]] || {};\r\n                    res[imports[imported]][importer] = importer;\r\n                });\r\n            }\r\n        });\r\n        return res;\r\n    }\r\n    async evalModule(fileName, importsMap, fetchMap) {\r\n        if (!this.loadedModules[fileName]) {\r\n            const moduleImports = this.getModuleImports(fileName, importsMap);\r\n            // wait for all dependencies to load before proceeding\r\n            if (moduleImports !== null) {\r\n                for (let importFileName of Object.values(moduleImports)) {\r\n                    await this.evalModule(importFileName, importsMap, fetchMap);\r\n                }\r\n            }\r\n            // wait for the fetching of this module's code\r\n            const moduleCode = await fetchMap[fileName];\r\n            if (fileName.endsWith('.json')) {\r\n                // json-loader\r\n                this.loadedModules[fileName] = JSON.parse(moduleCode);\r\n            }\r\n            else {\r\n                // js loader\r\n                const require = (importName) => {\r\n                    return moduleImports && this.loadedModules[moduleImports[importName]];\r\n                };\r\n                const process = { env: {}, argv: [] };\r\n                try {\r\n                    const moduleCtx = { exports: {}, id: fileName, filename: fileName };\r\n                    const win = this.targetScope === 'window' ? ', window' : '';\r\n                    // we use eval instead of function constructor because function constructor offsets the line numbers, invalidating source maps\r\n                    eval(`(function(exports, require, module, __filename, __dirname, process, global){${moduleCode}\\n})(moduleCtx.exports, require, moduleCtx, moduleCtx.filename, '', process ${win});`);\r\n                    this.loadedModules[fileName] = moduleCtx.exports;\r\n                }\r\n                catch (e) {\r\n                    console.error(e);\r\n                    this.loadedModules[fileName] = `error loading ${fileName}`;\r\n                }\r\n            }\r\n        }\r\n        return this.loadedModules[fileName];\r\n    }\r\n    fetchModuleWithDeps(fileName, importsMap, fetchMap = {}) {\r\n        if (!fetchMap[fileName]) {\r\n            fetchMap[fileName] = this.rabbit.generateCompiledCode(fileName);\r\n            const moduleImports = this.getModuleImports(fileName, importsMap);\r\n            if (moduleImports !== null) {\r\n                for (let importFileName of Object.values(moduleImports)) {\r\n                    if (!fetchMap[importFileName]) {\r\n                        this.fetchModuleWithDeps(importFileName, importsMap, fetchMap);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return fetchMap;\r\n    }\r\n    getModuleImports(fileName, importsMap) {\r\n        const moduleImports = importsMap[fileName];\r\n        if (moduleImports === undefined) {\r\n            if (fileName.startsWith('#')) {\r\n                return {};\r\n            }\r\n            throw new Error(`error locating ${fileName}`);\r\n        }\r\n        return moduleImports;\r\n    }\r\n}\r\nexports.ModuleSystem = ModuleSystem;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/module-system.ts\n// module id = 445\n// module chunks = 0 1 2 3 4 5 8\n\n//# sourceURL=webpack:///./src/module-system.ts?");

/***/ }),

/***/ 709:
/*!*****************************!*\
  !*** ./src/rabbit-proxy.ts ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst simple_link_1 = __webpack_require__(/*! ./simple-link/simple-link */ 102);\r\nasync function consumeRabbit(config) {\r\n    const eventTarget = {\r\n        render: () => Promise.resolve()\r\n    };\r\n    const methods = await simple_link_1.connect(config, eventTarget);\r\n    return Object.assign({}, methods, { init: (render) => {\r\n            eventTarget.render = render;\r\n        } });\r\n}\r\nexports.consumeRabbit = consumeRabbit;\r\nasync function exposeRabbit(rabbit, config) {\r\n    const methods = {\r\n        generateCompiledCode: rabbit.generateCompiledCode.bind(rabbit),\r\n        generateResolutionMap: rabbit.generateResolutionMap.bind(rabbit)\r\n    };\r\n    const remoteRabbitConsumer = await simple_link_1.connect(config, methods);\r\n    rabbit.init(remoteRabbitConsumer.render);\r\n}\r\nexports.exposeRabbit = exposeRabbit;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/rabbit-proxy.ts\n// module id = 709\n// module chunks = 0 6 7 8\n\n//# sourceURL=webpack:///./src/rabbit-proxy.ts?");

/***/ }),

/***/ 866:
/*!****************************************!*\
  !*** multi ./src/playground-stage.tsx ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/playground-stage.tsx */867);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi ./src/playground-stage.tsx\n// module id = 866\n// module chunks = 8\n\n//# sourceURL=webpack:///multi_./src/playground-stage.tsx?");

/***/ }),

/***/ 867:
/*!**********************************!*\
  !*** ./src/playground-stage.tsx ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst module_system_1 = __webpack_require__(/*! ./module-system */ 445);\r\nconst rabbit_proxy_1 = __webpack_require__(/*! ./rabbit-proxy */ 709);\r\nconst simple_link_1 = __webpack_require__(/*! ./simple-link/simple-link */ 102);\r\nwindow.initPlayground = async (targetWindow, relativePath) => {\r\n    let rabbit = await rabbit_proxy_1.consumeRabbit({\r\n        thisSideId: 'preview',\r\n        otherSideId: 'main',\r\n        target: simple_link_1.windowEndpoint(targetWindow)\r\n    });\r\n    const moduleSystem = new module_system_1.ModuleSystem(rabbit);\r\n    rabbit.init(moduleSystem.reload);\r\n    moduleSystem.require(relativePath);\r\n};\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/playground-stage.tsx\n// module id = 867\n// module chunks = 8\n\n//# sourceURL=webpack:///./src/playground-stage.tsx?");

/***/ })

/******/ });