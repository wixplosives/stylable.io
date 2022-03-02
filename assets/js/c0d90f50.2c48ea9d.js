"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[8723],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],c={id:"root",title:"Root",layout:"docs"},i=void 0,l={unversionedId:"references/root",id:"references/root",title:"Root",description:"Every Stylable stylesheet has a reserved class called root that matches the root node of the component.",source:"@site/docs/references/root.md",sourceDirName:"references",slug:"/references/root",permalink:"/docs/references/root",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/root.md",tags:[],version:"current",frontMatter:{id:"root",title:"Root",layout:"docs"},sidebar:"Specification Reference",previous:{title:"Imports",permalink:"/docs/references/imports"},next:{title:"Class Selectors",permalink:"/docs/references/class-selectors"}},p={},d=[{value:"Examples",id:"examples",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every Stylable stylesheet has a reserved class called ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," that matches the root node of the component."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," class is used to signify a rendering component top-level where a new  scope of namespacing is created. Each component is responsible for placing the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," class on its top-level node for itself."),(0,a.kt)("p",null,"You can apply default styling and behavior to the component on the root class itself."),(0,a.kt)("p",null,"If the root class exists and is being used, all other classes defined in the stylesheet are assumed to be nested under the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," class (at any depth)."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Comp";\n.root { background: red; } /* set component background to red */\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.Comp__root { background: red; }\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," class name can be applied to a component node by using our ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/react-integration"},"React integration"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"/* comp.jsx */\nimport React from 'react';\nimport { style, classes } from './comp.st.css';\n\nclass Comp extends React.Component {\n    render () {\n        return (\n            <div className={style(classes.root, {}, this.props.className)} ></div>\n        );\n    }\n}\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Root can also define ",(0,a.kt)("a",{parentName:"p",href:"./pseudo-classes"},"states")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/extend-stylesheet"},"extend another component"),"."))))}m.isMDXComponent=!0}}]);