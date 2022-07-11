"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[5535],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>u});var n=s(7294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(s),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return s?n.createElement(h,o(o({ref:t},p),{},{components:s})):n.createElement(h,o({ref:t},p))}));function u(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,o=new Array(r);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=s[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}m.displayName="MDXCreateElement"},8435:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=s(7462),a=(s(7294),s(3905));const r={id:"shared-classes",title:"Shared Classes"},o=void 0,i={unversionedId:"guides/shared-classes",id:"guides/shared-classes",title:"Shared Classes",description:"When building a Stylable component library or a Stylable application, it is useful to reuse classes that can be shared across components to achieve common CSS with lower specificity.",source:"@site/docs/guides/shared-classes.md",sourceDirName:"guides",slug:"/guides/shared-classes",permalink:"/docs/guides/shared-classes",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/shared-classes.md",tags:[],version:"current",frontMatter:{id:"shared-classes",title:"Shared Classes"},sidebar:"Guides",previous:{title:"Project Commons",permalink:"/docs/guides/project-commons"},next:{title:"Component Variants",permalink:"/docs/guides/component-variants"}},c={},l=[{value:"Defining a shared class",id:"defining-a-shared-class",level:2},{value:"Use shared classes in components",id:"use-shared-classes-in-components",level:2}],p={toc:l};function d(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When building a ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/stylable-component-library"},"Stylable component library")," or a ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/stylable-application"},"Stylable application"),", it is useful to reuse classes that can be shared across components to achieve common CSS with lower specificity."),(0,a.kt)("h2",{id:"defining-a-shared-class"},"Defining a shared class"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/project-commons"},"commons stylable stylesheet")," of your project (usually named ",(0,a.kt)("inlineCode",{parentName:"p"},"project.st.css"),"), you define a CSS class with a descriptive name like ",(0,a.kt)("inlineCode",{parentName:"p"},"emphasisBox"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "project";\n.emphasisBox {\n    background: pink;\n    color: white;\n}\n')),(0,a.kt)("h2",{id:"use-shared-classes-in-components"},"Use shared classes in components"),(0,a.kt)("p",null,"A component's ",(0,a.kt)("strong",{parentName:"p"},"Stylable")," stylesheet can use and extend shared classes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "comp";\n@st-import [emphasisBox] from "./project.st.css";\n/*\nselector: .comp__root .project__emphasisBox\njs value: "project__emphasisBox"\n*/\n.root .emphasisBox { }\n/*\nselector: .comp__messageBox.project__emphasisBox\njs value: "comp__messageBox project__emphasisBox"\n*/\n.messageBox {\n    -st-extends: emphasisBox;\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For the ",(0,a.kt)("inlineCode",{parentName:"p"},".emphasisBox")," selector, we manually added the ",(0,a.kt)("inlineCode",{parentName:"p"},".root")," class to avoid overriding ",(0,a.kt)("inlineCode",{parentName:"p"},"emphasisBox")," outside of this scope.")))}d.isMDXComponent=!0}}]);