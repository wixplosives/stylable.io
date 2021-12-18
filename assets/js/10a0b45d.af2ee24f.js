"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[6629],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=l,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9301:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),a=["components"],o={id:"stylable-intelligence",title:"Stylable Intelligence"},s=void 0,c={unversionedId:"getting-started/stylable-intelligence",id:"getting-started/stylable-intelligence",title:"Stylable Intelligence",description:"Stylable Intelligence is an extension implementing the Language Server Protocol that provides IDE support for Stylable. It currently includes:",source:"@site/docs/getting-started/stylable-intelligence.md",sourceDirName:"getting-started",slug:"/getting-started/stylable-intelligence",permalink:"/docs/getting-started/stylable-intelligence",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/getting-started/stylable-intelligence.md",tags:[],version:"current",frontMatter:{id:"stylable-intelligence",title:"Stylable Intelligence"},sidebar:"Discover",previous:{title:"NextJS Integration",permalink:"/docs/getting-started/nextjs-integration"}},u=[{value:"Installation",id:"installation",children:[],level:2},{value:"IDE extensions",id:"ide-extensions",children:[],level:2},{value:"CSS functionality",id:"css-functionality",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Stylable Intelligence")," is an extension implementing the Language Server Protocol that provides IDE support for ",(0,i.kt)("strong",{parentName:"p"},"Stylable"),". It currently includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Code completion "),(0,i.kt)("li",{parentName:"ul"},"Diagnostics")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"You can install ",(0,i.kt)("strong",{parentName:"p"},"Stylable Intelligence")," from the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=wix.stylable-intelligence"},"Visual Studio Code market"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In your VSC window, click the ",(0,i.kt)("strong",{parentName:"li"},"Extensions")," icon to open the market."),(0,i.kt)("li",{parentName:"ul"},"In the search field, enter ",(0,i.kt)("strong",{parentName:"li"},"Stylable Intelligence"),". "),(0,i.kt)("li",{parentName:"ul"},"Install and reload the window when prompted.")),(0,i.kt)("h2",{id:"ide-extensions"},"IDE extensions"),(0,i.kt)("p",null,"Because stylable-intelligence registers ",(0,i.kt)("inlineCode",{parentName:"p"},".st.css")," files as Stylable and not CSS, certain CSS extensions may not work until they explicitly add Stylable support. The stylable-intelligence extension for VSCode is compatible with the following CSS extensions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kisstkondoros/csstriggers"},"CssTriggers"),"(^0.4.0) - A VSCode extension which adds inline decoration to css properties to indicate their costs.")),(0,i.kt)("p",null,"If you are using an extension that you would like to add to this list, let us know and we're happy to help."),(0,i.kt)("h2",{id:"css-functionality"},"CSS functionality"),(0,i.kt)("p",null,"Because Stylable files are not recognized as CSS, we proxy the CSS Language Server through stylable-intelligence. Most basic features are already supported, but if you notice anything strange, let us know."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Future plans include:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"More Language Server features. "),(0,i.kt)("li",{parentName:"ul"},"Support for JetBrains IDEs (WebStorm, IntelliJ). Currently supported only in VSCode (version 1.16 and later).")))))}d.isMDXComponent=!0}}]);