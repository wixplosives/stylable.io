"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[3595],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return r?a.createElement(v,i(i({ref:t},p),{},{components:r})):a.createElement(v,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1506:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={id:"css-vars",title:"CSS Custom Properties (CSS vars)",sidebar_label:"CSS Custom Properties"},i=void 0,o={unversionedId:"references/css-vars",id:"references/css-vars",title:"CSS Custom Properties (CSS vars)",description:"CSS Custom Properties provides the ability to define and re-use variables that participate in the runtime cascade.",source:"@site/docs/references/css-vars.md",sourceDirName:"references",slug:"/references/css-vars",permalink:"/docs/references/css-vars",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/css-vars.md",tags:[],version:"current",frontMatter:{id:"css-vars",title:"CSS Custom Properties (CSS vars)",sidebar_label:"CSS Custom Properties"},sidebar:"Specification Reference",previous:{title:"Stylable Variables",permalink:"/docs/references/st-variables"},next:{title:"Scoping",permalink:"/docs/references/st-scope"}},l={},c=[{value:"Stylable variables vs. CSS custom properties",id:"stylable-variables-vs-css-custom-properties",level:2},{value:"Automatic scoping (namespacing)",id:"automatic-scoping-namespacing",level:2},{value:"Importing CSS variables",id:"importing-css-variables",level:2},{value:"Overriding CSS variables during runtime",id:"overriding-css-variables-during-runtime",level:2},{value:"CSS runtime register",id:"css-runtime-register",level:2},{value:"Using global CSS variables",id:"using-global-css-variables",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"CSS Custom Properties")," provides the ability to define and re-use variables that participate in the runtime cascade."),(0,n.kt)("p",null,"CSS Custom Properties are defined using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--*")," property syntax, and accessed using the ",(0,n.kt)("inlineCode",{parentName:"p"},"var(--*)")," CSS function."),(0,n.kt)("p",null,"To learn more about this language feature, check out the following resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"},"MDN - Custom properties")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables"},"MDN - Using CSS custom properties")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/"},"Smashing Magazine - It's Time To Start Using CSS Custom Properties"))),(0,n.kt)("h2",{id:"stylable-variables-vs-css-custom-properties"},"Stylable variables vs. CSS custom properties"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/references/st-variables"},"Stylable variables")," and CSS custom properties offer different capabilities, and as such serve different use-cases."),(0,n.kt)("p",null,"Stylable variables exist only in your source code, and get replaced during transpilation to the final target code. They serve well for calculations that are not supported by native CSS, reducing code repetition, increasing readability and can benefit any static theme or styling without incurring any runtime performance cost. "),(0,n.kt)("p",null,"CSS custom properties on the other hand do incur a small runtime cost, but offer the ability to override their values during runtime, allowing dynamic styling through Stylable."),(0,n.kt)("h2",{id:"automatic-scoping-namespacing"},"Automatic scoping (namespacing)"),(0,n.kt)("p",null,"Stylable automatically scopes any CSS custom property found in the stylesheet. It does so by generating a unique namespace for the stylesheet (similar to how classes are scoped), and replaces the variable with its scoped counterpart. "),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"/* entry.st.css */\n.root {\n    --myVar: green;\n    color: var(--myVar);\n}\n")),(0,n.kt)("p",null,"Transpiled output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"/* entry.st.css */\n.root {\n    --entry-myVar: green;\n    color: var(--entry-myVar);\n}\n")),(0,n.kt)("h2",{id:"importing-css-variables"},"Importing CSS variables"),(0,n.kt)("p",null,"Due to the fact Stylable provides scoping to CSS variables, it also provides the ability to import CSS variables defined in another stylesheet."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},'/* entry.st.css */\n@st-import [--myVar] from "./imported.st.css";\n\n.root {\n    /* value determined by the nearest property assignment up the DOM tree */\n    color: var(--myVar);\n}\n\n.part {\n    /* this override will match the namespace of the imported stylesheet */\n    --myVar: gold;\n    background-color: var(--myVar); /* gold */\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"/* imported.st.css */\n.root {\n    --myVar: green;\n}\n")),(0,n.kt)("h2",{id:"overriding-css-variables-during-runtime"},"Overriding CSS variables during runtime"),(0,n.kt)("p",null,"Override any variable by redefining its value using an inline style attribute. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import { classes, vars } from './entry.st.css';\n\n<div className={classes.root}\n     style={{ \n        [vars.myVar]: 'pink',  \n        background: 'gold' }} \n/>\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'<div className="entry__root" \n     style="--entry-color: green; --entry-border-size: 5px; background: gold;" >\n</div>\n')),(0,n.kt)("h2",{id:"css-runtime-register"},"CSS runtime register"),(0,n.kt)("p",null,"Stylable supports the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@property"},"@property")," at-rule, it scope the CSS variable and provide extra configuration at runtime:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"@property --myVar {\n  syntax: '<color>';\n  inherits: false;\n  initial-value: #c3e88d;\n}\n")),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("inlineCode",{parentName:"p"},"@property")," definitions without a body are used only for defining a symbol and will be removed at the build process."))),(0,n.kt)("h2",{id:"using-global-css-variables"},"Using global CSS variables"),(0,n.kt)("p",null,"In cases where you have no control over the name of the CSS variable used, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"@property")," at-rule with ",(0,n.kt)("inlineCode",{parentName:"p"},"st-global")," to define CSS variables that will not be scoped, and will maintain their exact given name."),(0,n.kt)("p",null,"This is mostly useful when working with 3rd-party libraries, where you only attempt to affect it externally."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"\n@property st-global(--color);\n\n.root {\n    --color: green;\n    color: var(--color);\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import { classes } from './entry.st.css';\n\n<div \n    className={classes.root}\n    style={{ '--color': 'red' }} \n/>\n")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Accessing any globally defined variable on the stylesheet will return its global name (un-scoped)."))))}m.isMDXComponent=!0}}]);