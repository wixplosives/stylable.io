(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,u=b["".concat(s,".").concat(d)]||b[d]||m[d]||o;return n?r.a.createElement(u,c(c({ref:t},i),{},{components:n})):r.a.createElement(u,c({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(126)),s={id:"class-selectors",title:"CSS Class Selectors",sidebar_label:"Class Selectors"},c={unversionedId:"references/class-selectors",id:"references/class-selectors",isDocsHomePage:!1,title:"CSS Class Selectors",description:"You use CSS classes to define the local name of internal component parts. For example, you can define a .button in a menu component.",source:"@site/docs/references/class-selectors.md",slug:"/references/class-selectors",permalink:"/stylable.io/docs/references/class-selectors",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/references/class-selectors.md",version:"current",sidebar_label:"Class Selectors",sidebar:"someSidebar",previous:{title:"Root",permalink:"/stylable.io/docs/references/root"},next:{title:"CSS Tag/Component Selector",permalink:"/stylable.io/docs/references/tag-selectors"}},l=[{value:"Class selector export",id:"class-selector-export",children:[{value:"Example",id:"example",children:[]}]},{value:"Usage",id:"usage",children:[]}],i={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You use ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors"},"CSS classes")," to define the local name of internal component parts. For example, you can define a ",Object(o.b)("inlineCode",{parentName:"p"},".button")," in a menu component."),Object(o.b)("p",null,"In ",Object(o.b)("strong",{parentName:"p"},"Stylable"),", class selectors are scoped to the ",Object(o.b)("a",{parentName:"p",href:"/stylable.io/docs/references/namespace"},"namespace")," of the stylesheet. "),Object(o.b)("p",null,"You should use camelCase to name class selectors. Avoid using hyphens (-) and capital first letters."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},'@namespace "Page";\n.root:hover .thumbnail { background:red; }\n.thumbnail { background:green; }\n.thumbnail:hover { background:blue; }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.Page__root:hover .Page__thumbnail { background:red; }\n.Page__thumbnail { background:green;}\n.Page__thumbnail:hover { background:blue; }\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"/* comp.jsx */\nimport React from 'react';\nimport { style, classes } from './comp.st.css';\n\nclass Comp extends React.Component {\n    render () {\n        return (\n            <div className={style(classes.root, {}, this.props)}>\n                <img className={style.thumbnail} />\n            </div>\n        )\n    };\n}\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In ",Object(o.b)("strong",{parentName:"p"},"Stylable"),", as you can see in these examples, ",Object(o.b)("inlineCode",{parentName:"p"},".root")," as a class name is reserved for the main ",Object(o.b)("a",{parentName:"p",href:"/stylable.io/docs/references/root"},"root"),".",Object(o.b)("br",{parentName:"p"}),"\n","CSS classes can also define ",Object(o.b)("a",{parentName:"p",href:"./pseudo-classes"},"states")," and ",Object(o.b)("a",{parentName:"p",href:"/stylable.io/docs/references/extend-stylesheet"},"extend another component"),"."))),Object(o.b)("h2",{id:"class-selector-export"},"Class selector export"),Object(o.b)("p",null,"Any class defined in a ",Object(o.b)("strong",{parentName:"p"},"Stylable")," stylesheet is exported as a named export and can be imported by other stylesheets using the directive ",Object(o.b)("inlineCode",{parentName:"p"},"-st-named"),". These classes are also imported using the ",Object(o.b)("a",{parentName:"p",href:"/stylable.io/docs/getting-started/react-integration"},"react-integration")," and applied to the DOM as needed."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Classes imported this way should be scoped to your local stylesheet by adding ",Object(o.b)("inlineCode",{parentName:"p"},".root")," or a local class as a prefix to the selector. Adding the scoping causes the selector to affect only the rendering subtree from this point onwards. If classes are imported without scoping to your local stylesheet, this may cause unexpected effects throughout your project."))),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},'/* button.st.css */\n@namespace "Button";\n.root { background:green; }\n.icon { border: 2px solid black; } \n.label { font-size: 20px; } \n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},"/* form.st.css */\n@namespace \"Form\";\n:import {\n    -st-from: './button.st.css';\n    -st-named: icon, label; \n}\n\n/* @selector .Form__myIcon.Button__icon */\n.myIcon { \n    -st-extends: icon; \n}\n\n/* @selector .Form__root .Button__icon */\n.root .icon {}\n\n/* @selector .Form__label.Button__label */\n.label {\n    -st-extends: label;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},'/* \n    JavaScript runtime exports:\n    {\n        root: "Form__root",\n        myIcon: "Form__myIcon Button__icon",\n        icon: "Button__icon",\n        label: "Form__label Button__label"\n    }\n*/\n')),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/stylable.io/docs/references/pseudo-elements"},"Style pseudo-elements")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/stylable.io/docs/references/mixins"},"Use CSS mixins"))))}p.isMDXComponent=!0}}]);