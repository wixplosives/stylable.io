"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[4382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),c=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,y=m["".concat(r,".").concat(u)]||m[u]||d[u]||s;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const s={id:"component-best-practices",title:"Stylable Component - Best Practices",sidebar_label:"Component Best Practices"},i=void 0,l={unversionedId:"guides/component-best-practices",id:"guides/component-best-practices",title:"Stylable Component - Best Practices",description:"Stylable components should be easily stylable and themable from the outside. This means that the stylesheet describing the component CSS should be as simple and generic as possible, and should expose a clear and concise API for its internal parts.",source:"@site/docs/guides/component-best-practices.md",sourceDirName:"guides",slug:"/guides/component-best-practices",permalink:"/docs/guides/component-best-practices",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/component-best-practices.md",tags:[],version:"current",frontMatter:{id:"component-best-practices",title:"Stylable Component - Best Practices",sidebar_label:"Component Best Practices"},sidebar:"Guides",previous:{title:"Extend",permalink:"/docs/guides/handbook/extend"},next:{title:"Project Commons",permalink:"/docs/guides/project-commons"}},r={},c=[{value:"Avoid size declarations",id:"avoid-size-declarations",level:2},{value:"Give meaningful names",id:"give-meaningful-names",level:2},{value:"Avoid global settings in your stylesheet",id:"avoid-global-settings-in-your-stylesheet",level:2},{value:"Keep your layout minimal",id:"keep-your-layout-minimal",level:2},{value:"Keep coloring to a minimum",id:"keep-coloring-to-a-minimum",level:2},{value:"Keep browser defaults intact",id:"keep-browser-defaults-intact",level:2},{value:"Keep specificity low",id:"keep-specificity-low",level:2},{value:"Keep your selectors as simple as possible",id:"keep-your-selectors-as-simple-as-possible",level:2},{value:"Justify your CSS declarations in comments",id:"justify-your-css-declarations-in-comments",level:2},{value:"Use consistent variables from a central location",id:"use-consistent-variables-from-a-central-location",level:2},{value:"Keep SVG and images overridable",id:"keep-svg-and-images-overridable",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Stylable")," components should be easily stylable and themable from the outside. This means that the stylesheet describing the component CSS should be as ",(0,a.kt)("strong",{parentName:"p"},"simple")," and ",(0,a.kt)("strong",{parentName:"p"},"generic")," as possible, and should expose a clear and concise API for its internal parts."),(0,a.kt)("p",null,"When building your components, we recommend following the guidelines below that we've collected through our work with ",(0,a.kt)("strong",{parentName:"p"},"Stylable"),":"),(0,a.kt)("h2",{id:"avoid-size-declarations"},"Avoid size declarations"),(0,a.kt)("p",null,"Try avoiding size declaration just because it offers an easier API. To override a component specifying size limitations, you would need to override multiple CSS declarations."),(0,a.kt)("p",null,"If you do set a default size or size limitations, use ",(0,a.kt)("inlineCode",{parentName:"p"},"em/rem")," units to resize to the HTML context."),(0,a.kt)("h2",{id:"give-meaningful-names"},"Give meaningful names"),(0,a.kt)("p",null,"Give meaningful class names that will make sense as part of a selector. Any CSS class selector can be targeted from the outside as a ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/pseudo-elements"},(0,a.kt)("inlineCode",{parentName:"a"},"pseudo-element"))," and should be considered part of the component API."),(0,a.kt)("p",null,"Use camelCase and avoid hyphens (-) and capital letters at the beginning."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* good */\nGallery::navbtn::label {\n} /* camelCase with clear pseudo-element names  */\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* bad */\nGallery::gallerynavbtn {\n} /* it is better to reuse the generic component id */\nGallery::nav-btn {\n} /* don't use kebab-case - stylable exports JS */\n")),(0,a.kt)("h2",{id:"avoid-global-settings-in-your-stylesheet"},"Avoid global settings in your stylesheet"),(0,a.kt)("p",null,"Try avoiding global-related selectors like ",(0,a.kt)("inlineCode",{parentName:"p"},"@media")," or matching DOM outside the component scope like ",(0,a.kt)("inlineCode",{parentName:"p"},"body"),". These would potentially cause side effects if others use them."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/references/type-selectors"},"Element type selectors")," should be avoided inside a component because they affect any nested component or element. The exception to this is when specifically targeting the element with ",(0,a.kt)("strong",{parentName:"p"},"child selector")," (for example ",(0,a.kt)("inlineCode",{parentName:"p"},".root > p"),") and not a ",(0,a.kt)("strong",{parentName:"p"},"descendant selector")," (for example ",(0,a.kt)("inlineCode",{parentName:"p"},".root p"),")."),(0,a.kt)("h2",{id:"keep-your-layout-minimal"},"Keep your layout minimal"),(0,a.kt)("p",null,"While internal structure does demand some CSS to work correctly, you should strive to find the minimal combination of CSS to make the component layout work as it should."),(0,a.kt)("h2",{id:"keep-coloring-to-a-minimum"},"Keep coloring to a minimum"),(0,a.kt)("p",null,"The component stylesheet should describe the bare minimum coloring to make its parts visible. Colors should be used sparingly, and just to achieve visibility."),(0,a.kt)("p",null,"The best practice is to make sure every color used for a text across the project has a sufficiently contrasting background."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".options {\n  background: value(color1);\n  color: value(color2);\n}\n")),(0,a.kt)("h2",{id:"keep-browser-defaults-intact"},"Keep browser defaults intact"),(0,a.kt)("p",null,'Browsers add a default user agent stylesheet to provide the HTML with a default "style".'),(0,a.kt)("p",null,'It is tempting to "clean up" a ',(0,a.kt)("inlineCode",{parentName:"p"},"button"),"'s default style in the component. But, we want our component to \"blend in\" in every context it's used. A button element in our component should look like other button tags in the context of the application where it is used."),(0,a.kt)("p",null,"As such, when building a component, it is best to set CSS only for behaviors that ",(0,a.kt)("strong",{parentName:"p"},"must")," be overridden for the component to function."),(0,a.kt)("h2",{id:"keep-specificity-low"},"Keep specificity low"),(0,a.kt)("p",null,"Write low specificity selectors that will be easy to override from a parent component."),(0,a.kt)("h2",{id:"keep-your-selectors-as-simple-as-possible"},"Keep your selectors as simple as possible"),(0,a.kt)("p",null,"It takes a more complex selector to override a high specificity selector that was defined in a component stylesheet."),(0,a.kt)("p",null,"Override CSS only for behaviors that ",(0,a.kt)("strong",{parentName:"p"},"must")," be overridden for the component to function, and minimize the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"element type selectors")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pseudo-elements")," of nested components."),(0,a.kt)("p",null,"Styling pseudo-elements in a component creates a selector that takes more specificity to override"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="gallery.st.css"',title:'"gallery.st.css"'},"/* \n> directly style navBtn - a type of button\nselector: .comp__gallery .gallery__navBtn\nspecificity: 0,0,2,0 \n*/\n.gallery::navbtn {}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="page.st.css"',title:'"page.st.css"'},"/* \n> less specific than component override \nselector: .page__root button\nspecificity: 0,0,1,1\n*/\n.root button {}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For the ",(0,a.kt)("inlineCode",{parentName:"p"},"button")," selector, we manually added the ",(0,a.kt)("inlineCode",{parentName:"p"},".root")," class to avoid overriding ",(0,a.kt)("inlineCode",{parentName:"p"},"button")," outside this scope.")),(0,a.kt)("h2",{id:"justify-your-css-declarations-in-comments"},"Justify your CSS declarations in comments"),(0,a.kt)("p",null,"A good way to validate minimal CSS is to add comments. There should be a few words clarifying why a certain declaration or rule set combination is found in the stylesheet. We recommend you justify any special overrides or interactions with a comment per this example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".link {\n  display: block;\n  /* override default anchor color */\n  color: currentColor;\n}\n")),(0,a.kt)("p",null,"This helps with maintenance and development, since we don't test CSS as thoroughly as other code."),(0,a.kt)("h2",{id:"use-consistent-variables-from-a-central-location"},"Use consistent variables from a central location"),(0,a.kt)("p",null,"Import CSS or Stylable variables from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/project-commons"},"project commons stylesheet"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'@st-import [color1, --font-small] from "./project.st.css";\n\n.item {\n  background: value(color1);\n  font-size: var(--font-small);\n}\n')),(0,a.kt)("h2",{id:"keep-svg-and-images-overridable"},"Keep SVG and images overridable"),(0,a.kt)("p",null,"When using an image element source or SVG directly in the DOM, it is not easy, and in some cases not possible, to modify the asset from outside the component using CSS."),(0,a.kt)("p",null,"When an asset is part of the style API, it should be placed in the background of an element, allowing it to be overridden from a parent component."))}d.isMDXComponent=!0}}]);