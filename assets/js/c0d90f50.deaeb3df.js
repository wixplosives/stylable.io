"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[8723],{9242:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var n=t(5893),o=t(1151);const r={id:"root",title:"Root",layout:"docs"},c=void 0,l={id:"references/root",title:"Root",description:"Every Stylable stylesheet has a reserved class called root that matches the root node of the component. The root class is used to signify the component top-level node where a new namespace scope is created.",source:"@site/docs/references/root.md",sourceDirName:"references",slug:"/references/root",permalink:"/docs/references/root",draft:!1,unlisted:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/root.md",tags:[],version:"current",frontMatter:{id:"root",title:"Root",layout:"docs"},sidebar:"Specification Reference",previous:{title:"Namespace",permalink:"/docs/references/namespace"},next:{title:"Scope",permalink:"/docs/references/st-scope"}},a={},i=[{value:"Default export",id:"default-export",level:2},{value:"Runtime",id:"runtime",level:2},{value:"simple example",id:"simple-example",level:3},{value:"root + state + customize",id:"root--state--customize",level:3}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Every Stylable stylesheet has a reserved class called ",(0,n.jsx)(s.code,{children:"root"})," that matches the root node of the component. The ",(0,n.jsx)(s.code,{children:"root"})," class is used to signify the component top-level node where a new namespace scope is created."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:".root { \n  /* set component background */\n  background: white; \n} \n\n/* OUTPUT */\n.NAMESPACE__root { \n  background: white; \n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"default-export",children:"Default export"}),"\n",(0,n.jsxs)(s.p,{children:["The root of a stylesheet can be referenced in other stylesheets by using the ",(0,n.jsx)(s.a,{href:"/docs/references/imports#default-import",children:"default import"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",metastring:'title="page.st.css"',children:"@st-import DropDown from './dropdown.st.css';\n\n/* style any dropdown component background \n  nested under the page root */\n.root DropDown {\n  background: salmon;\n}\n\n/* OUTPUT */\n.page__root .dropdown__root { \n  background: salmon; \n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"runtime",children:"Runtime"}),"\n",(0,n.jsxs)(s.p,{children:["Each component is responsible for placing the ",(0,n.jsx)(s.code,{children:"root"})," class on its top-level node using the ",(0,n.jsx)(s.a,{href:"/docs/references/runtime",children:"runtime API"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"simple-example",children:"simple example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",metastring:'title="comp.jsx"',children:"import { classes } from './comp.st.css';\n\nfunction Comp() {\n  return <div className={classes.root}></div>;\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"root--state--customize",children:"root + state + customize"}),"\n",(0,n.jsxs)(s.p,{children:["The following example uses the ",(0,n.jsx)(s.a,{href:"/docs/references/runtime#st-function",children:"st() function"})," to add multiple classes:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"the component root class"}),"\n",(0,n.jsx)(s.li,{children:"state classes"}),"\n",(0,n.jsx)(s.li,{children:"classes passed from props for customizations"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",metastring:'title="comp.jsx"',children:"import { st, classes } from './comp.st.css';\n\nfunction Comp({ className }) {\n  return (\n    <div className={st(classes.root, {/*states*/}, className)}></div>\n  );\n}\n"})})]})}function p(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>c});var n=t(7294);const o={},r=n.createContext(o);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);