"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[9629],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=s,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3600:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(2122),s=n(9756),r=(n(7294),n(3905)),i=["components"],o={id:"state-parameter-types",sidebar_label:"Pseudo-Classes Parameters",title:"Parameter Types to Use with Pseudo-Classes",layout:"docs"},l=void 0,u={unversionedId:"references/state-parameter-types",id:"references/state-parameter-types",isDocsHomePage:!1,title:"Parameter Types to Use with Pseudo-Classes",description:"Custom pseudo-classes can either be simple or accept parameters.",source:"@site/docs/references/state-parameter-types.md",sourceDirName:"references",slug:"/references/state-parameter-types",permalink:"/docs/references/state-parameter-types",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/references/state-parameter-types.md",version:"current",frontMatter:{id:"state-parameter-types",sidebar_label:"Pseudo-Classes Parameters",title:"Parameter Types to Use with Pseudo-Classes",layout:"docs"},sidebar:"Specification Reference",previous:{title:"Pseudo-Classes",permalink:"/docs/references/pseudo-classes"},next:{title:"Pseudo-Elements",permalink:"/docs/references/pseudo-elements"}},p=[{value:"Tag",id:"tag",children:[]},{value:"Enum",id:"enum",children:[]},{value:"String",id:"string",children:[{value:"String validation optional",id:"string-validation-optional",children:[]}]},{value:"Number",id:"number",children:[{value:"Number validation optional",id:"number-validation-optional",children:[]}]},{value:"Future intent",id:"future-intent",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Custom ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/pseudo-classes"},"pseudo-classes")," can either be simple or accept parameters. "),(0,r.kt)("p",null,"A custom pseudo-class with no parameters is considered a ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/pseudo-classes#simple-custom-states"},"simple custom state"),"."),(0,r.kt)("p",null,"When defining a custom pseudo-class with a parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You must provide a type definition."),(0,r.kt)("li",{parentName:"ul"},"Optionally you can provide validation arguments to the type defined"),(0,r.kt)("li",{parentName:"ul"},"Optionally you can provide each state definition with a ",(0,r.kt)("inlineCode",{parentName:"li"},"default value"),", enabling it to be used without providing a parameter argument.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'.root {\n    -st-states: stateX([type]) [default Value?],\n                stateY([type]) [default Value?];\n}\n\n.root:stateX(arg) {}\n\n.root:stateX {\n    /* parameter resolves to "default Value", \n    if no default value was provided,\n    this will fail validation */\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When defining a ",(0,r.kt)("inlineCode",{parentName:"p"},"default value"),", you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/st-variables"},"variables")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/formatters"},"formatters"),"."))),(0,r.kt)("h2",{id:"tag"},"Tag"),(0,r.kt)("p",null,"You can define a custom state with a ",(0,r.kt)("strong",{parentName:"p"},"tags value")," (seperated by whitespace), and then target it using a pseudo-class selector with a matching ",(0,r.kt)("strong",{parentName:"p"},"tag argument"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'.root {\n    /* define a custom state called "cart" */\n    -st-states: cart( tag )\n}\n\n.root:cart(shirt) {\n    /* targets an element that has a state with a value that\n    is a whitespace-separated list of tags, \n    one of which is exactly the tag argument "shirt" */\n}\n')),(0,r.kt)("p",null,"Setting the state ",(0,r.kt)("strong",{parentName:"p"},"tag values")," in the view ",(0,r.kt)("inlineCode",{parentName:"p"},'<span className={style(classes.root, {cart: "shirt"})}>')," resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},'<span className="style__root style---cart-5-shirt" />'),"."),(0,r.kt)("h2",{id:"enum"},"Enum"),(0,r.kt)("p",null,"You can define a custom state with possible ",(0,r.kt)("strong",{parentName:"p"},"enum value")," options, and then target one of the options using a pseudo-class selector with a matching ",(0,r.kt)("strong",{parentName:"p"},"string argument"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'.root {\n    /* define the custom state "size" */\n    -st-states: size( enum(small, medium, large) )\n}\n\n.root:size(medium) {\n    /* target an element with a state value of "medium" */\n}\n\n.root:size(huge) {\n   /* invalid because "huge" is not a one of the possible \n   values defined for the state "size" */\n}\n')),(0,r.kt)("p",null,"Setting the state's ",(0,r.kt)("strong",{parentName:"p"},"enum value")," in the view ",(0,r.kt)("inlineCode",{parentName:"p"},'<span className={style(classes.root, {size: "medium"})}>')," resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},'<span className="style--size-medium" />'),"."),(0,r.kt)("h2",{id:"string"},"String"),(0,r.kt)("p",null,"You can define a custom state with a ",(0,r.kt)("strong",{parentName:"p"},"string value"),", and then target it using a pseudo-class selector with a matching ",(0,r.kt)("strong",{parentName:"p"},"string argument"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'.root {\n    /* define the "selected" custom state with a string parameter type */\n    -st-states: selected( string );\n}\n\n.root:selected(username) {\n    /* target an element with a state value that \n    is exactly the string argument "username" */\n}\n')),(0,r.kt)("p",null,"Setting the state ",(0,r.kt)("strong",{parentName:"p"},"string value")," in the view ",(0,r.kt)("inlineCode",{parentName:"p"},'<span className={style(classes.root, {selected: "username"})}>')," resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},'<span className="style--selected-username" />'),"."),(0,r.kt)("h3",{id:"string-validation-optional"},"String validation ","[optional]"),(0,r.kt)("p",null,"You can optionally pass a regular expression string as an argument to add validation for the pseudo-class selector ",(0,r.kt)("strong",{parentName:"p"},"string argument"),". The regular expression must be within quotes."),(0,r.kt)("p",null,"You can optionally pass a regular expression function (",(0,r.kt)("inlineCode",{parentName:"p"},"regex()"),") to the string type to add regular expression validation for the pseudo-class selector.\nThis function accepts a single expression to be tested against the selector parameter. The expression must be within quotes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'.root {\n    /* validates that the targeting string argument begins with "user" */\n    -st-states: selected( string(regex("^user")) );\n}\n\n/* a valid argument */\n.root:selected(username) {}\n\n/* invalid because it doesn\'t match the regular expression "^user" */\n.root:selected(index) {}\n')),(0,r.kt)("p",null,"String type can also accept several other validations, including ",(0,r.kt)("inlineCode",{parentName:"p"},"minLength(number)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"maxLength(number)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"contains(string)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".root {\n    /* validates the targeting string arguments with multiple validations */\n    -st-states: selected( \n                    string( \n                        minLength(2), \n                        maxLength(10), \n                        contains(user) \n                    ) \n                );\n}\n\n/* valid argument */\n.root:selected(username) {}\n\n/* invalid due to minLength(2) & contains(user) */\n.root:selected(x) {}\n")),(0,r.kt)("h2",{id:"number"},"Number"),(0,r.kt)("p",null,"You can define a custom state with a ",(0,r.kt)("strong",{parentName:"p"},"number value"),", and then target it using a pseudo-class selector with a matching ",(0,r.kt)("strong",{parentName:"p"},"number argument"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<span data-column="5" />\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'.root {\n    /* define the custom pseudo-class "column" */\n    -st-states: column( number )\n}\n\n.root:column(5) {\n    /* target an element with a state value that is exactly the number argument "5" */\n}\n')),(0,r.kt)("p",null,"Setting the state ",(0,r.kt)("strong",{parentName:"p"},"number value")," in the view ",(0,r.kt)("inlineCode",{parentName:"p"},"<span className={style(classes.root, {column: 5})}>")," resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},'<span className="style---column-1-5" />'),"."),(0,r.kt)("h3",{id:"number-validation-optional"},"Number validation ","[optional]"),(0,r.kt)("p",null,"You can use several validators that the number type provides."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'.root {\n    /* validates the targeting number argument */\n    -st-states: column( number( min(2), max(6), multipleOf(2) ) )\n}\n\n/* valid arguments */\n.root:column(2),\n.root:column(4),\n.root:column(6) {}\n\n/* invalid because not a "multipleOf(2)" */\n.root:column(3),\n.root:column(5) {}\n\n/* invalid because of "min(2)" and "max(6)" validations */\n.root:column(1),\n.root:column(7) {}\n')),(0,r.kt)("h2",{id:"future-intent"},"Future intent"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/stylable/issues/268"},"Custom user types and validations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/stylable/issues/270"},'Custom pseudo-class type "nth"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/stylable/issues/269"},"Multiple named parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/stylable/issues/271"},"Custom pseudo-class string prefixes")),(0,r.kt)("li",{parentName:"ul"},"Lang type - use attribute selector ",(0,r.kt)("inlineCode",{parentName:"li"},'[state|="en"]')," to support language code")))}m.isMDXComponent=!0}}]);