"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[334],{9546:function(n,e,t){t.d(e,{Y:function(){return i}});var r=t(4569),i=t.n(r)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"39bf866453609a0bc24965bcd414ff90"}})},1334:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,i,a,c,o=t(885),s=t(6871),u=t(2791),p=t(5861),l=t(7757),f=t.n(l),d=t(9546),m=t(6066),h=function(){var n=(0,p.Z)(f().mark((function n(e){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.Y.get("/movie/".concat(e,"/credits"));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),(0,m.Am)("Sorry, backend error",{});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),x=t(168),b=t(6031),g=b.ZP.ul(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: center;\n  margin: -5px;\n"]))),v=b.ZP.li(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: baseline;\n  max-width: 80px;\n  margin: 5px;\n  flex-grow: 1;\n"]))),w=b.ZP.img(a||(a=(0,x.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin-bottom: 3px;\n"]))),k=b.ZP.p(c||(c=(0,x.Z)(["\n  display: block;\n  text-align: center;\n  font-size: 10px;\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),j=t(184),Z=function(n){var e=n.credits;return(0,j.jsx)("div",{children:(0,j.jsx)(g,{children:e.map((function(n){return(0,j.jsxs)(v,{children:[(0,j.jsx)(w,{src:n.profile_path?"https://image.tmdb.org/t/p/w500"+n.profile_path:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:""}),(0,j.jsx)(k,{children:n.name})]},n.credit_id)}))})})},_=function(){var n=(0,u.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],i=(0,s.UO)().movieId;return(0,u.useEffect)((function(){h(i).then((function(n){r(n.data.cast)}))}),[i]),(0,j.jsx)("div",{children:t&&(0,j.jsx)(Z,{credits:t})})}}}]);
//# sourceMappingURL=334.b2cd8290.chunk.js.map