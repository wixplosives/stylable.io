"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[7320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"st-scope",title:"Scope"},s=void 0,l={unversionedId:"references/st-scope",id:"references/st-scope",title:"Scope",description:"Stylable scope enables you to wrap several style-rules using a single directive.",source:"@site/docs/references/st-scope.md",sourceDirName:"references",slug:"/references/st-scope",permalink:"/docs/references/st-scope",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/st-scope.md",tags:[],version:"current",frontMatter:{id:"st-scope",title:"Scope"},sidebar:"Specification Reference",previous:{title:"Root",permalink:"/docs/references/root"},next:{title:"Formatters",permalink:"/docs/references/formatters"}},i={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Theming with scope",id:"theming-with-scope",level:3},{value:"Creating a theme",id:"creating-a-theme",level:4},{value:"Extending a theme",id:"extending-a-theme",level:4},{value:"Theming with mixins",id:"theming-with-mixins",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Stylable")," scope enables you to wrap several style-rules using a single directive.\nThe scoping directive receives any valid Stylable selector to use for its scoping."),(0,o.kt)("p",null,"Stylable scoping directive is similar in its behavior to CSS nesting, but can only be applied to a single level."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* entry.st.css */\n@st-scope .root {\n  input {\n    color: purple;\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* output */\n.entry__root input {\n  color: purple;\n}\n")),(0,o.kt)("h3",{id:"theming-with-scope"},"Theming with scope"),(0,o.kt)("p",null,"There are many possible patterns that can be used to theme a site or application in CSS. Stylable scoping capability serves as syntax sugar to allow an easier theme implementation."),(0,o.kt)("p",null,"Below are several examples for how theming can be done."),(0,o.kt)("h4",{id:"creating-a-theme"},"Creating a theme"),(0,o.kt)("p",null,"In this example, we're representing a dark theme as a stylesheet. Creating your overriding rules under that Stylesheet's symbol and apply it to the relevant part of your DOM."),(0,o.kt)("p",null,"In this theme implementation we are targeting three components and overriding their default look."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'/* dark-theme.st.css */\n@st-import App, [Button, DropDown] from "./index.st.css";\n\n@st-scope .root {\n  App {\n    border-color: darkgrey;\n  }\n  Button {\n    background: darkgreen;\n  }\n  DropDown {\n    background: darkgrey;\n    color: beige;\n  }\n}\n')),(0,o.kt)("h4",{id:"extending-a-theme"},"Extending a theme"),(0,o.kt)("p",null,"In this example, we are extending our previously created dark theme, with a specific override for the Gallery component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'@st-import Gallery from "./gallery.st.css";\n@st-import DarkTheme from "./dark.st.css";\n\n@st-scope DarkTheme {\n  DropDown {\n    color: yellow; /* overriding DarkTheme color, perserving background */\n  }\n  Gallery {\n    background: darkgrey;\n  }\n}\n')),(0,o.kt)("h4",{id:"theming-with-mixins"},"Theming with mixins"),(0,o.kt)("p",null,"In this file, we are creating pre-designed flavors that uses Stylable variables to determine their styling."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'/* flavors.st.css */\n@st-import [Button, UserForm] from "./index.st.css";\n\n:vars {\n  background: white;\n  text: black;\n  bordercolor: green;\n}\n\n.button-flavor {\n  -st-extends: Button;\n  background: value(background);\n  color: value(text);\n}\n\n.userForm-flavor {\n  -st-extends: UserForm;\n  background: value(background);\n  color: value(text);\n  border: 1px solid value(borderColor);\n}\n')),(0,o.kt)("p",null,"In this example, we use our existing flavors from above to customize our components look under the dark theme."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'@st-import [UserForm, Button] from "./index.st.css";\n@st-import [button-flavor, userForm-flavor] from "./flavors.st.css";\n\n@st-scope .root {\n  Button {\n    -st-mixin: button-flavor(background black, text white);\n  }\n\n  UserForm {\n    -st-mixin: userForm-flavor(\n      background black,\n      text white,\n      borderColor #f4f4f4\n    );\n  }\n}\n')))}u.isMDXComponent=!0}}]);