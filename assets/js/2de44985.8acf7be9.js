"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[3242],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=s,k=m["".concat(r,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2898:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return r},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),s=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"migration-v3",title:"Migrating to Stylable v3"},r=void 0,p={unversionedId:"guides/migration-v3",id:"guides/migration-v3",title:"Migrating to Stylable v3",description:"This guide is intended to help migrate Stylable version 1 to Stylable version 2 or 3.",source:"@site/docs/guides/migration-v3.md",sourceDirName:"guides",slug:"/guides/migration-v3",permalink:"/docs/guides/migration-v3",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/migration-v3.md",tags:[],version:"current",frontMatter:{id:"migration-v3",title:"Migrating to Stylable v3"},sidebar:"Guides",previous:{title:"Server Side Rendering",permalink:"/docs/guides/ssr"}},d=[{value:"Update dependencies",id:"update-dependencies",children:[],level:2},{value:"Update <code>.st.css</code> file imports",id:"update-stcss-file-imports",children:[{value:"CSS custom properties",id:"css-custom-properties",children:[],level:3}],level:2},{value:"Update usage in React components",id:"update-usage-in-react-components",children:[],level:2},{value:"Update tests",id:"update-tests",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,s.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide is intended to help migrate Stylable version 1 to Stylable version 2 or 3.\nIt is mainly geared towards Stylable integration in React projects."),(0,i.kt)("h1",{id:"suggested-steps-of-migration"},"Suggested steps of migration"),(0,i.kt)("p",null,"Follow these steps for a smooth transition. Each step is explained in\nmore detail below."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update dependencies"),(0,i.kt)("li",{parentName:"ol"},"Update global typings"),(0,i.kt)("li",{parentName:"ol"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},".st.css")," file imports"),(0,i.kt)("li",{parentName:"ol"},"Update usage in React components"),(0,i.kt)("li",{parentName:"ol"},"Update tests")),(0,i.kt)("h2",{id:"update-dependencies"},"Update dependencies"),(0,i.kt)("p",null,"Ensure you have v3 Stylable dependencies available. You may need to\nupdate your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," or ensure that other dependencies bring you\nv3 Stylable:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@stylable/cli")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@stylable/core")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@stylable/runtime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@stylable/node")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@stylable/webpack-plugin"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"all Stylable packages in v3 are scoped under the ",(0,i.kt)("inlineCode",{parentName:"p"},"@stylable")," namespace.\nif you have dependencies like ",(0,i.kt)("inlineCode",{parentName:"p"},"stylable")," (without scope), it is the old one and should be changed to scoped version."))),(0,i.kt)("h1",{id:"update-global-typings"},"Update global typings"),(0,i.kt)("p",null,"If TypeScript is used in the project, we recommend updating the global typings\n(usually ",(0,i.kt)("inlineCode",{parentName:"p"},"globals.d.ts"),") with an ",(0,i.kt)("inlineCode",{parentName:"p"},".st.css")," module declaration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"declare module '*.st.css' {\n  const stylesheet: import('@stylable/runtime').RuntimeStylesheet;\n  export = stylesheet;\n}\n")),(0,i.kt)("p",null,"This way the TypeScript compiler will help refactor most of the\nrequired changes and provide typings for other Stylable use cases."),(0,i.kt)("h2",{id:"update-stcss-file-imports"},"Update ",(0,i.kt)("inlineCode",{parentName:"h2"},".st.css")," file imports"),(0,i.kt)("p",null,"Prior to v2 all ",(0,i.kt)("inlineCode",{parentName:"p"},".st.css")," files would export a default ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," function. In v2\nthis has changed: ",(0,i.kt)("inlineCode",{parentName:"p"},".st.css")," files now export a named object."),(0,i.kt)("p",null,"List of all exported keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  st, // alias to `style`\n  classes,\n  cssStates,\n  keyframes,\n  namespace,\n  stVars,\n  style,\n  vars,\n} from './style.st.css';\n")),(0,i.kt)("p",null,"This means that all imports of ",(0,i.kt)("inlineCode",{parentName:"p"},".st.css")," files have to be changed, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"-import style from './Component.st.css';\n+import { st, classes, /* ... */ } from './Component.st.css';\n")),(0,i.kt)("p",null,"However, most often ",(0,i.kt)("inlineCode",{parentName:"p"},"{ st, classes }")," is enough:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import { st, classes } from './Component.st.css';")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},".st.css")," files export a ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," function and an alias to it -\n",(0,i.kt)("inlineCode",{parentName:"p"},"st"),". It is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"st")," in order to avoid name clashing\nwith other variables (for example, some other inline style)."))),(0,i.kt)("h3",{id:"css-custom-properties"},"CSS custom properties"),(0,i.kt)("p",null,"Stylable now localizes CSS Custom Properties. This means that any usage of Custom Proprties (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"--prop"),") should now be incorparated in the component code."),(0,i.kt)("p",null,"See the docs about ",(0,i.kt)("a",{parentName:"p",href:"https://stylable.io/docs/references/css-vars"},"CSS custom properties")," for usage examples."),(0,i.kt)("h2",{id:"update-usage-in-react-components"},"Update usage in React components"),(0,i.kt)("p",null,"Once ",(0,i.kt)("inlineCode",{parentName:"p"},".st.css")," imports are updated, React components should be updated too:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"-<div {...style('root', states, props)} />\n+<div className={st(classes.root, states, props.className)} />\n")),(0,i.kt)("p",null,"There are subtle but very important nuances in this change."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Stylable v1 used spread pattern. It would take the output of ",(0,i.kt)("inlineCode",{parentName:"p"},"style('root', states, this.props)")," function and spread it on component."),(0,i.kt)("p",{parentName:"li"},"This way one or more props would be applied to the component. Thus, code that looks like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<div {...style('root', {}, { className: 'additional-class', 'data-hook': 'test' })} />\n")),(0,i.kt)("p",{parentName:"li"},"  once evaluated, would behave like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<div\n  className="root additional-class"\n  data-hook="test"\n/>\n')),(0,i.kt)("p",{parentName:"li"},"  Stylable v2 and v3 usage is like so:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"className={st(classes.root, states, this.props.className)}\n")),(0,i.kt)("p",{parentName:"li"},"  There is no props spreading anymore and Stylable requires only\n",(0,i.kt)("inlineCode",{parentName:"p"},"className")," to be used."),(0,i.kt)("p",{parentName:"li"},"  However, if you were relying on the props spread pattern, in v2 and v3 you\nmight find some props missing."),(0,i.kt)("p",{parentName:"li"},"  Therefore, with Stylable v3 it is up to you to apply any additional props:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<div className={st(classes.root, states, \'additional-class\')} \n     data-hook="test" \n     hello="world" />\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Stylable v1 ",(0,i.kt)("inlineCode",{parentName:"p"},"style()")," would accept unscoped css class name as a string",(0,i.kt)("br",{parentName:"p"}),"\n","This is no longer acceptable in Stylable v2 or v3, for example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"-<div {...style('root', state, { className: 'additional-class-name' })} />\n+<div className={style(classes.root, 'additional-class-name')} />\n")),(0,i.kt)("p",{parentName:"li"},"note that ",(0,i.kt)("inlineCode",{parentName:"p"},"classes.root")," comes from ",(0,i.kt)("inlineCode",{parentName:"p"},".st.css"),", which is the correct\nway to import class names."),(0,i.kt)("p",{parentName:"li"},"Similar scoping is applied to css variables too, imported from ",(0,i.kt)("inlineCode",{parentName:"p"},"vars")))),(0,i.kt)("p",null,"Note: find more details and examples in our ",(0,i.kt)("a",{parentName:"p",href:"./runtime"},"Runtime")," and ",(0,i.kt)("a",{parentName:"p",href:"../getting-started/react-integration"},"React integration")," guides."),(0,i.kt)("h2",{id:"update-tests"},"Update tests"),(0,i.kt)("p",null,"If you were using ",(0,i.kt)("inlineCode",{parentName:"p"},"@stylable/dom-test-kit")," in Stylable v1, it's usage is\nslightly different in v2 and v3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"import { StylableDOMUtil } from '@Stylable/dom-test-kit';\n-import style from './Component.st.css';\n+import * as styleSheet from './Component.st.css';\n\n-const StylableDOMUtil = new StylableDOMUtil(style);\n+const StylableDOMUtil = new StylableDOMUtil(styleSheet);\n")),(0,i.kt)("p",null,"Stylable v2 and v3 ",(0,i.kt)("inlineCode",{parentName:"p"},"StylableDOMUtil")," expects to receive an argument which is the whole stylesheet exported from a ",(0,i.kt)("inlineCode",{parentName:"p"},".st.css")," file"),(0,i.kt)("p",null,"Prior to v2 it was only one thing - the ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," function."))}m.isMDXComponent=!0}}]);