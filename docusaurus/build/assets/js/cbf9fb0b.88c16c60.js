"use strict";(self.webpackChunkbobadocs=self.webpackChunkbobadocs||[]).push([[9980],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(5773),r=(n(7378),n(5318));const o={},i="API guidelines",l={unversionedId:"engineering/boba-backend/APIs/API-guidelines",id:"engineering/boba-backend/APIs/API-guidelines",title:"API guidelines",description:"These rules must be followed when creating new API endpoint in BobaBackend. They're a subset of the excellent Zalando RESTful API guidelines.",source:"@site/docs/engineering/boba-backend/APIs/API-guidelines.md",sourceDirName:"engineering/boba-backend/APIs",slug:"/engineering/boba-backend/APIs/API-guidelines",permalink:"/docs/engineering/boba-backend/APIs/API-guidelines",draft:!1,editUrl:"https://github.com/essential-randomness/bobadocs/edit/main/docs/engineering/boba-backend/APIs/API-guidelines.md",tags:[],version:"current",frontMatter:{},sidebar:"engineering",previous:{title:"How to test endpoints",permalink:"/docs/engineering/boba-backend/APIs/testing-endpoints"},next:{title:"Identities",permalink:"/docs/engineering/boba-backend/features/identities"}},s={},p=[{value:"The Golden Rule",id:"the-golden-rule",level:2},{value:"Request Format",id:"request-format",level:2},{value:"Response Format",id:"response-format",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-guidelines"},"API guidelines"),(0,r.kt)("p",null,"These rules must be followed when creating new API endpoint in BobaBackend. They're a subset of the excellent ",(0,r.kt)("a",{parentName:"p",href:"https://opensource.zalando.com/restful-api-guidelines/"},"Zalando RESTful API guidelines"),"."),(0,r.kt)("h2",{id:"the-golden-rule"},"The Golden Rule"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MUST")," document every endpoint using the OpenAPI format (see ",(0,r.kt)("a",{parentName:"li",href:"/docs/engineering/boba-backend/APIs/creating-endpoints#documentation"},"How to Write Documentation"),").")),(0,r.kt)("h2",{id:"request-format"},"Request Format"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MUST")," use HTTP methods correctly. ",(0,r.kt)("a",{parentName:"li",href:"https://opensource.zalando.com/restful-api-guidelines/#148"},"(link)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For a more compact explanation see ",(0,r.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/lessons/httpmethods.html"},"this guide"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MUST")," avoid actions \u2014 think about resources. ",(0,r.kt)("a",{parentName:"li",href:"https://opensource.zalando.com/restful-api-guidelines/#138"},"(link)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/blog/products/api-management/restful-api-design-nouns-are-good-verbs-are-bad"},"RESTful API Design: nouns are good, verbs are bad")," for an explanation."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MUST")," pluralize resource names. ",(0,r.kt)("a",{parentName:"li",href:"https://opensource.zalando.com/restful-api-guidelines/#134"},"(link)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MUST")," use lowercase separate words with hyphens for path segments. ",(0,r.kt)("a",{parentName:"li",href:"https://opensource.zalando.com/restful-api-guidelines/#129"},"(link)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MUST")," use snake_case (never camelCase) for query parameters. ",(0,r.kt)("a",{parentName:"li",href:"https://opensource.zalando.com/restful-api-guidelines/#130"},"(link)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MUST")," stick to conventional query parameters ",(0,r.kt)("a",{parentName:"li",href:"https://opensource.zalando.com/restful-api-guidelines/#137"},"(link)"),". This is relevant to operations like searching, sorting, filtering, and paginating.")),(0,r.kt)("h2",{id:"response-format"},"Response Format"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MUST")," use standard HTTP status codes. ",(0,r.kt)("a",{parentName:"li",href:"https://opensource.zalando.com/restful-api-guidelines/#150"},"(link)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See full list at ",(0,r.kt)("a",{parentName:"li",href:"https://httpstatuses.com/"},"httpstatuses.com"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MUST")," always return JSON objects as top-level data structures. ",(0,r.kt)("a",{parentName:"li",href:"https://opensource.zalando.com/restful-api-guidelines/#110"},"(link)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MUST")," follow all of the Zalando JSON Guidelines. ",(0,r.kt)("a",{parentName:"li",href:"https://opensource.zalando.com/restful-api-guidelines/#json-guidelines"},"(link)")," Particularly:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SHOULD")," pluralize array names."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MUST")," use ASCII snake",(0,r.kt)("em",{parentName:"li"},"case for property names (and never camelCase): `^[a-z"),"]","[a-z_0-9]","*","$`."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SHOULD")," not use null for empty arrays."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MUST")," not use null for boolean properties."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SHOULD")," name date/time properties with ",(0,r.kt)("em",{parentName:"li"},"_","at")," suffix."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MUST")," use same semantics for null and absent properties."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MUST")," use standard data formats. ",(0,r.kt)("a",{parentName:"li",href:"https://opensource.zalando.com/restful-api-guidelines/#238"},"(link)"))))}m.isMDXComponent=!0}}]);