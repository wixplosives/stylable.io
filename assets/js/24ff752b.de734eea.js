"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[5143],{5852:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=n(5893),t=n(1151);const l={id:"migration-v5",title:"Stylable v5"},o=void 0,d={id:"guides/migration-v5",title:"Stylable v5",description:"The purpose of this document is to help migrate projects using Stylable to v5.",source:"@site/docs/guides/migration-v5.md",sourceDirName:"guides",slug:"/guides/migration-v5",permalink:"/docs/guides/migration-v5",draft:!1,unlisted:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/migration-v5.md",tags:[],version:"current",frontMatter:{id:"migration-v5",title:"Stylable v5"},sidebar:"Guides",previous:{title:"Stylable v3",permalink:"/docs/guides/migration-v3"}},a={},c=[{value:"<code>@stylable/core</code>",id:"stylablecore",level:2},{value:"Diagnostics overhaul",id:"diagnostics-overhaul",level:3},{value:"Reducing public facing APIs",id:"reducing-public-facing-apis",level:3},{value:"API changes",id:"api-changes",level:4},{value:"Missing APIs?",id:"missing-apis",level:4},{value:"<code>@stylable/cli</code>",id:"stylablecli",level:2},{value:"Default arguments changed",id:"default-arguments-changed",level:3},{value:"Build index file and other outputs simultaneously",id:"build-index-file-and-other-outputs-simultaneously",level:3}];function r(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The purpose of this document is to help migrate projects using Stylable to ",(0,i.jsx)(s.code,{children:"v5"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["We have taken the opportunity of node dropping LTS support for ",(0,i.jsx)(s.code,{children:"v12"})," and we have decided to include a number of additional breaking changes to the ",(0,i.jsx)(s.code,{children:"v5"})," release. These changes are primarily to the programmatic API of Stylable and not to user facing features, syntax or integrations."]}),"\n",(0,i.jsxs)(s.p,{children:["You can find the plan for this major version ",(0,i.jsx)(s.a,{href:"https://github.com/wix/stylable/issues/2410",children:"here"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"stylablecore",children:(0,i.jsx)(s.code,{children:"@stylable/core"})}),"\n",(0,i.jsx)(s.h3,{id:"diagnostics-overhaul",children:"Diagnostics overhaul"}),"\n",(0,i.jsxs)(s.p,{children:["All diagnostics in ",(0,i.jsx)(s.code,{children:"@stylable/core"})," had diagnostics code added, and were reviewed for consistency. Many diagnostics have had their severity increased to ",(0,i.jsx)(s.code,{children:"error"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"We plan on starting to map out the diagnostics in this site to help users understand what they are seeing, and why it happened."}),"\n",(0,i.jsx)(s.h3,{id:"reducing-public-facing-apis",children:"Reducing public facing APIs"}),"\n",(0,i.jsx)(s.p,{children:"In the past, Stylable exposed all of its functionalities as public facing APIs. Over time, this has proven difficult to maintain and develop further, and so we have decided to limit what Stylable exposes, and to segment its APIs under a few different namespaces."}),"\n",(0,i.jsxs)(s.p,{children:["In addition, most APIs have been refactored to match our new ",(0,i.jsx)(s.a,{href:"https://github.com/wix/stylable/wiki/Programmatic-API",children:"programmatic API model"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"api-changes",children:"API changes"}),"\n",(0,i.jsx)(s.p,{children:"The following APIs have been changed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"StylableMeta"})," renamed ",(0,i.jsx)(s.code,{children:"rawAst"})," to ",(0,i.jsx)(s.code,{children:"sourceAst"})," and ",(0,i.jsx)(s.code,{children:"outputAst"})," to ",(0,i.jsx)(s.code,{children:"targetAst"})]}),"\n",(0,i.jsxs)(s.li,{children:["The Stylable constructor now accepts options as an object (similar to ",(0,i.jsx)(s.code,{children:"Stylable.create()"})," options)"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The following APIs have been removed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"Stylable.create()"})," method has been removed"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"StylableMeta"})," removed ",(0,i.jsx)(s.code,{children:"ast"})," field"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"StylableTransformer"})," is no longer considered public API, there relevant functionality has been moved to ",(0,i.jsx)(s.code,{children:"stylable.transform"}),", ",(0,i.jsx)(s.code,{children:"stylable.transformSelector"}),", etc."]}),"\n",(0,i.jsxs)(s.li,{children:["custom pseudo state parameter type ",(0,i.jsx)(s.code,{children:"tag"})," has been removed - can be replaced by ",(0,i.jsx)(s.code,{children:"-st-states: stateName(string)"})," (see ",(0,i.jsx)(s.a,{href:"https://github.com/wix/stylable/issues/1552#issuecomment-874559161",children:"issue"}),")"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"missing-apis",children:"Missing APIs?"}),"\n",(0,i.jsxs)(s.p,{children:["If we have removed an API that you have found useful, and provided no alternative, please let us know by opening an issue over at ",(0,i.jsx)(s.a,{href:"https://github.com/wix/stylable/issues/new/choose",children:"GitHub"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"stylablecli",children:(0,i.jsx)(s.code,{children:"@stylable/cli"})}),"\n",(0,i.jsx)(s.h3,{id:"default-arguments-changed",children:"Default arguments changed"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"@stylable/cli"})," ",(0,i.jsx)(s.code,{children:"stc"})," command now has no default output defined, previously this was set to emit ",(0,i.jsx)(s.code,{children:".cjs"})," files."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["If you were using the ",(0,i.jsx)(s.code,{children:"stc"})," command without the ",(0,i.jsx)(s.code,{children:"--cjs"})," flag, you will need to update your code to use the new default output"]}),"\n",(0,i.jsxs)(s.li,{children:["If were explictly setting the output to not emit ",(0,i.jsx)(s.code,{children:".cjs"})," files (e.g. ",(0,i.jsx)(s.code,{children:"--no-cjs"})," or ",(0,i.jsx)(s.code,{children:"--cjs=false"}),"), you can now remove this parameter from your command"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"build-index-file-and-other-outputs-simultaneously",children:"Build index file and other outputs simultaneously"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"@stylable/cli"})," ",(0,i.jsx)(s.code,{children:"stc"})," command now supports building an indexFile and other outputs (",(0,i.jsx)(s.code,{children:".js"}),", ",(0,i.jsx)(s.code,{children:".css"}),", ",(0,i.jsx)(s.code,{children:".st.css"}),", etc.) at once."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"If you were previously running separate commands to build the index file and other outputs, you can now run a single command to build them all at once"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>o});var i=n(7294);const t={},l=i.createContext(t);function o(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);