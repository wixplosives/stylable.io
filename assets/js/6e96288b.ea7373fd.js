"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[5270],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7562:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return p},toc:function(){return m},default:function(){return d}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],c={id:"component-variants",title:"Component Variants"},s=void 0,l={unversionedId:"guides/component-variants",id:"guides/component-variants",title:"Component Variants",description:'When building a Stylable component library or a Stylable application, it is useful to define several semantic "flavors" of some components, for example a Button component that represents cancel or a Gallery component for the main gallery instance.',source:"@site/docs/guides/component-variants.md",sourceDirName:"guides",slug:"/guides/component-variants",permalink:"/docs/guides/component-variants",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/component-variants.md",tags:[],version:"current",frontMatter:{id:"component-variants",title:"Component Variants"},sidebar:"Guides",previous:{title:"Shared Classes",permalink:"/docs/guides/shared-classes"},next:{title:"Server Side Rendering",permalink:"/docs/guides/ssr"}},p={},m=[{value:"Defining a component variant",id:"defining-a-component-variant",level:2},{value:"Use component variants in components",id:"use-component-variants-in-components",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When building a ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/stylable-component-library"},"Stylable component library")," or a ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/stylable-application"},"Stylable application"),', it is useful to define several semantic "flavors" of some components, for example a ',(0,r.kt)("inlineCode",{parentName:"p"},"Button")," component that represents ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"Gallery")," component for the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," gallery instance. "),(0,r.kt)("h2",{id:"defining-a-component-variant"},"Defining a component variant"),(0,r.kt)("p",null,"In your project's ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/project-commons"},"Stylable stylesheet")," used for the commonly used components in your project (usually named ",(0,r.kt)("inlineCode",{parentName:"p"},"project.st.css"),") you:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import a component stylesheet. "),(0,r.kt)("li",{parentName:"ol"},"Define a CSS class with a descriptive name like ",(0,r.kt)("inlineCode",{parentName:"li"},"cancelButton"),"."),(0,r.kt)("li",{parentName:"ol"},"Extend the component on the class you just defined.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "project";\n\n@st-import Button from "./button.st.css";\n\n.cancelButton {\n    -st-extend: Button;\n    color: red;\n    border: 1px solid red;\n}\n')),(0,r.kt)("h2",{id:"use-component-variants-in-components"},"Use component variants in components"),(0,r.kt)("p",null,"A component ",(0,r.kt)("strong",{parentName:"p"},"Stylable")," stylesheet can use and extend component variants:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "comp";\n\n@st-import [cancelButton] from "./project.st.css";\n\n/*\nselector: .comp__root .project__cancelButton.button__root\njs value: "project__cancelButton"\n*/\n.root .cancelButton { }\n/*\nselector: .comp__cancel.project__cancelButton.button__root\njs value: "comp__cancel project__cancelButton"\n*/\n.cancel {\n    -st-extends: cancelButton;\n}\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For the ",(0,r.kt)("inlineCode",{parentName:"p"},".cancelButton")," selector, we manually added the ",(0,r.kt)("inlineCode",{parentName:"p"},".root")," class to avoid overriding ",(0,r.kt)("inlineCode",{parentName:"p"},"cancelButton")," outside of this scope."))))}d.isMDXComponent=!0}}]);