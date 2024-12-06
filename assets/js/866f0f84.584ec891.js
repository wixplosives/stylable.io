"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[2619],{8403:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"guides/project-commons","title":"Project Commons","description":"The goal of the project file is to contain the CSS commons for the project, including variables, component variants and shared classes.","source":"@site/docs/guides/project-commons.md","sourceDirName":"guides","slug":"/guides/project-commons","permalink":"/docs/guides/project-commons","draft":false,"unlisted":false,"editUrl":"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/project-commons.md","tags":[],"version":"current","frontMatter":{"id":"project-commons","title":"Project Commons"},"sidebar":"Guides","previous":{"title":"Component Best Practices","permalink":"/docs/guides/component-best-practices"},"next":{"title":"Shared Classes","permalink":"/docs/guides/shared-classes"}}');var t=s(4848),c=s(8453);const r={id:"project-commons",title:"Project Commons"},i=void 0,a={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The goal of the project file is to contain the CSS commons for the project, including ",(0,t.jsx)(n.a,{href:"/docs/references/st-variables",children:"variables"}),", ",(0,t.jsx)(n.a,{href:"/docs/guides/component-variants",children:"component variants"})," and ",(0,t.jsx)(n.a,{href:"/docs/guides/shared-classes",children:"shared classes"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In the following code, you can see a project with:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"2 color, 2 font and 1 spacing size variables"}),"\n",(0,t.jsxs)(n.li,{children:["1 ",(0,t.jsx)(n.code,{children:"Button"})," component variant named ",(0,t.jsx)(n.code,{children:"cancelButton"})]}),"\n",(0,t.jsxs)(n.li,{children:["1 shared class for ",(0,t.jsx)(n.code,{children:"emphasisBox"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",metastring:'title="project.st.css"',children:':vars {\n  color1: #f012be;\n  color2: #ff4136;\n  fontbig: 2rem;\n  fontsmall: 1rem;\n  spacing: 6px;\n}\n@st-import Button from "./button/button.st.css";\n\n.cancelButton {\n  -st-extends: Button;\n}\n.emphasisBox {}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["We recommend calling the project commons file ",(0,t.jsx)(n.code,{children:"project.st.css"}),"."]})})]})}function m(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var o=s(6540);const t={},c=o.createContext(t);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);