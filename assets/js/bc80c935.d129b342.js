"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[7513],{1957:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=a(7462),l=(a(7294),a(4137)),r=a(2053);const s={id:"cheatsheet",title:"Cheatsheet"},o=void 0,i={unversionedId:"references/cheatsheet",id:"references/cheatsheet",title:"Cheatsheet",description:"CSS Terminology",source:"@site/docs/references/cheatsheet.mdx",sourceDirName:"references",slug:"/references/cheatsheet",permalink:"/docs/references/cheatsheet",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/cheatsheet.mdx",tags:[],version:"current",frontMatter:{id:"cheatsheet",title:"Cheatsheet"},sidebar:"Specification Reference",next:{title:"Class Selector",permalink:"/docs/references/class-selectors"}},d={},m=[{value:"CSS Terminology",id:"css-terminology",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Selectors",id:"selectors",level:3},{value:"Module system",id:"module-system",level:3},{value:"Class extensions",id:"class-extensions",level:3},{value:"Templating",id:"templating",level:3},{value:"Other",id:"other",level:3}],p={toc:m},c="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"css-terminology"},"CSS Terminology"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"selector"),": query to target elements in the DOM"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"property"),": Name of the declaration (e.g. color)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"declaration"),": CSS property paired with a value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"declaration Block"),": List of CSS declarations"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ruleset"),": CSS declaration block paired with a selector")),(0,l.kt)("p",null,"See MDN ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Syntax#CSS_Declarations"},"How CSS is structured")," and css-tricks ",(0,l.kt)("a",{parentName:"p",href:"https://css-tricks.com/css-ruleset-terminology/"},"Ruleset Terminology")," for detailed explanation of CSS naming and structure."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,"Syntax that is unique to Stylable or extended from CSS."),(0,l.kt)("h3",{id:"selectors"},"Selectors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanations"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},".x {}")),(0,l.kt)("td",{parentName:"tr",align:null},"Class selector (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/class-selectors"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"x {}")),(0,l.kt)("td",{parentName:"tr",align:null},"Element type selector (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/type-selectors"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},":x {}")),(0,l.kt)("td",{parentName:"tr",align:null},"Pseudo-class or custom state selector (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/pseudo-classes"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"::x {}")),(0,l.kt)("td",{parentName:"tr",align:null},"Pseudo-element or custom-element selector (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/pseudo-elements"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},":--x {}")),(0,l.kt)("td",{parentName:"tr",align:null},"custom selector (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/custom-selectors"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},":global() {}")),(0,l.kt)("td",{parentName:"tr",align:null},"disables selector namespacing (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/global-selectors"},"api"),")")))),(0,l.kt)("h3",{id:"module-system"},"Module system"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanations"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"@st-import X from './y.st.css';")),(0,l.kt)("td",{parentName:"tr",align:null},"Import stylesheet's root (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/imports#default-import"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"@st-import ","[x, y]"," from './y.st.css';")),(0,l.kt)("td",{parentName:"tr",align:null},"Import named exports (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/imports#named-import"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"@st-import X, ","[y, z]"," from './y.st.css';")),(0,l.kt)("td",{parentName:"tr",align:null},"Import default & named (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/imports#named-import"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"@st-import ","[x as local-x]"," from './y.st.css';")),(0,l.kt)("td",{parentName:"tr",align:null},"Local alias for named import (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/imports#local-alias"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"@st-import ","[keyframes(x1, x2)]"," from './y.st.css';")),(0,l.kt)("td",{parentName:"tr",align:null},"Import keyframes (",(0,l.kt)("a",{parentName:"td",href:"../references/keyframes#import-and-export"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"@st-import ","[layer(x1, x2)]"," from './y.st.css';")),(0,l.kt)("td",{parentName:"tr",align:null},"Import layers (",(0,l.kt)("a",{parentName:"td",href:"../references/layer#import-and-export"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"@st-import ","[container(x1, x2)]"," from './y.st.css';")),(0,l.kt)("td",{parentName:"tr",align:null},"Import containers (",(0,l.kt)("a",{parentName:"td",href:"../references/contains#import-and-export"},"api"),")")))),(0,l.kt)("h3",{id:"class-extensions"},"Class extensions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanations"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"-st-extends: Gallery;")),(0,l.kt)("td",{parentName:"tr",align:null},"Extend an existing class (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/extend-stylesheet"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"-st-states: stateA, stateB;")),(0,l.kt)("td",{parentName:"tr",align:null},"Define custom pseudo-classes (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/pseudo-classes"},"api"),")")))),(0,l.kt)("h3",{id:"templating"},"Templating"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanations"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},":vars { x: red; y: blue; }")),(0,l.kt)("td",{parentName:"tr",align:null},"Build time variables definition (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/st-variables#define"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"prop: value(x);")),(0,l.kt)("td",{parentName:"tr",align:null},"Insert var value into declaration (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/st-variables#evaluate"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"prop: x(arg1, arg2);")),(0,l.kt)("td",{parentName:"tr",align:null},"Computed value from custom formatter (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/formatters"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"-st-mixin: x, y;")),(0,l.kt)("td",{parentName:"tr",align:null},"Apply multiple mixins to CSS ruleset (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/mixins"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"-st-mixin: x(param v1, param v2);")),(0,l.kt)("td",{parentName:"tr",align:null},"Apply mixins with override params (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/mixins"},"api"),")")))),(0,l.kt)("h3",{id:"other"},"Other"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanations"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},"@st-scope .x {}")),(0,l.kt)("td",{parentName:"tr",align:null},"Scope nested rules with a given selector (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/st-scope"},"api"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{language:"css",className:"inline-code",mdxType:"CodeBlock"},'@st-namespace "x";')),(0,l.kt)("td",{parentName:"tr",align:null},"Development display name for debugging (",(0,l.kt)("a",{parentName:"td",href:"/docs/references/namespace"},"api"),")")))))}k.isMDXComponent=!0}}]);