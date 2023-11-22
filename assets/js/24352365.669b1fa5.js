"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[9480],{6295:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=o(5893),i=o(1151);const s={id:"storybook-integration",title:"Storybook"},r=void 0,l={id:"getting-started/storybook-integration",title:"Storybook",description:"To integrate Stylable with Storybook, you need to do two things:",source:"@site/docs/getting-started/storybook-integration.md",sourceDirName:"getting-started",slug:"/getting-started/storybook-integration",permalink:"/docs/getting-started/storybook-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/getting-started/storybook-integration.md",tags:[],version:"current",frontMatter:{id:"storybook-integration",title:"Storybook"},sidebar:"Discover",previous:{title:"Rollup",permalink:"/docs/getting-started/rollup-integration"},next:{title:"TypeScript",permalink:"/docs/getting-started/typescript-integration"}},a={},c=[];function d(t){const e={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"To integrate Stylable with Storybook, you need to do two things:"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Exclude Stylable files (",(0,n.jsx)(e.code,{children:"*.st.css"}),") from all other existing CSS loaders."]}),"\n",(0,n.jsxs)(e.li,{children:["Add ",(0,n.jsx)(e.code,{children:"StylableWebpackPlugin"})," to the webpack configuration."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Add the following snippit to your Storybook webpack configuration to get these two actions done:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-js",children:"const {\n    StylableWebpackPlugin,\n    applyWebpackConfigStylableExcludes\n} = require('@stylable/webpack-plugin');\n\nmodule.exports = {\n    stories: ...,\n    addons: ...,\n    webpackFinal: (config) => {\n        /* find all css loaders and add exclude .st.css files from them */\n        applyWebpackConfigStylableExcludes(config);\n\n        /* inject StylableWebpackPlugin */\n        config.plugins.push(new StylableWebpackPlugin());\n        return config;\n    }\n}\n"})}),"\n",(0,n.jsx)(e.admonition,{type:"caution",children:(0,n.jsx)(e.p,{children:"This snippet should work with default Storybook configuration. It assumes some things about the structure of the file which might not be true in future releases of Storybook."})})]})}function u(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},1151:(t,e,o)=>{o.d(e,{Z:()=>l,a:()=>r});var n=o(7294);const i={},s=n.createContext(i);function r(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);