"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[6921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,g=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"nextjs-integration",title:"NextJS"},o=void 0,l={unversionedId:"getting-started/nextjs-integration",id:"getting-started/nextjs-integration",title:"NextJS",description:"There are few steps you need to follow to integrate Stylable in your NextJS project.",source:"@site/docs/getting-started/nextjs-integration.md",sourceDirName:"getting-started",slug:"/getting-started/nextjs-integration",permalink:"/docs/getting-started/nextjs-integration",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/getting-started/nextjs-integration.md",tags:[],version:"current",frontMatter:{id:"nextjs-integration",title:"NextJS"},sidebar:"Discover",previous:{title:"Storybook",permalink:"/docs/getting-started/storybook-integration"}},s={},p=[{value:"Example Configuration:",id:"example-configuration",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are few steps you need to follow to integrate Stylable in your NextJS project."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"next.config.js")," file"),(0,a.kt)("li",{parentName:"ol"},"Use the NextJS webpack 5 future flag"),(0,a.kt)("li",{parentName:"ol"},"Exclude other CSS loaders from loading Stylable (","*",".st.css) files"),(0,a.kt)("li",{parentName:"ol"},"Add the Stylable plugin to the webpack configuration")),(0,a.kt)("h3",{id:"example-configuration"},"Example Configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// next.config.js\nconst {\n  StylableWebpackPlugin,\n  applyWebpackConfigStylableExcludes,\n} = require("@stylable/webpack-plugin");\n\n/* single optimizer for NextJS multiple builds in order to sync client/server namespaces */\nconst StylableOptimizer = require("@stylable/optimizer").StylableOptimizer;\nconst stylableOptimizer = new StylableOptimizer();\n\nmodule.exports = {\n  future: {\n    webpack5: true,\n  },\n  webpack: (config) => {\n    /* exclude Stylable files from all other loaders */\n    applyWebpackConfigStylableExcludes(config);\n\n    /* add the Stylable plugin to the webpack configuration */\n    config.plugins.push(\n      new StylableWebpackPlugin({\n        /* let NextJS handle assets */\n        filterAssets: () => false,\n\n        /* output CSS to the correct location */\n        filename: "static/css/stylable.[contenthash].css",\n\n        /* a shared optimizer instance */\n        optimizer: stylableOptimizer,\n      })\n    );\n    return config;\n  },\n};\n')),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"applyWebpackConfigStylableExcludes")," export and ",(0,a.kt)("inlineCode",{parentName:"p"},"filterAssets")," flag are available in ",(0,a.kt)("inlineCode",{parentName:"p"},"@stylable/webpack-plugin")," version ",(0,a.kt)("inlineCode",{parentName:"p"},"4.2.2")," and onwards.")))}u.isMDXComponent=!0}}]);