(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7667:function(e,c,a){"use strict";a.d(c,{F:function(){return h},f:function(){return k}});var b=a(5326),d=a(4359),f=a.n(d);let g=(0,b.createContext)({setTheme(a){},themes:[]}),h=()=>(0,b.useContext)(g),i=["light","dark"],j="(prefers-color-scheme: dark)",k=({forcedTheme:a,disableTransitionOnChange:x=!1,enableSystem:d=!0,enableColorScheme:q=!0,storageKey:r="theme",themes:e=["light","dark"],defaultTheme:s=d?"system":"light",attribute:t="data-theme",value:f,children:u})=>{let[c,y]=(0,b.useState)(()=>m(r,s)),[h,z]=(0,b.useState)(()=>m(r)),v=f?Object.values(f):e,k=(0,b.useCallback)(d=>{let b=o(d);z(b),"system"!==c||a||A(b,!1)},[c,a]),w=(0,b.useRef)(k);w.current=k;let A=(0,b.useCallback)((a,i=!0,e=!0)=>{let b=(null==f?void 0:f[a])||a,g=x&&e?n():null;if(i)try{localStorage.setItem(r,a)}catch(j){}if("system"===a&&d){let h=o();b=(null==f?void 0:f[h])||h}if(e){let c=document.documentElement;"class"===t?(c.classList.remove(...v),c.classList.add(b)):c.setAttribute(t,b),null==g||g()}},[]);(0,b.useEffect)(()=>{let a=function(){return w.current(...[].slice.call(arguments))},b=window.matchMedia(j);return b.addListener(a),a(b),()=>b.removeListener(a)},[]);let p=(0,b.useCallback)(b=>{a?A(b,!0,!1):A(b),y(b)},[a]);return(0,b.useEffect)(()=>{let a=a=>{a.key===r&&p(a.newValue||s)};return window.addEventListener("storage",a),()=>window.removeEventListener("storage",a)},[p]),(0,b.useEffect)(()=>{if(!q)return;let b=a&&i.includes(a)?a:c&&i.includes(c)?c:"system"===c&&h||null;document.documentElement.style.setProperty("color-scheme",b)},[q,c,h,a]),b.default.createElement(g.Provider,{value:{theme:c,setTheme:p,forcedTheme:a,resolvedTheme:"system"===c?h:c,themes:d?[...e,"system"]:e,systemTheme:d?h:void 0}},b.default.createElement(l,{forcedTheme:a,storageKey:r,attribute:t,value:f,enableSystem:d,defaultTheme:s,attrs:v}),u)},l=(0,b.memo)(({forcedTheme:g,storageKey:h,attribute:k,enableSystem:l,defaultTheme:d,value:c,attrs:m})=>{let e="class"===k?`var d=document.documentElement.classList;d.remove(${m.map(a=>`'${a}'`).join(",")});`:"var d=document.documentElement;",a=(a,d)=>{a=(null==c?void 0:c[a])||a;let b=d?a:`'${a}'`;return"class"===k?`d.add(${b})`:`d.setAttribute('${k}', ${b})`},i="system"===d;return b.default.createElement(f(),null,b.default.createElement("script",g?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${e}${a(g)}}()`}}:l?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${e}var e=localStorage.getItem('${h}');${i?"":a(d)+";"}if("system"===e||(!e&&${i})){var t="${j}",m=window.matchMedia(t);m.media!==t||m.matches?${a("dark")}:${a("light")}}else if(e) ${c?`var x=${JSON.stringify(c)};`:""}${a(c?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${e}var e=localStorage.getItem("${h}");if(e){${c?`var x=${JSON.stringify(c)};`:""}${a(c?"x[e]":"e",!0)}}else{${a(d)};}}catch(t){}}();`}}))},(a,b)=>a.forcedTheme===b.forcedTheme),m=(b,c)=>{if("undefined"==typeof window)return;let a;try{a=localStorage.getItem(b)||void 0}catch(d){}return a||c},n=()=>{let a=document.createElement("style");return a.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(a),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(a)},1)}},o=a=>(a||(a=window.matchMedia(j)),a.matches?"dark":"light")},4722:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(9216)}])},9216:function(c,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return g}});var d=a(5356);a(2434);var e=a(7667);function f(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function g(a){var b=a.Component,c=a.pageProps;return(0,d.jsx)(e.f,{attribute:"class",children:(0,d.jsx)(b,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){f(d,a,c[a])})}return d}({},c))})}},2434:function(){},4359:function(a,c,b){a.exports=b(7227)},5356:function(c,b,a){"use strict";a.r(b),a.d(b,{Fragment:function(){return d.HY},jsx:function(){return f},jsxDEV:function(){return f},jsxs:function(){return f}}),a(5326);var d=a(6777),e=0;function f(f,g,i,j,k){var b,a,c={};for(a in g)"ref"==a?b=g[a]:c[a]=g[a];var h={type:f,props:c,key:i,ref:b,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--e,__source:k,__self:j};if("function"==typeof f&&(b=f.defaultProps))for(a in b)void 0===c[a]&&(c[a]=b[a]);return d.YM.vnode&&d.YM.vnode(h),h}}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[179],function(){return b(4722),b(544)}),_N_E=a.O()}])