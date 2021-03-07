(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(s,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(u,i(i({ref:t},l),{},{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(127)),s={id:"react-integration",title:"React Integration"},i={unversionedId:"getting-started/react-integration",id:"getting-started/react-integration",isDocsHomePage:!1,title:"React Integration",description:"You can manually integrate Stylable with a React component as described below. You can also build your own helpers.",source:"@site/docs/getting-started/react-integration.md",slug:"/getting-started/react-integration",permalink:"/stylable.io/docs/getting-started/react-integration",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/getting-started/react-integration.md",version:"current",sidebar:"Discover",previous:{title:"Installation",permalink:"/stylable.io/docs/getting-started/install-configure"},next:{title:"Stylable Intelligence",permalink:"/stylable.io/docs/getting-started/stylable-intelligence"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can manually integrate ",Object(o.b)("strong",{parentName:"p"},"Stylable")," with a React component as described below. You can also build your own helpers."),Object(o.b)("p",null,"Before you begin, read the ",Object(o.b)("a",{parentName:"p",href:"/stylable.io/docs/guides/runtime"},"Runtime guide")," to understand the ",Object(o.b)("strong",{parentName:"p"},"Stylable")," runtime API."),Object(o.b)("p",null,"To manualy integrate ",Object(o.b)("strong",{parentName:"p"},"Stylable")," to a React component, you ",Object(o.b)("strong",{parentName:"p"},"must")," first mark the root element of the component:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import { style, classes } from "style.st.css";\n\nclass Comp extends React.Component {\n    render() {\n        return (\n            <div className={style(\n                classes.root, \n                { stateA: true, stateB: false },\n                this.props.className )}>\n            </div>\n        );\n    }\n}\n')),Object(o.b)("p",null,"The result of the above generates and adds the props needed to define the root element for styling:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Marks component root by setting the root target ",Object(o.b)("inlineCode",{parentName:"li"},"className")),Object(o.b)("li",{parentName:"ul"},"Sets component states using generated class names "),Object(o.b)("li",{parentName:"ul"},"Appends ",Object(o.b)("inlineCode",{parentName:"li"},"className")," override from component props to the root ",Object(o.b)("inlineCode",{parentName:"li"},"className")),Object(o.b)("li",{parentName:"ul"},"Custom or overridden component states are added via additional class names")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To enable external styling, we recommend passing the ",Object(o.b)("inlineCode",{parentName:"p"},"className")," prop. To make the component more stylable, we also recommend also merging the ",Object(o.b)("inlineCode",{parentName:"p"},"style")," prop."))),Object(o.b)("p",null,"All nodes, other than ",Object(o.b)("inlineCode",{parentName:"p"},"root"),", can be marked directly with the class mapping and the ",Object(o.b)("a",{parentName:"p",href:"../guides/runtime#custom-state-mapping"},"$cssStates")," function:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import { style, classes, cssStates } from "style.st.css";\n\nclass Comp extends React.Component {\n    render() {\n        return (\n            <div className={style(classes.root, {}, this.props.className) }>\n                <span className={classes.label} >\n                    Text\n                </span>\n                <span className={cssStates({ stateA: true })} >\n                    More Text\n                </span>\n            </div>\n        );\n    }\n}\n')))}p.isMDXComponent=!0}}]);