(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createContext({}),p=function(e){var t=s.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,b=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?s.a.createElement(b,o(o({ref:t},i),{},{components:n})):s.a.createElement(b,o({ref:t},i))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<r;i++)l[i]=n[i];return s.a.createElement.apply(null,l)}return s.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),s=n(7),r=(n(0),n(126)),l={id:"runtime",title:"Runtime"},o={unversionedId:"guides/runtime",id:"guides/runtime",isDocsHomePage:!1,title:"Runtime",description:"Imported Stylable stylesheets contain minimal runtime code to help define the structure and state of the component.",source:"@site/docs/guides/runtime.md",slug:"/guides/runtime",permalink:"/stylable.io/docs/guides/runtime",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/guides/runtime.md",version:"current",sidebar:"someSidebar",previous:{title:"Stylable Component - Best Practices",permalink:"/stylable.io/docs/guides/component-best-practices"},next:{title:"Build a Stylable Application",permalink:"/stylable.io/docs/guides/stylable-application"}},c=[{value:"Manual mapping",id:"manual-mapping",children:[]},{value:"Custom state mapping",id:"custom-state-mapping",children:[{value:"Element name",id:"element-name",children:[]},{value:"Custom states",id:"custom-states",children:[]},{value:"Merge props",id:"merge-props",children:[]}]}],i={toc:c};function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Imported ",Object(r.b)("strong",{parentName:"p"},"Stylable")," stylesheets contain minimal runtime code to help define the structure and state of the component."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"/* style.st.css */\n.root {\n    -st-states: selected;\n}\n.label {}\n.icon {}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'/* index.jsx - stylesheet runtime api */\nimport { \n    style,    // runtime utility function \n    st,       // alias for the style function above\n    classes,  // class names mapping\n    vars,     // css variables mapping\n    stVars,   // stylable build-time variable values\n    cssStates // utility function for setting stylable states\n    keyframes // keyframes mapping\n}  from "style.st.css";\n')),Object(r.b)("h2",{id:"manual-mapping"},"Manual mapping"),Object(r.b)("p",null,"CSS class names, defined in the stylesheet, are exposed on the imported ",Object(r.b)("inlineCode",{parentName:"p"},"classes")," reference and mapped to their runtime target value. The expected class name is then used as an element class name in the structure."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'classes.root  // "style__root"\nclasses.label // "style__label"\nclasses.icon  // "style__icon"\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("a",{parentName:"p",href:"/stylable.io/docs/references/root"},"root class")," is available even when it is not defined in the stylesheet. "))),Object(r.b)("h2",{id:"custom-state-mapping"},"Custom state mapping"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/stylable.io/docs/references/pseudo-classes"},"Custom states"),", which can be targeted from the style, are generated using the ",Object(r.b)("inlineCode",{parentName:"p"},"cssStates")," function. The function accepts a map of local state names and generates string with concatenated class names used to mark the element state."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"/* { 'data-style-selected':true } */\ncssStates({ selected:true })\n/* { 'data-style-unknownstate':true } */\ncssStates({ unknownState:true })\n\n/* { } */\ncssStates({ selected:false }) // no states\n\n/* { 'data-style-a':true, 'data-style-b':true } */\ncssStates({ a:true, b:true }) // multiple\n")),Object(r.b)("h3",{id:"element-name"},"Element name"),Object(r.b)("p",null,"The first argument represents the scoped name of the element, and passes through the received class name."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"/* 'style__root'  */\nstyle(classes.root) \n/* 'style__label' */\nstyle(classes.label) \n\n// multiple markings\nstyle(classes.label, classes.icon) \n/* 'style__label style__icon' */\n\n// string pass-through\nstyle('root') \n/* 'root' */\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Stylable no longer performs auto-scoping for classes, and strings are passed as-is. Use the ",Object(r.b)("inlineCode",{parentName:"p"},"classes")," mapping object to resolve to the scoped class name."))),Object(r.b)("h3",{id:"custom-states"},"Custom states"),Object(r.b)("p",null,"The second argument represents the ",Object(r.b)("a",{parentName:"p",href:"#custom-state-mapping"},"custom state")," (or another class), and returns a class to represent every custom state on the element."),Object(r.b)("p",null,"States are optional and the second argument can be replaced with another className if needed."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"/* 'style__root style--selected' */\nstyle(classes.root, { selected:true })\n/* 'style__label style--searched' */\nstyle(classes.label, { searched:true })\n\n/* 'style__label style__icon' */\nstyle(classes.label, classes.icon)\n")),Object(r.b)("h3",{id:"merge-props"},"Merge props"),Object(r.b)("p",null,"The third argument (and any arguments after) can be used for any additional classes that need to be applied to the element. In a component root node, it is recommended to pass along the ",Object(r.b)("inlineCode",{parentName:"p"},"className")," prop received through your parent component as props."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// this.props.className = 'app__root app--selected'\n/*  'style__root app__root app--selected' */\nstyle(classes.root, this.props.className)\n\n/*  'style__root label icon' */\nstyle(classes.root, 'label', 'icon') // label and icon are global (un-scoped)\n\n/*  'style__root style--selected' */\nstyle(classes.root, 'style--selected')\n")))}p.isMDXComponent=!0}}]);