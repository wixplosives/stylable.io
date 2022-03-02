"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[7876],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4638:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"intro",title:"Intro"},s=void 0,p={unversionedId:"getting-started/intro",id:"getting-started/intro",title:"Intro",description:"What is Stylable",source:"@site/docs/getting-started/get-started.md",sourceDirName:"getting-started",slug:"/getting-started/intro",permalink:"/docs/getting-started/intro",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/getting-started/get-started.md",tags:[],version:"current",frontMatter:{id:"intro",title:"Intro"},sidebar:"Discover",next:{title:"Installation",permalink:"/docs/getting-started/install-configure"}},c={},u=[{value:"What is Stylable",id:"what-is-stylable",level:2},{value:"How do I install",id:"how-do-i-install",level:2},{value:"What can I do",id:"what-can-i-do",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-stylable"},"What is Stylable"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Stylable")," is a CSS preprocessor that enables you to write reusable, highly-performant, styled components. Each component exposes a style API that maps its internal parts so you can reuse components across teams without sacrificing stylability."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Scopes styles to components so they don\'t "leak" and clash with other styles.'),(0,o.kt)("li",{parentName:"ul"},"Enables custom pseudo-classes and pseudo-elements that abstract the internal structure of a component. These can then be styled externally.")),(0,o.kt)("p",null,"At build time, the preprocessor converts the ",(0,o.kt)("strong",{parentName:"p"},"Stylable")," CSS into flat, static, valid, vanilla CSS that works cross-browser."),(0,o.kt)("h2",{id:"how-do-i-install"},"How do I install"),(0,o.kt)("p",null,"There are currently two options for installing and working with ",(0,o.kt)("strong",{parentName:"p"},"Stylable"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To begin writing your own project, you can ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/install-configure"},"create a ",(0,o.kt)("strong",{parentName:"a"},"Stylable")," app")," from our boilerplate. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To work with an existing project, you can install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/stylable"},"stylable")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/stylable/tree/master/packages/webpack-plugin"},"@stylable/webpack-plugin")," packages from GitHub. "),(0,o.kt)("p",{parentName:"li"},"While ",(0,o.kt)("strong",{parentName:"p"},"Stylable")," can work with any component framework, we offer a ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/react-integration"},"React component integration")," that works with both installation options. If you're a Vue.js fan, here's an example of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix-playground/stylable-vue-example"},"Vue and Stylable")," working together."))),(0,o.kt)("p",null,"Optionally, you can install ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/stylable-intelligence"},(0,o.kt)("strong",{parentName:"a"},"Stylable Intelligence")),", an extension providing IDE support for code completion and diagnostics. Currently supported for only Visual Studio Code (version 1.18 and later)."),(0,o.kt)("h2",{id:"what-can-i-do"},"What can I do"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Build a Stylable component")," - If you are looking to style a component, follow the steps in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/components-basics"},"Stylable Basics Guide")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/component-best-practices"},"Best Practices Guide"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Build an app")," - If you want to use ",(0,o.kt)("strong",{parentName:"p"},"Stylable")," while building a web application, go to ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/stylable-application"},"Build a Stylable Application"),". Read the steps and recommendations for building a performant web application that doesn't depend on other libraries for styling.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create a library")," - If you want guidance in creating a component library, read ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/stylable-component-library"},"Create a Stylable Component Library"),". Here you can follow our recommendations for building a library that can be used cross-project and includes theming, external styling and reusable components.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Learn")," - Take a look at our ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/cheatsheet"},"specification reference documents")," to get more acquanted with our code and for specific code examples. Use the overview as a cheatsheet to help you keep track of ",(0,o.kt)("strong",{parentName:"p"},"Stylable")," syntax."))))}m.isMDXComponent=!0}}]);