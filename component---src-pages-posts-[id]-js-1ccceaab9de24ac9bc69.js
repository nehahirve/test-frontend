(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0B/O":function(e,t,n){e.exports={main:"SinglePost-module--main--2BVTx"}},Gh6T:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n("q1tI"),l=n.n(a),r=n("SiwC"),c=n("IujW"),i=n.n(c),u=n("MuKP"),o=n("0B/O"),m=n.n(o);function s(e){console.log(e.id);var t=Object(a.useContext)(r.a),n=t.value||t.posts,c=Object(a.useState)({title:"",body:"",created_at:"",url:""}),o=c[0],s=c[1];return Object(a.useEffect)((function(){s(n.filter((function(t){return t.id===e.id}))[0])}),[e.id]),o?l.a.createElement("main",{className:m.a.main},l.a.createElement("h1",null,o.created_at.slice(0,10)),l.a.createElement("hr",null),l.a.createElement("article",null,l.a.createElement("h2",null,o.title),l.a.createElement(i.a,{children:o.body}),l.a.createElement("img",{src:o.url,alt:""}))):l.a.createElement(u.a,null)}var d=n("85Sb"),E=n("QLAq");function f(e){var t=e.location,n=Object(a.useContext)(r.a);return console.log(t),n.pages?l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{id:+t.pathname.split("/")[3]}),l.a.createElement(d.a,null)):l.a.createElement(E.a,null)}},MuKP:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),l=n.n(a),r=n("mFAW"),c=n.n(r);function i(e){return l.a.createElement("main",{className:c.a.main},l.a.createElement("h1",null,"Stop it."),l.a.createElement("hr",null),l.a.createElement("article",null,l.a.createElement("p",{style:{fontSize:"4rem"}},"Go home, this resource doesn't exist. Stop trying to mess w/ my API.")))}},mFAW:function(e,t,n){e.exports={main:"Page-module--main--_2ZYL"}}}]);
//# sourceMappingURL=component---src-pages-posts-[id]-js-1ccceaab9de24ac9bc69.js.map