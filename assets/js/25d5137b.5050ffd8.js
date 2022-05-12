"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[2303],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9497:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],l={id:"stylable-component-library",title:"Create a Stylable Component Library",sidebar_label:"Stylable Component Library"},i=void 0,c={unversionedId:"guides/stylable-component-library",id:"guides/stylable-component-library",title:"Create a Stylable Component Library",description:"Here are some guidelines we gathered related to this project that you may be interested in following if you build your own library.",source:"@site/docs/guides/stylable-component-library.md",sourceDirName:"guides",slug:"/guides/stylable-component-library",permalink:"/docs/guides/stylable-component-library",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/stylable-component-library.md",tags:[],version:"current",frontMatter:{id:"stylable-component-library",title:"Create a Stylable Component Library",sidebar_label:"Stylable Component Library"},sidebar:"Guides",previous:{title:"Stylable Application",permalink:"/docs/guides/stylable-application"},next:{title:"Project Commons",permalink:"/docs/guides/project-commons"}},p={},m=[{value:"Recommended folder structure",id:"recommended-folder-structure",level:2},{value:"The <code>project.st.css</code> file",id:"the-projectstcss-file",level:2},{value:"Customizable components",id:"customizable-components",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here are some guidelines we gathered related to this project that you may be interested in following if you build your own library."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Stylable")," enables you to author a component library, that can be themed, and easily consumed and styled, by other ",(0,a.kt)("strong",{parentName:"p"},"Stylable")," projects.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Stylable")," is the styling, CSS side of working with components. For the ",(0,a.kt)("strong",{parentName:"p"},"Stylable")," CSS to be fully useful, it must integrate with a component library from another source, for example React."),(0,a.kt)("h2",{id:"recommended-folder-structure"},"Recommended folder structure"),(0,a.kt)("p",null,"As a best practice, we recommend following this folder structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"src/\n    |\n    --- components/\n    |   |\n    |   --- my-component/\n    |   |   |\n    |   |   my-component.jsx\n    |   |   my-component.st.css\n    |   |\n    |   project.st.css\n    |\n    --- themes/\n    |   |\n    |   backoffice-theme.st.css\n    |   app-theme.st.css\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"src/components")," folder contains:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"a project stylesheet describing the project CSS API"),(0,a.kt)("li",{parentName:"ul"},"a folder for each component with its stylable stylesheet"))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"src/themes")," folder contains the relevant theme files.")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Although you may think the project file should be at the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," level, we recommend you to create the ",(0,a.kt)("inlineCode",{parentName:"p"},"project.st.css")," file at the same level as your components because there are many links between this file and your component files."))),(0,a.kt)("h2",{id:"the-projectstcss-file"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"project.st.css")," file"),(0,a.kt)("p",null,"As a first step, create a ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/project-commons"},"project commons stylesheet")," named ",(0,a.kt)("inlineCode",{parentName:"p"},"project.st.css")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components")," directory. This exposes the API for the project. "),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is recommended to leave the project's CSS rulesets empty with no declarations. These should be defined in a theme file. "))),(0,a.kt)("h2",{id:"customizable-components"},"Customizable components"),(0,a.kt)("p",null,"Your components should be as easy to style as possible. We recommend following these guidelines when planning: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Expose a good style API and its ",(0,a.kt)("a",{parentName:"li",href:"/docs/references/pseudo-classes"},"custom states"),". "),(0,a.kt)("li",{parentName:"ul"},"The component API should contain the minimum styling required for the component to function. For example some components may require layout. "),(0,a.kt)("li",{parentName:"ul"},"The effect of CSS combinations is not always easy to understood and styles are generally less tested, therefore, we recommend adding comments that explain the reason for unclear CSS."),(0,a.kt)("li",{parentName:"ul"},"Reusable ",(0,a.kt)("a",{parentName:"li",href:"/docs/references/st-variables"},"vars")," should be declared outside of the component. The component can use vars for common values that are less likely to be override-able."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"/docs/guides/component-variants"},"component variants")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/guides/shared-classes"},"shared classes")," from the project file (",(0,a.kt)("inlineCode",{parentName:"li"},"project.st.css"),").")),(0,a.kt)("p",null,"More best practices for themable components can be found in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/component-best-practices"},(0,a.kt)("strong",{parentName:"a"},"Stylable")," component best practices guide"),"."),(0,a.kt)("p",null,"In the following code, you can see a component described with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 colors used from project"),(0,a.kt)("li",{parentName:"ul"},"1 shared class ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'/* app.st.css */\n@namespace "App";\n\n@st-import [color1, color2, emphasisBox] from "../project.st.css";\n\n.root {\n    color: value(color1);\n    background: value(color2);\n}\n.messageBox {\n    /* append emphasisBox CSS class to messageBox JS output */\n    -st-extends: emphasisBox;\n}\n')),(0,a.kt)("p",null,"Read more about using themes in ",(0,a.kt)("a",{parentName:"p",href:"./stylable-application#apply-component-library-theme"},"theme an application"),"."))}d.isMDXComponent=!0}}]);