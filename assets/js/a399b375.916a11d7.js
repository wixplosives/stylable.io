"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[2919],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(g,s(s({ref:t},d),{},{components:n})):i.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1796:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],o={id:"typescript-integration",title:"TypeScript Integration"},l=void 0,p={unversionedId:"getting-started/typescript-integration",id:"getting-started/typescript-integration",title:"TypeScript Integration",description:"Stylable requires .st.css stylesheets to be imported into your .ts/*.tsx files for class names, states, variables, or keyframes to be applied to your components.",source:"@site/docs/getting-started/typescript-integration.md",sourceDirName:"getting-started",slug:"/getting-started/typescript-integration",permalink:"/docs/getting-started/typescript-integration",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/getting-started/typescript-integration.md",tags:[],version:"current",frontMatter:{id:"typescript-integration",title:"TypeScript Integration"},sidebar:"Discover",previous:{title:"React Integration",permalink:"/docs/getting-started/react-integration"},next:{title:"Storybook Integration",permalink:"/docs/getting-started/storybook-integration"}},d=[{value:"1. Declaring global stylesheet typings",id:"1-declaring-global-stylesheet-typings",children:[],level:2},{value:"2. Generating stylesheet definition files",id:"2-generating-stylesheet-definition-files",children:[{value:"Generating source-maps",id:"generating-source-maps",children:[],level:3},{value:"Development mode",id:"development-mode",children:[],level:3},{value:"Publishing",id:"publishing",children:[],level:3},{value:"ESlint Stylable plugin vs. generated definition files",id:"eslint-stylable-plugin-vs-generated-definition-files",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Stylable requires ",(0,r.kt)("inlineCode",{parentName:"p"},"*.st.css")," stylesheets to be imported into your ",(0,r.kt)("inlineCode",{parentName:"p"},"*.ts/*.tsx")," files for class names, states, variables, or keyframes to be applied to your components."),(0,r.kt)("p",null,"By default, TypeScript has no way of knowing what\u2019s inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"*.st.css")," file, so you must define a type for it. To create your global declarations (loose mode) and/or to generate type definition files (strict mode), follow the steps in the sections below."),(0,r.kt)("h2",{id:"1-declaring-global-stylesheet-typings"},"1. Declaring global stylesheet typings"),(0,r.kt)("p",null,"The first type definition you should include in your project is a general purpose ",(0,r.kt)("inlineCode",{parentName:"p"},"*.st.css")," global declaration. This provides a broad signature of a Stylable stylesheet."),(0,r.kt)("p",null,"To do this, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"globals.d.ts")," file in your ",(0,r.kt)("inlineCode",{parentName:"p"},"./src")," directory and add the following declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// globals.d.ts\ndeclare module "*.st.css" {\n  export * from "@stylable/runtime/stylesheet";\n\n  const defaultExport: unknown;\n  export default defaultExport;\n}\n')),(0,r.kt)("h2",{id:"2-generating-stylesheet-definition-files"},"2. Generating stylesheet definition files"),(0,r.kt)("p",null,"Stylable provides the ability to generate type definition files (",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts"),") for any stylesheet. These serve as static typings for each export that the stylesheet provides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"class"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"var"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"stVar"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"keyframe")," - exposes available symbols defined within the stylesheet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"st"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"style"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"cssStates")," - exposes stylesheet utility functions typed according to states defined within stylesheet")),(0,r.kt)("p",null,"These files are generated by using our ",(0,r.kt)("inlineCode",{parentName:"p"},"@stylable/cli"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"stc --dts\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are consuming stylesheets that do not have ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," files, the global type definition will serve as a fallback type."))),(0,r.kt)("h3",{id:"generating-source-maps"},"Generating source-maps"),(0,r.kt)("p",null,"In addition to generating ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," files, you can also generate source-maps (",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts.map"),")."),(0,r.kt)("p",null,"These source-maps will map the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," file back to the source stylesheet (",(0,r.kt)("inlineCode",{parentName:"p"},".st.css"),") so that you can jump to definitions in your stylesheets straight from your TypeScript files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"stc --dts --dtsSourceMap\n")),(0,r.kt)("h3",{id:"development-mode"},"Development mode"),(0,r.kt)("p",null,"To have a good experience when working locally in dev mode, we recommend generating both the definition files and their source-maps using our ",(0,r.kt)("inlineCode",{parentName:"p"},"watch")," service."),(0,r.kt)("p",null,"This ensures that as you are working your code, validations, completions and other language-service capabilities will remain up-to-date."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"stc --dts --dtsSourceMap -w --cjs false\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Generating both definition and source-map files for every stylesheet in a project can clutter the project up. For this reason, we recommend adding the generated ",(0,r.kt)("inlineCode",{parentName:"p"},"*.st.css.d.ts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"*.st.css.d.ts.map")," files to your ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," file, and only include them in your published packages."))),(0,r.kt)("h3",{id:"publishing"},"Publishing"),(0,r.kt)("p",null,"If you publish any ",(0,r.kt)("inlineCode",{parentName:"p"},"*.st.css")," files in your package, you should also publish the ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts.map")," files alongside them. This practice leads to a better experience for users consuming your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'stc --outDir="dist" --stcss --dts --dtsSourceMap\n')),(0,r.kt)("h3",{id:"eslint-stylable-plugin-vs-generated-definition-files"},"ESlint Stylable plugin vs. generated definition files"),(0,r.kt)("p",null,"There is an overlap of functionality between the Stylable ESlint plugin and the generated ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," files - both solutions validate stylesheet export usages. The ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," file approach is superior, howevever, as it offers better validations, completions and correctness. All it requires is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"watch")," service be running."),(0,r.kt)("p",null,"In conclusion, if you are generating definition files, you can remove the ESlint Stylable plugin and suffer no degredation in development experience."))}u.isMDXComponent=!0}}]);