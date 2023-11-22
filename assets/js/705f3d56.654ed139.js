"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[1358],{5860:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=t(5893),r=t(1151);const o={id:"using-external-assets",title:"url()"},a=void 0,l={id:"references/using-external-assets",title:"url()",description:"Stylable supports usage of url functions to use assets as you normally would in CSS.",source:"@site/docs/references/using-external-assets.md",sourceDirName:"references",slug:"/references/using-external-assets",permalink:"/docs/references/using-external-assets",draft:!1,unlisted:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/using-external-assets.md",tags:[],version:"current",frontMatter:{id:"using-external-assets",title:"url()"},sidebar:"Specification Reference",previous:{title:"Type Selector",permalink:"/docs/references/type-selectors"},next:{title:"Custom Selector",permalink:"/docs/references/custom-selectors"}},c={},i=[{value:"Resolving 3rd-party assets",id:"resolving-3rd-party-assets",level:3}];function d(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Stylable supports usage of ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/url()",children:"url functions"})," to use assets as you normally would in CSS."]}),"\n",(0,n.jsxs)(s.p,{children:["The value passed to the ",(0,n.jsx)(s.code,{children:"url()"})," function is resolved differently in CSS as comapred to the Node request resolution algorithm, used for Stylable stylesheet and symbol resolutions."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"url()"})," function has no notion of external packages or dependencies."]}),"\n",(0,n.jsx)(s.h3,{id:"resolving-3rd-party-assets",children:"Resolving 3rd-party assets"}),"\n",(0,n.jsxs)(s.p,{children:["In order to import ",(0,n.jsx)(s.code,{children:"url()"})," assets from dependencies inside your ",(0,n.jsx)(s.code,{children:"node_modules"})," directory, Stylable supports the ",(0,n.jsx)(s.code,{children:"~"})," URL prefix."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:'.root {\n  /* resolves as the node request: "my-package/asset.png" */\n  background: url(~my-package/asset.png);\n}\n\n.root {\n  /* resolves as the node request: "./my-package/asset.png" */\n  background: url(my-package/asset.png);\n}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>a});var n=t(7294);const r={},o=n.createContext(r);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);