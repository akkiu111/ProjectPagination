(this["webpackJsonpreact-website-deploy"]=this["webpackJsonpreact-website-deploy"]||[]).push([[0],{21:function(t,e,n){},41:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),s=n(14),r=n.n(s),i=(n(21),n(5)),o=n.n(i),u=n(15),l=n(3),j=n(16),p=n.n(j),b=(n(41),n(0)),d=function(t){var e=t.posts;return t.loading?Object(b.jsx)("h3",{children:"Loading...."}):Object(b.jsx)("ul",{className:"list-group mb-4",children:e.map((function(t){return Object(b.jsx)("li",{className:"list-group-item",children:t.title},t.id)}))})},h=function(t){for(var e=t.postsPerPage,n=t.totalPosts,c=t.paginate,a=[],s=1;s<=Math.ceil(n/e);s++)a.push(s);return Object(b.jsx)("nav",{className:"pagination",children:a.map((function(t){return Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("div",{style:{cursor:"pointer"},className:"page-link",onClick:function(){return c(t)},children:t})},t)}))})},f=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(!1),r=Object(l.a)(s,2),i=r[0],j=r[1],f=Object(c.useState)(1),O=Object(l.a)(f,2),g=O[0],m=O[1],x=Object(c.useState)(5),v=Object(l.a)(x,1)[0];Object(c.useEffect)((function(){(function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.next=3,p.a.get("https://jsonplaceholder.typicode.com/posts");case 3:e=t.sent,a(e.data),j(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var P=g*v,y=P-v,N=n.slice(y,P);return Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{className:"text-primary mb-3",children:"My Pagination"}),Object(b.jsx)(d,{posts:N,loading:i}),Object(b.jsx)(h,{postsPerPage:v,totalPosts:n.length,paginate:function(t){return m(t)}})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.3838496f.chunk.js.map