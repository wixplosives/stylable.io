"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[7377],{701:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"references/programmatic-api","title":"Programmatic API","description":"Stylable instance","source":"@site/docs/references/programmatic-api.mdx","sourceDirName":"references","slug":"/references/programmatic-api","permalink":"/docs/references/programmatic-api","draft":false,"unlisted":false,"editUrl":"https://github.com/wixplosives/stylable.io/edit/master/docs/references/programmatic-api.mdx","tags":[],"version":"current","frontMatter":{"id":"programmatic-api","title":"Programmatic API"},"sidebar":"Specification Reference","previous":{"title":"Runtime","permalink":"/docs/references/runtime"}}');var s=r(4848),l=r(8453),a=r(9489),i=r(7227),o=r(2250);const c={id:"programmatic-api",title:"Programmatic API"},d=void 0,u={},h=[{value:"Stylable instance",id:"stylable-instance",level:2},{value:"Configuration",id:"configuration",level:3},{value:"<code>MinimalFS</code>",id:"minimalfs",level:3},{value:"<code>ResolveNamespace</code>",id:"resolvenamespace",level:3},{value:"Basic example",id:"basic-example",level:4},{value:"<code>ModuleResolver</code>",id:"moduleresolver",level:3},{value:"<code>RequireModule</code>",id:"requiremodule",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"stylable-instance",children:"Stylable instance"}),"\n",(0,s.jsx)(n.p,{children:"Stylable is usually consumed through one of its available integration, for more specific or advanced use-cases, the programmatic API can be used for greater control on how Stylable operates."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The APIs described here are treated as stable, and available for use. Any other API exposed by Stylable not described here may changed, and should not be dependant on."})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Stylable"})," class provided from ",(0,s.jsx)(n.code,{children:"@stylable/core"})," requires configuration to initialize."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="Initialize Stylable instance"',children:"import fs from 'node:fs';\nimport { Stylable } from '@stylable/core';\n\n// minimal required configuration\nStylable({ fs, projectRoot: __dirname });\n"})}),"\n","\n",(0,s.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"fs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#minimalfs",children:(0,s.jsx)(n.code,{children:"MinimalFS"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"required"})}),(0,s.jsx)(n.td,{children:"Filesystem instance to use"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"projectRoot"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"required"})}),(0,s.jsx)(n.td,{children:"The project root directory path"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"mode"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"production"'})}),(0,s.jsx)(n.td,{children:"Development or production mode"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"resolveNamespace"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#resolvenamespace",children:(0,s.jsx)(n.code,{children:"ResolveNamespace"})})}),(0,s.jsx)(n.td,{children:"default resolver depends on running context"}),(0,s.jsx)(n.td,{children:"Function to determine namespacing"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"resolveModule"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#moduleresolver",children:(0,s.jsx)(n.code,{children:"ModuleResolver"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/webpack/enhanced-resolve",children:(0,s.jsx)(n.code,{children:"enhanced-resolve"})})}),(0,s.jsxs)(n.td,{children:["Module resolver to be used for all import paths and ",(0,s.jsx)(n.code,{children:"url()"})," requests"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"resolveOptions"})}),(0,s.jsx)(n.td,{children:(0,s.jsxs)(o.A,{className:"inline-code",children:[(0,s.jsx)("br",{})," alias?: any;",(0,s.jsx)("br",{})," symlinks?: boolean;",(0,s.jsx)("br",{})]})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(o.A,{className:"inline-code",children:"{}"})}),(0,s.jsxs)(n.td,{children:["Options that are passed to the ",(0,s.jsx)(n.strong,{children:"default"})," module resolver"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"requrieModule"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#requiremodule",children:(0,s.jsx)(n.code,{children:"RequireModule"})})}),(0,s.jsx)(n.td,{children:"none"}),(0,s.jsx)(n.td,{children:"Require module that receives a path, and attempts to return a module"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"minimalfs",children:(0,s.jsx)(n.code,{children:"MinimalFS"})}),"\n",(0,s.jsx)(n.p,{children:"Stylable minimal required file system interface:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="MinimalFS interface"',children:"interface MinimalFS {\n  statSync: (filePath: string) => { mtime: Date };\n  readFileSync: (filePath: string, encoding: 'utf8') => string;\n  readlinkSync: (filePath: string) => string;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"resolvenamespace",children:(0,s.jsx)(n.code,{children:"ResolveNamespace"})}),"\n",(0,s.jsx)(n.p,{children:"Provide exact control of the namespacing mechanism by providing a function that accepts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"namespace"})," - a stylesheet source namespace - determined by the ",(0,s.jsx)(n.code,{children:"@st-namespace"})," if exists, and falls back to the filename"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"origin"})," - an origin path - path to the source stylesheet"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'This function will then return a string to be used as the "namespace" for stylesheet definitions.'}),"\n",(0,s.jsx)(n.h4,{id:"basic-example",children:"Basic example"}),"\n",(0,s.jsx)(n.p,{children:"An example for a basic namespace resolver, that generates unique verbose namespaces based on the component namespace and origin path of the stylesheet."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="Resolve namespace example"',children:"const resolveNamespace: ResolveNamespace = (namespace: string, origin: string): string {\n    return namespace + hash(origin);\n}\n"})}),"\n","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="comp.st.css"',children:".root {}\n\n/* OUTPUT */\n.comp1169059893__root {}\n"})}),"\n","\n",(0,s.jsx)(n.h3,{id:"moduleresolver",children:(0,s.jsx)(n.code,{children:"ModuleResolver"})}),"\n",(0,s.jsx)(n.p,{children:"Override Stylable's default module resolver, to control path resolution according to your projects' needs."}),"\n",(0,s.jsx)(n.p,{children:"The default module resolver is a function that accepts two arguments:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"directoryPath"})," - the directory path to resolve from"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"request"})," - the module request to resolve"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const fs = require('node:fs');\nconst { createDefaultResolver, Stylable } = require('@stylable/core');\n\nconst defaultResolver = createDefaultResolver(fs);\nconst stylable = new Stylable({\n  projectRoot: 'path/to/project/root',\n  filesystem: fs,\n  resolveModule: (directoryPath, request) => {\n    if (request.startsWith('my-custom-module')) {\n      return '/path/to/my-custom-module';\n    }\n\n    return defaultResolver(directoryPath, request);\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"requiremodule",children:(0,s.jsx)(n.code,{children:"RequireModule"})}),"\n",(0,s.jsxs)(n.p,{children:["Defines a function to require imported JavaScript modules from a path, used when a JavaScript ",(0,s.jsx)(n.a,{href:"./mixins#javascript-mixins",children:"Mixins"})," or ",(0,s.jsx)(n.a,{href:"./formatters",children:"Formatters"})," is used within a Stylable stylesheet."]}),"\n","\n",(0,s.jsxs)(a.A,{groupId:"runtimeEnv",children:[(0,s.jsx)(i.A,{value:"nodejs",label:"NodeJS",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const fs = require('node:fs');\nconst { Stylable } = require('@stylable/core');\n\nconst stylable = new Stylable({\n    projectRoot: 'path/to/project/root',\n    filesystem: fs,\n    requireModule: require\n})\n"})})}),(0,s.jsx)(i.A,{value:"memoryfs",label:"Memory FS",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const { Stylable } = require('@stylable/core');\n\nconst stylable = new Stylable({\n    projectRoot: 'path/to/project/root',\n    filesystem: memoryFS,\n    requireModule(path: string) {\n        const _module = {\n            id,\n            exports: {},\n        };\n        try {\n            // create a module evaluation function\n            const fn = new Function(\n                'module',\n                'exports',\n                'require',\n                fs.readFileSync(id, { encoding: 'utf8', flag: 'r' })\n            );\n            // evaluate the module\n            fn(_module, _module.exports, requireModule);\n        } catch (e) { \n            throw new Error('Cannot require file: ' + id + 'reason: ' + e.message);\n        }\n        return _module.exports;\n    }\n})\n"})})})]}),"\n"]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},7227:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var l=r(4848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:r,children:n})}},9489:(e,n,r)=>{r.d(n,{A:()=>S});var t=r(6540),s=r(4164),l=r(4245),a=r(6347),i=r(6494),o=r(2814),c=r(5167),d=r(9900);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,l=h(e),[a,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,u]=p({queryString:r,groupId:s}),[x,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),j=(()=>{const e=c??x;return m({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=r(1062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),s=i[r].value;s!==t&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,s.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:l}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(g,{...n,...e})]})}function S(e){const n=(0,f.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}}}]);