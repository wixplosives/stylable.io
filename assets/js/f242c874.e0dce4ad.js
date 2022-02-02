"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[5232],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,y=m["".concat(i,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(y,s(s({ref:t},d),{},{components:n})):a.createElement(y,s({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5900:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],l={id:"pseudo-elements",title:"Pseudo-Elements"},i=void 0,p={unversionedId:"references/pseudo-elements",id:"references/pseudo-elements",title:"Pseudo-Elements",description:"In addition to CSS's native pseudo-elements, Stylable stylesheets automatically expose CSS classes as custom pseudo-elements. This enables you to access internal parts of a component to apply styling.",source:"@site/docs/references/pseudo-elements.md",sourceDirName:"references",slug:"/references/pseudo-elements",permalink:"/docs/references/pseudo-elements",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/references/pseudo-elements.md",tags:[],version:"current",frontMatter:{id:"pseudo-elements",title:"Pseudo-Elements"},sidebar:"Specification Reference",previous:{title:"Pseudo-Classes Parameters",permalink:"/docs/references/state-parameter-types"},next:{title:"Global Selectors",permalink:"/docs/references/global-selectors"}},d=[{value:"Define a custom pseudo-element",id:"define-a-custom-pseudo-element",children:[],level:2},{value:"Style custom pseudo-elements",id:"style-custom-pseudo-elements",children:[],level:2},{value:"Extend stylesheet pseudo-elements",id:"extend-stylesheet-pseudo-elements",children:[],level:2},{value:"Override custom pseudo-elements",id:"override-custom-pseudo-elements",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In addition to CSS's native ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-elements"},"pseudo-elements"),", ",(0,r.kt)("strong",{parentName:"p"},"Stylable")," stylesheets automatically expose CSS classes as custom pseudo-elements. This enables you to access internal parts of a component to apply styling."),(0,r.kt)("h2",{id:"define-a-custom-pseudo-element"},"Define a custom pseudo-element"),(0,r.kt)("p",null,"Any ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/class-selectors"},"CSS class")," is accessible as a pseudo-element of an ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/extend-stylesheet"},"extending stylesheet"),"."),(0,r.kt)("p",null,"When you define a CSS class inside a component, in this case a ",(0,r.kt)("inlineCode",{parentName:"p"},"playButton")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"VideoPlayer"),", that class may be targeted as a pseudo-element of any class that extends the component ",(0,r.kt)("inlineCode",{parentName:"p"},"videoPlayer"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'/* video-player.st.css */\n@namespace "VideoPlayer";\n.root {}\n.playButton { \n    background: black; \n    color: white;\n}\n')),(0,r.kt)("h2",{id:"style-custom-pseudo-elements"},"Style custom pseudo-elements"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"::")," to access an internal part of a component after a ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/tag-selectors#component-element"},"custom tag selector")," or after an ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/extend-stylesheet"},"extended class selector"),"."),(0,r.kt)("p",null,"In this example, you ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/imports"},"import")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"VideoPlayer")," component into your stylesheet, and style an internal part called ",(0,r.kt)("inlineCode",{parentName:"p"},"playButton")," overriding its original styling."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "Page";\n@st-import VideoPlayer from "./video-player.st.css";\n.mainVideo {\n    -st-extends: VideoPlayer; /* define mainVideo as VideoPlayer */\n}\n.mainVideo::playButton { /* override mainVideo playButton */\n    background: green;\n    color: purple;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.Page__mainVideo.VideoPlayer__root {}\n.Page__mainVideo.VideoPlayer__root .VideoPlayer__playButton {\n    background: green;\n    color: purple;\n}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Custom pseudo-elements are not limited to the end of a selector like native pseudo-elements, and they can be chained. For example, you can access the label of a navigation button from a gallery: ",(0,r.kt)("inlineCode",{parentName:"p"},".myGallery::navBtn::label"),"."))),(0,r.kt)("h2",{id:"extend-stylesheet-pseudo-elements"},"Extend stylesheet pseudo-elements"),(0,r.kt)("p",null,"When a Stylable stylesheet ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/root"},"root")," extends another stylesheet, pseudo-elements are automatically exposed on the extending stylesheet and available inline."),(0,r.kt)("p",null,"In this example, the class ",(0,r.kt)("inlineCode",{parentName:"p"},"playButton")," is available from the original component file ",(0,r.kt)("inlineCode",{parentName:"p"},"video-player.css"),", and extended and styled in the ",(0,r.kt)("inlineCode",{parentName:"p"},"super-video-player.css")," stylesheet as a custom pseudo-element on the ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," class. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"page.css")," stylesheet can then extend ",(0,r.kt)("inlineCode",{parentName:"p"},"super-video-player.css")," and on the ",(0,r.kt)("inlineCode",{parentName:"p"},".mainPlayer")," class, style ",(0,r.kt)("inlineCode",{parentName:"p"},"playButton")," differently."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'/* super-video-player.st.css */\n@namespace "SuperVideoPlayer";\n@st-import VideoPlayer from "./video-player.st.css";\n.root {\n    -st-extends: VideoPlayer;\n}\n.root::playButton {\n    color: gold;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.SuperVideoPlayer__root.VideoPlayer__root {}\n.SuperVideoPlayer__root.VideoPlayer__root .VideoPlayer__playButton {\n    color: gold; \n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'/* page.st.css */\n@namespace "Page";\n@st-import SuperVideoPlayer from "./super-video-player.st.css";\n.mainPlayer {\n    -st-extends: SuperVideoPlayer;\n}\n.mainPlayer::playButton {\n    color: silver;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.Page__mainPlayer.SuperVideoPlayer__root {}\n.Page__mainPlayer.SuperVideoPlayer__root .VideoPlayer__playButton {\n    color: silver;\n}\n")),(0,r.kt)("h2",{id:"override-custom-pseudo-elements"},"Override custom pseudo-elements"),(0,r.kt)("p",null,"You can use CSS classes to override extended pseudo-elements. "),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can also override native pseudo-elements using ",(0,r.kt)("strong",{parentName:"p"},"Stylable's")," custom pseudo-elements but this is not recommended as it can lead to code that's confusing and hard to maintain."))),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," extends ",(0,r.kt)("inlineCode",{parentName:"p"},"VideoPlayer")," and so any class placed on the ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," overrides the pseudo-element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "SuperVideoPlayer";\n@st-import VideoPlayer from "./video-player.st.css";\n.root {\n    -st-extends: VideoPlayer;\n}\n.playButton { /* override VideoPlayer playButton */\n    color: gold;\n}\n.root::playButton {\n    color: grey;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.SuperVideoPlayer__root.VideoPlayer__root {}\n.SuperVideoPlayer__playButton { color: gold; }\n.SuperVideoPlayer__root.VideoPlayer__root .VideoPlayer__playButton { color: grey; }\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Overriding pseudo-elements changes the targeting in the overriding stylesheet and not in the stylesheet being extended."))))}m.isMDXComponent=!0}}]);