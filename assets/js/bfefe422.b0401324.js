"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[3595],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1506:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),i=["components"],o={id:"css-vars",title:"CSS Custom Properties (CSS vars)",sidebar_label:"CSS Custom Properties"},l=void 0,c={unversionedId:"references/css-vars",id:"references/css-vars",title:"CSS Custom Properties (CSS vars)",description:"CSS Custom Properties provides the ability to define and re-use variables that participate in the runtime cascade.",source:"@site/docs/references/css-vars.md",sourceDirName:"references",slug:"/references/css-vars",permalink:"/docs/references/css-vars",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/css-vars.md",tags:[],version:"current",frontMatter:{id:"css-vars",title:"CSS Custom Properties (CSS vars)",sidebar_label:"CSS Custom Properties"},sidebar:"Specification Reference",previous:{title:"Stylable Variables",permalink:"/docs/references/st-variables"},next:{title:"Scoping",permalink:"/docs/references/st-scope"}},p={},u=[{value:"Stylable variables vs. CSS custom properties",id:"stylable-variables-vs-css-custom-properties",level:2},{value:"Automatic scoping (namespacing)",id:"automatic-scoping-namespacing",level:2},{value:"Importing CSS variables",id:"importing-css-variables",level:2},{value:"Overriding CSS variables during runtime",id:"overriding-css-variables-during-runtime",level:2},{value:"CSS runtime register",id:"css-runtime-register",level:2},{value:"Using global CSS variables",id:"using-global-css-variables",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"CSS Custom Properties")," provides the ability to define and re-use variables that participate in the runtime cascade."),(0,s.kt)("p",null,"CSS Custom Properties are defined using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--*")," property syntax, and accessed using the ",(0,s.kt)("inlineCode",{parentName:"p"},"var(--*)")," CSS function."),(0,s.kt)("p",null,"To learn more about this language feature, check out the following resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"},"MDN - Custom properties")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables"},"MDN - Using CSS custom properties")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/"},"Smashing Magazine - It's Time To Start Using CSS Custom Properties"))),(0,s.kt)("h2",{id:"stylable-variables-vs-css-custom-properties"},"Stylable variables vs. CSS custom properties"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/references/st-variables"},"Stylable variables")," and CSS custom properties offer different capabilities, and as such serve different use-cases."),(0,s.kt)("p",null,"Stylable variables exist only in your source code, and get replaced during transpilation to the final target code. They serve well for calculations that are not supported by native CSS, reducing code repetition, increasing readability and can benefit any static theme or styling without incurring any runtime performance cost. "),(0,s.kt)("p",null,"CSS custom properties on the other hand do incur a small runtime cost, but offer the ability to override their values during runtime, allowing dynamic styling through Stylable."),(0,s.kt)("h2",{id:"automatic-scoping-namespacing"},"Automatic scoping (namespacing)"),(0,s.kt)("p",null,"Stylable automatically scopes any CSS custom property found in the stylesheet. It does so by generating a unique namespace for the stylesheet (similar to how classes are scoped), and replaces the variable with its scoped counterpart. "),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"/* entry.st.css */\n.root {\n    --myVar: green;\n    color: var(--myVar);\n}\n")),(0,s.kt)("p",null,"Transpiled output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"/* entry.st.css */\n.root {\n    --entry-myVar: green;\n    color: var(--entry-myVar);\n}\n")),(0,s.kt)("h2",{id:"importing-css-variables"},"Importing CSS variables"),(0,s.kt)("p",null,"Due to the fact Stylable provides scoping to CSS variables, it also provides the ability to import CSS variables defined in another stylesheet."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},'/* entry.st.css */\n@st-import [--myVar] from "./imported.st.css";\n\n.root {\n    /* value determined by the nearest property assignment up the DOM tree */\n    color: var(--myVar);\n}\n\n.part {\n    /* this override will match the namespace of the imported stylesheet */\n    --myVar: gold;\n    background-color: var(--myVar); /* gold */\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"/* imported.st.css */\n.root {\n    --myVar: green;\n}\n")),(0,s.kt)("h2",{id:"overriding-css-variables-during-runtime"},"Overriding CSS variables during runtime"),(0,s.kt)("p",null,"Override any variable by redefining its value using an inline style attribute. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { classes, vars } from './entry.st.css';\n\n<div className={classes.root}\n     style={{ \n        [vars.myVar]: 'pink',  \n        background: 'gold' }} \n/>\n")),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'<div className="entry__root" \n     style="--entry-color: green; --entry-border-size: 5px; background: gold;" >\n</div>\n')),(0,s.kt)("h2",{id:"css-runtime-register"},"CSS runtime register"),(0,s.kt)("p",null,"Stylable supports the ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@property"},"@property")," at-rule, it scope the CSS variable and provide extra configuration at runtime:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"@property --myVar {\n  syntax: '<color>';\n  inherits: false;\n  initial-value: #c3e88d;\n}\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"@property")," definitions without a body are used only for defining a symbol and will be removed at the build process."))),(0,s.kt)("h2",{id:"using-global-css-variables"},"Using global CSS variables"),(0,s.kt)("p",null,"In cases where you have no control over the name of the CSS variable used, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"@property")," at-rule with ",(0,s.kt)("inlineCode",{parentName:"p"},"st-global")," to define CSS variables that will not be scoped, and will maintain their exact given name."),(0,s.kt)("p",null,"This is mostly useful when working with 3rd-party libraries, where you only attempt to affect it externally."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"\n@property st-global(--color);\n\n.root {\n    --color: green;\n    color: var(--color);\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { classes } from './entry.st.css';\n\n<div \n    className={classes.root}\n    style={{ '--color': 'red' }} \n/>\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Accessing any globally defined variable on the stylesheet will return its global name (un-scoped)."))))}d.isMDXComponent=!0}}]);