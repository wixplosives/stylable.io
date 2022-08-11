"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[3455],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return t?n.createElement(v,o(o({ref:a},c),{},{components:t})):n.createElement(v,o({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6470:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const l={id:"st-variables",title:"Variables"},o=void 0,s={unversionedId:"references/st-variables",id:"references/st-variables",title:"Variables",description:"Stylable variables provide a way to define common values to be used across the stylesheet and exposed for sharing and theming.",source:"@site/docs/references/variables.md",sourceDirName:"references",slug:"/references/st-variables",permalink:"/docs/references/st-variables",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/variables.md",tags:[],version:"current",frontMatter:{id:"st-variables",title:"Variables"},sidebar:"Specification Reference",previous:{title:"Namespace",permalink:"/docs/references/namespace"},next:{title:"Mixins",permalink:"/docs/references/mixins"}},i={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Define",id:"define",level:3},{value:"Evaluate",id:"evaluate",level:3},{value:"Compose",id:"compose",level:3},{value:"Array",id:"array",level:3},{value:"Map",id:"map",level:3},{value:"Import and Export",id:"import-and-export",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Custom variable",id:"custom-variable",level:2}],c={toc:p};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Stylable variables provide a way to define common values to be used across the stylesheet and exposed for sharing and theming.\nThese variables are used only during build-time and have no runtime impact."),(0,r.kt)("p",null,"If you wish to use native dynamic variables, that can change value during runtime, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/css-vars"},"css custom properties")," for further details."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},":vars")," top level rule to define build variables."),(0,r.kt)("h3",{id:"define"},"Define"),(0,r.kt)("p",null,"To define a variable, add a variable declaration within a ",(0,r.kt)("inlineCode",{parentName:"p"},":vars")," ruleset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":vars {\n  /* define x with value green */\n  x: green;\n\n  /* define y with value blue */\n  y: blue;\n}\n")),(0,r.kt)("h3",{id:"evaluate"},"Evaluate"),(0,r.kt)("p",null,"To get a variable value, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"value()")," function with the variable name as the first argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".a {\n  /* evaluate in declaration value */\n  color: value(x);\n\n  /* compose in declaration value */\n  background: url(a.jpg) no-repeat, url(b.jpg) repeat-x value(x);\n}\n\n/* set media params from a variable */\n@media value(y) {}\n")),(0,r.kt)("h3",{id:"compose"},"Compose"),(0,r.kt)("p",null,"Variables can be composed into a declaration value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":vars {\n  x: green;\n\n  /* define y with the value green from x */\n  y: value(x);\n\n  /* define z with composed x value */\n  z: red, value(x), blue;\n}\n")),(0,r.kt)("h3",{id:"array"},"Array"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"st-array")," to define a variable that holds a list of comma separated values that can be accessed by a zero-based index as the second argument to the ",(0,r.kt)("inlineCode",{parentName:"p"},"value()")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":vars {\n  /* comma separated list */\n  colors: st-array(red, green, blue);\n}\n\n.a {\n  /* access 2nd cell value */\n  color: value(colors, 1); /* green */\n}\n")),(0,r.kt)("h3",{id:"map"},"Map"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"st-map")," to define a variable that holds key/value pairs with a space as a delimiter between them, and a comma separating each pair."),(0,r.kt)("p",null,"These values can then be accessed by providing the key as the second argument to the ",(0,r.kt)("inlineCode",{parentName:"p"},"value()")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":vars {\n  /* comma separated key/value pairs */\n  colors: st-map(\n    bg   black, \n    text gold,\n  );\n}\n\n.a {\n  /* access 'text' key value */\n  color: value(colors, text); /* gold */\n}\n")),(0,r.kt)("h2",{id:"import-and-export"},"Import and Export"),(0,r.kt)("p",null,"An exported build variable can be imported into another stylesheet with the ",(0,r.kt)("a",{parentName:"p",href:"./imports"},"@st-import")," at-rule."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="example2.st.css"',title:'"example2.st.css"'},'@st-import [color1] from "./common.st.css";\n\n.a {\n  /* compose color1 to border value*/\n  border: 10px solid value(color1);\n}\n')),(0,r.kt)("h2",{id:"runtime"},"Runtime"),(0,r.kt)("p",null,"A build variable value can be accessed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"stVars")," mapping on the Stylable stylesheet runtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { stVars } from './common.st.css';\n\n// map from local name to value\nstVars.color1;         // \"green\"\nstVars['dashed-name']; // \"blue\"\n")),(0,r.kt)("admonition",{title:"local export only",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Only build variables that are defined by the stylesheet are exported to Javascript - ",(0,r.kt)("strong",{parentName:"p"},"imported ones are not!"))),(0,r.kt)("h2",{id:"custom-variable"},"Custom variable"),(0,r.kt)("admonition",{title:"experimental",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This API is not stable")),(0,r.kt)("p",null,"Composed data structures like ",(0,r.kt)("inlineCode",{parentName:"p"},"st-array")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"st-map")," can be defined from Javascript. Take a look at ",(0,r.kt)("inlineCode",{parentName:"p"},"stBorder")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/stylable/tree/master/packages/custom-value"},"@stylable/custom-value")," to see how it works."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="stBorder usage example"',title:'"stBorder',usage:!0,'example"':!0},'@st-import [stBorder] from "@stylable/custom-value";\n\n:vars {\n  /* order of arguments: size style color */\n  myborder: stBorder(1px, solid, green);\n}\n\n.root {\n  border: value(myBorder); /* 1px solid green */\n  background-color: value(myBorder, color); /* green */\n}\n')))}u.isMDXComponent=!0}}]);