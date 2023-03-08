"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[5270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={id:"component-variants",title:"Component Variants"},i=void 0,s={unversionedId:"guides/component-variants",id:"guides/component-variants",title:"Component Variants",description:'When building a component library or an application, it is useful to define several semantic "flavors" of some components, for example a Button component that represents cancel.',source:"@site/docs/guides/component-variants.md",sourceDirName:"guides",slug:"/guides/component-variants",permalink:"/docs/guides/component-variants",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/component-variants.md",tags:[],version:"current",frontMatter:{id:"component-variants",title:"Component Variants"},sidebar:"Guides",previous:{title:"Shared Classes",permalink:"/docs/guides/shared-classes"},next:{title:"Server Side Rendering",permalink:"/docs/guides/ssr"}},c={},l=[{value:"Defining a component variant",id:"defining-a-component-variant",level:2},{value:"Use component variants in components",id:"use-component-variants-in-components",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'When building a component library or an application, it is useful to define several semantic "flavors" of some components, for example a ',(0,r.kt)("inlineCode",{parentName:"p"},"Button")," component that represents ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel"),"."),(0,r.kt)("h2",{id:"defining-a-component-variant"},"Defining a component variant"),(0,r.kt)("p",null,"In your project's ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/project-commons"},"Stylable stylesheet")," used for the commonly used components in your project (usually named ",(0,r.kt)("inlineCode",{parentName:"p"},"project.st.css"),") you:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import a component stylesheet."),(0,r.kt)("li",{parentName:"ol"},"Define a CSS class with a descriptive name like ",(0,r.kt)("inlineCode",{parentName:"li"},"cancelButton"),"."),(0,r.kt)("li",{parentName:"ol"},"Extend the component on the class you just defined.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="project.st.css"',title:'"project.st.css"'},'@st-import Button from "./button.st.css";\n\n.cancelButton {\n  -st-extend: Button;\n  color: red;\n  border: 1px solid red;\n}\n')),(0,r.kt)("h2",{id:"use-component-variants-in-components"},"Use component variants in components"),(0,r.kt)("p",null,"A component ",(0,r.kt)("strong",{parentName:"p"},"Stylable")," stylesheet can use and extend component variants:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="comp.st.css"',title:'"comp.st.css"'},'@st-import [cancelButton] from "./project.st.css";\n\n/*\nselector: .comp__root .project__cancelButton.button__root\njs value: "project__cancelButton"\n*/\n.root .cancelButton {\n}\n/*\nselector: .comp__cancel.project__cancelButton.button__root\njs value: "comp__cancel project__cancelButton"\n*/\n.cancel {\n  -st-extends: cancelButton;\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For the ",(0,r.kt)("inlineCode",{parentName:"p"},".cancelButton")," selector, we manually added the ",(0,r.kt)("inlineCode",{parentName:"p"},".root")," class to avoid overriding ",(0,r.kt)("inlineCode",{parentName:"p"},"cancelButton")," outside this scope.")))}m.isMDXComponent=!0}}]);