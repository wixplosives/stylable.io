"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[3242],{4570:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=n(5893),i=n(1151);const l={id:"migration-v3",title:"Stylable v3"},o="Suggested steps of migration",a={id:"guides/migration-v3",title:"Stylable v3",description:"This guide is intended to help migrate Stylable version 1 to Stylable version 2 or 3.",source:"@site/docs/guides/migration-v3.md",sourceDirName:"guides",slug:"/guides/migration-v3",permalink:"/docs/guides/migration-v3",draft:!1,unlisted:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/migration-v3.md",tags:[],version:"current",frontMatter:{id:"migration-v3",title:"Stylable v3"},sidebar:"Guides",previous:{title:"Server Side Rendering",permalink:"/docs/guides/ssr"},next:{title:"Stylable v5",permalink:"/docs/guides/migration-v5"}},r={},d=[{value:"Update dependencies",id:"update-dependencies",level:2},{value:"Update <code>.st.css</code> file imports",id:"update-stcss-file-imports",level:2},{value:"CSS custom properties",id:"css-custom-properties",level:3},{value:"Update usage in React components",id:"update-usage-in-react-components",level:2},{value:"Update tests",id:"update-tests",level:2}];function c(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"This guide is intended to help migrate Stylable version 1 to Stylable version 2 or 3.\nIt is mainly geared towards Stylable integration in React projects."}),"\n",(0,t.jsx)(s.h1,{id:"suggested-steps-of-migration",children:"Suggested steps of migration"}),"\n",(0,t.jsx)(s.p,{children:"Follow these steps for a smooth transition. Each step is explained in\nmore detail below."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Update dependencies"}),"\n",(0,t.jsx)(s.li,{children:"Update global typings"}),"\n",(0,t.jsxs)(s.li,{children:["Update ",(0,t.jsx)(s.code,{children:".st.css"})," file imports"]}),"\n",(0,t.jsx)(s.li,{children:"Update usage in React components"}),"\n",(0,t.jsx)(s.li,{children:"Update tests"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"update-dependencies",children:"Update dependencies"}),"\n",(0,t.jsxs)(s.p,{children:["Ensure you have v3 Stylable dependencies available. You may need to\nupdate your ",(0,t.jsx)(s.code,{children:"package.json"})," or ensure that other dependencies bring you\nv3 Stylable:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@stylable/cli"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@stylable/core"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@stylable/runtime"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@stylable/node"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@stylable/webpack-plugin"})}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["all Stylable packages in v3 are scoped under the ",(0,t.jsx)(s.code,{children:"@stylable"})," namespace.\nif you have dependencies like ",(0,t.jsx)(s.code,{children:"stylable"})," (without scope), it is the old one and should be changed to scoped version."]})}),"\n",(0,t.jsx)(s.h1,{id:"update-global-typings",children:"Update global typings"}),"\n",(0,t.jsxs)(s.p,{children:["If TypeScript is used in the project, we recommend updating the global typings\n(usually ",(0,t.jsx)(s.code,{children:"globals.d.ts"}),") with an ",(0,t.jsx)(s.code,{children:".st.css"})," module declaration:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"declare module '*.st.css' {\n  const stylesheet: import('@stylable/runtime').RuntimeStylesheet;\n  export = stylesheet;\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"This way the TypeScript compiler will help refactor most of the\nrequired changes and provide typings for other Stylable use cases."}),"\n",(0,t.jsxs)(s.h2,{id:"update-stcss-file-imports",children:["Update ",(0,t.jsx)(s.code,{children:".st.css"})," file imports"]}),"\n",(0,t.jsxs)(s.p,{children:["Prior to v2 all ",(0,t.jsx)(s.code,{children:".st.css"})," files would export a default ",(0,t.jsx)(s.code,{children:"style"})," function. In v2\nthis has changed: ",(0,t.jsx)(s.code,{children:".st.css"})," files now export a named object."]}),"\n",(0,t.jsx)(s.p,{children:"List of all exported keys:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"import {\n  st, // alias to `style`\n  classes,\n  cssStates,\n  keyframes,\n  namespace,\n  stVars,\n  style,\n  vars,\n} from './style.st.css';\n"})}),"\n",(0,t.jsxs)(s.p,{children:["This means that all imports of ",(0,t.jsx)(s.code,{children:".st.css"})," files have to be changed, for example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-diff",children:"-import style from './Component.st.css';\n+import { st, classes, /* ... */ } from './Component.st.css';\n"})}),"\n",(0,t.jsxs)(s.p,{children:["However, most often ",(0,t.jsx)(s.code,{children:"{ st, classes }"})," is enough:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"import { st, classes } from './Component.st.css';"})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:".st.css"})," files export a ",(0,t.jsx)(s.code,{children:"style"})," function and an alias to it -\n",(0,t.jsx)(s.code,{children:"st"}),". It is recommended to use ",(0,t.jsx)(s.code,{children:"st"})," in order to avoid name clashing\nwith other variables (for example, some other inline style)."]})}),"\n",(0,t.jsx)(s.h3,{id:"css-custom-properties",children:"CSS custom properties"}),"\n",(0,t.jsxs)(s.p,{children:["Stylable now localizes CSS Custom Properties. This means that any usage of Custom Proprties (e.g. ",(0,t.jsx)(s.code,{children:"--prop"}),") should now be incorparated in the component code."]}),"\n",(0,t.jsxs)(s.p,{children:["See the docs about ",(0,t.jsx)(s.a,{href:"https://stylable.io/docs/references/css-vars",children:"CSS custom properties"})," for usage examples."]}),"\n",(0,t.jsx)(s.h2,{id:"update-usage-in-react-components",children:"Update usage in React components"}),"\n",(0,t.jsxs)(s.p,{children:["Once ",(0,t.jsx)(s.code,{children:".st.css"})," imports are updated, React components should be updated too:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-diff",children:"-<div {...style('root', states, props)} />\n+<div className={st(classes.root, states, props.className)} />\n"})}),"\n",(0,t.jsx)(s.p,{children:"There are subtle but very important nuances in this change."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Stylable v1 used spread pattern. It would take the output of ",(0,t.jsx)(s.code,{children:"style('root', states, this.props)"})," function and spread it on component."]}),"\n",(0,t.jsx)(s.p,{children:"This way one or more props would be applied to the component. Thus, code that looks like this:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",children:'<div\n  {...style(\n    "root",\n    {},\n    { className: "additional-class", "data-hook": "test" }\n  )}\n/>\n'})}),"\n",(0,t.jsx)(s.p,{children:"once evaluated, would behave like this:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",children:'<div className="root additional-class" data-hook="test" />\n'})}),"\n",(0,t.jsx)(s.p,{children:"Stylable v2 and v3 usage is like so:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"className={st(classes.root, states, this.props.className)}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["There is no props spreading anymore and Stylable requires only\n",(0,t.jsx)(s.code,{children:"className"})," to be used."]}),"\n",(0,t.jsx)(s.p,{children:"However, if you were relying on the props spread pattern, in v2 and v3 you\nmight find some props missing."}),"\n",(0,t.jsx)(s.p,{children:"Therefore, with Stylable v3 it is up to you to apply any additional props:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",children:'<div\n  className={st(classes.root, states, "additional-class")}\n  data-hook="test"\n  hello="world"\n/>\n'})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Stylable v1 ",(0,t.jsx)(s.code,{children:"style()"})," would accept unscoped css class name as a string",(0,t.jsx)(s.br,{}),"\n","This is no longer acceptable in Stylable v2 or v3, for example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-diff",children:"-<div {...style('root', state, { className: 'additional-class-name' })} />\n+<div className={style(classes.root, 'additional-class-name')} />\n"})}),"\n",(0,t.jsxs)(s.p,{children:["note that ",(0,t.jsx)(s.code,{children:"classes.root"})," comes from ",(0,t.jsx)(s.code,{children:".st.css"}),", which is the correct\nway to import class names."]}),"\n",(0,t.jsxs)(s.p,{children:["Similar scoping is applied to css variables too, imported from ",(0,t.jsx)(s.code,{children:"vars"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Note: find more details and examples in our ",(0,t.jsx)(s.a,{href:"../references/runtime",children:"Runtime reference"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"update-tests",children:"Update tests"}),"\n",(0,t.jsxs)(s.p,{children:["If you were using ",(0,t.jsx)(s.code,{children:"@stylable/dom-test-kit"})," in Stylable v1, it's usage is\nslightly different in v2 and v3:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-diff",children:"import { StylableDOMUtil } from '@Stylable/dom-test-kit';\n-import style from './Component.st.css';\n+import * as styleSheet from './Component.st.css';\n\n-const StylableDOMUtil = new StylableDOMUtil(style);\n+const StylableDOMUtil = new StylableDOMUtil(styleSheet);\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Stylable v2 and v3 ",(0,t.jsx)(s.code,{children:"StylableDOMUtil"})," expects to receive an argument which is the whole stylesheet exported from a ",(0,t.jsx)(s.code,{children:".st.css"})," file"]}),"\n",(0,t.jsxs)(s.p,{children:["Prior to v2 it was only one thing - the ",(0,t.jsx)(s.code,{children:"style"})," function."]})]})}function p(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var t=n(7294);const i={},l=t.createContext(i);function o(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);