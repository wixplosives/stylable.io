"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[5232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||s;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={id:"pseudo-elements",title:"Pseudo-Element"},o=void 0,l={unversionedId:"references/pseudo-elements",id:"references/pseudo-elements",title:"Pseudo-Element",description:"In addition to CSS's native pseudo-elements, like ::backdrop, Stylable allow you to define custom pseudo-elements so that you can target and apply styles to inner parts of your components.",source:"@site/docs/references/pseudo-elements.md",sourceDirName:"references",slug:"/references/pseudo-elements",permalink:"/docs/references/pseudo-elements",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/pseudo-elements.md",tags:[],version:"current",frontMatter:{id:"pseudo-elements",title:"Pseudo-Element"},sidebar:"Specification Reference",previous:{title:"Pseudo-Class",permalink:"/docs/references/pseudo-classes"},next:{title:"Type Selector",permalink:"/docs/references/type-selectors"}},i={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Style a component",id:"style-a-component",level:2},{value:"Style a variant",id:"style-a-variant",level:2},{value:"Define",id:"define",level:2},{value:"Element inheritance",id:"element-inheritance",level:3},{value:"Build transformation",id:"build-transformation",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In addition to CSS's native pseudo-elements, like ",(0,a.kt)("inlineCode",{parentName:"p"},"::before")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"::backdrop"),", Stylable allow you to define custom pseudo-elements so that you can target and apply styles to inner parts of your components."),(0,a.kt)("p",null,"This page goes over how Stylable handles custom pseudo-elements, for more details about the language feature itself, checkout the following resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements"},"MDN pseudo-element")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/CSS22/selector.html#pseudo-element-selectors"},"pseudo-element in spec"))),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"To target an internal element, Use the pseudo-element prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"::")," with the part name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"Component::firstlevel::secondlevel {}\n")),(0,a.kt)("admonition",{title:"deep pseudo-elements",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Custom pseudo-elements are not limited to the end of a selector like native pseudo-elements, and can be chained. For example, you can access the label of a navigation button from a gallery: ",(0,a.kt)("inlineCode",{parentName:"p"},"Gallery::navBtn::label"))),(0,a.kt)("h2",{id:"style-a-component"},"Style a component"),(0,a.kt)("p",null,"Customizing ",(0,a.kt)("strong",{parentName:"p"},"all component instances")," nested under a stylesheet using the imported ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/type-selectors#component-element"},"component type selector"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@st-import Comp from './comp.st.css';\n\n/* target Comp internal part */\n.root Comp::part {/* customize */}\n")),(0,a.kt)("h2",{id:"style-a-variant"},"Style a variant"),(0,a.kt)("p",null,"Customizing a variant class of a component by ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/extend-stylesheet"},"extending")," a class with the component stylesheet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="page.st.css"',title:'"page.st.css"'},"@st-import Comp from './comp.st.css';\n\n.compVariant {\n  /* set compVariant to inherit from Comp */\n  -st-extends: Comp;\n}\n/* target compVariant internal part (inherited from Comp) */\n.compVariant::part {/* customize */}\n")),(0,a.kt)("p",null,"Then set the variant class to the component instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="page.jsx"',title:'"page.jsx"'},"import Comp from './comp';\nimport { classes } from './page.st.css';\n\nconst Page = () => {\n  return (\n    <div>\n      /* customize Comp with compVariant class */\n      <Comp class={classes.compVariant}>\n    </div>\n  );\n};\n")),(0,a.kt)("h2",{id:"define"},"Define"),(0,a.kt)("p",null,"Any ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/class-selectors"},"CSS class")," that is exported from a stylesheet is accessible as a pseudo-element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="comp.st.css"',title:'"comp.st.css"'},"/* available as ::part for this stylesheet */\n.part {} \n")),(0,a.kt)("p",null,"Additionally a ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/custom-selectors"},"custom-selector")," defined within a stylesheet is exposed as a custom pseudo-element and will take precedence over a class with the same name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="comp.st.css"',title:'"comp.st.css"'},"/* available as ::part for this stylesheet\n   and preserves the direct child combinator\n   when used */\n@custom-selector :--part .root > .part; \n")),(0,a.kt)("admonition",{title:"Native pseudo-element override",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Override of native pseudo-elements is possible, however it is ",(0,a.kt)("strong",{parentName:"p"},"strongly discouraged"),".")),(0,a.kt)("h3",{id:"element-inheritance"},"Element inheritance"),(0,a.kt)("p",null,"An extending ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/root"},"stylesheet root")," automatically inherits any pseudo-elements from the extended definition, and can then override them by defining its own public parts."),(0,a.kt)("h2",{id:"build-transformation"},"Build transformation"),(0,a.kt)("p",null,"Custom pseudo-elements are transformed in build-time to target the internal selector they represent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="comp.st.css"',title:'"comp.st.css"'},".part {}\n@custom-selector :--directPart .root > .part; \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="page.st.css"',title:'"page.st.css"'},"@st-import Comp from './comp.st.css';\n\n.root {\n  -st-extends: Comp;\n}\n\n.root::part {}\n.root::directPart {}\n\n/* OUTPUT */\n.page__root .comp__part {}\n.page__root > .comp__part {}\n")))}m.isMDXComponent=!0}}]);