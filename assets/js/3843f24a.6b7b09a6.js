"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[8316],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3219:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),s=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"components-basics",title:"Component Basics"},i=void 0,p={unversionedId:"guides/components-basics",id:"guides/components-basics",isDocsHomePage:!1,title:"Component Basics",description:"This guide walks you through the basics of how to style and work with components using Stylable.",source:"@site/docs/guides/components-basics.md",sourceDirName:"guides",slug:"/guides/components-basics",permalink:"/docs/guides/components-basics",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/guides/components-basics.md",tags:[],version:"current",frontMatter:{id:"components-basics",title:"Component Basics"},sidebar:"Guides",next:{title:"Component Best Practices",permalink:"/docs/guides/component-best-practices"}},c=[{value:"1. Style a component",id:"1-style-a-component",children:[]},{value:"2. Expose the component&#39;s Stylable API",id:"2-expose-the-components-stylable-api",children:[{value:"A. Create and expose internal parts",id:"a-create-and-expose-internal-parts",children:[]},{value:"B. Create and expose states",id:"b-create-and-expose-states",children:[]}]},{value:"See also:",id:"see-also",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide walks you through the basics of how to style and work with components using ",(0,o.kt)("strong",{parentName:"p"},"Stylable"),". "),(0,o.kt)("p",null,"You use ",(0,o.kt)("strong",{parentName:"p"},"Stylable")," with a component file (for example using React), along with a ",(0,o.kt)("strong",{parentName:"p"},"Stylable")," CSS file that has the extension ",(0,o.kt)("inlineCode",{parentName:"p"},".st.css"),"."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide shows the ",(0,o.kt)("inlineCode",{parentName:"p"},"JSX")," side of our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/stylable/tree/master/packages/webpack-plugin"},"@stylable/webpack-plugin")," integration with React. "))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Stylable")," styles are similar to a type-system. Once you have declared that a CSS class is of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," for example, ",(0,o.kt)("strong",{parentName:"p"},"Stylable")," knows its internal structure and can match its internal parts and states."),(0,o.kt)("p",null,"Whether creating your own components or using components you imported from a 3rd party, you want to be able to access and style the internal parts of every component in the scope of your page or application. "),(0,o.kt)("h2",{id:"1-style-a-component"},"1. Style a component"),(0,o.kt)("p",null,"Let's say you have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," component with a render function per this example. You can style its JSX using the ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," property straight from the style object, or by executing the style ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/runtime"},"runtime function")," (see the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," node as an example)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/* button.jsx */\nimport * as React from 'react';\nimport { style, classes } from './button.st.css';\n\nclass Button {\n    constructor(props) {\n        super(props);\n    }\n\n    render () {\n        return (\n            <button className={style(classes.root, this.props.className) } >\n                <span className={classes.icon} />\n                <span className={classes.label} >Submit</span>\n            </button>\n        );\n    }\n}\n")),(0,o.kt)("p",null,"Now in the component's ",(0,o.kt)("strong",{parentName:"p"},"Stylable")," CSS file called ",(0,o.kt)("inlineCode",{parentName:"p"},"button.st.css"),", you can declare each of the classes as a ruleset as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* button.st.css */\n\n/* \n * note that all of these classes are placed manually on the DOM \n * using the Stylable integration in the component logic,\n * in this case, button.tsx\n*/\n.root { \n    background: #b0e0e6;\n}\n\n.icon {\n    /* set image height and display: block */ \n    background-image: url('./assets/btnIcon.svg');\n}\n\n.label {\n    font-size: 1.2em;\n    color: rgba(81, 12, 68, 1.0)\n}\n")),(0,o.kt)("h2",{id:"2-expose-the-components-stylable-api"},"2. Expose the component's Stylable API"),(0,o.kt)("p",null,"When using ",(0,o.kt)("strong",{parentName:"p"},"Stylable"),", every component exposes an API that's usable by its parent components."),(0,o.kt)("p",null,"The API includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pseudo-elements"),": any HTML element that has the className attribute, and is therefore exposed via a ",(0,o.kt)("a",{parentName:"li",href:"/docs/references/pseudo-elements"},"pseudo-element"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pseudo-classes"),": any state connected to the component logic, and declared as a ",(0,o.kt)("a",{parentName:"li",href:"/docs/references/pseudo-classes"},"pseudo-class"),".")),(0,o.kt)("p",null,"Let's see how to create your own parts and states and expose them for use throughout a page or application."),(0,o.kt)("h3",{id:"a-create-and-expose-internal-parts"},"A. Create and expose internal parts"),(0,o.kt)("p",null,"In the example above, you created a very simple button component. Now let's ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/imports"},"import")," this button into a ",(0,o.kt)("inlineCode",{parentName:"p"},"Panel")," component. The classes that you created above are available as pseudo-elements of the imported component."),(0,o.kt)("p",null,"You can now style your ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," in the scope of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Panel")," so that it fits its needs."),(0,o.kt)("p",null,"Let's take the ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," component and import it into the JSX file, and also add it to the render:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/* panel.jsx */\nimport * as React from 'react';\nimport { Button } from '../button';\nimport { style, classes } from './panel.st.css';\n\nexport const Panel = () => (\n    <div className={style(classes.root, this.props.className) } >\n        <Button className={classes.cancelBtn} />\n    </div>\n);\n")),(0,o.kt)("p",null,"Let's also import ",(0,o.kt)("inlineCode",{parentName:"p"},"Button"),"'s stylesheet into the ",(0,o.kt)("inlineCode",{parentName:"p"},"Panel")," stylesheet. You can then target the internal parts of the component that you imported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* panel.st.css */\n:import {\n    -st-from: './button.st.css';\n    -st-default: Button;\n}\n.root {}\n\n/* cancelBtn is of type Button */\n.cancelBtn { \n    -st-extends: Button;\n    background: cornflowerblue;\n}\n\n/* targets the label of <Button className={style.cancelBtn} /> */\n.cancelBtn::label { \n    color: honeydew;\n    font-weight: bold;\n}\n")),(0,o.kt)("h3",{id:"b-create-and-expose-states"},"B. Create and expose states"),(0,o.kt)("p",null,"You can also create custom states for the component that are available as ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/pseudo-classes"},"pseudo-classes")," to anyone using your component."),(0,o.kt)("p",null,"A custom pseudo-class can be used to reflect any logical state of your component. For example, your ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," has a state called ",(0,o.kt)("inlineCode",{parentName:"p"},"on"),". In this example, it is toggled when the button is clicked."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/* button.jsx */\nimport * as React from 'react';\nimport { style, classes } from './button.st.css';\n\nclass Button {\n    constructor(props) {\n        super(props);\n\n        this.state = {\n            on: false\n        };\n    }\n    render () {\n        return (\n            <button className={style(classes.root, { on: this.state.on }, this.props.className) } \n                    onClick={() => this.setState({ on: !this.state.on })} >\n                <span className={classes.icon} />\n                <span className={classes.label} >Submit</span>\n            </button>\n        );\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* button.st.css */\n.root {\n    -st-states: on;\n    background: #b0e0e6;\n}\n/* targets the state on the root of the component */\n.root:on { \n    box-shadow: 2px 2px 2px 1px darkslateblue;\n}\n.icon {\n    background-image: url(./assets/btnIcon.svg);\n}\n.label {\n    font-size: 1.2em;\n    color: rgba(81, 12, 68, 1.0)\n}\n")),(0,o.kt)("p",null,"You can then target ",(0,o.kt)("inlineCode",{parentName:"p"},"Button"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," state in your ",(0,o.kt)("inlineCode",{parentName:"p"},"panel")," component as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* panel.st.css */\n.cancelBtn {\n    background: cornflowerblue;\n}\n.cancelBtn:on {\n    box-shadow: 2px 2px 2px 1px indigo;\n}\n")),(0,o.kt)("h2",{id:"see-also"},"See also:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/stylable-application"},"Building an Application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/stylable-component-library"},"Building a Component Library")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/references/cheatsheet"},"Stylable Cheatsheet"))))}m.isMDXComponent=!0}}]);