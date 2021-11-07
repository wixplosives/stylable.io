"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[6085],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||s;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<s;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2399:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=["components"],i={id:"imports",title:"Imports"},l=void 0,m={unversionedId:"references/imports",id:"references/imports",isDocsHomePage:!1,title:"Imports",description:"Stylable enables you to import other stylesheets and modules in a way that is similar to JS Imports. You can then use the stylesheet or module as it's been defined, or just one or more of its named values, in your own Stylable stylesheet.",source:"@site/docs/references/imports.md",sourceDirName:"references",slug:"/references/imports",permalink:"/docs/references/imports",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/imports.md",tags:[],version:"current",frontMatter:{id:"imports",title:"Imports"},sidebar:"Specification Reference",previous:{title:"Specification Overview",permalink:"/docs/references/cheatsheet"},next:{title:"Root",permalink:"/docs/references/root"}},p=[{value:"Import syntax",id:"import-syntax",children:[],level:2},{value:"Imports - basic usage",id:"imports---basic-usage",children:[{value:"Import the default export of a local reference stylesheet for use in the scoped stylesheet",id:"import-the-default-export-of-a-local-reference-stylesheet-for-use-in-the-scoped-stylesheet",children:[],level:3},{value:"Import named parts from a local stylesheet",id:"import-named-parts-from-a-local-stylesheet",children:[],level:3},{value:"Import named exports from a local JS module",id:"import-named-exports-from-a-local-js-module",children:[],level:3},{value:"Import named exports from a local JS module and locally refer to one of the export values as a different name",id:"import-named-exports-from-a-local-js-module-and-locally-refer-to-one-of-the-export-values-as-a-different-name",children:[],level:3}],level:2},{value:"Import keyframes",id:"import-keyframes",children:[],level:2},{value:"Importing specific symbols",id:"importing-specific-symbols",children:[],level:2}],c={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Stylable")," enables you to import other stylesheets and modules in a way that is similar to ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"},"JS Imports"),". You can then use the stylesheet or module as it's been defined, or just one or more of its named values, in your own ",(0,s.kt)("strong",{parentName:"p"},"Stylable")," stylesheet."),(0,s.kt)("h2",{id:"import-syntax"},"Import syntax"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Stylable")," supports two types of import syntax that can be used, the two are identical in their capabilities."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"@st-import")," at-rule directive - A newer more concise syntax, similar to ES imports:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"replace ",(0,s.kt)("inlineCode",{parentName:"li"},"<DEFAULT_NAME>")," with your desired local name to import an entire stylesheet, representing its root class"),(0,s.kt)("li",{parentName:"ul"},"Inside the square brackets, import any inner parts belonging to said stylesheet")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"@st-import DefaultComp, [somePart, someVar] from './stylesheet.st.css';\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},":import")," ruleset directive - The original more verbose way of importing symbols, uses the ",(0,s.kt)("strong",{parentName:"li"},"Stylable")," syntax beginning with ",(0,s.kt)("inlineCode",{parentName:"li"},"-st-")," inside the ",(0,s.kt)("inlineCode",{parentName:"li"},":import")," ruleset:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-st-from:")," Identifies the path to the stylesheet or JavaScript module. Can be a relative path or a 3rd party path."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-st-default:")," Imports the default export of the module named in ",(0,s.kt)("inlineCode",{parentName:"li"},"-st-from:"),". Use with the name by which to identify the imported value in the scoped stylesheet."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-st-named:")," List of the named exports to import into the local scoped stylesheet from the file named in ",(0,s.kt)("inlineCode",{parentName:"li"},"-st-from:"),".")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},":import {\n    -st-from: './stylesheet.st.css';\n    -st-default: <DEFAULT_NAME>;\n    -st-named: <NAMED_PART1, NAMED_PART2, ...>;\n}\n")),(0,s.kt)("p",null,"Every example below will feature both types of import syntaxes, their end result is identical."),(0,s.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},":import")," is a Stylable directive and not a selector."),(0,s.kt)("li",{parentName:"ul"},"likewise, ",(0,s.kt)("inlineCode",{parentName:"li"},"@st-import")," is a Stylable directive and not an actual at-rule."),(0,s.kt)("li",{parentName:"ul"},"Import statements cannot be used as a part of a complex selector or inside a CSS ruleset."),(0,s.kt)("li",{parentName:"ul"},"Multiple imports may conflict in their used symbol names; the last one in the file wins.")))),(0,s.kt)("h2",{id:"imports---basic-usage"},"Imports - basic usage"),(0,s.kt)("p",null,"Here are some examples of how you can use imports in your ",(0,s.kt)("strong",{parentName:"p"},"Stylable")," stylesheet."),(0,s.kt)("h3",{id:"import-the-default-export-of-a-local-reference-stylesheet-for-use-in-the-scoped-stylesheet"},"Import the default export of a local reference stylesheet for use in the scoped stylesheet"),(0,s.kt)("p",null,"Import the ",(0,s.kt)("inlineCode",{parentName:"p"},"button.st.css")," stylesheet from a local location. Assign the name ",(0,s.kt)("inlineCode",{parentName:"p"},"Button")," to the default export of that stylesheet for use in this scoped stylesheet. "),(0,s.kt)("p",null,"When importing another stylesheet, the default import represents the root of the stylesheet and is generally treated as a component, and named imports represent other internal stylesheet parts."),(0,s.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Generally when importing a ",(0,s.kt)("strong",{parentName:"p"},"default")," value from a stylable file, you should use a capital letter to signify that the value represents a component root node in this stylesheet. "))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"/* comp.st.css - atRule syntax */\n@st-import ToggleButton from './button.st.css';\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"/* comp.st.css - legacy syntax */\n:import {\n    -st-from: './button.st.css';\n    -st-default: ToggleButton;\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/* ES6 \"equivalent\" */\nimport ToggleButton from './button.st.css';\n")),(0,s.kt)("h3",{id:"import-named-parts-from-a-local-stylesheet"},"Import named parts from a local stylesheet"),(0,s.kt)("p",null,"Named imports from a stylesheet can be used to bring symbols of different types, which you can then use inside your stylesheet."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Elements"),(0,s.kt)("li",{parentName:"ul"},"Classes"),(0,s.kt)("li",{parentName:"ul"},"Stylable Variables"),(0,s.kt)("li",{parentName:"ul"},"CSS Variables"),(0,s.kt)("li",{parentName:"ul"},"Keyframes - special case, see ",(0,s.kt)("a",{parentName:"li",href:"#importing_keyframes"},"importing keyframes")," entry below")),(0,s.kt)("p",null,"In this "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"/* comp.st.css - atRule syntax */\n@st-import [label, icon, --bgColor] from './button.st.css';\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"/* comp.st.css - legacy syntax */\n:import {\n    -st-from: './button.st.css';\n    -st-named: label, icon, --bgColor;\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/* ES6 \"equivalent\" */\nimport { label, icon, --bgColor } from './button.st.css';\n")),(0,s.kt)("h3",{id:"import-named-exports-from-a-local-js-module"},"Import named exports from a local JS module"),(0,s.kt)("p",null,"The values ",(0,s.kt)("inlineCode",{parentName:"p"},"gridMixin")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"tooltipMixin")," are imported from the local JavaScript module ",(0,s.kt)("inlineCode",{parentName:"p"},"my-mixins.js"),". These named exports are now imported into this scoped stylesheet."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"When importing named values, they are generally used as class or tag selectors and, therefore, you should camelCase to name them."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"/* comp.st.css - atRule syntax */\n@st-import [gridMixin, tooltipMixin] from './my-mixins';\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},'/* comp.st.css - legacy syntax */\n:import {\n    -st-from: "./my-mixins";\n    -st-named: gridMixin, tooltipMixin;\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'/* ES6 equivalent */\nimport { gridMixin, tooltipMixin } from "./my-mixins";\n')),(0,s.kt)("h3",{id:"import-named-exports-from-a-local-js-module-and-locally-refer-to-one-of-the-export-values-as-a-different-name"},"Import named exports from a local JS module and locally refer to one of the export values as a different name"),(0,s.kt)("p",null,"The values ",(0,s.kt)("inlineCode",{parentName:"p"},"gridMixin")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"tooltipMixin")," are imported from the local JavaScript module ",(0,s.kt)("inlineCode",{parentName:"p"},"my-mixins.js"),". The value ",(0,s.kt)("inlineCode",{parentName:"p"},"gridMixin")," is used as is and ",(0,s.kt)("inlineCode",{parentName:"p"},"tooltipMixin")," has been renamed for use in this scoped stylesheet as ",(0,s.kt)("inlineCode",{parentName:"p"},"tooltip"),". These mixins are referred to as ",(0,s.kt)("inlineCode",{parentName:"p"},"gridMixin")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"tooltip")," in this stylesheet."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"/* comp.st.css - atRule syntax */\n@st-import [gridMixin, tooltipMixin as tooltip] from './my-mixins';\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},'/* comp.st.css - legacy syntax */\n:import {\n    -st-from: "./my-mixins";\n    -st-named: gridMixin, tooltipMixin as tooltip;\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'/* ES6 equivalent */\nimport { gridMixin, tooltipMixin as tooltip } from "./my-mixins";\n')),(0,s.kt)("h2",{id:"import-keyframes"},"Import keyframes"),(0,s.kt)("p",null,"In Stylable, both class names and keyframes undergo namespacing to avoid collision. However, despite the two being global, they do not share a namespace in CSS - this means that you can have both a class name and a keyframe with the same name."),(0,s.kt)("p",null,"Due to this, when importing keyframes from another stylesheet, a special ",(0,s.kt)("inlineCode",{parentName:"p"},"keyframes()")," directive needs to be used."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"/* comp.st.css - atRule syntax */\n@st-import [keyframes(slideX, slideY)] from './keyframes.st.css';\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},'/* comp.st.css - legacy syntax */\n:import {\n    -st-from: "./my-mixins";\n    -st-named: keyframes(slideX, slideY);\n}\n')),(0,s.kt)("p",null,"You can read more about keyframes behavior ",(0,s.kt)("a",{parentName:"p",href:"/docs/references/keyframes"},"here"),"."),(0,s.kt)("h2",{id:"importing-specific-symbols"},"Importing specific symbols"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/references/tag-selectors"},"Tag selectors")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/references/extend-stylesheet"},"Extend a stylesheet")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/references/st-variables#import-variables"},"Import Stylable variables")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/references/css-vars#importing-css-variables"},"Import CSS variables")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/references/class-selectors#import-classes"},"Import classes")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/references/mixins"},"Mixins")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/guides/component-variants"},"Component variants")," and ",(0,s.kt)("a",{parentName:"li",href:"/docs/guides/shared-classes"},"Shared classes"))))}d.isMDXComponent=!0}}]);