"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[7902],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),l=a(6010);const n="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>T});var r=a(7462),l=a(7294),n=a(6010),o=a(2466),s=a(6550),u=a(1980),i=a(7392),p=a(12);function c(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:l}}=e;return{value:t,label:a,attributes:r,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(n),(0,l.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=d(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[u,i]=b({queryString:a,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,p.Nk)(a);return[r,(0,l.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),h=(()=>{const e=u??c;return m({value:e,tabValues:n})?e:null})();(0,l.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),g(e)}),[i,g,n]),tabValues:n}}var h=a(2389);const k="tabList__CuJ",f="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:s,selectValue:u,tabValues:i}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),r=i[a].value;r!==s&&(c(t),u(r))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,n.Z)("tabs__item",f,null==o?void 0:o.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return l.createElement("div",{className:(0,n.Z)("tabs-container",k)},l.createElement(y,(0,r.Z)({},e,t)),l.createElement(v,(0,r.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return l.createElement(w,(0,r.Z)({key:String(t)},e))}},1144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var r=a(7462),l=(a(7294),a(3905)),n=a(4866),o=a(5162),s=a(814);const u={id:"boilerplate",title:"Boilerplate"},i=void 0,p={unversionedId:"getting-started/boilerplate",id:"getting-started/boilerplate",title:"Boilerplate",description:"To get started quickly, Stylable offers a boilerplate utility that can be used to bootstrap new projects from a list of templates.",source:"@site/docs/getting-started/boilerplate.mdx",sourceDirName:"getting-started",slug:"/getting-started/boilerplate",permalink:"/docs/getting-started/boilerplate",draft:!1,editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/getting-started/boilerplate.mdx",tags:[],version:"current",frontMatter:{id:"boilerplate",title:"Boilerplate"},sidebar:"Discover",previous:{title:"Intro",permalink:"/docs/getting-started/intro"},next:{title:"Manual Integration",permalink:"/docs/getting-started/manual-integration"}},c={},d=[{value:"<code>ts-react-webpack</code> (app)",id:"ts-react-webpack-app",level:2},{value:"<code>ts-react-rollup</code> (app)",id:"ts-react-rollup-app",level:2},{value:"Integrated and ready to learn?",id:"integrated-and-ready-to-learn",level:2}],m={toc:d};function b(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To get started quickly, ",(0,l.kt)("strong",{parentName:"p"},"Stylable")," offers a boilerplate utility that can be used to bootstrap new projects from a list of templates."),(0,l.kt)("h2",{id:"ts-react-webpack-app"},(0,l.kt)("inlineCode",{parentName:"h2"},"ts-react-webpack")," (app)"),(0,l.kt)("p",null,"This is the default template, it creates a new project and includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("strong",{parentName:"li"},"React")," application"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Webpack")," bundling including production optimizations"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TypeScript")," support with automatically generated stylesheet type definitions")),(0,l.kt)("p",null,"To use this template, run the following command:"),(0,l.kt)(n.Z,{groupId:"packageManager",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"npm init stylable-app [PROJECT_NAME]")),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"yarn create stylable-app [PROJECT_NAME]"))),(0,l.kt)("h2",{id:"ts-react-rollup-app"},(0,l.kt)("inlineCode",{parentName:"h2"},"ts-react-rollup")," (app)"),(0,l.kt)("p",null,"This is an alternative template, it creates a new project and includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("strong",{parentName:"li"},"React")," application"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Rollup")," bundling"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TypeScript")," support with automatically generated stylesheet type definitions")),(0,l.kt)("p",null,"To use this template, run the following command:"),(0,l.kt)(n.Z,{groupId:"packageManager",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"npm init stylable-app [PROJECT_NAME] --template ts-react-rollup")),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"yarn create stylable-app [PROJECT_NAME] --template ts-react-rollup"))),(0,l.kt)("admonition",{title:"Missing a template?",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Got a use-case we don't support? A template you would like us to add? Let us know by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wix/stylable/issues/new?assignees=&labels=triage&template=proposal.yaml"},"creating a new template proposal"),".")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"integrated-and-ready-to-learn"},"Integrated and ready to learn?"),(0,l.kt)("p",null,"Once your project is up and running, you can begin styling with ",(0,l.kt)("strong",{parentName:"p"},"Stylable"),". Read through the ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/handbook/intro"},"Handbook")," or explore the ",(0,l.kt)("a",{parentName:"p",href:"/docs/references/cheatsheet"},"API References")," to help guide you in your work."))}b.isMDXComponent=!0}}]);