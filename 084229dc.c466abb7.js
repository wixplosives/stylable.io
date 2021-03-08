(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,s(s({ref:t},i),{},{components:n})):a.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(127)),c={id:"global-selectors",title:"Global Selectors"},s={unversionedId:"references/global-selectors",id:"references/global-selectors",isDocsHomePage:!1,title:"Global Selectors",description:"In Stylable, selectors are scoped to the stylesheet. But what if you want to target global or other selectors that are not scoped? You can use the :global() directive selector.",source:"@site/docs/references/global-selectors.md",slug:"/references/global-selectors",permalink:"/docs/references/global-selectors",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/references/global-selectors.md",version:"current",sidebar:"Specification Reference",previous:{title:"Pseudo-Elements",permalink:"/docs/references/pseudo-elements"},next:{title:"Custom Selectors",permalink:"/docs/references/custom-selectors"}},l=[],i={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In ",Object(o.b)("strong",{parentName:"p"},"Stylable"),", selectors are scoped to the stylesheet. But what if you want to target global or other selectors that are not scoped? You can use the ",Object(o.b)("inlineCode",{parentName:"p"},":global()")," directive selector. "),Object(o.b)("p",null,"In this example ",Object(o.b)("inlineCode",{parentName:"p"},".classB")," and ",Object(o.b)("inlineCode",{parentName:"p"},".classC")," are not scoped to ",Object(o.b)("inlineCode",{parentName:"p"},"Comp")," but are part of the selector query."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},'@namespace "Comp";\n.classA :global(.classB > .classC) .classD:hover {\n    color: red;\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.Comp__classA .classB > .classC .Comp__classD:hover {\n    color: red;\n}\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can also use global to keep pseudo-classes native. You can describe them using the syntax below where ",Object(o.b)("inlineCode",{parentName:"p"},"classA")," is scoped and ",Object(o.b)("inlineCode",{parentName:"p"},":selected")," is native."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-css"},".classA:global(:selected) {\n    color: red;\n}\n")))))}p.isMDXComponent=!0}}]);