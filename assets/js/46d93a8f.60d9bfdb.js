"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[734],{9445:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"guides/ssr","title":"Supporting Server Side Rendering","description":"Server side rendering (SSR) is an approach to serving JavaScript rendered web applications (such as React, Vue, Angular, etc...) that tries to improve time-to-paint, SEO support and more.","source":"@site/docs/guides/server-side-rendering.md","sourceDirName":"guides","slug":"/guides/ssr","permalink":"/docs/guides/ssr","draft":false,"unlisted":false,"editUrl":"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/server-side-rendering.md","tags":[],"version":"current","frontMatter":{"id":"ssr","title":"Supporting Server Side Rendering","sidebar_label":"Server Side Rendering"},"sidebar":"Guides","previous":{"title":"Component Variants","permalink":"/docs/guides/component-variants"},"next":{"title":"Stylable v3","permalink":"/docs/guides/migration-v3"}}');var r=n(4848),i=n(8453);const o={id:"ssr",title:"Supporting Server Side Rendering",sidebar_label:"Server Side Rendering"},a=void 0,l={},c=[{value:"Transforming Stylable in the Server",id:"transforming-stylable-in-the-server",level:2},{value:"Matching namespaces",id:"matching-namespaces",level:2},{value:"Supporting multiple transpilation targets",id:"supporting-multiple-transpilation-targets",level:3},{value:"Publishing SSR-ready source files (<code>*.st.css</code>)",id:"publishing-ssr-ready-source-files-stcss",level:3}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Server side rendering (SSR) is an approach to serving JavaScript rendered web applications (such as React, Vue, Angular, etc...) that tries to improve time-to-paint, SEO support and more."}),"\n",(0,r.jsxs)(s.p,{children:["To learn more about SSR - see this ",(0,r.jsx)(s.a,{href:"https://dev.to/sunnysingh/the-benefits-and-origins-of-server-side-rendering-4doh",children:"introduction post"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"When creating your library / application you will see that you might need to make some changes to your project publish / consumption process in order to integrate Stylable to your SSR flow."}),"\n",(0,r.jsx)(s.h2,{id:"transforming-stylable-in-the-server",children:"Transforming Stylable in the Server"}),"\n",(0,r.jsxs)(s.p,{children:["In order to use Stylable imports from your source files in ",(0,r.jsx)(s.code,{children:"nodeJS"}),", you will need to add ",(0,r.jsx)(s.code,{children:"@stylable/node"})," as a dependency."]}),"\n",(0,r.jsxs)(s.p,{children:["Import and use its ",(0,r.jsx)(s.code,{children:"requireHook"})," method before rendering to enable requiring Stylable stylesheets in their ",(0,r.jsx)(s.code,{children:"CommonJS"})," module format."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// server.js\nconst { attachHook } = require('@stylable/node');\n\nattachHook(); // enables requiring .st.css files as CommonJS\n\n// < render application ... >\n"})}),"\n",(0,r.jsx)(s.h2,{id:"matching-namespaces",children:"Matching namespaces"}),"\n",(0,r.jsxs)(s.p,{children:["In order to ensure full SSR compatibility, ",(0,r.jsx)(s.strong,{children:"generated namespaces for all stylesheets must match exactly"})," across all different build targets."]}),"\n",(0,r.jsxs)(s.p,{children:["The default Stylable ",(0,r.jsx)(s.code,{children:"namespaceResolver"})," uses a combination of file-system path, name and version from the ",(0,r.jsx)(s.code,{children:"package.json"})," file to create its namespace. This means that namespaces can be influenced by the published file path structure."]}),"\n",(0,r.jsx)(s.p,{children:"If you choose to provide an alternative namespace resolver that does not depend on file paths as part of its namespace creation, then you can avoid the problem described below."}),"\n",(0,r.jsx)(s.h3,{id:"supporting-multiple-transpilation-targets",children:"Supporting multiple transpilation targets"}),"\n",(0,r.jsx)(s.p,{children:"When building a library or application for consumption in both client and server environments it is common to output multiple transpilation targets for various module systems."}),"\n",(0,r.jsxs)(s.p,{children:["This means that a published project will usually have both ",(0,r.jsx)(s.code,{children:"CommonJS"})," and ",(0,r.jsx)(s.code,{children:"ES modules"}),", each with their own transpiled copy of the project, including the Stylable assets."]}),"\n",(0,r.jsx)(s.p,{children:"This can pose a problem when trying to synchronize namespace creation for SSR."}),"\n",(0,r.jsxs)(s.h3,{id:"publishing-ssr-ready-source-files-stcss",children:["Publishing SSR-ready source files (",(0,r.jsx)(s.code,{children:"*.st.css"}),")"]}),"\n",(0,r.jsxs)(s.p,{children:["The Stylable CLI offers a feature that allows you to sync your namespace across dist targets by inserting a custom header comment to the start of your ",(0,r.jsx)(s.code,{children:".st.css"})," file. This header comment is used to normalize namespacing paths across different build targets."]}),"\n",(0,r.jsxs)(s.p,{children:["When using ",(0,r.jsx)(s.code,{children:"@stylable/cli"})," to publish your source stylesheets, use the ",(0,r.jsx)(s.code,{children:"useNamespaceReference"})," flag to mark all targets as originating from the same original source."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"stc --srcDir ./src --outDir ./dist/cjs --cjs --stcss --useNamespaceReference\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"stc --srcDir ./src --outDir ./dist/esm --esm --stcss --useNamespaceReference\n"})}),"\n",(0,r.jsx)(s.p,{children:"For this to work properly, your source folder must be published along with your distribution build targets."})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(6540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);