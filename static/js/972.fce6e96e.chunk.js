"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[972],{9546:function(e,n,r){r.d(n,{Y:function(){return c}});var t=r(4569),c=r.n(t)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"39bf866453609a0bc24965bcd414ff90"}})},3972:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var t,c,o=r(885),u=r(6871),a=r(5861),i=r(7757),s=r.n(i),f=r(9546),l=r(6066),p=function(){var e=(0,a.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Y.get("/movie/".concat(n,"/reviews"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),l.Am.error("Sorry, backend error",{});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),h=r(2791),d=r(168),v=r(6031),m=v.ZP.li(t||(t=(0,d.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  font-size: 10px;\n  color: ",";\n"])),(function(e){return e.theme.colors.text})),x=v.ZP.p(c||(c=(0,d.Z)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.accent})),b=r(184),k=function(e){var n=e.reviews;return(0,b.jsx)("ul",{children:n.map((function(e){return(0,b.jsxs)(m,{children:[(0,b.jsx)(x,{children:e.author}),(0,b.jsx)("p",{children:e.content})]},e.id)}))})},w=function(){var e=(0,h.useState)([]),n=(0,o.Z)(e,2),r=n[0],t=n[1],c=(0,u.UO)().movieId;return(0,h.useEffect)((function(){p(c).then((function(e){t(e.data.results)}))}),[c]),(0,b.jsx)("div",{children:r.length>0&&(0,b.jsx)(k,{reviews:r})})}}}]);
//# sourceMappingURL=972.fce6e96e.chunk.js.map