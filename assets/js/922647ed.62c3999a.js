"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[7373],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,b=u["".concat(p,".").concat(d)]||u[d]||g[d]||l;return n?a.createElement(b,i(i({ref:t},s),{},{components:n})):a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const l={id:"webpack-integration",title:"Webpack"},i=void 0,o={unversionedId:"getting-started/webpack-integration",id:"getting-started/webpack-integration",title:"Webpack",description:"The Stylable Webpack integration provides development, build, and bundle capabilities.",source:"@site/docs/getting-started/webpack-integration.md",sourceDirName:"getting-started",slug:"/getting-started/webpack-integration",permalink:"/docs/getting-started/webpack-integration",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/getting-started/webpack-integration.md",tags:[],version:"current",frontMatter:{id:"webpack-integration",title:"Webpack"},sidebar:"Discover",previous:{title:"TypeScript",permalink:"/docs/getting-started/typescript-integration"}},p={},c=[{value:"Install",id:"install",level:2},{value:"Configuration",id:"configuration",level:2},{value:"With another CSS solution",id:"with-another-css-solution",level:3},{value:"<code>stylable.config.js</code>",id:"stylableconfigjs",level:3}],s={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Stylable Webpack integration provides development, build, and bundle capabilities."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("strong",{parentName:"p"},"@stylable/webpack-plugin")," as a dev dependency in your local project."),(0,r.kt)("p",null,"Using npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @stylable/webpack-plugin --save-dev\n")),(0,r.kt)("p",null,"Using Yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @stylable/webpack-plugin --dev\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config"),", add the ",(0,r.kt)("inlineCode",{parentName:"p"},"StylableWebpackPlugin")," to set up Stylable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');\n\n// webpack config\n{\n  plugins: [new StylableWebpackPlugin()],\n}\n")),(0,r.kt)("p",null,"For more information on configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"@stylable/webpack-plugin"),", see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/stylable/tree/master/packages/webpack-plugin"},"readme file"),"."),(0,r.kt)("h3",{id:"with-another-css-solution"},"With another CSS solution"),(0,r.kt)("p",null,"When coming into a project with an existing Webpack CSS integration, you will need to exclude ",(0,r.kt)("inlineCode",{parentName:"p"},".st.css")," files from any other integration."),(0,r.kt)("p",null,"For example, to exclude Stylable from ",(0,r.kt)("inlineCode",{parentName:"p"},"css-loader"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{11}","{11}":!0},"const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');\n\n{\n  plugins: [\n    new StylableWebpackPlugin()\n  ],\n  module: {\n    rules: [\n      {\n        test: /\\.css$/i,\n        exclude: /\\.st\\.css?/,\n        use: [\"css-loader\"],\n      },\n    ],\n  },\n}\n")),(0,r.kt)("h3",{id:"stylableconfigjs"},(0,r.kt)("inlineCode",{parentName:"h3"},"stylable.config.js")),(0,r.kt)("p",null,"Adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"webpackPlugin")," export field to the ",(0,r.kt)("a",{parentName:"p",href:"./stylable-config"},(0,r.kt)("inlineCode",{parentName:"a"},"stylable.config.js"))," will set as the default configuration for any Stylable Webpack plugins in the project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports.webpackPlugin = function (config) {\n  return {\n    ...config,\n    optimize: {\n      shortNamespaces: true,\n      minify: true,\n    },\n  };\n};\n")))}g.isMDXComponent=!0}}]);