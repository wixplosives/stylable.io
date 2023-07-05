"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[8109],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(y,s(s({ref:t},c),{},{components:a})):r.createElement(y,s({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},975:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(4137));const l={id:"layer",title:"Layer"},s=void 0,o={unversionedId:"references/layer",id:"references/layer",title:"Layer",description:"In CSS, @layer provides a way to group rules together in order to override other rules for better control of the styling order.",source:"@site/docs/references/layer.md",sourceDirName:"references",slug:"/references/layer",permalink:"/docs/references/layer",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/layer.md",tags:[],version:"current",frontMatter:{id:"layer",title:"Layer"},sidebar:"Specification Reference",previous:{title:"Keyframes",permalink:"/docs/references/keyframes"},next:{title:"Pseudo-Class",permalink:"/docs/references/pseudo-classes"}},i={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Import and Export",id:"import-and-export",level:2},{value:"Native CSS import",id:"native-css-import",level:3},{value:"Runtime",id:"runtime",level:2},{value:"Namespace",id:"namespace",level:2},{value:"Disable namespace",id:"disable-namespace",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In CSS, ",(0,n.kt)("inlineCode",{parentName:"p"},"@layer")," provides a way to group rules together in order to override other rules for better control of the styling order."),(0,n.kt)("p",null,"This page goes over how Stylable handles ",(0,n.kt)("inlineCode",{parentName:"p"},"@layer"),", for more details about the language feature itself, check out the following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@layer"},"MDN @layer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/"},"The Future of CSS: Cascade Layers by Bramus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://drafts.csswg.org/css-cascade-5/#layering"},"CSS cascade spec"))),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Layer order definition")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"@layer base, layout, theme;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Layer style definition")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"@layer theme {\n  /* layer style rules */\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nested style definition")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"@layer theme {\n  @layer app {\n    /* layer style rules */\n  }\n}\n\n/* equivalent to */\n\n@layer theme.app {\n  /* layer style rules */\n}\n")),(0,n.kt)("h2",{id:"import-and-export"},"Import and Export"),(0,n.kt)("p",null,"An exported layer definition can be imported into another stylesheet with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/references/imports"},(0,n.kt)("inlineCode",{parentName:"a"},"@st-import"))," atrule."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Insert rules into imported layer")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"/* get base layer definition from another stylesheet */\n@st-import [layer(base)] from './x.st.css';\n\n/* insert rules into layer */\n@layer base {\n  /* layer style rules */\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"More import examples")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"/* map 'base' layer to local name 'x-base' */\n@st-import [layer(base as x-base)] from './x.st.css';\n\n/* import multiple layers */\n@st-import [layer(layerA, layerB)] from './x.st.css';\n")),(0,n.kt)("h3",{id:"native-css-import"},"Native CSS import"),(0,n.kt)("p",null,"CSS native ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@import"},(0,n.kt)("inlineCode",{parentName:"a"},"@import"))," can be used to import a stylesheet into a layer:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"/* import the content of 'other.css' in the base layer */\n@import url(./x.css) layer(base);\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"While Stylable collects and namespaces layer definitions from native CSS imports, it does not handle bundling of them at current time, and they are not recommended for use.")),(0,n.kt)("h2",{id:"runtime"},"Runtime"),(0,n.kt)("p",null,"A layer can be accessed for dynamic styles using the ",(0,n.kt)("inlineCode",{parentName:"p"},"layers")," mapping on the ",(0,n.kt)("strong",{parentName:"p"},"Stylable")," runtime stylesheet:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { layers } from './sheet.st.css';\n\n// map to target namespaced layer\nlayers['layer-name'];\n")),(0,n.kt)("h2",{id:"namespace"},"Namespace"),(0,n.kt)("p",null,"Stylable automatically namespaces any layer name according to the stylesheet it is defined in:"),(0,n.kt)("p",null,"Source:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"@layer base, layout, theme;\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"@layer ns__base, ns__layout, ns__theme;\n")),(0,n.kt)("h3",{id:"disable-namespace"},"Disable namespace"),(0,n.kt)("p",null,"In some cases the default namespace behavior is unwanted, for example when a layer is external and not defined or imported by Stylable. In such cases, ",(0,n.kt)("inlineCode",{parentName:"p"},"st-global")," can be used to mark a layer definition as global:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"/* keep the layer name as-is with no namespace */\n@layer st-global(external);\n")),(0,n.kt)("p",null,"Once a layer is marked as global, all references to that layer transpile to the un-namespaced name (nested or imported)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notice that ",(0,n.kt)("inlineCode",{parentName:"p"},"st-global")," is not supported in nested definitions (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"a.st-global(external).c"),") or native import (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"@import url() layer(st-global(external))"),"), but marking the layer as global in a later definition will keep it global everywhere.")))}u.isMDXComponent=!0}}]);