"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[3455],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(b,l(l({ref:t},c),{},{components:a})):r.createElement(b,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={id:"st-variables",title:"Stylable Variable"},l=void 0,s={unversionedId:"references/st-variables",id:"references/st-variables",title:"Stylable Variable",description:"Use variables to define common values to be used across the stylesheet and so they can be exposed for sharing and theming.",source:"@site/docs/references/variables.md",sourceDirName:"references",slug:"/references/st-variables",permalink:"/docs/references/st-variables",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/variables.md",tags:[],version:"current",frontMatter:{id:"st-variables",title:"Stylable Variable"},sidebar:"Specification Reference",previous:{title:"Namespace",permalink:"/docs/references/namespace"},next:{title:"Mixins",permalink:"/docs/references/mixins"}},i={},p=[{value:"Use in stylesheet",id:"use-in-stylesheet",level:2},{value:"Import variables",id:"import-variables",level:2},{value:"Compose variables",id:"compose-variables",level:2},{value:"Advanced variable types",id:"advanced-variable-types",level:2},{value:"Stylable native variable types",id:"stylable-native-variable-types",level:3},{value:"st-map",id:"st-map",level:4},{value:"st-array",id:"st-array",level:4},{value:"Custom variable type",id:"custom-variable-type",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use variables to define common values to be used across the stylesheet and so they can be exposed for sharing and theming.\nThese variables are used only during build-time and have no impact on the resulting runtime code."),(0,n.kt)("p",null,"If you wish to use dynamic variables, and to change their values during runtime, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/references/css-vars"},"css custom properties (vars)")," for further details."),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"Variables are scoped to the specific stylesheet and do not conflict with variables from another stylesheet.")),(0,n.kt)("h2",{id:"use-in-stylesheet"},"Use in stylesheet"),(0,n.kt)("p",null,"Use the syntax ",(0,n.kt)("inlineCode",{parentName:"p"},":vars")," to define variables, and apply them with a ",(0,n.kt)("inlineCode",{parentName:"p"},"value()"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="example1.st.css"',title:'"example1.st.css"'},":vars {\n  color1: red;\n  color2: green;\n}\n.root {\n  color: value(color1);\n  background: value(color2);\n}\n\n/* OUTPUT */\n.example1__root {\n  color: red; /* color1 */\n  background: green; /* color2 */\n}\n")),(0,n.kt)("h2",{id:"import-variables"},"Import variables"),(0,n.kt)("p",null,"Any var defined in a stylesheet is exported as a named export and can be ",(0,n.kt)("a",{parentName:"p",href:"/docs/references/imports"},"imported")," by other stylesheets."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="example2.st.css"',title:'"example2.st.css"'},'@st-import [color1, color2] from "./example1.st.css";\n\n.root {\n  border: 10px solid value(color1);\n}\n.root:hover {\n  border: 10px solid value(color2);\n}\n\n/* OUTPUT */\n.example2__root {\n  border: 10px solid red; /* color1 */\n}\n.example2__root:hover {\n  border: 10px solid green; /* color2 */\n}\n')),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"Imported variables are not exported from the stylesheet that has imported them. They can be imported only from the stylesheet in which they are declared.")),(0,n.kt)("h2",{id:"compose-variables"},"Compose variables"),(0,n.kt)("p",null,"You can set the value of a variable using another variable."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="example3.st.css"',title:'"example3.st.css"'},'@st-import [color1, color2] from "./example1.st.css";\n\n:vars {\n  border1: 10px solid value(color1); /* use color1 in a complex value */\n}\n.root {\n  border: value(border1); /* user border1 */\n}\n\n/* OUTPUT */\n.example3__root {\n  border: 10px solid red; /* 10px solid {color1} */\n}\n')),(0,n.kt)("h2",{id:"advanced-variable-types"},"Advanced variable types"),(0,n.kt)("p",null,"You can use Stylable custom types when defining a variable to group multiple values under a shared context. This gives you a better way to define and manage variables in your stylesheet."),(0,n.kt)("p",null,"Stylable does this by utilizing a type function in the variable definition and passing additional arguments to the ",(0,n.kt)("inlineCode",{parentName:"p"},"value()")," function."),(0,n.kt)("h3",{id:"stylable-native-variable-types"},"Stylable native variable types"),(0,n.kt)("p",null,"By default, Stylable exposes two types of variables that are available globally and do not require a special import:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"st-map")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"st-array"))),(0,n.kt)("h4",{id:"st-map"},"st-map"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"st-map")," function to provide an interface similar to a map. You can group variables by context and retrieve them by key."),(0,n.kt)("p",null,"Its definition is comprised of key/value pairs with a space as a delimiter between them, and a comma as a separator between pairs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},":vars {\n  colors: st-map(bg green, text red);\n}\n\n.root {\n  background-color: value(colors, bg); /* green */\n}\n")),(0,n.kt)("h4",{id:"st-array"},"st-array"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"st-array")," function to provide an interface which is similar to an array. This enables you to group variables by context and retrieve them by their index."),(0,n.kt)("p",null,"Its definition is comprised of values that are zero-based and comma separated."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},":vars {\n  colors: st-array(red, green);\n}\n\n.root {\n  background-color: value(colors, 1); /* green */\n}\n")),(0,n.kt)("h3",{id:"custom-variable-type"},"Custom variable type"),(0,n.kt)("p",null,"Stylable also offers a custom variable type, ",(0,n.kt)("inlineCode",{parentName:"p"},"stBorder"),", that must be imported from the ",(0,n.kt)("inlineCode",{parentName:"p"},"@stylable/custom-value")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wix/stylable/tree/master/packages/custom-value"},"package"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"stBorder")," accepts three arguments, ",(0,n.kt)("inlineCode",{parentName:"p"},"size"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"style")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"color")," in that order. When using the type, you can either invoke the entire border definition (by not passing an additional argument), or specific parts of it, according to their key."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},'@st-import [stBorder] from "@stylable/custom-value";\n\n:vars {\n  /* order of arguments: size style color */\n  myborder: stBorder(1px, solid, green);\n}\n\n.root {\n  border: value(myBorder); /* 1px solid green */\n  background-color: value(myBorder, color); /* green */\n}\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"stBorder")," is just the first of future custom variable types that will be available in Stylable.")))}d.isMDXComponent=!0}}]);