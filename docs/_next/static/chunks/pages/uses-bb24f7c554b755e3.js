(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{1915:function(c,b,a){"use strict";a.d(b,{z:function(){return g}});var d=a(5326),e=a(5356);let f=(b,c={})=>{let a={React:d.default,ReactDOM:d.default,_jsx_runtime:e,...c},f=new Function(...Object.keys(a),b);return f(...Object.values(a)).default},g=(a,b={})=>d.default.useMemo(()=>f(a,b),[a,b])},4609:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uses",function(){return c(8454)}])},752:function(c,b,a){"use strict";a.d(b,{Z:function(){return g}});var d=a(5356),e=a(3601);function f(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function g(a){return(0,d.jsx)(e.Z,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){f(d,a,c[a])})}return d}({},a))}},3773:function(d,b,a){"use strict";a.d(b,{Z:function(){return l}});var e=a(5356),f=a(752),g=a(7667);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}a(5326);var c=a(2675),i=a.n(c);function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function k(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){j(d,a,c[a])})}return d}var l={CodeIframe:function(a){var d=a.src,f=a.width,b=a.height,g=a.scalew,c=a.scaleh;return(0,e.jsx)("div",{className:"w-full hidden md:block rounded-lg overflow-hidden",style:{height:b*c},children:(0,e.jsx)("iframe",{src:d,frameBorder:"no",loading:"lazy",scrolling:"no",allowFullScreen:!0,style:{transform:"scale(".concat(g,",").concat(c,")"),transformOrigin:"0 0",width:f,height:b}})})},Image:function(a){return(0,e.jsx)(f.Z,k({alt:a.alt,className:"rounded-lg"},a))},ImageWithTheme:function(a){var b=(0,g.F)().theme;return(0,e.jsx)(f.Z,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){h(d,a,c[a])})}return d}({},a,{alt:a.alt,src:"light"===b?a.light:a.dark}))},a:function(a){var b=a.href;return b&&(b.startsWith("/")||b.startsWith("#"))?(0,e.jsx)(i(),{href:b,children:(0,e.jsx)("a",k({},a,{children:a.children}))}):(0,e.jsx)("a",k({target:"_blank",rel:"noopener noreferrer"},a))},ConsCard:function(a){var b=a.title,c=a.cons;return(0,e.jsxs)("div",{className:"border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900 rounded-xl p-6 my-6 w-full",children:[(0,e.jsx)("span",{children:"You might not use ".concat(b," if...")}),(0,e.jsx)("div",{className:"mt-4",children:c.map(function(a){return(0,e.jsxs)("div",{className:"flex font-medium items-baseline mb-2",children:[(0,e.jsx)("div",{className:"h-4 w-4 mr-2",children:(0,e.jsx)("svg",{className:"h-4 w-4 text-red-500",viewBox:"0 0 24 24",children:(0,e.jsxs)("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),(0,e.jsx)("path",{d:"M22 4L12 14.01l-3-3"})]})})}),(0,e.jsx)("span",{children:a})]},a)})})]})},ProsCard:function(a){var b=a.title,c=a.pros;return(0,e.jsxs)("div",{className:"border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900 rounded-xl p-6 my-4 w-full",children:[(0,e.jsx)("span",{children:"You might use ".concat(b," if...")}),(0,e.jsx)("div",{className:"mt-4",children:c.map(function(a){return(0,e.jsxs)("div",{className:"flex font-medium items-baseline mb-2",children:[(0,e.jsx)("div",{className:"h-4 w-4 mr-2",children:(0,e.jsx)("svg",{className:"h-4 w-4 text-green-500",viewBox:"0 0 24 24",children:(0,e.jsxs)("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),(0,e.jsx)("path",{d:"M22 4L12 14.01l-3-3"})]})})}),(0,e.jsx)("span",{children:a})]},a)})})]})},Step:function(a){var b=a.number,c=a.title;return(0,e.jsxs)("div",{className:"step flex items-center py-4",children:[(0,e.jsx)("div",{className:"flex items-center justify-center border border-gray-200 pt-1 font-bold dark:border-gray-800 rounded-full h-8 w-8 text-blue-500",children:b}),(0,e.jsx)("h3",{className:"ml-3 tracking-tight font-bold",children:c})]})}}},8454:function(c,b,a){"use strict";a.r(b),a.d(b,{"__N_SSG":function(){return i},"default":function(){return j}});var d=a(5356),e=a(1915),f=a(3773),g=a(2396);function h(a){var b=a.children;return(0,d.jsx)(g.Z,{title:"Uses \u2013 Hau Phan",description:"Here's what tech I'm currently using for coding, writing, and research.",children:(0,d.jsxs)("article",{className:"flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full",children:[(0,d.jsx)("h1",{className:"font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white",children:"Setup"}),(0,d.jsx)("p",{className:"text-gray-700 dark:text-gray-300 mt-2 mb-8",children:"Here's what tech I'm currently using for coding, writing, and research."}),(0,d.jsx)("div",{className:"prose dark:prose-dark w-full",children:b})]})})}var i=!0;function j(a){var b=a.body.code,c=(0,e.z)(b);return(0,d.jsx)(h,{children:(0,d.jsx)(c,{components:f.Z})})}}},function(a){a.O(0,[545,601,396,888,179],function(){return a(a.s=4609)}),_N_E=a.O()}])