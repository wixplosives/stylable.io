"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[9155],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(k,s(s({ref:t},m),{},{components:a})):n.createElement(k,s({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4109:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"runtime",title:"Runtime"},s=void 0,i={unversionedId:"guides/handbook/runtime",id:"guides/handbook/runtime",title:"Runtime",description:"In the previous chapter, we saw brief examples of mapping our classes local names to their global namespaced names at runtime, as well as the cssStates utility function to activate their states.",source:"@site/docs/guides/handbook/runtime.md",sourceDirName:"guides/handbook",slug:"/guides/handbook/runtime",permalink:"/docs/guides/handbook/runtime",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/handbook/runtime.md",tags:[],version:"current",frontMatter:{id:"runtime",title:"Runtime"},sidebar:"Guides",previous:{title:"Custom State",permalink:"/docs/guides/handbook/custom-state"},next:{title:"Import Class",permalink:"/docs/guides/handbook/import-class"}},o={},p=[{value:"Mapped symbols",id:"mapped-symbols",level:2},{value:"Import example",id:"import-example",level:3},{value:"Runtime namespaced names",id:"runtime-namespaced-names",level:3},{value:"Apply class and state",id:"apply-class-and-state",level:2},{value:"<code>st()</code> function",id:"st-function",level:3},{value:"Stylable build variables",id:"stylable-build-variables",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/handbook/custom-state"},"previous chapter"),", we saw brief examples of mapping our ",(0,r.kt)("inlineCode",{parentName:"p"},"classes")," local names to their global namespaced names at runtime, as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"cssStates")," utility function to activate their states."),(0,r.kt)("p",null,"In this chapter, we'll explore the runtime features of Stylable and their usage."),(0,r.kt)("p",null,"One of the core ideas behind Stylable is to try and shift as much of the work as possible from runtime to build time to increase performance and end-user experience. However, in some instances, we need to do additional work in JavaScript."),(0,r.kt)("p",null,"For example, we need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bind classes to views"),(0,r.kt)("li",{parentName:"ul"},"Activate states"),(0,r.kt)("li",{parentName:"ul"},"Set custom property values"),(0,r.kt)("li",{parentName:"ul"},"Dynamically generate CSS")),(0,r.kt)("h2",{id:"mapped-symbols"},"Mapped symbols"),(0,r.kt)("p",null,"The namespacing chapter covered the basics of namespacing in Stylable, and in it, we saw that in Stylable, ",(0,r.kt)("strong",{parentName:"p"},"classes, custom-properties, keyframes, layers, and containers")," all receive namespacing to avoid conflicts."),(0,r.kt)("h3",{id:"import-example"},"Import example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  classes,    // class mapping\n  vars,       // custom properties mapping\n  keyframes,  // keyframes mapping\n  layers,     // layer mapping\n  containers, // container mapping\n} from "./game.st.css";\n\n')),(0,r.kt)("h3",{id:"runtime-namespaced-names"},"Runtime namespaced names"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Import"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Target"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"classes")),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".player")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".NS__player"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vars")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom property"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--player1Color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--NS-player1Color"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keyframes")),(0,r.kt)("td",{parentName:"tr",align:null},"Keyframes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@keyframes slide")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@keyframes NS__slide"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"layers")),(0,r.kt)("td",{parentName:"tr",align:null},"Layer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@layer theme")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@layer NS__theme"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"containers")),(0,r.kt)("td",{parentName:"tr",align:null},"Container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"container: panel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"container: NS__panel"))))),(0,r.kt)("h2",{id:"apply-class-and-state"},"Apply class and state"),(0,r.kt)("p",null,"Up to this point, all use cases we saw for wiring elements were simplified or overly verbose."),(0,r.kt)("p",null,"In the following example we can see that we are binding the ",(0,r.kt)("inlineCode",{parentName:"p"},"player")," class to the ",(0,r.kt)("inlineCode",{parentName:"p"},"player")," view, as well as activating the ",(0,r.kt)("inlineCode",{parentName:"p"},"registered")," state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { classes, stStates } from \"./game.st.css\";\n\n<div> \n    className={classes.player + ' ' + stStates({registered: true})}\n</div>\n")),(0,r.kt)("h3",{id:"st-function"},(0,r.kt)("inlineCode",{parentName:"h3"},"st()")," function"),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"st()")," function to simplify this process, by passing it the class name as its ",(0,r.kt)("strong",{parentName:"p"},"first argument"),", and the activated states as its ",(0,r.kt)("strong",{parentName:"p"},"second argument"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { st, classes } from './game.st.css';\n\n<div className={st(classes.player, { registered: true })}></div>;\n")),(0,r.kt)("p",null,"There are cases in which we would like to add additional classes to an element. For example, a component might want to accept an external class name to allow for custom styling."),(0,r.kt)("p",null,"Below, we can see such a case, where we bind a class (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),"), activate a state (",(0,r.kt)("inlineCode",{parentName:"p"},"registered"),"), and add an external class from props for customization purposes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="game.jsx"',title:'"game.jsx"'},"import { st, classes } from './game.st.css';\nconst Game = ({ className }) => {\n  return (\n    <div className={st(classes.player, { registered: true }, className)}>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,"For further details on the runtime API, ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/runtime"},"see the runtime reference"),"."),(0,r.kt)("h2",{id:"stylable-build-variables"},"Stylable build variables"),(0,r.kt)("p",null,"We have yet to cover Stylable build variables, but seeing as they expose their value in runtime, we'll cover them here briefly."),(0,r.kt)("p",null,"As opposed to the native runtime symbols we saw namespaced above, Stylable build variables do not require namespacing, as they are transpiled away at build time. In this case, the runtime export maps variables to their defined values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  stVars // Stylable build variables\n} from "./game.st.css";\n\n// runtime namespaced names\nstVars.boardBackgroundColor; // "green"\n')))}d.isMDXComponent=!0}}]);