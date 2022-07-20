"use strict";(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[7920],{2027:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var r=n(7294),a=n(2263),l=n(4730),s=n(5742),c=n(9960),o=n(5999),u=n(373),m=n(902);const i=["zero","one","two","few","many","other"];function h(e){return i.filter((t=>e.includes(t)))}const p={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),p}}),[e])}function g(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);const a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}var f=n(143),y=n(6775),E=n(412);const S=function(){const e=(0,y.k6)(),t=(0,y.TH)(),{siteConfig:{baseUrl:n}}=(0,a.Z)();return{searchValue:E.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:e=>n+"search?q="+encodeURIComponent(e)}};var w=n(22),b=n(8202),I=n(2539),P=n(726),v=n(1073),F=n(311),R=n(3926),_=n(1029);const k="searchQueryInput_CFBF",C="searchResultItem_U687",q="searchResultItemPath_uIbk",T="searchResultItemSummary_oZHr";function Z(){const{siteConfig:{baseUrl:e}}=(0,a.Z)(),t=(0,f.gA)();let n=e;try{var l;const{preferredVersion:e}=(0,u.J)(null!=(l=null==t?void 0:t.pluginId)?l:_.gQ);e&&!e.isLast&&(n=e.path+"/")}catch(C){if(!(C instanceof m.i6))throw C;console.error("useDocsPreferredVersion",C)}const{selectMessage:c}=g(),{searchValue:i,updateSearchPath:h}=S(),[p,d]=(0,r.useState)(i),[y,E]=(0,r.useState)(),[I,P]=(0,r.useState)(),v=(0,r.useMemo)((()=>p?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:p}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[p]);(0,r.useEffect)((()=>{h(p),y&&(p?y(p,(e=>{P(e)})):P(void 0))}),[p,y]);const R=(0,r.useCallback)((e=>{d(e.target.value)}),[]);return(0,r.useEffect)((()=>{i&&i!==p&&d(i)}),[i]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,w.w)(n);E((()=>(0,b.v)(e,t,100)))}()}),[n]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,v)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,v),r.createElement("input",{type:"search",name:"q",className:k,"aria-label":"Search",onChange:R,value:p,autoComplete:"off",autoFocus:!0}),!y&&p&&r.createElement("div",null,r.createElement(F.Z,null)),I&&(I.length>0?r.createElement("p",null,c(I.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,I&&I.map((e=>r.createElement(x,{key:e.document.i,searchResult:e}))))))}function x(e){let{searchResult:{document:t,type:n,page:a,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:a.b).slice(),i=u?t.s:t.t;return o||m.push(a.t),r.createElement("article",{className:C},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,I.C)(i,l):(0,P.o)(i,(0,v.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:q},(0,R.e)(m)),u&&r.createElement("p",{className:T,dangerouslySetInnerHTML:{__html:(0,P.o)(t.t,(0,v.m)(s,"t"),l,100)}}))}const M=function(){return r.createElement(l.Z,null,r.createElement(Z,null))}}}]);