(this.webpackJsonptour_app=this.webpackJsonptour_app||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),i=n(6),o=n.n(i),j=(n(13),n(4)),u=n.n(j),a=n(7),b=n(2);var d=function(){return Object(c.jsx)("h1",{children:"Loading..."})},l=n(5);var O=function(e){var t=e.id,n=e.name,s=e.image,i=e.info,o=e.price,j=e.deleteTour,u=Object(r.useState)(!1),a=Object(b.a)(u,2),d=a[0],l=a[1];return Object(c.jsxs)("div",{className:"single-tour",children:[Object(c.jsx)("img",{src:s}),Object(c.jsxs)("footer",{children:[Object(c.jsxs)("div",{className:"tour-info",children:[Object(c.jsx)("h4",{children:n}),Object(c.jsxs)("h4",{children:["$",o]})]}),Object(c.jsxs)("p",{children:[d?i:i.substring(0,200),Object(c.jsx)("button",{onClick:function(){l((function(e){return!e}))},children:d?"ShowLess":"...ReadMore"})]}),Object(c.jsx)("button",{className:"delete-btn",onClick:function(){j(t)},children:"Not interested"})]})]})};var h=function(e){var t=e.tours,n=e.deleteTour;return Object(c.jsxs)("section",{children:[Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h2",{children:"Our Tours"})}),Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)(O,Object(l.a)(Object(l.a)({},e),{},{deleteTour:n}),e.id)}))})]})};var f=function(){var e=Object(r.useState)(!0),t=Object(b.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)([]),o=Object(b.a)(i,2),j=o[0],l=o[1],O=function(){var e=Object(a.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://course-api.com/react-tours-project");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n),s(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){O()}),[]),n?Object(c.jsx)(d,{}):0===j.length?Object(c.jsxs)("main",{children:[Object(c.jsx)("h3",{children:"No tour Left"}),Object(c.jsx)("button",{className:"btn",onClick:function(){O()},children:"Refresh Tours!"})]}):Object(c.jsx)("main",{children:Object(c.jsx)(h,{tours:j,deleteTour:function(e){var t=j.filter((function(t){return t.id!==e}));l(t)}})})};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.121ed6d3.chunk.js.map