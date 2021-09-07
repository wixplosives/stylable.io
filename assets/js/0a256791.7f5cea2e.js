"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[339],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4741:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],c={id:"tag-selectors",title:"CSS Tag/Component Selector",sidebar_label:"Tag/Component Selector"},l=void 0,i={unversionedId:"references/tag-selectors",id:"references/tag-selectors",isDocsHomePage:!1,title:"CSS Tag/Component Selector",description:"Like CSS type selectors, Stylable tag selectors can match the names of elements in the DOM.",source:"@site/docs/references/tag-selectors.md",sourceDirName:"references",slug:"/references/tag-selectors",permalink:"/docs/references/tag-selectors",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/references/tag-selectors.md",tags:[],version:"current",frontMatter:{id:"tag-selectors",title:"CSS Tag/Component Selector",sidebar_label:"Tag/Component Selector"},sidebar:"Specification Reference",previous:{title:"Class Selectors",permalink:"/docs/references/class-selectors"},next:{title:"Extend Stylable Stylesheet",permalink:"/docs/references/extend-stylesheet"}},p=[{value:"Native element",id:"native-element",children:[]},{value:"Component element",id:"component-element",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Like CSS ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors"},"type selectors"),", ",(0,o.kt)("strong",{parentName:"p"},"Stylable")," ",(0,o.kt)("inlineCode",{parentName:"p"},"tag selectors")," can match the names of elements in the DOM."),(0,o.kt)("p",null,"Tag selectors are ",(0,o.kt)("strong",{parentName:"p"},"not")," scoped themselves. Other selectors used with a tag selector can be scoped. For example if a ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/class-selectors"},"class selector")," is used with a tag selector, the class is scoped and the tag selector is not. The matching qualified name of a tag selector can therefore target any element in the subtree of the component. "),(0,o.kt)("h2",{id:"native-element"},"Native element"),(0,o.kt)("p",null,"Targeting a native element matches any element with the same tag name that is found in a prefix selector. The prefix selector could be a class selector or the root."),(0,o.kt)("p",null,"To target ",(0,o.kt)("strong",{parentName:"p"},"all")," elements of a certain type in your project, use a ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/global-selectors"},(0,o.kt)("inlineCode",{parentName:"a"},"global selector")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Page";\n.root form { background: green; }\n.sideBar:hover form { background: red; }\n:global(span) { background: blue; }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output - form is scoped to the page - affects any nested instance */\n.Page__root form { background: green; } \n.Page__sideBar:hover form { background: red; }\nspan { background: blue; } /* this will affect *ALL* spans in your application */\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The value ",(0,o.kt)("inlineCode",{parentName:"p"},"form")," itself is not namespaced."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/* comp.jsx */\nimport React from 'react';\nimport { style, classes } from './comp.st.css';\n\nclass Comp extends React.Component {\n    render () {\n        return (\n            <div className={style(classes.root, this.props.className)}>\n                <div className={classes.sideBar}>\n                    <form /> /* green background and red while hovering parent */\n                </div>\n                <form /> /* green background */\n                <span /> /* blue background */\n            </div>\n        );\n    }\n}\n")),(0,o.kt)("h2",{id:"component-element"},"Component element"),(0,o.kt)("p",null,"When the value of a stylesheet is ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/imports"},"imported")," with a ",(0,o.kt)("strong",{parentName:"p"},"capital first letter"),", it can be used as a component tag selector."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Page";\n:import{\n    -st-from: "./toggle-button.st.css";\n    -st-default: ToggleButton;\n}\n.root ToggleButton { background: green; }\n.sideBar:hover ToggleButton { background: red; }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output - ToggleButton is scoped to the page, affects any nested toggle button */\n.Page__root .ToggleButton__root { background: green; }\n.Page__sideBar:hover .ToggleButton__root { background: red; }\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/* comp.jsx */\nimport React from 'react';\nimport { style, classes } from './comp.st.css';\n\n/* React implementation - button component implements toggle-button.css */\nimport ToggleButton from './toggle-button';\n\nclass Comp extends React.Component {\n    render () {\n        return (\n            <div className={style(classes.root, this.props.className)}>\n                <div className={classes.sideBar}>\n                    <ToggleButton /> /* green background and red while hovering parent */\n                </div>\n                <ToggleButton /> /* green background */\n            </div>\n        );\n    }\n}\n")))}u.isMDXComponent=!0}}]);