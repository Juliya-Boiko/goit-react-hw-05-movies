"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[334],{9546:function(n,t,e){e.d(t,{Y:function(){return i}});var r=e(4569),i=e.n(r)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"39bf866453609a0bc24965bcd414ff90"}})},1334:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,i,a,c,o=e(885),s=e(6871),u=e(2791),l=e(5861),p=e(7757),f=e.n(p),d=e(9546),m=function(){var n=(0,l.Z)(f().mark((function n(t){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.Y.get("/movie/".concat(t,"/credits"));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),h=e(168),x=e(6031),g=x.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: center;\n  margin: -5px;\n"]))),v=x.ZP.li(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: baseline;\n  max-width: 80px;\n  margin: 5px;\n  flex-grow: 1;\n"]))),b=x.ZP.img(a||(a=(0,h.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin-bottom: 3px;\n"]))),w=x.ZP.p(c||(c=(0,h.Z)(["\n  display: block;\n  text-align: center;\n  font-size: 10px;\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),k=e(184),j=function(n){var t=n.credits;return(0,k.jsx)("div",{children:(0,k.jsx)(g,{children:t.map((function(n){return(0,k.jsxs)(v,{children:[(0,k.jsx)(b,{src:n.profile_path?"https://image.tmdb.org/t/p/w500"+n.profile_path:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:""}),(0,k.jsx)(w,{children:n.name})]},n.credit_id)}))})})},Z=function(){var n=(0,u.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],i=(0,s.UO)().movieId;return(0,u.useEffect)((function(){m(i).then((function(n){r(n.data.cast)}))}),[i]),(0,k.jsx)("div",{children:e&&(0,k.jsx)(j,{credits:e})})}}}]);
//# sourceMappingURL=334.76efc55f.chunk.js.map