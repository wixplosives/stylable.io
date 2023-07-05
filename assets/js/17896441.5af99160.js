"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[7918],{3899:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),l=n(7294),o=n(6010),r=n(3702),s=n(8259),c=n(9003),i=n(3699),d=n(7325),m=n(9524);function u(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const v={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function b(){const e=(0,m.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(u,{className:v.breadcrumbHomeIcon})))}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function h(e){let{children:t,href:n,isLast:a}=e;const o="breadcrumbs__link";return a?l.createElement("span",{className:o,itemProp:"name"},t):n?l.createElement(i.Z,{className:o,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:o},t)}function f(e){let{children:t,active:n,index:r,addMicrodata:s}=e;return l.createElement("li",(0,a.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,o.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(r+1)}))}function E(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?l.createElement("nav",{className:(0,o.Z)(r.k.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(b,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(f,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(h,{href:t.href,isLast:a},t.label))})))):null}},2889:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(7294),l=n(5463),o=n(3768);const r=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(r);if(null===e)throw new o.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(6010),m=n(3488),u=n(1792);function v(){const{metadata:e}=c();return a.createElement(u.Z,{previous:e.previous,next:e.next})}var b=n(5350),p=n(4617),h=n(3702),f=n(7325);function E(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(f.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function g(e){let{lastUpdatedBy:t}=e;return a.createElement(f.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:h.k.common.lastUpdated},a.createElement(f.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(g,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var C=n(4850),N=n(4597);const Z={lastUpdated:"lastUpdated_vwxv"};function _(e){return a.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(N.Z,e)))}function k(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(C.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",Z.lastUpdated)},(n||l)&&a.createElement(L,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function x(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:o,tags:r}=e,s=r.length>0,i=!!(t||n||o);return s||i?a.createElement("footer",{className:(0,d.Z)(h.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(_,{tags:r}),i&&a.createElement(k,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:l})):null}var T=n(4639),H=n(2728),U=n(7462);const y={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function A(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,U.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",y.tocCollapsibleButton,!t&&y.tocCollapsibleButtonExpanded,n.className)}),a.createElement(f.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const w={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function M(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:r,toggleCollapsed:s}=(0,T.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(w.tocCollapsible,!r&&w.tocCollapsibleExpanded,n)},a.createElement(A,{collapsed:r,onClick:s}),a.createElement(T.z,{lazy:!0,className:w.tocCollapsibleContent,collapsed:r},a.createElement(H.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}const I={tocMobile:"tocMobile_ITEo"};function B(){const{toc:e,frontMatter:t}=c();return a.createElement(M,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(h.k.docs.docTocMobile,I.tocMobile)})}var O=n(7086);function S(){const{toc:e,frontMatter:t}=c();return a.createElement(O.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:h.k.docs.docTocDesktop})}var V=n(8207),P=n(7342);function D(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(h.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(V.Z,{as:"h1"},n)),a.createElement(P.Z,null,t))}var R=n(3899);const F={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function z(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,o=!l&&t.length>0;return{hidden:l,mobile:o?a.createElement(B,null):void 0,desktop:!o||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(S,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&F.docItemCol)},a.createElement(b.Z,null),a.createElement("div",{className:F.docItemContainer},a.createElement("article",null,a.createElement(R.Z,null),a.createElement(p.Z,null),n.mobile,a.createElement(D,null,t),a.createElement(x,null)),a.createElement(v,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function j(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(s,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(i,null),a.createElement(z,null,a.createElement(n,null))))}},1792:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),l=n(7294),o=n(7325),r=n(3672);function s(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&l.createElement(r.Z,(0,a.Z)({},t,{subLabel:l.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(r.Z,(0,a.Z)({},n,{subLabel:l.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4617:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),l=n(6010),o=n(7325),r=n(3702),s=n(8801);function c(e){let{className:t}=e;const n=(0,s.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,r.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},5350:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294),l=n(6010),o=n(9962),r=n(3699),s=n(7325),c=n(9871),i=n(3702),d=n(6409),m=n(8801);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(r.Z,{to:n,onClick:l},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,o.Z)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:p}=(0,c.Jo)(s),h=u??(f=p).docs.find((e=>e.id===f.mainDocId));var f;return a.createElement("div",{className:(0,l.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:p.label,to:h.path,onClick:()=>m(p.name)})))}function h(e){let{className:t}=e;const n=(0,m.E)();return n.banner?a.createElement(p,{className:t,versionMetadata:n}):null}},7086:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),o=n(6010),r=n(2728);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,o.Z)(s.tableOfContents,"thin-scrollbar",t)},l.createElement(r.Z,(0,a.Z)({},n,{linkClassName:c,linkActiveClassName:i})))}},2728:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7462),l=n(7294),o=n(107);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=i(s,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?l.createElement("ul",{className:o?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const v=l.memo(u);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...b}=e;const p=(0,o.L)(),h=d??p.tableOfContents.minHeadingLevel,f=u??p.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:f});return m((0,l.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:h,maxHeadingLevel:f}}),[c,i,h,f])),l.createElement(v,(0,a.Z)({toc:E,className:n,linkClassName:c},b))}}}]);