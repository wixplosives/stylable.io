"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[8447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={id:"formatters",title:"Formatters"},i=void 0,s={unversionedId:"references/formatters",id:"references/formatters",title:"Formatters",description:"Formatters are functions that return a single CSS declaration value. They can receive arguments, process them and return the value.",source:"@site/docs/references/formatters.md",sourceDirName:"references",slug:"/references/formatters",permalink:"/docs/references/formatters",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/formatters.md",tags:[],version:"current",frontMatter:{id:"formatters",title:"Formatters"},sidebar:"Specification Reference",previous:{title:"Mixins",permalink:"/docs/references/mixins"},next:{title:"Stylable Variables",permalink:"/docs/references/st-variables"}},c={},l=[{value:"Formatters with variables",id:"formatters-with-variables",level:2},{value:"Nested formatters",id:"nested-formatters",level:2}],m={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Formatters are functions that return a single CSS declaration value. They can receive arguments, process them and return the value. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently, any argument passed through to a formatter is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". We are in the process of adding support for more complex types."))),(0,r.kt)("p",null,"For example a ",(0,r.kt)("inlineCode",{parentName:"p"},"calc-font-size")," formatter can return a different value for the font size depending on the provided argument."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you need to return multiple declaration values, we recommend using ",(0,r.kt)("strong",{parentName:"p"},"Stylable")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/mixins"},"mixins"),". "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* ./calc-font-size.js */\nmodule.exports = function(baseSize, modifier) {\n    switch (modifier) {\n        case 'header':\n            return `${Number(baseSize) * 2}px`;\n        case 'aside':\n            return `${Number(baseSize) * 0.75}px`; \n        default: \n            return baseSize + 'px';\n    }\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@st-import calcFontSize from "./calc-font-size";\n\n.header {\n    font-size: calcFontSize(16, header);\n}\n\n.form {\n    font-size: calcFontSize(16, body);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"    /* CSS output */\n    .header {\n        font-size: 32px;\n    }\n\n    .form {\n        font-size: 16px;\n    }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.header {\n    font-size: 32px;\n}\n\n.form {\n    font-size: 16px;\n}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently you cannot use formatters inside a native URL function. As a suggested workaround, you can return a URL function from a formattter."))),(0,r.kt)("h2",{id:"formatters-with-variables"},"Formatters with variables"),(0,r.kt)("p",null,"When the formatter is imported into the CSS, it can also be used with a ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/st-variables"},"variable"),". "),(0,r.kt)("p",null,"In this example the CSS imports the same formatter as the previous example, ",(0,r.kt)("inlineCode",{parentName:"p"},"calc-font-size"),", but the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"baseFontSize")," is added to the calculation.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@st-import calcFontSize from "./calc-font-size";\n\n:vars {\n    baseFontSize: 12;\n}\n\n.header {\n    font-size: calcFontSize(value(baseFontSize), header);\n}\n\n.form {\n    font-size: calcFontSize(value(baseFontSize), body);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.header {\n    font-size: 24px;\n}\n.form {\n    font-size: 12px;\n}\n")),(0,r.kt)("h2",{id:"nested-formatters"},"Nested formatters"),(0,r.kt)("p",null,"You can also nest formatters to provide functions that are modular, composable and reusable. "),(0,r.kt)("p",null,"In this example the formatter ",(0,r.kt)("inlineCode",{parentName:"p"},"divBy2")," is nested in the ",(0,r.kt)("inlineCode",{parentName:"p"},"round")," formatter. Both are imported into the CSS file and the output value is calculated from both. The formatters expose to the CSS mathematical calculations that are used in the JavaScript functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* ./math.js */\nmodule.export = {\n    divBy2: function(num) {\n        return Number(Number(num) / 2);\n    },\n    round: function(num) {\n        return Math.round(Number(num));\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@st-import [divBy2, round] from "./math";\n\n:vars {\n    baseSize: 17px;\n}\n\n.header {\n    font-size: round(divBy2(value(baseSize)))px;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.header {\n    font-size: 9px;\n}\n")))}p.isMDXComponent=!0}}]);