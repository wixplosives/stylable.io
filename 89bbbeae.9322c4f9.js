(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return l})),a.d(n,"metadata",(function(){return s})),a.d(n,"toc",(function(){return o})),a.d(n,"default",(function(){return m}));var t=a(3),i=a(7),r=(a(0),a(127)),l={id:"mixins",title:"Mixins"},s={unversionedId:"references/mixins",id:"references/mixins",isDocsHomePage:!1,title:"Mixins",description:"Stylable mixins enable you to reuse complex styles and CSS behaviors, defined in CSS or Javascript, and apply them to any style-rule during build time.",source:"@site/docs/references/mixins.md",slug:"/references/mixins",permalink:"/stylable.io/docs/references/mixins",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/references/mixins.md",version:"current",sidebar:"someSidebar",previous:{title:"Custom Selectors",permalink:"/stylable.io/docs/references/custom-selectors"},next:{title:"Formatters",permalink:"/stylable.io/docs/references/formatters"}},o=[{value:"CSS mixins",id:"css-mixins",children:[{value:"CSS mixin with parameters and variables",id:"css-mixin-with-parameters-and-variables",children:[]}]},{value:"Partial CSS mixins",id:"partial-css-mixins",children:[{value:"Example",id:"example",children:[]},{value:"Example",id:"example-1",children:[]}]},{value:"JavaScript mixins",id:"javascript-mixins",children:[{value:"JavaScript mixins returning multiple style-rules",id:"javascript-mixins-returning-multiple-style-rules",children:[]}]},{value:"How mixins are applied",id:"how-mixins-are-applied",children:[]},{value:"Considerations when using mixins",id:"considerations-when-using-mixins",children:[{value:"Mixin usage with special characters",id:"mixin-usage-with-special-characters",children:[]},{value:"Circular references",id:"circular-references",children:[]}]}],c={toc:o};function m(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Stylable")," mixins enable you to reuse complex styles and CSS behaviors, defined in CSS or Javascript, and apply them to any style-rule during build time. "),Object(r.b)("p",null,"Here are some examples of when you can use mixins:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Presets/Variants - create reusable pieces of styling CSS"),Object(r.b)("li",{parentName:"ul"},"Layouts - easily describe complex layouts"),Object(r.b)("li",{parentName:"ul"},"Effects - easily describe complex effects"),Object(r.b)("li",{parentName:"ul"},"Macros - use code to define the CSS macros you need")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you need to return only a single declaration value using code, we recommend instead using ",Object(r.b)("a",{parentName:"p",href:"/stylable.io/docs/references/formatters"},"formatters"),". "))),Object(r.b)("h2",{id:"css-mixins"},"CSS mixins"),Object(r.b)("p",null,"Any CSS stylesheet, class or element that is defined in a ",Object(r.b)("strong",{parentName:"p"},"Stylable")," CSS file can be used as a mixin source. You can use either a local class or element, or import the mixin from a different stylesheet."),Object(r.b)("p",null,"In the following example, a locally defined class is used as a mixin in the same stylesheet."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},".style-mixin {\n    color: green;\n    background: yellow;\n}\n.someClass {\n    -st-mixin: style-mixin;     \n}  \n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.someClass {\n    color: green; /* from local mixin */\n    background: yellow; /* from local mixin */\n}  \n")),Object(r.b)("p",null,"Here is an example of a ",Object(r.b)("strong",{parentName:"p"},"Stylable")," CSS file that is imported and mixed into the classes of a different stylesheet. The ",Object(r.b)("inlineCode",{parentName:"p"},".rootMixedIn")," class as a stylesheet and ",Object(r.b)("inlineCode",{parentName:"p"},"classMixedIn")," as a class."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"/* mixins.st.css */\n.root {\n    color: purple;\n}\n\n.someClass {\n    color: green;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"/* example.st.css - imports the above mixin */\n:import {\n    -st-from: './mixins.st.css';\n    -st-default: MixRoot;\n    -st-named: someClass;\n}\n\n.rootMixedIn {\n    -st-mixin: MixRoot; /* stylesheet mixin */\n}\n\n.classMixedIn {\n    -st-mixin: someClass; /* class mixin */\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.rootMixedIn {\n    color: purple; /* from stylesheet mixin */\n}\n\n.rootMixedIn .someClass { /* ruleset added as a result of the stylesheet mixin */\n    color: green;\n}\n\n.classMixedIn {\n    color: green; /* from class mixin */\n}\n")),Object(r.b)("h3",{id:"css-mixin-with-parameters-and-variables"},"CSS mixin with parameters and variables"),Object(r.b)("p",null,"CSS mixins can accept named parameters in the following format:\n",Object(r.b)("inlineCode",{parentName:"p"},"mixin(variableName valueOverride, variableName2 valueOverride2)"),".\nMultiple variables can be comma separated or written on multiple lines:\n",Object(r.b)("inlineCode",{parentName:"p"},"mixin (\n     variableName valueOverride,\n     variableName2 valueOverride2\n )")),Object(r.b)("p",null," Using parameters in a mixin enables you to override specific ",Object(r.b)("a",{parentName:"p",href:"/stylable.io/docs/references/st-variables"},"variables")," inside of a mixin before they are applied."),Object(r.b)("p",null,"Here is an example of using a variable in a CSS mixin and how it can be overridden by the mixin's parameter value."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},":vars {\n    color1: green;\n}\n\n.classToMixin {\n    background: value(color1);\n}\n\n.targetClass {\n    -st-mixin: classToMixin(color1 orange);\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.classToMixin {\n    background: green; /* from local class */\n}\n\n.targetClass {\n    background: orange; /* from mixin with override */\n}\n")),Object(r.b)("h2",{id:"partial-css-mixins"},"Partial CSS mixins"),Object(r.b)("p",null,"Partial CSS Mixins (",Object(r.b)("inlineCode",{parentName:"p"},"-st-partial-mixin"),") is a continuation of the idea of mixins with parameter overrides. (as described above)"),Object(r.b)("p",null,"Where a regular ",Object(r.b)("inlineCode",{parentName:"p"},"-st-mixin")," includes all declarations inside the targeted mixed-in class, partial mixins enable you to pass through overriding variable values and mix in only declarations that would be affected by such an override. "),Object(r.b)("p",null,"For a partial mixin to work, at least one overriding variable must be provided, additional ones being optional."),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},":vars {\n    color1: red;\n    color2: green;\n}\n\n.my-mixin {\n    background: value(color1);\n    color: value(color2);\n}\n\n.container {\n    -st-partial-mixin: my-mixin(color1 gold);\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"/* output */\n.container {\n    background: gold;\n}\n")),Object(r.b)("p",null,"A partial mixin will include any declaration in the mixed-in class (or rules containing the mixed-in class) that contains a variable usage that will be overridden. Any other variables not overridden inside the mixed in declaration will retain their original values."),Object(r.b)("h3",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},":vars {\n    color1: red;\n    color2: green;\n    size1: 2px;\n}\n\n.my-mixin {\n    background: value(color1);\n    color: value(color2);\n}\n\n.my-mixin .part {\n    border: value(size1) solid value(color2);\n}\n\n.container {\n    -st-partial-mixin: my-mixin(color1 gold, size1 5px);\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"/* output */\n.container {\n    background: gold;\n}\n\n.container .part {\n    border: 5px solid green;\n}\n")),Object(r.b)("h2",{id:"javascript-mixins"},"JavaScript mixins"),Object(r.b)("p",null,"JavaScript mixins allow you to create complex structures in CSS based on the arguments passed to the mixin. "),Object(r.b)("p",null,"A JS mixin returns a CSS fragment which can contain multiple declarations with optional sub style-rules."),Object(r.b)("p",null,"Arguments are passed to the mixin as a string argument and it's the mixin's responsibility to parse them."),Object(r.b)("p",null,"Here is an example of a mixin receiving multiple arguments and returning multiple declarations into the target ruleset."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"/* file my-mixin.js */\nmodule.exports = function colorAndBg([color, bgColor]){ \n    /* arguments: array of string types */\n\n    return {\n        color: color,\n        background: bgColor\n    }\n};\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"/* file example.st.css */\n:import {\n    -st-from: './my-mixin';\n    -st-default: colorAndBg;\n}\n\n.codeMixedIn {\n    -st-mixin: colorAndBg(green, orange); \n    font-family: monospace;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.codeMixedIn {\n    color: green; /* from JS mixin */\n    background: orange; /* from JS mixin */\n    font-family: monospace; /* from local class */\n}\n")),Object(r.b)("h3",{id:"javascript-mixins-returning-multiple-style-rules"},"JavaScript mixins returning multiple style-rules"),Object(r.b)("p",null,"Mixins can return multiple style-rules that are mixed into the target stylesheet. These style-rules can be written with the following syntax options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"selector")," - resulting ruleset is appended as a descendent selector to its mixed in target (in below example ",Object(r.b)("inlineCode",{parentName:"li"},".otherClass"),") "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"&selector")," - resulting ruleset references the parent selector into which it was mixed in (in below example ",Object(r.b)("inlineCode",{parentName:"li"},"&:hover"),", the parent selector is ",Object(r.b)("inlineCode",{parentName:"li"},".codeMixedIn"),")")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'/* file my-mixin.js */\nmodule.exports = function complexMixin([color, bgColor]){ \n    /* arguments: array of string types */\n\n    return {\n        color: color,\n        background: bgColor,\n        "&:hover": {\n            color: "gold"\n        },\n        ".otherClass": {\n            color: "purple"\n        }\n    }\n};\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"/* file example.st.css */\n:import {\n    -st-from: './my-mixin';\n    -st-default: complexMixin;\n}\n\n.codeMixedIn {\n    -st-mixin: complexMixin(green, orange); \n    font-family: monospace;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.codeMixedIn {\n    color: green; /* from JS mixin */\n    background: orange; /* from JS mixin */\n    font-family: monospace; /* from local class */\n}\n\n.codeMixedIn:hover { /* from JS mixin with & */\n    color: gold; \n}\n\n.codeMixedIn .otherClass { /* from JS mixin with appended selector */\n    color: purple; \n}\n")),Object(r.b)("h2",{id:"how-mixins-are-applied"},"How mixins are applied"),Object(r.b)("p",null,"Mixins can add CSS declarations to the CSS ruleset to which they are applied."),Object(r.b)("p",null,"Rules are added at the position in the CSS where the ",Object(r.b)("inlineCode",{parentName:"p"},"-st-mixin")," is declared.\nAny selectors that are appended as a result of the mixin are added directly after the ruleset that the mixin was applied to."),Object(r.b)("p",null,"You can apply multiple mixins from either CSS or JavaScript, or both separated by comma ",Object(r.b)("inlineCode",{parentName:"p"},"-st-mixin: mixinA, mixinB"),".\nMultiple mixins are applied according to the order that they are declared left to right."),Object(r.b)("h2",{id:"considerations-when-using-mixins"},"Considerations when using mixins"),Object(r.b)("p",null,"Take a look at these considerations before working with ",Object(r.b)("strong",{parentName:"p"},"Stylable")," mixins."),Object(r.b)("h3",{id:"mixin-usage-with-special-characters"},"Mixin usage with special characters"),Object(r.b)("p",null,"You can escape special characters by wrapping them with quotes or using a backslash (",Object(r.b)("inlineCode",{parentName:"p"},"\\"),"). "),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},'.x { /* use quotations to include comma */\n    -st-mixin: mix(300, "xx,x"); /* ["300", "xx,x"] */\n}\n')),Object(r.b)("p",null,"They can also be used to include quotes or backslashes as part of the parameter."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},'.y { /* escape slashes */\n    -st-mixin: mix(300, "\\"xxx\\""); /* ["300", "\\"xxx\\""] */\n}\n')),Object(r.b)("h3",{id:"circular-references"},"Circular references"),Object(r.b)("p",null,"It is possible to reach a state where you have circular references between mixins. These cannot be resolved, and a diagnostics warning is issued in your ",Object(r.b)("strong",{parentName:"p"},"Stylable")," code intelligence and build process."))}m.isMDXComponent=!0},127:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return u}));var t=a(0),i=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),m=function(e){var n=i.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=m(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(a),d=t,u=p["".concat(l,".").concat(d)]||p[d]||b[d]||r;return a?i.a.createElement(u,s(s({ref:n},c),{},{components:a})):i.a.createElement(u,s({ref:n},c))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:t,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);