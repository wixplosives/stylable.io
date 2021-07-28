"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[5158],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=s,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var i=2;i<r;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7747:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var o=n(2122),s=n(9756),r=(n(7294),n(3905)),a=["components"],l={id:"custom-selectors",title:"Custom Selectors"},c=void 0,i={unversionedId:"references/custom-selectors",id:"references/custom-selectors",isDocsHomePage:!1,title:"Custom Selectors",description:"You use custom selectors to define an alias that can match complex selectors.",source:"@site/docs/references/custom-selectors.md",sourceDirName:"references",slug:"/references/custom-selectors",permalink:"/docs/references/custom-selectors",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/references/custom-selectors.md",version:"current",frontMatter:{id:"custom-selectors",title:"Custom Selectors"},sidebar:"Specification Reference",previous:{title:"Global Selectors",permalink:"/docs/references/global-selectors"},next:{title:"Mixins",permalink:"/docs/references/mixins"}},p=[{value:"Usage",id:"usage",children:[{value:"Expose pseudo-element",id:"expose-pseudo-element",children:[]}]},{value:"Use cases",id:"use-cases",children:[{value:"Container and recursive components",id:"container-and-recursive-components",children:[]},{value:"Expose inner parts that are deeply defined",id:"expose-inner-parts-that-are-deeply-defined",children:[]},{value:"Combination selector",id:"combination-selector",children:[]},{value:"Group of selectors",id:"group-of-selectors",children:[]}]}],m={toc:p};function u(e){var t=e.components,n=(0,s.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You use ",(0,r.kt)("a",{parentName:"p",href:"https://drafts.csswg.org/css-extensions/#custom-selectors"},"custom selectors")," to define an alias that can match complex selectors. "),(0,r.kt)("p",null,"For example, a specific type of button within a form that appears only when hovered can be defined as a custom selector. By defining the button as a custom selector with its own name, the button is exposed in the API and available for use by using just the custom selector name."),(0,r.kt)("p",null,"You could also use custom selectors to define a group of selectors with one name. For example, you can access all the headings on a page as one custom selector. This could be useful if you want to style just their color the same."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The following code maps the alias name ",(0,r.kt)("inlineCode",{parentName:"p"},"controlBtn")," that matches any ",(0,r.kt)("inlineCode",{parentName:"p"},".btn")," CSS class nested under the ",(0,r.kt)("inlineCode",{parentName:"p"},".controls")," CSS class."),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Comp";\n@custom-selector :--controlBtn .controls .btn;\n/* \nselector: .Comp__controls .Comp__btn \n*/\n:--controlBtn { border: 1px solid grey; }\n/* \nselector: .Comp__controls .Comp__btn:hover \n*/\n:--controlBtn:hover { border-color: red; }\n')),(0,r.kt)("h3",{id:"expose-pseudo-element"},"Expose pseudo-element"),(0,r.kt)("p",null,"Custom selectors generate a ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/pseudo-elements"},"pseudo-element"),". So, for example, ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/imports"},"importing")," a stylesheet into another stylesheet enables access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"controlBtn")," pseudo-element. In this example, the stylesheet ",(0,r.kt)("inlineCode",{parentName:"p"},"comp.st.css")," from the previous example is imported into this stylesheet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Page";\n:import {\n    -st-from: "./comp.st.css";\n    -st-default: Comp;\n}\n/*\nselector: .Comp__root .Comp__controls .Comp__btn\n*/\nComp::controlBtn { \n    background: gold; \n}\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If a ",(0,r.kt)("inlineCode",{parentName:"p"},"custom-selector")," alias conflicts with a local CSS class name, the exposed ",(0,r.kt)("inlineCode",{parentName:"p"},"pseudo-element")," targets the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom-selector"),". However, the exported CSS class is still exported to JavaScript."))),(0,r.kt)("h2",{id:"use-cases"},"Use cases"),(0,r.kt)("p",null,"The following examples demonstrate how to effectively use custom selectors in ",(0,r.kt)("strong",{parentName:"p"},"Stylable"),"."),(0,r.kt)("h3",{id:"container-and-recursive-components"},"Container and recursive components"),(0,r.kt)("p",null,'Some components might contain nested instances of themselves because they\'re a container or a "recursive" component. For example, a tree component might render itself. '),(0,r.kt)("p",null,"If the component exposes any ",(0,r.kt)("inlineCode",{parentName:"p"},"pseudo-elements"),", it is a good practice to define them as ",(0,r.kt)("inlineCode",{parentName:"p"},"custom selectors")," with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors"},"child selectors")," to avoid affecting the inner parts of internal instances."),(0,r.kt)("p",null,"The following example shows how a tree component exposes an icon."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Tree";\n@custom-selector :--icon .root > .icon;\n')),(0,r.kt)("p",null,"Here you can use the icon ",(0,r.kt)("inlineCode",{parentName:"p"},"custom selector")," from the outside just like you would use any other ",(0,r.kt)("inlineCode",{parentName:"p"},"pseudo-element"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Panel";\n:import {\n    -st-from: "./tree.st.css";\n    -st-default: Tree;\n}\n/*\nselector: .Tree__root > .Tree__icon\n*/\nTree::icon {\n    background: yellow;  /* paints the icons all the way down the tree */\n}\n')),(0,r.kt)("h3",{id:"expose-inner-parts-that-are-deeply-defined"},"Expose inner parts that are deeply defined"),(0,r.kt)("p",null,"When you want to make internal parts of your component API more accessible, you can describe ",(0,r.kt)("inlineCode",{parentName:"p"},"pseudo-elements")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"custom selectors"),"."),(0,r.kt)("p",null,"For example, you can expose a ",(0,r.kt)("inlineCode",{parentName:"p"},"pseudo-element")," named ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationBtn")," that enables you to style an internal gallery component's ",(0,r.kt)("inlineCode",{parentName:"p"},"navBtn")," element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},':import {\n    -st-from: "./gallery.st.css";\n    -st-default: Gallery;\n}\n@custom-selector :--navigationBtn Gallery::navBtn;\n')),(0,r.kt)("h3",{id:"combination-selector"},"Combination selector"),(0,r.kt)("p",null,"You may have a component with several basic CSS classes and with corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"pseudo-elements"),". You could expose a combination ",(0,r.kt)("inlineCode",{parentName:"p"},"pseudo-element"),"."),(0,r.kt)("p",null,"For example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"pseudo-element")," named ",(0,r.kt)("inlineCode",{parentName:"p"},"navBtn")," matches any ",(0,r.kt)("inlineCode",{parentName:"p"},"btn")," CSS class nested in a ",(0,r.kt)("inlineCode",{parentName:"p"},"nav")," CSS class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Comp";\n@custom-selector :--navBtn .nav .btn;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Page";\n:import {\n    -st-from: "./comp.st.css";\n    -st-default: Comp;\n}\n/*\nselector: .Comp__root .Comp__nav .Comp__btn\n*/\nComp::navBtn { \n    border: 1px solid grey; \n}\n')),(0,r.kt)("h3",{id:"group-of-selectors"},"Group of selectors"),(0,r.kt)("p",null,"You could also use custom selectors to gather a collection of selectors into a single selector. For example, you may want to access media that includes both images and videos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Comp";\n@custom-selector :--media .image, .video;\n/*\nselector: \n.Comp__image, .Comp__video \n*/\n:--media { \n    border: 1px solid grey; \n}\n')),(0,r.kt)("h4",{id:"issues-to-consider"},"Issues to consider"),(0,r.kt)("p",null,"Aliasing multiple selectors in a ",(0,r.kt)("inlineCode",{parentName:"p"},"custom selector")," may generate lots of CSS that could affect performance."),(0,r.kt)("p",null,"For example, when you import the ",(0,r.kt)("inlineCode",{parentName:"p"},"Comp")," stylesheet (the selector described in the previous example) into another stylesheet, in the output the selector is split for each override."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Page";\n:import {\n    -st-from: "./comp.st.css";\n    -st-default: Comp;\n}\nComp::media { \n    border-color: red; \n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS Output */\n.Comp__root .Comp__image, \n.Comp__root .Comp__video {\n    border-color: red;\n}\n")))}u.isMDXComponent=!0}}]);