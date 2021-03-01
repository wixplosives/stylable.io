(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),s=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createContext({}),p=function(e){var t=s.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(r,".").concat(m)]||b[m]||u[m]||o;return n?s.a.createElement(d,l(l({ref:t},i),{},{components:n})):s.a.createElement(d,l({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var i=2;i<o;i++)r[i]=n[i];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),s=n(7),o=(n(0),n(126)),r={id:"components-basics",title:"Component Basics"},l={unversionedId:"guides/components-basics",id:"guides/components-basics",isDocsHomePage:!1,title:"Component Basics",description:"This guide walks you through the basics of how to style and work with components using Stylable.",source:"@site/docs/guides/components-basics.md",slug:"/guides/components-basics",permalink:"/stylable.io/docs/guides/components-basics",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/guides/components-basics.md",version:"current",sidebar:"someSidebar",previous:{title:"Stylable Intelligence",permalink:"/stylable.io/docs/getting-started/stylable-intelligence"},next:{title:"Stylable Component - Best Practices",permalink:"/stylable.io/docs/guides/component-best-practices"}},c=[{value:"1. Style a component",id:"1-style-a-component",children:[]},{value:"2. Expose the component&#39;s Stylable API",id:"2-expose-the-components-stylable-api",children:[{value:"A. Create and expose internal parts",id:"a-create-and-expose-internal-parts",children:[]},{value:"B. Create and expose states",id:"b-create-and-expose-states",children:[]}]},{value:"See also:",id:"see-also",children:[]}],i={toc:c};function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide walks you through the basics of how to style and work with components using ",Object(o.b)("strong",{parentName:"p"},"Stylable"),". "),Object(o.b)("p",null,"You use ",Object(o.b)("strong",{parentName:"p"},"Stylable")," with a component file (for example using React), along with a ",Object(o.b)("strong",{parentName:"p"},"Stylable")," CSS file that has the extension ",Object(o.b)("inlineCode",{parentName:"p"},".st.css"),"."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This guide shows the ",Object(o.b)("inlineCode",{parentName:"p"},"JSX")," side of our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wix/stylable/tree/master/packages/webpack-plugin"},"@stylable/webpack-plugin")," integration with React. "))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Stylable")," styles are similar to a type-system. Once you have declared that a CSS class is of the type ",Object(o.b)("inlineCode",{parentName:"p"},"Button")," for example, ",Object(o.b)("strong",{parentName:"p"},"Stylable")," knows its internal structure and can match its internal parts and states."),Object(o.b)("p",null,"Whether creating your own components or using components you imported from a 3rd party, you want to be able to access and style the internal parts of every component in the scope of your page or application. "),Object(o.b)("h2",{id:"1-style-a-component"},"1. Style a component"),Object(o.b)("p",null,"Let's say you have a ",Object(o.b)("inlineCode",{parentName:"p"},"Button")," component with a render function per this example. You can style its JSX using the ",Object(o.b)("inlineCode",{parentName:"p"},"className")," property straight from the style object, or by executing the style ",Object(o.b)("a",{parentName:"p",href:"/stylable.io/docs/guides/runtime"},"runtime function")," (see the ",Object(o.b)("inlineCode",{parentName:"p"},"root")," node as an example)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"/* button.jsx */\nimport * as React from 'react';\nimport { style, classes } from './button.st.css';\n\nclass Button {\n    constructor(props) {\n        super(props);\n    }\n\n    render () {\n        return (\n            <button className={style(classes.root, this.props.className) } >\n                <span className={classes.icon} />\n                <span className={classes.label} >Submit</span>\n            </button>\n        );\n    }\n}\n")),Object(o.b)("p",null,"Now in the component's ",Object(o.b)("strong",{parentName:"p"},"Stylable")," CSS file called ",Object(o.b)("inlineCode",{parentName:"p"},"button.st.css"),", you can declare each of the classes as a ruleset as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},"/* button.st.css */\n\n/* \n * note that all of these classes are placed manually on the DOM \n * using the Stylable integration in the component logic,\n * in this case, button.tsx\n*/\n.root { \n    background: #b0e0e6;\n}\n\n.icon {\n    /* set image height and display: block */ \n    background-image: url('./assets/btnIcon.svg');\n}\n\n.label {\n    font-size: 1.2em;\n    color: rgba(81, 12, 68, 1.0)\n}\n")),Object(o.b)("h2",{id:"2-expose-the-components-stylable-api"},"2. Expose the component's Stylable API"),Object(o.b)("p",null,"When using ",Object(o.b)("strong",{parentName:"p"},"Stylable"),", every component exposes an API that's usable by its parent components."),Object(o.b)("p",null,"The API includes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Pseudo-elements"),": any HTML element that has the className attribute, and is therefore exposed via a ",Object(o.b)("a",{parentName:"li",href:"/stylable.io/docs/references/pseudo-elements"},"pseudo-element"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Pseudo-classes"),": any state connected to the component logic, and declared as a ",Object(o.b)("a",{parentName:"li",href:"/stylable.io/docs/references/pseudo-classes"},"pseudo-class"),".")),Object(o.b)("p",null,"Let's see how to create your own parts and states and expose them for use throughout a page or application."),Object(o.b)("h3",{id:"a-create-and-expose-internal-parts"},"A. Create and expose internal parts"),Object(o.b)("p",null,"In the example above, you created a very simple button component. Now let's ",Object(o.b)("a",{parentName:"p",href:"/stylable.io/docs/references/imports"},"import")," this button into a ",Object(o.b)("inlineCode",{parentName:"p"},"Panel")," component. The classes that you created above are available as pseudo-elements of the imported component."),Object(o.b)("p",null,"You can now style your ",Object(o.b)("inlineCode",{parentName:"p"},"Button")," in the scope of the ",Object(o.b)("inlineCode",{parentName:"p"},"Panel")," so that it fits its needs."),Object(o.b)("p",null,"Let's take the ",Object(o.b)("inlineCode",{parentName:"p"},"Button")," component and import it into the JSX file, and also add it to the render:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"/* panel.jsx */\nimport * as React from 'react';\nimport { Button } from '../button';\nimport { style, classes } from './panel.st.css';\n\nexport const Panel = () => (\n    <div className={style(classes.root, this.props.className) } >\n        <Button className={classes.cancelBtn} />\n    </div>\n);\n")),Object(o.b)("p",null,"Let's also import ",Object(o.b)("inlineCode",{parentName:"p"},"Button"),"'s stylesheet into the ",Object(o.b)("inlineCode",{parentName:"p"},"Panel")," stylesheet. You can then target the internal parts of the component that you imported:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},"/* panel.st.css */\n:import {\n    -st-from: './button.st.css';\n    -st-default: Button;\n}\n.root {}\n\n/* cancelBtn is of type Button */\n.cancelBtn { \n    -st-extends: Button;\n    background: cornflowerblue;\n}\n\n/* targets the label of <Button className={style.cancelBtn} /> */\n.cancelBtn::label { \n    color: honeydew;\n    font-weight: bold;\n}\n")),Object(o.b)("h3",{id:"b-create-and-expose-states"},"B. Create and expose states"),Object(o.b)("p",null,"You can also create custom states for the component that are available as ",Object(o.b)("a",{parentName:"p",href:"/stylable.io/docs/references/pseudo-classes"},"pseudo-classes")," to anyone using your component."),Object(o.b)("p",null,"A custom pseudo-class can be used to reflect any logical state of your component. For example, your ",Object(o.b)("inlineCode",{parentName:"p"},"Button")," has a state called ",Object(o.b)("inlineCode",{parentName:"p"},"on"),". In this example, it is toggled when the button is clicked."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"/* button.jsx */\nimport * as React from 'react';\nimport { style, classes } from './button.st.css';\n\nclass Button {\n    constructor(props) {\n        super(props);\n\n        this.state = {\n            on: false\n        };\n    }\n    render () {\n        return (\n            <button className={style(classes.root, { on: this.state.on }, this.props.className) } \n                    onClick={() => this.setState({ on: !this.state.on })} >\n                <span className={classes.icon} />\n                <span className={classes.label} >Submit</span>\n            </button>\n        );\n    }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},"/* button.st.css */\n.root {\n    -st-states: on;\n    background: #b0e0e6;\n}\n/* targets the state on the root of the component */\n.root:on { \n    box-shadow: 2px 2px 2px 1px darkslateblue;\n}\n.icon {\n    background-image: url(./assets/btnIcon.svg);\n}\n.label {\n    font-size: 1.2em;\n    color: rgba(81, 12, 68, 1.0)\n}\n")),Object(o.b)("p",null,"You can then target ",Object(o.b)("inlineCode",{parentName:"p"},"Button"),"'s ",Object(o.b)("inlineCode",{parentName:"p"},"on")," state in your ",Object(o.b)("inlineCode",{parentName:"p"},"panel")," component as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},"/* panel.st.css */\n.cancelBtn {\n    background: cornflowerblue;\n}\n.cancelBtn:on {\n    box-shadow: 2px 2px 2px 1px indigo;\n}\n")),Object(o.b)("h2",{id:"see-also"},"See also:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/stylable.io/docs/guides/stylable-application"},"Building an Application")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/stylable.io/docs/guides/stylable-component-library"},"Building a Component Library")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/stylable.io/docs/references/cheatsheet"},"Stylable Cheatsheet"))))}p.isMDXComponent=!0}}]);