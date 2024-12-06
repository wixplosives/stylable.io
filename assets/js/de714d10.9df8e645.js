"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[4729],{7895:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"guides/component-best-practices","title":"Stylable Component - Best Practices","description":"Stylable components should be easily stylable and themable from the outside. This means that the stylesheet describing the component CSS should be as simple and generic as possible, and should expose a clear and concise API for its internal parts.","source":"@site/docs/guides/component-best-practices.md","sourceDirName":"guides","slug":"/guides/component-best-practices","permalink":"/docs/guides/component-best-practices","draft":false,"unlisted":false,"editUrl":"https://github.com/wixplosives/stylable.io/edit/master/docs/guides/component-best-practices.md","tags":[],"version":"current","frontMatter":{"id":"component-best-practices","title":"Stylable Component - Best Practices","sidebar_label":"Component Best Practices"},"sidebar":"Guides","previous":{"title":"Extend","permalink":"/docs/guides/handbook/extend"},"next":{"title":"Project Commons","permalink":"/docs/guides/project-commons"}}');var o=n(4848),i=n(8453);const l={id:"component-best-practices",title:"Stylable Component - Best Practices",sidebar_label:"Component Best Practices"},a=void 0,r={},c=[{value:"Avoid size declarations",id:"avoid-size-declarations",level:2},{value:"Give meaningful names",id:"give-meaningful-names",level:2},{value:"Avoid global settings in your stylesheet",id:"avoid-global-settings-in-your-stylesheet",level:2},{value:"Keep your layout minimal",id:"keep-your-layout-minimal",level:2},{value:"Keep coloring to a minimum",id:"keep-coloring-to-a-minimum",level:2},{value:"Keep browser defaults intact",id:"keep-browser-defaults-intact",level:2},{value:"Keep specificity low",id:"keep-specificity-low",level:2},{value:"Keep your selectors as simple as possible",id:"keep-your-selectors-as-simple-as-possible",level:2},{value:"Justify your CSS declarations in comments",id:"justify-your-css-declarations-in-comments",level:2},{value:"Use consistent variables from a central location",id:"use-consistent-variables-from-a-central-location",level:2},{value:"Keep SVG and images overridable",id:"keep-svg-and-images-overridable",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Stylable"})," components should be easily stylable and themable from the outside. This means that the stylesheet describing the component CSS should be as ",(0,o.jsx)(s.strong,{children:"simple"})," and ",(0,o.jsx)(s.strong,{children:"generic"})," as possible, and should expose a clear and concise API for its internal parts."]}),"\n",(0,o.jsxs)(s.p,{children:["When building your components, we recommend following the guidelines below that we've collected through our work with ",(0,o.jsx)(s.strong,{children:"Stylable"}),":"]}),"\n",(0,o.jsx)(s.h2,{id:"avoid-size-declarations",children:"Avoid size declarations"}),"\n",(0,o.jsx)(s.p,{children:"Try avoiding size declaration just because it offers an easier API. To override a component specifying size limitations, you would need to override multiple CSS declarations."}),"\n",(0,o.jsxs)(s.p,{children:["If you do set a default size or size limitations, use ",(0,o.jsx)(s.code,{children:"em/rem"})," units to resize to the HTML context."]}),"\n",(0,o.jsx)(s.h2,{id:"give-meaningful-names",children:"Give meaningful names"}),"\n",(0,o.jsxs)(s.p,{children:["Give meaningful class names that will make sense as part of a selector. Any CSS class selector can be targeted from the outside as a ",(0,o.jsx)(s.a,{href:"/docs/references/pseudo-elements",children:(0,o.jsx)(s.code,{children:"pseudo-element"})})," and should be considered part of the component API."]}),"\n",(0,o.jsx)(s.p,{children:"Use camelCase and avoid hyphens (-) and capital letters at the beginning."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-css",children:"/* good */\nGallery::navbtn::label {\n} /* camelCase with clear pseudo-element names  */\n"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-css",children:"/* bad */\nGallery::gallerynavbtn {\n} /* it is better to reuse the generic component id */\nGallery::nav-btn {\n} /* don't use kebab-case - stylable exports JS */\n"})}),"\n",(0,o.jsx)(s.h2,{id:"avoid-global-settings-in-your-stylesheet",children:"Avoid global settings in your stylesheet"}),"\n",(0,o.jsxs)(s.p,{children:["Try avoiding global-related selectors like ",(0,o.jsx)(s.code,{children:"@media"})," or matching DOM outside the component scope like ",(0,o.jsx)(s.code,{children:"body"}),". These would potentially cause side effects if others use them."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/references/type-selectors",children:"Element type selectors"})," should be avoided inside a component because they affect any nested component or element. The exception to this is when specifically targeting the element with ",(0,o.jsx)(s.strong,{children:"child selector"})," (for example ",(0,o.jsx)(s.code,{children:".root > p"}),") and not a ",(0,o.jsx)(s.strong,{children:"descendant selector"})," (for example ",(0,o.jsx)(s.code,{children:".root p"}),")."]}),"\n",(0,o.jsx)(s.h2,{id:"keep-your-layout-minimal",children:"Keep your layout minimal"}),"\n",(0,o.jsx)(s.p,{children:"While internal structure does demand some CSS to work correctly, you should strive to find the minimal combination of CSS to make the component layout work as it should."}),"\n",(0,o.jsx)(s.h2,{id:"keep-coloring-to-a-minimum",children:"Keep coloring to a minimum"}),"\n",(0,o.jsx)(s.p,{children:"The component stylesheet should describe the bare minimum coloring to make its parts visible. Colors should be used sparingly, and just to achieve visibility."}),"\n",(0,o.jsx)(s.p,{children:"The best practice is to make sure every color used for a text across the project has a sufficiently contrasting background."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-css",children:".options {\n  background: value(color1);\n  color: value(color2);\n}\n"})}),"\n",(0,o.jsx)(s.h2,{id:"keep-browser-defaults-intact",children:"Keep browser defaults intact"}),"\n",(0,o.jsx)(s.p,{children:'Browsers add a default user agent stylesheet to provide the HTML with a default "style".'}),"\n",(0,o.jsxs)(s.p,{children:['It is tempting to "clean up" a ',(0,o.jsx)(s.code,{children:"button"}),"'s default style in the component. But, we want our component to \"blend in\" in every context it's used. A button element in our component should look like other button tags in the context of the application where it is used."]}),"\n",(0,o.jsxs)(s.p,{children:["As such, when building a component, it is best to set CSS only for behaviors that ",(0,o.jsx)(s.strong,{children:"must"})," be overridden for the component to function."]}),"\n",(0,o.jsx)(s.h2,{id:"keep-specificity-low",children:"Keep specificity low"}),"\n",(0,o.jsx)(s.p,{children:"Write low specificity selectors that will be easy to override from a parent component."}),"\n",(0,o.jsx)(s.h2,{id:"keep-your-selectors-as-simple-as-possible",children:"Keep your selectors as simple as possible"}),"\n",(0,o.jsx)(s.p,{children:"It takes a more complex selector to override a high specificity selector that was defined in a component stylesheet."}),"\n",(0,o.jsxs)(s.p,{children:["Override CSS only for behaviors that ",(0,o.jsx)(s.strong,{children:"must"})," be overridden for the component to function, and minimize the use of ",(0,o.jsx)(s.code,{children:"element type selectors"})," and ",(0,o.jsx)(s.code,{children:"pseudo-elements"})," of nested components."]}),"\n",(0,o.jsx)(s.p,{children:"Styling pseudo-elements in a component creates a selector that takes more specificity to override"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-css",metastring:'title="gallery.st.css"',children:"/* \n> directly style navBtn - a type of button\nselector: .comp__gallery .gallery__navBtn\nspecificity: 0,0,2,0 \n*/\n.gallery::navbtn {}\n"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-css",metastring:'title="page.st.css"',children:"/* \n> less specific than component override \nselector: .page__root button\nspecificity: 0,0,1,1\n*/\n.root button {}\n"})}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsxs)(s.p,{children:["For the ",(0,o.jsx)(s.code,{children:"button"})," selector, we manually added the ",(0,o.jsx)(s.code,{children:".root"})," class to avoid overriding ",(0,o.jsx)(s.code,{children:"button"})," outside this scope."]})}),"\n",(0,o.jsx)(s.h2,{id:"justify-your-css-declarations-in-comments",children:"Justify your CSS declarations in comments"}),"\n",(0,o.jsx)(s.p,{children:"A good way to validate minimal CSS is to add comments. There should be a few words clarifying why a certain declaration or rule set combination is found in the stylesheet. We recommend you justify any special overrides or interactions with a comment per this example."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-css",children:".link {\n  display: block;\n  /* override default anchor color */\n  color: currentColor;\n}\n"})}),"\n",(0,o.jsx)(s.p,{children:"This helps with maintenance and development, since we don't test CSS as thoroughly as other code."}),"\n",(0,o.jsx)(s.h2,{id:"use-consistent-variables-from-a-central-location",children:"Use consistent variables from a central location"}),"\n",(0,o.jsxs)(s.p,{children:["Import CSS or Stylable variables from the ",(0,o.jsx)(s.a,{href:"/docs/guides/project-commons",children:"project commons stylesheet"}),"."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-css",children:'@st-import [color1, --font-small] from "./project.st.css";\n\n.item {\n  background: value(color1);\n  font-size: var(--font-small);\n}\n'})}),"\n",(0,o.jsx)(s.h2,{id:"keep-svg-and-images-overridable",children:"Keep SVG and images overridable"}),"\n",(0,o.jsx)(s.p,{children:"When using an image element source or SVG directly in the DOM, it is not easy, and in some cases not possible, to modify the asset from outside the component using CSS."}),"\n",(0,o.jsx)(s.p,{children:"When an asset is part of the style API, it should be placed in the background of an element, allowing it to be overridden from a parent component."})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var t=n(6540);const o={},i=t.createContext(o);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);