"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[3455],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,v=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(v,s(s({ref:t},c),{},{components:a})):n.createElement(v,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6470:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={id:"st-variables",title:"Stylable Variables"},l=void 0,p={unversionedId:"references/st-variables",id:"references/st-variables",title:"Stylable Variables",description:"Use variables to define common values to be used across the stylesheet and so they can be exposed for sharing and theming.",source:"@site/docs/references/variables.md",sourceDirName:"references",slug:"/references/st-variables",permalink:"/docs/references/st-variables",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/variables.md",tags:[],version:"current",frontMatter:{id:"st-variables",title:"Stylable Variables"},sidebar:"Specification Reference",previous:{title:"Formatters",permalink:"/docs/references/formatters"},next:{title:"CSS Custom Properties",permalink:"/docs/references/css-vars"}},c={},d=[{value:"Use in stylesheet",id:"use-in-stylesheet",level:2},{value:"Import variables",id:"import-variables",level:2},{value:"Compose variables",id:"compose-variables",level:2},{value:"Advanced variable types",id:"advanced-variable-types",level:2},{value:"Stylable native variable types",id:"stylable-native-variable-types",level:3},{value:"st-map",id:"st-map",level:4},{value:"st-array",id:"st-array",level:4},{value:"Custom variable type",id:"custom-variable-type",level:3}],m={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use variables to define common values to be used across the stylesheet and so they can be exposed for sharing and theming.\nThese variables are used only during build-time and have no impact on the resulting runtime code."),(0,o.kt)("p",null,"If you wish to use dynamic variables, and to change their values during runtime, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/css-vars"},"css custom properties (vars)")," for further details."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Variables are scoped to the specific stylesheet and do not conflict with variables from another stylesheet."))),(0,o.kt)("h2",{id:"use-in-stylesheet"},"Use in stylesheet"),(0,o.kt)("p",null,"Use the syntax ",(0,o.kt)("inlineCode",{parentName:"p"},":vars")," to define variables, and apply them with a ",(0,o.kt)("inlineCode",{parentName:"p"},"value()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Example1";\n:vars {\n    color1: red;\n    color2: green;\n}\n.root {\n    color: value(color1);\n    background: value(color2);\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.Example1__root {\n    color: red; /* color1 */\n    background: green; /* color2 */\n}\n")),(0,o.kt)("h2",{id:"import-variables"},"Import variables"),(0,o.kt)("p",null,"Any var defined in a stylesheet is exported as a named export and can be ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/imports"},"imported")," by other stylesheets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Example2";\n@st-import [color1, color2] from "./example1.st.css";\n\n.root {\n    border: 10px solid value(color1);\n}\n.root:hover {\n    border: 10px solid value(color2);\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.Example2__root {\n    border: 10px solid red; /* color1 */\n}\n.Example2__root:hover {\n    border: 10px solid green; /* color2 */\n}\n")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Imported variables are not exported from the stylesheet that has imported them. They can be imported only from the stylesheet in which they are declared."))),(0,o.kt)("h2",{id:"compose-variables"},"Compose variables"),(0,o.kt)("p",null,"You can set the value of a variable using another variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Example3";\n@st-import [color1, color2] from "./example1.st.css";\n\n:vars {\n    border1: 10px solid value(color1); /* use color1 in a complex value */\n}\n.root {\n    border: value(border1); /* user border1 */\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.Example3__root {\n    border: 10px solid red; /* 10px solid {color1} */\n}\n")),(0,o.kt)("h2",{id:"advanced-variable-types"},"Advanced variable types"),(0,o.kt)("p",null,"You can use Stylable custom types when defining a variable to group multiple values under a shared context. This gives you a better way to define and manage variables in your stylesheet. "),(0,o.kt)("p",null,"Stylable does this by utilizing a type function in the variable definition and passing additional arguments to the ",(0,o.kt)("inlineCode",{parentName:"p"},"value()")," function."),(0,o.kt)("h3",{id:"stylable-native-variable-types"},"Stylable native variable types"),(0,o.kt)("p",null,"By default, Stylable exposes two types of variables that are available globally and do not require a special import:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"st-map"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"st-array"))),(0,o.kt)("h4",{id:"st-map"},"st-map"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"st-map")," function to provide an interface similar to a map. You can group variables by context and retrieve them by key."),(0,o.kt)("p",null,"Its definition is comprised of key/value pairs with a space as a delimiter between them, and a comma as a separator between pairs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},":vars {\n    colors: st-map(\n        bg green,\n        text red\n    );\n}\n\n.root {\n    background-color: value(colors, bg); /* green */\n}\n")),(0,o.kt)("h4",{id:"st-array"},"st-array"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"st-array")," function to provide an interface which is similar to an array. This enables you to group variables by context and retrieve them by their index. "),(0,o.kt)("p",null,"Its definition is comprised of values that are zero-based and comma separated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},":vars {\n    colors: st-array(red, green);\n}\n\n.root {\n    background-color: value(colors, 1); /* green */\n}\n")),(0,o.kt)("h3",{id:"custom-variable-type"},"Custom variable type"),(0,o.kt)("p",null,"Stylable also offers a custom variable type, ",(0,o.kt)("inlineCode",{parentName:"p"},"stBorder"),", that must be imported from the ",(0,o.kt)("inlineCode",{parentName:"p"},"@stylable/custom-value")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/stylable/tree/master/packages/custom-value"},"package"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"stBorder")," accepts three arguments, ",(0,o.kt)("inlineCode",{parentName:"p"},"size"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," in that order. When using the type, you can either invoke the entire border definition (by not passing an additional argument), or specific parts of it, according to their key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'@st-import [stBorder] from "@stylable/custom-value";\n\n:vars {\n    /* order of arguments: size style color */\n    myBorder: stBorder(1px, solid, green);\n}\n\n.root {\n    border: value(myBorder); /* 1px solid green */\n    background-color: value(myBorder, color); /* green */\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"stBorder")," is just the first of future custom variable types that will be available in Stylable."))))}u.isMDXComponent=!0}}]);