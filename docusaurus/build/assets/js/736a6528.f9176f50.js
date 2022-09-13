"use strict";(self.webpackChunkbobadocs=self.webpackChunkbobadocs||[]).push([[9698],{5318:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var o=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(t),p=r,b=g["".concat(i,".").concat(p)]||g[p]||d[p]||a;return t?o.createElement(b,s(s({ref:n},u),{},{components:t})):o.createElement(b,s({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(5773),r=(t(7378),t(5318));const a={sidebar_position:9},s="Useful Commands",l={unversionedId:"engineering/legacy-pages/useful-commands",id:"engineering/legacy-pages/useful-commands",title:"Useful Commands",description:"Frequently used commands. This is a helpful page to add to your Favorites. Here's how to do so on Notion.",source:"@site/docs/engineering/legacy-pages/useful-commands.md",sourceDirName:"engineering/legacy-pages",slug:"/engineering/legacy-pages/useful-commands",permalink:"/docs/engineering/legacy-pages/useful-commands",draft:!1,editUrl:"https://github.com/essential-randomness/bobadocs/edit/main/docs/engineering/legacy-pages/useful-commands.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"engineering",previous:{title:"Git Notes",permalink:"/docs/engineering/legacy-pages/git-notes"},next:{title:"How to Run (and Write) Tests",permalink:"/docs/engineering/legacy-pages/howto-tests"}},i={},c=[],u={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"useful-commands"},"Useful Commands"),(0,r.kt)("p",null,"Frequently used commands. This is a helpful page to add to your Favorites. ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/notion/Navigate-Notion-left-sidebar-7ef7287cee00464d9a813073b02ce24a#cb2f704bec9b420d94babc8685ea358b"},"Here's how to do so on Notion.")),(0,r.kt)("h1",{id:"-running-dev-env"},"\ud83d\ude9a Running dev env"),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"BobaEditor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BobaComponents")," run (in the corresponding folders):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run storybook\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"BobaFrontend")," run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Start instance connected to local server (BobaBackend must be running)\nyarn run dev\n\n# Start instance connected to staging server (note: changes go to prod DB)\nyarn run dev:stage\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"BobaBackend")," run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run start-db\nyarn run dev:watch\n")),(0,r.kt)("h1",{id:"-debugging-logs-on-frontend"},"\ud83d\udea2 Debugging Logs on Frontend"),(0,r.kt)("p",null,"To enable debug logs, set ",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage.debug")," to one of the following values (you can do so through the JavaScript console of your browser of choice):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// Print all the debug logs related to the editor\nlocalStorage.debug = "bobapost:*";\n\n// Print only the debug logs related to embeds\nlocalStorage.debug = "bobapost:embeds:*";\n\n// Print only the debug logs related to Twitter embeds\nlocalStorage.debug = "bobapost:embeds:tweet";\n\n// Print all the debug logs minus those ending with -verbose\nlocalStorage.debug = "bobapost:*,-bobapost:*-verbose";\n\n// Print all the debug logs related to the UI Component\nlocalStorage.debug = "bobaui:*";\n\n// Print all the debug logs related to the frontend\nlocalStorage.debug = "bobafrontend:*";\n\n// Print all the debug logs\nlocalStorage.debug = "*";\n')))}d.isMDXComponent=!0}}]);