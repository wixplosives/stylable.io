"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[6275],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3393:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},assets:function(){return p},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],l={id:"class-selectors",title:"CSS Class Selectors",sidebar_label:"Class Selectors"},c=void 0,i={unversionedId:"references/class-selectors",id:"references/class-selectors",title:"CSS Class Selectors",description:"You use CSS classes to define the local name of internal component parts. For example, you can define a .button in a menu component.",source:"@site/docs/references/class-selectors.md",sourceDirName:"references",slug:"/references/class-selectors",permalink:"/docs/references/class-selectors",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/class-selectors.md",tags:[],version:"current",frontMatter:{id:"class-selectors",title:"CSS Class Selectors",sidebar_label:"Class Selectors"},sidebar:"Specification Reference",previous:{title:"Root",permalink:"/docs/references/root"},next:{title:"Tag/Component Selector",permalink:"/docs/references/tag-selectors"}},p={},m=[{value:"Class selector export",id:"class-selector-export",level:2},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors"},"CSS classes")," to define the local name of internal component parts. For example, you can define a ",(0,o.kt)("inlineCode",{parentName:"p"},".button")," in a menu component."),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"Stylable"),", class selectors are scoped to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/namespace"},"namespace")," of the stylesheet. "),(0,o.kt)("p",null,"You should use camelCase to name class selectors. Avoid using hyphens (-) and capital first letters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Page";\n.root:hover .thumbnail { background:red; }\n.thumbnail { background:green; }\n.thumbnail:hover { background:blue; }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.Page__root:hover .Page__thumbnail { background:red; }\n.Page__thumbnail { background:green;}\n.Page__thumbnail:hover { background:blue; }\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/* comp.jsx */\nimport React from 'react';\nimport { style, classes } from './comp.st.css';\n\nclass Comp extends React.Component {\n    render () {\n        return (\n            <div className={style(classes.root, {}, this.props)}>\n                <img className={style.thumbnail} />\n            </div>\n        )\n    };\n}\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In ",(0,o.kt)("strong",{parentName:"p"},"Stylable"),", as you can see in these examples, ",(0,o.kt)("inlineCode",{parentName:"p"},".root")," as a class name is reserved for the main ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/root"},"root"),".",(0,o.kt)("br",{parentName:"p"}),"\n","CSS classes can also define ",(0,o.kt)("a",{parentName:"p",href:"./pseudo-classes"},"states")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/extend-stylesheet"},"extend another component"),"."))),(0,o.kt)("h2",{id:"class-selector-export"},"Class selector export"),(0,o.kt)("p",null,"Any class defined in a ",(0,o.kt)("strong",{parentName:"p"},"Stylable")," stylesheet is exported as a named export and can be imported by other stylesheets using the directive ",(0,o.kt)("inlineCode",{parentName:"p"},"-st-named"),". These classes are also imported using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/react-integration"},"react-integration")," and applied to the DOM as needed."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Classes imported this way should be scoped to your local stylesheet by adding ",(0,o.kt)("inlineCode",{parentName:"p"},".root")," or a local class as a prefix to the selector. Adding the scoping causes the selector to affect only the rendering subtree from this point onwards. If classes are imported without scoping to your local stylesheet, this may cause unexpected effects throughout your project."))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'/* button.st.css */\n@namespace "Button";\n.root { background:green; }\n.icon { border: 2px solid black; } \n.label { font-size: 20px; } \n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'/* form.st.css */\n@namespace "Form";\n\n@st-import [icon, label] from "./button.st.css";\n\n/* @selector .Form__myIcon.Button__icon */\n.myIcon { \n    -st-extends: icon; \n}\n\n/* @selector .Form__root .Button__icon */\n.root .icon {}\n\n/* @selector .Form__label.Button__label */\n.label {\n    -st-extends: label;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'/* \n    JavaScript runtime exports:\n    {\n        root: "Form__root",\n        myIcon: "Form__myIcon Button__icon",\n        icon: "Button__icon",\n        label: "Form__label Button__label"\n    }\n*/\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/references/pseudo-elements"},"Style pseudo-elements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/references/mixins"},"Use CSS mixins"))))}d.isMDXComponent=!0}}]);