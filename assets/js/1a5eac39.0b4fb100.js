"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[4215],{9807:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"guides/handbook/namespacing","title":"Namespacing","description":"In the Classes chapter, we briefly explained the concept of using namespacing to avoid conflicts between stylesheets.","source":"@site/docs/guides/handbook/namespace.md","sourceDirName":"guides/handbook","slug":"/guides/handbook/namespacing","permalink":"/docs/guides/handbook/namespacing","draft":false,"unlisted":false,"editUrl":"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/handbook/namespace.md","tags":[],"version":"current","frontMatter":{"id":"namespacing","title":"Namespacing"},"sidebar":"Guides","previous":{"title":"Classes","permalink":"/docs/guides/handbook/class"},"next":{"title":"Custom State","permalink":"/docs/guides/handbook/custom-state"}}');var a=n(4848),t=n(8453);const i={id:"namespacing",title:"Namespacing"},o=void 0,r={},c=[{value:"Supported symbols",id:"supported-symbols",level:2},{value:"Global",id:"global",level:2},{value:"Disable in selector",id:"disable-in-selector",level:3},{value:"Defining global symbols",id:"defining-global-symbols",level:3},{value:"Stylesheet level namespacing",id:"stylesheet-level-namespacing",level:2},{value:"Project level namespacing",id:"project-level-namespacing",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["In the ",(0,a.jsx)(s.a,{href:"/docs/guides/handbook/class#resolve-global-conflicts",children:"Classes chapter"}),", we briefly explained the concept of using namespacing to avoid conflicts between stylesheets."]}),"\n",(0,a.jsx)(s.p,{children:"In this chapter, we'll dive deeper to see how other symbols in CSS can be rendered safe to use, and how namespacing can be controlled."}),"\n",(0,a.jsx)(s.h2,{id:"supported-symbols",children:"Supported symbols"}),"\n",(0,a.jsx)(s.p,{children:"We've only mentioned classes up to this point, but in CSS, there are many other symbols that share the same naming context, therefore requiring namespacing to avoid potential conflicts."}),"\n",(0,a.jsx)(s.p,{children:"Symbols that Stylable namespaces:"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Symbol"}),(0,a.jsx)(s.th,{children:"Source"}),(0,a.jsx)(s.th,{children:"Target"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Class"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:".okButton"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:".NAMESPACE__okButton"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Custom property"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"--bgColor"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"--NAMESPACE-bgColor"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Keyframes"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"@keyframes slide"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"@keyframes NAMESPACE__slide"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Layer"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"@layer theme"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"@layer NAMESPACE__theme"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Container"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"container: panel"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"container: NAMESPACE__panel"})})]})]})]}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsxs)(s.p,{children:["Stylable does not namespace ",(0,a.jsx)(s.code,{children:"id"}),", ",(0,a.jsx)(s.code,{children:"custom-element"}),", ",(0,a.jsx)(s.code,{children:"attribute"}),", or other symbols at the moment, but may add additional symbol namespacing support in the future."]})}),"\n",(0,a.jsx)(s.h2,{id:"global",children:"Global"}),"\n",(0,a.jsx)(s.p,{children:"In some cases, we might want to avoid namespacing for a specific symbol."}),"\n",(0,a.jsx)(s.p,{children:"For example:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"To style a third-party component that is using pre-determined global class names."}),"\n",(0,a.jsx)(s.li,{children:"To expose a persistent, globally-namespaced API for non-Stylable consumers that are using our project."}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"disable-in-selector",children:"Disable in selector"}),"\n",(0,a.jsxs)(s.p,{children:["To avoid namespacing on classes in a selector, wrap those classes with a ",(0,a.jsx)(s.code,{children:":global(...)"})," pseudo-class."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-css",metastring:'title="game.st.css"',children:".player:global(.highlight) {\n  background: yellow;\n}\n\n/* OUTPUT */\n.game__player.highlight {\n  background: yellow;\n}\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"caution",children:(0,a.jsxs)(s.p,{children:["Classes used within the ",(0,a.jsx)(s.code,{children:":global(...)"})," pseudo-class are not treated as symbols in the stylesheet, and are not exported. This means that they are not available for use in other stylesheets or in the runtime JavaScript module."]})}),"\n",(0,a.jsx)(s.h3,{id:"defining-global-symbols",children:"Defining global symbols"}),"\n",(0,a.jsxs)(s.p,{children:["We can avoid namespacing for all symbols (except classes) by using the ",(0,a.jsx)(s.code,{children:"st-global()"})," function:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"@property st-global(--bgColor)"})," - ",(0,a.jsx)(s.a,{href:"../../references/css-vars#disable-namespace",children:"read more"})]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"@keyframes st-global(slide)"})," - ",(0,a.jsx)(s.a,{href:"../../references/keyframes#disable-namespace",children:"read more"})]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"@layer st-global(theme)"})," - ",(0,a.jsx)(s.a,{href:"../../references/layer#disable-namespace",children:"read more"})]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"container: st-global(panel)"})," - ",(0,a.jsx)(s.a,{href:"../../references/contains#disable-namespace",children:"read more"})]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Unlike the other symbols that are mapped from a local name to their global one, when we map a class using ",(0,a.jsx)(s.code,{children:"-st-global"}),", we can define a global selector that will replace it."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-css",children:".player {\n  -st-global: '.myGame__player';\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Notice that in this case, we are mapping our ",(0,a.jsx)(s.code,{children:"player"})," class to a ",(0,a.jsx)(s.code,{children:".myGame__player"})," class selector. This is because classes can be mapped to any selector, including multiple classes, elements, attributes, and other CSS selector parts."]}),"\n",(0,a.jsx)(s.h2,{id:"stylesheet-level-namespacing",children:"Stylesheet level namespacing"}),"\n",(0,a.jsx)(s.p,{children:"By default, namespacing is derived in Stylable using the stylesheet filename, but in some edge cases we might want to override this behavior."}),"\n",(0,a.jsxs)(s.p,{children:["To do so, we can use the ",(0,a.jsx)(s.code,{children:"@st-namespace 'OverrideNamespace';"})," definition. ",(0,a.jsx)(s.a,{href:"/docs/references/namespace",children:"Click here"})," to read more about the namespace API."]}),"\n",(0,a.jsx)(s.h2,{id:"project-level-namespacing",children:"Project level namespacing"}),"\n",(0,a.jsxs)(s.p,{children:["On a more general level, we can have granular control of Stylable's namespacing process by passing a ",(0,a.jsx)(s.a,{href:"../../getting-started/stylable-config",children:"custom namespace resolver"})," to Stylable at initialization using configuration."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var l=n(6540);const a={},t=l.createContext(a);function i(e){const s=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);