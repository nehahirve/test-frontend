(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/b8u":function(t,e,n){var r=n("STAE");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"0dsO":function(t,e,n){t.exports={li:"Post-module--li--LInUv"}},"2io6":function(t,e,n){t.exports={form:"PostForm-module--form--1ct4l",buttons:"PostForm-module--buttons--1Fw1C"}},"33Wh":function(t,e,n){var r=n("yoRg"),o=n("eDl+");t.exports=Object.keys||function(t){return r(t,o)}},"3yvu":function(t,e,n){t.exports={main:"Dashboard-module--main--1Hb8C",nav:"Dashboard-module--nav--1u-Ij",selected:"Dashboard-module--selected--2X4aX"}},"6LWA":function(t,e,n){var r=n("xrYK");t.exports=Array.isArray||function(t){return"Array"==r(t)}},A2ZE:function(t,e,n){var r=n("HAuM");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"G+Rx":function(t,e,n){var r=n("0GbY");t.exports=r("document","documentElement")},Mc3U:function(t,e,n){t.exports={rte:"RTE-module--rte--NRrb3",custom:"RTE-module--custom--3UOcQ"}},"N+g0":function(t,e,n){var r=n("g6v/"),o=n("m/L8"),a=n("glrk"),c=n("33Wh");t.exports=r?Object.defineProperties:function(t,e){a(t);for(var n,r=c(e),u=r.length,l=0;u>l;)o.f(t,n=r[l++],e[n]);return t}},OQnD:function(t,e,n){t.exports={button:"AddPostButton-module--button--17q26"}},RNIs:function(t,e,n){var r=n("tiKp"),o=n("fHMY"),a=n("m/L8"),c=r("unscopables"),u=Array.prototype;null==u[c]&&a.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},STAE:function(t,e,n){var r=n("0Dky");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},XbcX:function(t,e,n){"use strict";var r=n("I+eb"),o=n("or9q"),a=n("ewvW"),c=n("UMSQ"),u=n("HAuM"),l=n("ZfDv");r({target:"Array",proto:!0},{flatMap:function(t){var e,n=a(this),r=c(n.length);return u(t),(e=l(n,0)).length=o(e,n,n,r,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},ZfDv:function(t,e,n){var r=n("hh1v"),o=n("6LWA"),a=n("tiKp")("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},c9m3:function(t,e,n){n("RNIs")("flatMap")},fHMY:function(t,e,n){var r,o=n("glrk"),a=n("N+g0"),c=n("eDl+"),u=n("0BK2"),l=n("G+Rx"),i=n("zBJ4"),s=n("93I0"),f=s("IE_PROTO"),m=function(){},d=function(t){return"<script>"+t+"<\/script>"},p=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var t,e;p=r?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=i("iframe")).style.display="none",l.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete p.prototype[c[n]];return p()};u[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m.prototype=o(t),n=new m,m.prototype=null,n[f]=t):n=p(),void 0===e?n:a(n,e)}},mR1u:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return A}));var r=n("q1tI"),o=n.n(r),a=n("o0o1"),c=n.n(a),u=(n("ls82"),n("HaE+")),l=(n("vDqi"),n("BC2w")),i=n.n(l),s=n("Mc3U"),f=n.n(s),m={display:["INLINE_STYLE_BUTTONS"],INLINE_STYLE_BUTTONS:[{label:"Bold",style:"BOLD",className:f.a.custom},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Strikethrough",style:"STRIKETHROUGH"}]};function d(t){var e=Object(r.useState)(i.a.createValueFromString(t.body,"markdown")),n=e[0],a=e[1];return o.a.createElement(i.a,{toolbarConfig:m,className:f.a.rte,value:n,onChange:function(e){a(e),t.onChange(e.toString("markdown"))}})}var p=n("2io6"),b=n.n(p);function v(t){var e=Object(r.useState)(t.title||""),n=e[0],a=e[1],c=Object(r.useState)(t.body||""),u=c[0],l=c[1],i=Object(r.useState)(t.imageUrl||""),s=i[0],f=i[1];return o.a.createElement("form",{onSubmit:t.id?function(e){console.log(t.imageUrl),e.preventDefault(),n&&u&&t.updatePost({title:n,body:u,imageUrl:s,id:t.id}),t.toggleForm()}:function(e){e.preventDefault(),n&&u&&t.createPost({title:n,body:u,imageUrl:s}),t.toggleForm()},className:b.a.form},o.a.createElement("input",{name:"title",type:"text",className:b.a.title,value:n,onChange:function(t){return a(t.target.value)}}),o.a.createElement(d,{onChange:function(t){l(t),console.log(u)},body:u}),o.a.createElement("input",{name:"url",type:"text",className:b.a.title,value:s,onChange:function(t){return f(t.target.value)}}),o.a.createElement("div",{className:b.a.buttons},o.a.createElement("button",{type:"button",onClick:t.toggleForm},"cancel"),o.a.createElement("button",{type:"submit"},t.id?"update":"create"),t.id&&o.a.createElement("button",{type:"button",onClick:function(){return t.deletePost(t.id)}},"delete")))}var g=n("OQnD"),y=n.n(g);function h(t){var e=Object(r.useState)(!1),n=e[0],a=e[1],c=function(){return a(!n)};return n?o.a.createElement(v,{toggleForm:c,createPost:t.createPost}):o.a.createElement("button",{className:y.a.button,onClick:c},o.a.createElement("svg",{width:"279",viewBox:"0 0 279 189",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M1.5 169C28.3333 186.834 83.1 208 87.5 150C93 77.5002 181 37.0002 200 80.0002C219 123 291.5 168.5 275.5 115C259.5 61.5001 238 -16.4999 275.5 5.00006",stroke:"black","stroke-width":"4"})))}var E=n("0dsO"),O=n.n(E);function S(t){return o.a.createElement("li",{className:O.a.li,onClick:t.toggleForm},o.a.createElement("h2",null,t.title),o.a.createElement("h3",null,t.createdAt.slice(0,10)+"."))}function w(t){var e=Object(r.useState)(!1),n=e[0],a=e[1],c=function(){return a(!n)};return o.a.createElement(o.a.Fragment,null,!n&&o.a.createElement(S,{title:t.title,createdAt:t.createdAt,toggleForm:c}),n&&o.a.createElement(v,{id:t.id,title:t.title,body:t.body,imageUrl:t.imageUrl,toggleForm:c,updatePost:t.updatePost,deletePost:t.deletePost}))}function x(t){return o.a.createElement("ul",null,t.posts.map((function(e){return o.a.createElement(w,{key:e.id,title:e.title,body:e.body,id:e.id,imageUrl:e.url,createdAt:e.created_at,updatePost:t.updatePost,deletePost:t.deletePost})})))}var j=n("3yvu"),N=n.n(j),P="https://vast-fortress-99756.herokuapp.com/api";function k(t){var e=Object(r.useState)("posts"),n=e[0],a=e[1],l=Object(r.useState)([]),i=l[0],s=l[1],f=Object(r.useState)([]),m=f[0],d=f[1],p=function(){return a("posts"===n?"pages":"posts")};function b(){return(b=Object(u.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(P+"/posts",{method:"GET"}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}));case 2:return e=t.sent,s(e.posts),t.next=6,fetch(P+"/pages",{method:"GET"}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}));case 6:n=t.sent,d(n.pages);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return(v=Object(u.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(P+"/"+n,{method:"POST",body:JSON.stringify(e)}).then((function(t){return t.json()}));case 2:r=t.sent,"posts"===n?s((function(t){return[].concat(r).concat(t)})):d((function(t){return[].concat(r).concat(t)}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[]),o.a.createElement("main",{className:N.a.main},o.a.createElement("nav",{className:N.a.nav},o.a.createElement("ul",null,o.a.createElement("li",{className:"posts"===n?N.a.selected:null,onClick:p},"Posts."),o.a.createElement("li",{className:"pages"===n?N.a.selected:null,onClick:p},"Pages."))),o.a.createElement(x,{posts:"posts"===n?i:m,updatePost:function(t){var e=t.title,r=t.body,o=t.id,a=t.imageUrl;console.log(a,n,o),fetch(P+"/"+n+"/"+o,{method:"PUT",body:JSON.stringify({title:e,body:r,url:a})}).then((function(t){return t.json()})),"posts"===n?s((function(e){return e.map((function(e){return e.id===t.id?Object.assign({},e,{title:t.title,body:t.body,url:t.url}):e}))})):d((function(e){return e.map((function(e){return e.id===t.id?Object.assign({},e,{title:t.title,body:t.body,url:t.url}):e}))}))},deletePost:function(t){fetch(P+"/"+n+"/"+t,{method:"DELETE"}).then((function(t){return t.json()})),"posts"===n?s((function(e){return e.filter((function(e){return e.id!==t}))})):d((function(e){return e.filter((function(e){return e.id!==t}))}))}}),o.a.createElement(h,{createPost:function(t){return v.apply(this,arguments)}}))}function A(){return o.a.createElement(k,null)}},or9q:function(t,e,n){"use strict";var r=n("6LWA"),o=n("UMSQ"),a=n("A2ZE"),c=function(t,e,n,u,l,i,s,f){for(var m,d=l,p=0,b=!!s&&a(s,f,3);p<u;){if(p in n){if(m=b?b(n[p],p,e):n[p],i>0&&r(m))d=c(t,e,m,o(m.length),d,i-1)-1;else{if(d>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[d]=m}d++}p++}return d};t.exports=c},tiKp:function(t,e,n){var r=n("2oRo"),o=n("VpIT"),a=n("UTVS"),c=n("kOOl"),u=n("STAE"),l=n("/b8u"),i=o("wks"),s=r.Symbol,f=l?s:s&&s.withoutSetter||c;t.exports=function(t){return a(i,t)||(u&&a(s,t)?i[t]=s[t]:i[t]=f("Symbol."+t)),i[t]}}}]);
//# sourceMappingURL=component---src-pages-admin-js-57f7508e4c8c00aa66a4.js.map