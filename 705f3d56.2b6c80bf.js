(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=s.a.createContext({}),u=function(e){var t=s.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},f=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||a;return n?s.a.createElement(b,i(i({ref:t},c),{},{components:n})):s.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),s=n(7),a=(n(0),n(127)),o={id:"using-external-assets",title:"Using External Assets"},i={unversionedId:"references/using-external-assets",id:"references/using-external-assets",isDocsHomePage:!1,title:"Using External Assets",description:"Stylable supports usage of url functions to use assets as you normally would in CSS.",source:"@site/docs/references/using-external-assets.md",slug:"/references/using-external-assets",permalink:"/stylable.io/docs/references/using-external-assets",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/references/using-external-assets.md",version:"current",sidebar:"someSidebar",previous:{title:"Namespace",permalink:"/stylable.io/docs/references/namespace"},next:{title:"Keyframes",permalink:"/stylable.io/docs/references/keyframes"}},l=[{value:"Resolving 3rd-party assets",id:"resolving-3rd-party-assets",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Stylable supports usage of ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/url()"},"url functions")," to use assets as you normally would in CSS."),Object(a.b)("p",null,"The value passed to the ",Object(a.b)("inlineCode",{parentName:"p"},"url()")," function is resolved differently in CSS as comapred to the Node request resolution algorithm, used for Stylable stylesheet and symbol resolutions."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"url()")," function has no notion of external packages or dependencies."),Object(a.b)("h3",{id:"resolving-3rd-party-assets"},"Resolving 3rd-party assets"),Object(a.b)("p",null,"In order to import ",Object(a.b)("inlineCode",{parentName:"p"},"url()")," assets from dependencies inside your ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," directory, Stylable supports the ",Object(a.b)("inlineCode",{parentName:"p"},"~")," URL prefix."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},'.root {\n  /* resolves as the node request: "my-package/asset.png" */\n  background: url(~my-package/asset.png);\n}\n\n.root {\n  /* resolves as the node request: "./my-package/asset.png" */\n  background: url(my-package/asset.png);\n}\n')))}u.isMDXComponent=!0}}]);