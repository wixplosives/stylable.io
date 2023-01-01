"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[6085],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,f=d["".concat(i,".").concat(u)]||d[u]||c[u]||o;return r?a.createElement(f,s(s({ref:t},m),{},{components:r})):a.createElement(f,s({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2399:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={id:"imports",title:"Import"},s=void 0,l={unversionedId:"references/imports",id:"references/imports",title:"Import",description:"The Stylable @st-import at-rule is used to reference definitions from other .st.css or .js modules in a similar way to JavaScript Imports.",source:"@site/docs/references/imports.md",sourceDirName:"references",slug:"/references/imports",permalink:"/docs/references/imports",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/imports.md",tags:[],version:"current",frontMatter:{id:"imports",title:"Import"},sidebar:"Specification Reference",previous:{title:"Global Selector",permalink:"/docs/references/global-selectors"},next:{title:"Namespace",permalink:"/docs/references/namespace"}},i={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Default import",id:"default-import",level:3},{value:"Named import",id:"named-import",level:3},{value:"Local alias",id:"local-alias",level:4},{value:"Stylable stylesheet",id:"stylable-stylesheet",level:2},{value:"Named type assertion",id:"named-type-assertion",level:3},{value:"Javascript",id:"javascript",level:2},{value:"Legacy syntax",id:"legacy-syntax",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Stylable ",(0,n.kt)("inlineCode",{parentName:"p"},"@st-import")," at-rule is used to reference definitions from other ",(0,n.kt)("inlineCode",{parentName:"p"},".st.css")," or ",(0,n.kt)("inlineCode",{parentName:"p"},".js")," modules in a similar way to ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"},"JavaScript Imports"),"."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"@st-import Default, [namedA, namedB as localB] from 'request';\n")),(0,n.kt)("admonition",{title:"re-declare symbol",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"import local names must be unique."),(0,n.kt)("li",{parentName:"ul"},"Imports are hoisted above local definitions."))),(0,n.kt)("h3",{id:"default-import"},"Default import"),(0,n.kt)("p",null,"In order to reference the the default export of a module, provide a local name after the ",(0,n.kt)("inlineCode",{parentName:"p"},"@st-import"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"@st-import DefaultLocalName from 'request';\n")),(0,n.kt)("h3",{id:"named-import"},"Named import"),(0,n.kt)("p",null,"To reference named exports of a module, in square brackets (after the optional default import), provide a comma separated list of requested names."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"/* named imports */\n@st-import [partA, partB] from 'request';\n\n/* default + named imports */\n@st-import Default, [partA, partB] from 'request';\n")),(0,n.kt)("h4",{id:"local-alias"},"Local alias"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"as")," keyword to map an export name to a local name."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"@st-import [part as localPartName] from 'request';\n")),(0,n.kt)("h2",{id:"stylable-stylesheet"},"Stylable stylesheet"),(0,n.kt)("p",null,"When importing from a stylesheet, the ",(0,n.kt)("a",{parentName:"p",href:"/docs/references/root#default-export"},"root")," class is mapped to the default export, and several named symbols can be referenced by name:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="origin.st.css"',title:'"origin.st.css"'},"/* define symbols */\n.part {\n  --customProp: yellow;\n  container-name: part;\n}\n@keyframes anim {}\n@layer comps, theme;\n:vars {\n  stVar: green;\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="entry.st.css"',title:'"entry.st.css"'},"@st-import OriginRoot, [\n  part,         /* part class name */\n  --customProp, /* custom property */\n  stVar         /* build var */\n] from './origin.st.css';\n")),(0,n.kt)("admonition",{title:"Stylesheet default capitalization",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"When importing a ",(0,n.kt)("strong",{parentName:"p"},"default")," value from a stylable stylesheet, you should use a capital letter to signify that the value represents a component root.")),(0,n.kt)("h3",{id:"named-type-assertion"},"Named type assertion"),(0,n.kt)("p",null,"To import keyframes, layers or containers from another stylesheet, a special ",(0,n.kt)("a",{parentName:"p",href:"/docs/references/keyframes#import-and-export"},"keyframes()"),", ",(0,n.kt)("a",{parentName:"p",href:"./layer#import-and-export"},"layer()"),", or ",(0,n.kt)("a",{parentName:"p",href:"./contains#import-and-export"},"container()")," assertion is required."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="entry.st.css"',title:'"entry.st.css"'},"/* import keyframe and layer */\n@st-import [\n  keyframes(anim),\n  layer(theme),\n  container(panel)\n] from './origin.st.css';\n\n/* multiple */\n@st-import [\n  keyframes(anim1, anim2), \n  layer(comps, theme),\n  container(panel, header)\n] from './origin.st.css';\n")),(0,n.kt)("h2",{id:"javascript"},"Javascript"),(0,n.kt)("p",null,"To import Javascript definitions for ",(0,n.kt)("a",{parentName:"p",href:"/docs/references/st-variables"},"values"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/references/mixins"},"mixins"),", and ",(0,n.kt)("a",{parentName:"p",href:"/docs/references/formatters"},"formatters"),", use the ",(0,n.kt)("inlineCode",{parentName:"p"},"@st-import")," statement in the same way as you would for a stylesheet."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"@st-import DefaultExport, [namedA, namedB as localB] from './code.js';\n")),(0,n.kt)("h2",{id:"legacy-syntax"},"Legacy syntax"),(0,n.kt)("p",null,"An older variation for ",(0,n.kt)("inlineCode",{parentName:"p"},"@st-import")," is the ",(0,n.kt)("inlineCode",{parentName:"p"},":import")," (pseudo-import). While it still works, it is ",(0,n.kt)("strong",{parentName:"p"},"highly discouraged")," for usage, verbose and will be deprecated in the future."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},":import {\n  -st-from: 'request';\n  -st-default: DefaultLocalName;\n  -st-named: namedA, namedB as localB;\n}\n")),(0,n.kt)("p",null,"A code-mod to migrate to the new syntax is available (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wix/stylable/tree/master/packages/cli#builtin-codemods"},"see doc"),")"))}c.isMDXComponent=!0}}]);