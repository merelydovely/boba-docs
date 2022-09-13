"use strict";(self.webpackChunkbobadocs=self.webpackChunkbobadocs||[]).push([[4389],{5318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var o=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||a;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=t(5773),r=(t(7378),t(5318));const a={},i="Install BobaFrontend",l={unversionedId:"engineering/start-developing/bobafrontend",id:"engineering/start-developing/bobafrontend",title:"Install BobaFrontend",description:"This codebase requires Node 16. If you're using Node Version Manager, you can switch to version 16 by running nvm use 16 in your terminal.",source:"@site/docs/engineering/start-developing/bobafrontend.md",sourceDirName:"engineering/start-developing",slug:"/engineering/start-developing/bobafrontend",permalink:"/docs/engineering/start-developing/bobafrontend",draft:!1,editUrl:"https://github.com/essential-randomness/bobadocs/edit/main/docs/engineering/start-developing/bobafrontend.md",tags:[],version:"current",frontMatter:{},sidebar:"engineering",previous:{title:"Install BobaBackend",permalink:"/docs/engineering/start-developing/boba-backend"},next:{title:"Overview",permalink:"/docs/engineering/boba-editor/overview"}},s={},u=[{value:"Installing BobaFrontend, fetching BobaComponents through yarn",id:"installing-bobafrontend-fetching-bobacomponents-through-yarn",level:3},{value:"Installing BobaFrontend, using a local BobaComponents copy",id:"installing-bobafrontend-using-a-local-bobacomponents-copy",level:3},{value:"Running BobaFrontend",id:"running-bobafrontend",level:3}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-bobafrontend"},"Install BobaFrontend"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This codebase requires Node ",(0,r.kt)("strong",{parentName:"p"},"16"),". If you're using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"Node Version Manager"),", you can switch to version 16 by running ",(0,r.kt)("inlineCode",{parentName:"p"},"nvm use 16")," in your terminal."),(0,r.kt)("p",{parentName:"admonition"},"You can check the current Node version by running ",(0,r.kt)("inlineCode",{parentName:"p"},"node -v"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is a legacy page imported from our old documentation."),(0,r.kt)("p",{parentName:"admonition"},"TODO","[Ms.Boba]",": Update to new format.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is currently a private repository. Contact the BobaLord for access!")),(0,r.kt)("p",null,"BobaBoard Frontend depends on BobaComponents."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# First installation only:\ngit clone https://github.com/essential-randomness/boba-frontend.git\ncd boba-frontend\nyarn install\n\n### HERE YOU WILL NEED TO INSTALL BOBA-COMPONENTS ###\n### See next sections to choose which route ###\n\n# What you will need to run every time:\nyarn run dev:stage\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The above command (",(0,r.kt)("inlineCode",{parentName:"p"},"yarn run dev:stage"),") connects to the real server and database. Any post you make on your local machine will be reflected on the real server! Yes, this means you can make people have a really bad time if you want.\nDo not make me revoke your access!")),(0,r.kt)("p",null,"If you want (or need) to run the frontend connected to a local DB/server, follow the instructions to launch BobaBackend and then run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn run dev"),"."),(0,r.kt)("h3",{id:"installing-bobafrontend-fetching-bobacomponents-through-yarn"},"Installing BobaFrontend, fetching BobaComponents through yarn"),(0,r.kt)("p",null,"You should follow these instructions if you don't intend to make changes to BobaComponents, or don't care about running the latest version of BobaComponents."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": not running the latest version might incur in some surprising problems, in case of incompatible changes. If you run into problems, contact the webmaster to get a new version of BobaComponents released. ",(0,r.kt)("strong",{parentName:"p"},"Since the webmaster isn't regularly releasing npm updates, let her know if you wish to go this route."))),(0,r.kt)("p",null,"The easiest way to install BobaEditor is to run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn install @bobaboard/ui-components"),'. This will install the latest "released" version of BobaComponents in your codebase.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'### Run the "first installation instructions" above. ###\n\nyarn install @bobaboard/ui-components\n\n### You can now continue with the rest of the instructions. ###\n')),(0,r.kt)("h3",{id:"installing-bobafrontend-using-a-local-bobacomponents-copy"},"Installing BobaFrontend, using a local BobaComponents copy"),(0,r.kt)("p",null,"You should follow these instructions if you want to make parallel changes to BobaComponents as part of updating BobaFrontend."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'### Run the "BobaComponents first installation instructions" above. ###\n### You should now be in the bobaboard-ui folder. ###\nyarn run build\nyarn link\ncd ..\n### Run the "first installation instructions" above for BobaFrontend. ###\ncd boba-frontend\nyarn link @bobaboard/ui-components\n### You can now continue with the rest of the instructions. ###\n')),(0,r.kt)("p",null,"If you make changes to BobaComponents and want to see them reflected in BobaFrontend run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn run build")," in the bobaboard-ui folder. BobaFrontend should pick up the changes when the website is reloaded."),(0,r.kt)("h3",{id:"running-bobafrontend"},"Running BobaFrontend"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Since Realms became a thing, BobaFrontend uses ",(0,r.kt)("a",{parentName:"p",href:"https://softwarekeep.com/help-center/what-is-bonjour-service-on-windows-10"},"the Bonjour protocol")," to create fake ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," addresses in your local network. This allows us to use ",(0,r.kt)("inlineCode",{parentName:"p"},"http://REALM_NAME_boba.local")," addresses to get the Realm name from the\nsubdomain like in production."),(0,r.kt)("p",{parentName:"admonition"},"Do ask for help if you encounter problems!")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn run dev:bonjour")),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://twisted-minds_boba.local:3000")," in your browser.")))}p.isMDXComponent=!0}}]);