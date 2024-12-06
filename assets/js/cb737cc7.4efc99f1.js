"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[242],{4734:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"guides/handbook/import-class","title":"Import Class","description":"In the Runtime chapter, we saw how a Stylable stylesheet\'s API can be imported into a JavaScript module, and how that API can be used. In this chapter, we\'ll see how our game example can be divided into linked stylesheet modules to provide a better development experience.","source":"@site/docs/guides/handbook/import.mdx","sourceDirName":"guides/handbook","slug":"/guides/handbook/import-class","permalink":"/docs/guides/handbook/import-class","draft":false,"unlisted":false,"editUrl":"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/handbook/import.mdx","tags":[],"version":"current","frontMatter":{"id":"import-class","title":"Import Class"},"sidebar":"Guides","previous":{"title":"Runtime","permalink":"/docs/guides/handbook/runtime"},"next":{"title":"Extend","permalink":"/docs/guides/handbook/extend"}}');var a=t(4848),r=t(8453),o=t(2250);const i={id:"import-class",title:"Import Class"},l=void 0,c={},d=[{value:"Stylesheet root",id:"stylesheet-root",level:2},{value:"Default import",id:"default-import",level:2},{value:"Stylesheet root selector",id:"stylesheet-root-selector",level:3},{value:"Class named import",id:"class-named-import",level:2},{value:"Validations",id:"validations",level:3},{value:"Exported by default",id:"exported-by-default",level:3},{value:"Further import use-cases",id:"further-import-use-cases",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["In the ",(0,a.jsx)(s.a,{href:"/docs/guides/handbook/runtime",children:"Runtime chapter"}),", we saw how a Stylable stylesheet's API can be imported into a JavaScript module, and how that API can be used. In this chapter, we'll see how our game example can be divided into linked stylesheet modules to provide a better development experience."]}),"\n","\n",(0,a.jsxs)(s.p,{children:["Up to this point, we've talked mostly about a single stylesheet for our project (",(0,a.jsx)(s.code,{children:"game.st.css"}),"). Now we'll explore how to organize our code across multiple stylesheets."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Current status:"})}),"\n","\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-css",metastring:'title="game.st.css"',children:".board { /* ... */ }\n\n.player {\n  -st-states: registered, \n              ranking(enum(first, second, third));\n  background: blue;\n}\n"})}),"\n","\n",(0,a.jsx)(s.h2,{id:"stylesheet-root",children:"Stylesheet root"}),"\n",(0,a.jsxs)(s.p,{children:["Let's refactor the ",(0,a.jsx)(s.code,{children:"player"})," class from out of our ",(0,a.jsx)(s.code,{children:"game.st.css"})," to be in its own stylesheet."]}),"\n","\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-css",metastring:'title="player.st.css"',children:".root {\n  -st-states: registered,\n              ranking(enum(first, second, third));\n  background: blue;\n}\n"})}),"\n","\n",(0,a.jsxs)(s.p,{children:["We created a new ",(0,a.jsx)(s.code,{children:"player.st.css"})," file above, and in it, created a new ",(0,a.jsx)(s.code,{children:".root"})," class. Then we moved the contents of the ",(0,a.jsx)(s.code,{children:".player"})," class rules to our new ",(0,a.jsx)(s.code,{children:"root"})," class."]}),"\n",(0,a.jsx)(s.admonition,{title:"default root class",type:"info",children:(0,a.jsxs)(s.p,{children:["In Stylable, each component stylesheet is represented by a ",(0,a.jsx)(s.code,{children:"root"})," class that is automatically created, even if not explicitly defined by the user. This root class is expected to be applied to the ",(0,a.jsx)(s.a,{href:"/docs/references/root",children:"root element of the component"}),"."]})}),"\n","\n",(0,a.jsxs)(s.p,{children:["We can see that when we moved the ",(0,a.jsx)(s.code,{children:"player"})," class, we also included its styling declarations. This might cause additional work in the future when trying to customize this class from the outside."]}),"\n",(0,a.jsx)(s.admonition,{title:"base style recommendation",type:"tip",children:(0,a.jsxs)(s.p,{children:["Stylable recommends that a component's stylesheet include minimal styling - only what is crucial for the functionality of the component or defines its structure. To follow this best practice, we need a way to import the ",(0,a.jsx)(s.code,{children:"player.st.css"})," stylesheet over to ",(0,a.jsx)(s.code,{children:"game.st.css"}),", and perform our styling customizations there."]})}),"\n",(0,a.jsx)(s.h2,{id:"default-import",children:"Default import"}),"\n",(0,a.jsxs)(s.p,{children:["Keep in mind that, as we saw earlier in the ",(0,a.jsx)(s.a,{href:"/docs/guides/handbook/namespacing#supported-symbols",children:"Namespacing chapter"}),", classes in Stylable are automatically namespaced. This means that if we wish to target a class from another stylesheet in a selector, we need to import it to link to it."]}),"\n",(0,a.jsxs)(s.p,{children:["Below, we import the ",(0,a.jsx)(s.code,{children:"player.st.css"})," stylesheet and customize it by using the ",(0,a.jsx)(s.code,{children:"@st-import"})," at-rule, and providing it with a ",(0,a.jsx)(s.strong,{children:"local name"})," for the default export (beginning with a capital letter) and a ",(0,a.jsx)(s.strong,{children:"request"})," to the target stylesheet. Then we move any customizations out of ",(0,a.jsx)(s.code,{children:"player.st.css"})," into ",(0,a.jsx)(s.code,{children:"game.st.css"}),"."]}),"\n","\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-css",metastring:'title="game.st.css - moved player customization"',children:'@st-import Player from "./player.st.css";\n\n.board { /* ... */ }\n\nPlayer {\n  background: blue; /* moved from player.st.css */\n}\n'})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)(s.p,{children:"Namespacing output"})}),(0,a.jsx)(o.A,{title:"game.st.css",language:"css",children:'@st-import Player from "./player.st.css";  \n\n/* namespaced locally */\n.game__board { /* ... */ } \n\n/* namespaced by player.st.css */\n.player__root {            \nbackground: blue;\n}'})]}),"\n","\n",(0,a.jsx)(s.h3,{id:"stylesheet-root-selector",children:"Stylesheet root selector"}),"\n",(0,a.jsxs)(s.p,{children:["It's important to note that a default import of a Stylable stylesheet represents a component root, and is in fact pointing to the ",(0,a.jsx)(s.code,{children:"root"})," class of that stylesheet."]}),"\n",(0,a.jsxs)(s.admonition,{title:"Unscoped warning",type:"caution",children:[(0,a.jsxs)(s.p,{children:["By importing the default export of a stylesheet and then styling it, we are potentially customizing every instance of the component across our project. It is therefore ",(0,a.jsx)(s.strong,{children:"strongly recommended"})," to scope any selector that originates from a different namespace (stylesheet) or includes native elements with a local class."]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-css",children:'@st-import Player from "./player.st.css";\n\n/* report unscoped warnings */\nPlayer {}\ndiv {}\n\n/* no warnings */\n.root Player {}\n.root div {}\n'})})]}),"\n",(0,a.jsx)(s.h2,{id:"class-named-import",children:"Class named import"}),"\n",(0,a.jsxs)(s.p,{children:["For the next step, we would like to add ",(0,a.jsx)(s.code,{children:"avatar"})," and ",(0,a.jsx)(s.code,{children:"username"})," parts to ",(0,a.jsx)(s.code,{children:"player.st.css"}),". These will be applied to the inner elements of the component, and are assumed to be nested under the ",(0,a.jsx)(s.code,{children:"root"})," class."]}),"\n","\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-css",metastring:'title="player.st.css - added avatar and username"',children:".root {\n  -st-states: registered,\n              ranking(enum(first, second, third));\n}\n.avatar {}\n.username {}\n"})}),"\n","\n",(0,a.jsx)(s.p,{children:"We then proceed to bind these new classes to their matching elements in the component."}),"\n","\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-jsx",metastring:'title="player.jsx - bind avatar and username"',children:'import { st, classes } from "./player.st.css";\n\nconst Player = ({ className }) => {\n  return (\n    <div className={st(classes.root, { /* states */ }, className)}>\n      <image className={classes.avatar} />\n      <span className={classes.username}></span>\n    </div>\n  )\n}\n'})}),"\n","\n",(0,a.jsxs)(s.p,{children:["Now that we have these new classes, we can customize them externally through ",(0,a.jsx)(s.code,{children:"game.st.css"}),". We do this by adding two ",(0,a.jsx)(s.code,{children:"named imports"}),", inside square brackets, that link to our classes."]}),"\n","\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-css",metastring:'title="game.st.css - player customization"',children:'@st-import Player, [avatar, username] from "./player.st.css";\n\nPlayer {\n  /* paint the Player component background blue */\n  background: blue;\n}\nPlayer .avatar {\n  /* circle avatar */\n  border-radius: 50%;\n}\nPlayer .username {\n  /* all caps username */\n  text-transform: uppercase;\n}\n'})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)(s.p,{children:"Namespacing output - selectors only"})}),(0,a.jsx)(o.A,{title:"game.st.css",language:"css",children:'@st-import Player, [avatar, username] from "./player.st.css";  \n\n.player__root {}\n.player__root .player__avatar {}\n.player__root .player__username {}'})]}),"\n","\n",(0,a.jsx)(s.h3,{id:"validations",children:"Validations"}),"\n",(0,a.jsx)(s.p,{children:"One of the nice things that we gain by using these Stylable imports is that requested symbols are validated, and we'll be notified if any of the imported parts are not found."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-css",metastring:'title="game.st.css - missing import"',children:'/* report an error about an unknown "missingImport" symbol */\n@st-import [missingImport] from "./player.st.css";\n'})}),"\n",(0,a.jsx)(s.h3,{id:"exported-by-default",children:"Exported by default"}),"\n",(0,a.jsx)(s.p,{children:"Any classes and other symbols defined in a stylesheet are automatically exported and available for import."}),"\n",(0,a.jsx)(s.admonition,{title:"Explicit exports",type:"note",children:(0,a.jsxs)(s.p,{children:["We are in the process of developing ",(0,a.jsx)(s.a,{href:"https://github.com/wix/stylable/issues/2604",children:"explicit export support"}),", and will expand this section once available."]})}),"\n",(0,a.jsx)(s.h2,{id:"further-import-use-cases",children:"Further import use-cases"}),"\n",(0,a.jsx)(s.p,{children:"Up to this point, we've only needed to import classes between stylesheets. In later chapters of this guide, we will learn how to import and use additional symbols, as well as additional import use cases from JavaScript to our stylesheet."}),"\n",(0,a.jsxs)(s.p,{children:["Check out the API cheatsheet to see various ",(0,a.jsx)(s.a,{href:"../../references/cheatsheet#module-system",children:"@st-import"})," examples."]}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.p,{children:"In this chapter, we've seen how to divide a stylesheet to separate modules, and how to customize those externally. We approached doing this by manually importing each class (default or named), and customizing them together using a selector."}),"\n",(0,a.jsxs)(s.p,{children:["In the ",(0,a.jsx)(s.a,{href:"./extend",children:"Next chapter"}),", we'll learn how Stylable can extend stylesheets, exposing their inner parts as an API to make our lives easier."]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);