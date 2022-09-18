"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[8723],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<s;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const s={id:"root",title:"Root",layout:"docs"},a=void 0,l={unversionedId:"references/root",id:"references/root",title:"Root",description:"Every Stylable stylesheet has a reserved class called root that matches the root node of the component. The root class is used to signify the component top-level node where a new namespace scope is created.",source:"@site/docs/references/root.md",sourceDirName:"references",slug:"/references/root",permalink:"/docs/references/root",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/root.md",tags:[],version:"current",frontMatter:{id:"root",title:"Root",layout:"docs"},sidebar:"Specification Reference",previous:{title:"Import",permalink:"/docs/references/imports"},next:{title:"Extend",permalink:"/docs/references/extend-stylesheet"}},c={},i=[{value:"Default export",id:"default-export",level:2},{value:"Runtime",id:"runtime",level:2},{value:"simple example",id:"simple-example",level:3},{value:"root + state + customize",id:"root--state--customize",level:3}],p={toc:i};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every Stylable stylesheet has a reserved class called ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," that matches the root node of the component. The ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," class is used to signify the component top-level node where a new namespace scope is created."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".root { \n  /* set component background */\n  background: white; \n} \n\n/* OUTPUT */\n.NAMESPACE__root { \n  background: white; \n}\n")),(0,o.kt)("h2",{id:"default-export"},"Default export"),(0,o.kt)("p",null,"The root of a stylesheet can be referenced in other stylesheets by using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/imports#default-import"},"default import"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="page.st.css"',title:'"page.st.css"'},"@st-import DropDown from './dropdown.st.css';\n\n/* style any dropdown component background \n  nested under the page root */\n.root DropDown {\n  background: salmon;\n}\n\n/* OUTPUT */\n.page__root .dropdown__root { \n  background: salmon; \n}\n")),(0,o.kt)("h2",{id:"runtime"},"Runtime"),(0,o.kt)("p",null,"Each component is responsible for placing the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," class on its top-level node using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/runtime"},"runtime API"),"."),(0,o.kt)("h3",{id:"simple-example"},"simple example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="comp.jsx"',title:'"comp.jsx"'},"import { classes } from './comp.st.css';\n\nfunction Comp() {\n  return <div className={classes.root}></div>;\n}\n")),(0,o.kt)("h3",{id:"root--state--customize"},"root + state + customize"),(0,o.kt)("p",null,"The following example uses the ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/runtime#st-function"},"st() function")," to add multiple classes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the component root class"),(0,o.kt)("li",{parentName:"ol"},"state classes"),(0,o.kt)("li",{parentName:"ol"},"classes passed from props for customizations")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="comp.jsx"',title:'"comp.jsx"'},"import { st, classes } from './comp.st.css';\n\nfunction Comp({ className }) {\n  return (\n    <div className={st(classes.root, {/*states*/}, className)}></div>\n  );\n}\n")))}m.isMDXComponent=!0}}]);