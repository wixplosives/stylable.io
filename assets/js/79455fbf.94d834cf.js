"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[6275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={id:"class-selectors",title:"Class Selector"},s=void 0,l={unversionedId:"references/class-selectors",id:"references/class-selectors",title:"Class Selector",description:"You use CSS classes to define the local name of internal component parts. For example, you can define a .button in a menu component.",source:"@site/docs/references/class-selectors.md",sourceDirName:"references",slug:"/references/class-selectors",permalink:"/docs/references/class-selectors",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/class-selectors.md",tags:[],version:"current",frontMatter:{id:"class-selectors",title:"Class Selector"},sidebar:"Specification Reference",previous:{title:"Specification Overview",permalink:"/docs/references/cheatsheet"},next:{title:"Element Type Selector",permalink:"/docs/references/tag-selectors"}},c={},i=[{value:"Class selector export",id:"class-selector-export",level:2},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}],p={toc:i};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You use ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors"},"CSS classes")," to define the local name of internal component parts. For example, you can define a ",(0,a.kt)("inlineCode",{parentName:"p"},".button")," in a menu component."),(0,a.kt)("p",null,"In ",(0,a.kt)("strong",{parentName:"p"},"Stylable"),", class selectors are scoped to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/namespace"},"namespace")," of the stylesheet."),(0,a.kt)("p",null,"You should use camelCase to name class selectors. Avoid using hyphens (-) and capital first letters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Page";\n.root:hover .thumbnail {\n  background: red;\n}\n.thumbnail {\n  background: green;\n}\n.thumbnail:hover {\n  background: blue;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.Page__root:hover .Page__thumbnail {\n  background: red;\n}\n.Page__thumbnail {\n  background: green;\n}\n.Page__thumbnail:hover {\n  background: blue;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'/* comp.jsx */\nimport React from "react";\nimport { style, classes } from "./comp.st.css";\n\nclass Comp extends React.Component {\n  render() {\n    return (\n      <div className={style(classes.root, {}, this.props)}>\n        <img className={style.thumbnail} />\n      </div>\n    );\n  }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In ",(0,a.kt)("strong",{parentName:"p"},"Stylable"),", as you can see in these examples, ",(0,a.kt)("inlineCode",{parentName:"p"},".root")," as a class name is reserved for the main ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/root"},"root"),".",(0,a.kt)("br",{parentName:"p"}),"\n","CSS classes can also define ",(0,a.kt)("a",{parentName:"p",href:"./pseudo-classes"},"states")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/extend-stylesheet"},"extend another component"),".")),(0,a.kt)("h2",{id:"class-selector-export"},"Class selector export"),(0,a.kt)("p",null,"Any class defined in a ",(0,a.kt)("strong",{parentName:"p"},"Stylable")," stylesheet is exported as a named export and can be imported by other stylesheets using the directive ",(0,a.kt)("inlineCode",{parentName:"p"},"-st-named"),". These classes are also imported using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/react-integration"},"react-integration")," and applied to the DOM as needed."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Classes imported this way should be scoped to your local stylesheet by adding ",(0,a.kt)("inlineCode",{parentName:"p"},".root")," or a local class as a prefix to the selector. Adding the scoping causes the selector to affect only the rendering subtree from this point onwards. If classes are imported without scoping to your local stylesheet, this may cause unexpected effects throughout your project.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'/* button.st.css */\n@namespace "Button";\n.root {\n  background: green;\n}\n.icon {\n  border: 2px solid black;\n}\n.label {\n  font-size: 20px;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'/* form.st.css */\n@namespace "Form";\n\n@st-import [icon, label] from "./button.st.css";\n\n/* @selector .Form__myIcon.Button__icon */\n.myIcon {\n  -st-extends: icon;\n}\n\n/* @selector .Form__root .Button__icon */\n.root .icon {}\n\n/* @selector .Form__label.Button__label */\n.label {\n  -st-extends: label;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'/* \n    JavaScript runtime exports:\n    {\n        root: "Form__root",\n        myIcon: "Form__myIcon Button__icon",\n        icon: "Button__icon",\n        label: "Form__label Button__label"\n    }\n*/\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/references/pseudo-elements"},"Style pseudo-elements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/references/mixins"},"Use CSS mixins"))))}m.isMDXComponent=!0}}]);