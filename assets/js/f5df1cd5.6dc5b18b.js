"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[741],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(t),u=r,d=c["".concat(l,".").concat(u)]||c[u]||f[u]||s;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<s;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1973:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var a=t(7462),r=(t(7294),t(4137));const s={id:"keyframes",title:"Keyframes"},i=void 0,o={unversionedId:"references/keyframes",id:"references/keyframes",title:"Keyframes",description:"The @keyframes CSS at-rule is used to define an animation that can be referenced to animate a DOM element.",source:"@site/docs/references/keyframes.md",sourceDirName:"references",slug:"/references/keyframes",permalink:"/docs/references/keyframes",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/keyframes.md",tags:[],version:"current",frontMatter:{id:"keyframes",title:"Keyframes"},sidebar:"Specification Reference",previous:{title:"Custom Property",permalink:"/docs/references/css-vars"},next:{title:"Layer",permalink:"/docs/references/layer"}},l={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Import and Export",id:"import-and-export",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Namespace",id:"namespace",level:2},{value:"Disable namespace",id:"disable-namespace",level:3}],p={toc:m},c="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@keyframes")," CSS at-rule is used to define an animation that can be referenced to animate a DOM element."),(0,r.kt)("p",null,"This page goes over how Stylable handles ",(0,r.kt)("inlineCode",{parentName:"p"},"@keyframes"),", for more details about the language feature itself, checkout the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes"},"MDN @keyframes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://drafts.csswg.org/css-animations/#keyframes"},"CSS animation spec"))),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keyframes definition")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* empty definition */\n@keyframes slide {}\n\n/* animation definition */\n@keyframes jump {\n  from { color: red }\n  to { color: green }\n}\n\n/* percentage keyframes */\n@keyframes jump {\n  0% { color: red }\n  50% { color: green }\n  100% { color: blue }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keyframes usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".x {\n  /* within animation shorthand */\n  animation: slide 3s ease-out infinite;\n}\n.y {\n  /* same as above */\n  animation-name: slide;\n  animation-duration: 3s;\n  animation-timing-function: ease-out;\n  animation-iteration-count: infinite;\n}\n")),(0,r.kt)("h2",{id:"import-and-export"},"Import and Export"),(0,r.kt)("p",null,"An exported keyframes can be imported into another stylesheet with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/imports"},"@st-import")," atrule."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Insert rules into imported layer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* get 'slide' keyframes definition from another stylesheet */\n@st-import [keyframes(slide)] from './x.st.css';\n\n.x {\n  /* use in animation */\n  animation-name: slide;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"More import examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* map 'slide' keyframes to local name 'x-slide' */\n@st-import [keyframes(slide as x-slide)] from './x.st.css';\n\n/* import multiple keyframes */\n@st-import [keyframes(slide, jump)] from './x.st.css';\n")),(0,r.kt)("h2",{id:"runtime"},"Runtime"),(0,r.kt)("p",null,"A Keyframes definition can be accessed for dynamic styles using the keyframes mapping on the Stylable runtime stylesheet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { keyframes } from './sheet.st.css';\n\n// map to target namespaced keyframes\nkeyframes.jump;\n")),(0,r.kt)("h2",{id:"namespace"},"Namespace"),(0,r.kt)("p",null,"Stylable automatically namespaces any keyframes name according to the stylesheet it is defined in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"@keyframes slide {}\n\n.x {\n  animation-name: slide;\n}\n\n/* OUTPUT */\n@keyframes NAMESPACE__slide {}\n\n.x {\n  animation-name: NAMESPACE__slide;\n}\n")),(0,r.kt)("h3",{id:"disable-namespace"},"Disable namespace"),(0,r.kt)("p",null,"In some cases the default namespace behavior is unwanted. In such cases, ",(0,r.kt)("inlineCode",{parentName:"p"},"st-global")," can be used to mark a keyframes definition as global:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"@keyframes st-global(slide) {}\n.x {\n  animation-name: slide;\n}\n\n/* OUTPUT */\n@keyframes slide {}\n.x {\n  animation-name: slide; /* no namespace */\n}\n")))}f.isMDXComponent=!0}}]);