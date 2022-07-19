"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[1871],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={id:"global-selectors",title:"Global Selector"},l=void 0,s={unversionedId:"references/global-selectors",id:"references/global-selectors",title:"Global Selector",description:"In Stylable, selectors are scoped to the stylesheet. But what if you want to target global or other selectors that are not scoped? You can use the :global() directive selector.",source:"@site/docs/references/global-selectors.md",sourceDirName:"references",slug:"/references/global-selectors",permalink:"/docs/references/global-selectors",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/global-selectors.md",tags:[],version:"current",frontMatter:{id:"global-selectors",title:"Global Selector"},sidebar:"Specification Reference",previous:{title:"Extend",permalink:"/docs/references/extend-stylesheet"},next:{title:"Custom Selector",permalink:"/docs/references/custom-selectors"}},c={},i=[],p={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"Stylable"),", selectors are scoped to the stylesheet. But what if you want to target global or other selectors that are not scoped? You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},":global()")," directive selector."),(0,o.kt)("p",null,"In this example ",(0,o.kt)("inlineCode",{parentName:"p"},".classB")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".classC")," are not scoped to ",(0,o.kt)("inlineCode",{parentName:"p"},"Comp")," but are part of the selector query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Comp";\n.classA :global(.classB > .classC) .classD:hover {\n  color: red;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.Comp__classA .classB > .classC .Comp__classD:hover {\n  color: red;\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can also use global to keep pseudo-classes native. You can describe them using the syntax below where ",(0,o.kt)("inlineCode",{parentName:"p"},"classA")," is scoped and ",(0,o.kt)("inlineCode",{parentName:"p"},":selected")," is native."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-css"},".classA:global(:selected) {\n  color: red;\n}\n"))))}u.isMDXComponent=!0}}]);