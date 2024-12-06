"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[7395],{2176:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"guides/handbook/runtime","title":"Runtime","description":"In the previous chapter, we saw brief examples of mapping our classes local names to their global namespaced names at runtime, as well as the cssStates utility function to activate their states.","source":"@site/docs/guides/handbook/runtime.md","sourceDirName":"guides/handbook","slug":"/guides/handbook/runtime","permalink":"/docs/guides/handbook/runtime","draft":false,"unlisted":false,"editUrl":"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/handbook/runtime.md","tags":[],"version":"current","frontMatter":{"id":"runtime","title":"Runtime"},"sidebar":"Guides","previous":{"title":"Custom State","permalink":"/docs/guides/handbook/custom-state"},"next":{"title":"Import Class","permalink":"/docs/guides/handbook/import-class"}}');var a=n(4848),r=n(8453);const i={id:"runtime",title:"Runtime"},l=void 0,d={},c=[{value:"Mapped symbols",id:"mapped-symbols",level:2},{value:"Import example",id:"import-example",level:3},{value:"Runtime namespaced names",id:"runtime-namespaced-names",level:3},{value:"Apply class and state",id:"apply-class-and-state",level:2},{value:"<code>st()</code> function",id:"st-function",level:3},{value:"Stylable build variables",id:"stylable-build-variables",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["In the ",(0,a.jsx)(s.a,{href:"/docs/guides/handbook/custom-state",children:"previous chapter"}),", we saw brief examples of mapping our ",(0,a.jsx)(s.code,{children:"classes"})," local names to their global namespaced names at runtime, as well as the ",(0,a.jsx)(s.code,{children:"cssStates"})," utility function to activate their states."]}),"\n",(0,a.jsx)(s.p,{children:"In this chapter, we'll explore the runtime features of Stylable and their usage."}),"\n",(0,a.jsx)(s.p,{children:"One of the core ideas behind Stylable is to try and shift as much of the work as possible from runtime to build time to increase performance and end-user experience. However, in some instances, we need to do additional work in JavaScript."}),"\n",(0,a.jsx)(s.p,{children:"For example, we need to:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Bind classes to views"}),"\n",(0,a.jsx)(s.li,{children:"Activate states"}),"\n",(0,a.jsx)(s.li,{children:"Set custom property values"}),"\n",(0,a.jsx)(s.li,{children:"Dynamically generate CSS"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"mapped-symbols",children:"Mapped symbols"}),"\n",(0,a.jsxs)(s.p,{children:["The namespacing chapter covered the basics of namespacing in Stylable, and in it, we saw that in Stylable, ",(0,a.jsx)(s.strong,{children:"classes, custom-properties, keyframes, layers, and containers"})," all receive namespacing to avoid conflicts."]}),"\n",(0,a.jsx)(s.h3,{id:"import-example",children:"Import example"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:'import {\n  classes,    // class mapping\n  vars,       // custom properties mapping\n  keyframes,  // keyframes mapping\n  layers,     // layer mapping\n  containers, // container mapping\n} from "./game.st.css";\n\n'})}),"\n",(0,a.jsx)(s.h3,{id:"runtime-namespaced-names",children:"Runtime namespaced names"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Import"}),(0,a.jsx)(s.th,{children:"Type"}),(0,a.jsx)(s.th,{children:"Source"}),(0,a.jsx)(s.th,{children:"Target"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"classes"})}),(0,a.jsx)(s.td,{children:"Class"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:".player"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:".NS__player"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"vars"})}),(0,a.jsx)(s.td,{children:"Custom property"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"--player1Color"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"--NS-player1Color"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"keyframes"})}),(0,a.jsx)(s.td,{children:"Keyframes"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"@keyframes slide"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"@keyframes NS__slide"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"layers"})}),(0,a.jsx)(s.td,{children:"Layer"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"@layer theme"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"@layer NS__theme"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"containers"})}),(0,a.jsx)(s.td,{children:"Container"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"container: panel"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"container: NS__panel"})})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"apply-class-and-state",children:"Apply class and state"}),"\n",(0,a.jsx)(s.p,{children:"Up to this point, all use cases we saw for wiring elements were simplified or overly verbose."}),"\n",(0,a.jsxs)(s.p,{children:["In the following example we can see that we are binding the ",(0,a.jsx)(s.code,{children:"player"})," class to the ",(0,a.jsx)(s.code,{children:"player"})," view, as well as activating the ",(0,a.jsx)(s.code,{children:"registered"})," state."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-jsx",children:"import { classes, stStates } from \"./game.st.css\";\n\n<div> \n    className={classes.player + ' ' + stStates({registered: true})}\n</div>\n"})}),"\n",(0,a.jsxs)(s.h3,{id:"st-function",children:[(0,a.jsx)(s.code,{children:"st()"})," function"]}),"\n",(0,a.jsxs)(s.p,{children:["We can use the ",(0,a.jsx)(s.code,{children:"st()"})," function to simplify this process, by passing it the class name as its ",(0,a.jsx)(s.strong,{children:"first argument"}),", and the activated states as its ",(0,a.jsx)(s.strong,{children:"second argument"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-jsx",children:"import { st, classes } from './game.st.css';\n\n<div className={st(classes.player, { registered: true })}></div>;\n"})}),"\n",(0,a.jsx)(s.p,{children:"There are cases in which we would like to add additional classes to an element. For example, a component might want to accept an external class name to allow for custom styling."}),"\n",(0,a.jsxs)(s.p,{children:["Below, we can see such a case, where we bind a class (",(0,a.jsx)(s.code,{children:"player"}),"), activate a state (",(0,a.jsx)(s.code,{children:"registered"}),"), and add an external class from props for customization purposes."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-jsx",metastring:'title="game.jsx"',children:"import { st, classes } from './game.st.css';\nconst Game = ({ className }) => {\n  return (\n    <div className={st(classes.player, { registered: true }, className)}>\n    </div>\n  );\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["For further details on the runtime API, ",(0,a.jsx)(s.a,{href:"/docs/references/runtime",children:"see the runtime reference"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"stylable-build-variables",children:"Stylable build variables"}),"\n",(0,a.jsx)(s.p,{children:"We have yet to cover Stylable build variables, but seeing as they expose their value in runtime, we'll cover them here briefly."}),"\n",(0,a.jsx)(s.p,{children:"As opposed to the native runtime symbols we saw namespaced above, Stylable build variables do not require namespacing, as they are transpiled away at build time. In this case, the runtime export maps variables to their defined values."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:'import {\n  stVars // Stylable build variables\n} from "./game.st.css";\n\n// runtime namespaced names\nstVars.boardBackgroundColor; // "green"\n'})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var t=n(6540);const a={},r=t.createContext(a);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);