"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[21],{9546:function(n,e,t){t.d(e,{Y:function(){return i}});var r=t(4569),i=t.n(r)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"39bf866453609a0bc24965bcd414ff90"}})},2021:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,i,o,s,c,a,l,d,p,u,x=t(885),h=t(2791),m=t(501),f=t(6871),v=t(5861),j=t(7757),g=t.n(j),Z=t(9546),b=t(6066),w=function(){var n=(0,v.Z)(g().mark((function n(e){var t;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.Y.get("/movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),(0,b.Am)("Sorry, backend error",{});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),k=t(168),_=t(6031),P=_.ZP.div(r||(r=(0,k.Z)(["\n  max-width: 768px;\n  /* outline: 1px solid red; */\n"]))),y=_.ZP.li(i||(i=(0,k.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),U=_.ZP.div(o||(o=(0,k.Z)(["\n  display: flex;\n  max-width: 800px;\n  margin-bottom: 20px;\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),A=_.ZP.img(s||(s=(0,k.Z)(["\n  display: block;\n  width: 200px;\n  margin-right: 20px;\n"]))),C=_.ZP.h3(c||(c=(0,k.Z)(["\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  color: ",";\n"])),(function(n){return n.theme.colors.accent})),G=_.ZP.div(a||(a=(0,k.Z)(["\n  margin-bottom: 10px;\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),R=function(n){return(10*n).toFixed(1)+"%"},S=_.ZP.ul(l||(l=(0,k.Z)(["\n  display: flex;\n"]))),I=_.ZP.li(d||(d=(0,k.Z)(["\n  :not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),O=t(184),Y=function(n){var e=n.movieGenres;return(0,O.jsx)(S,{children:e.map((function(n){return(0,O.jsx)(I,{children:n.name},n.id)}))})},B=function(n){var e,t=n.movie;return(0,O.jsxs)(U,{children:[(0,O.jsx)(A,{src:t.poster_path?"https://image.tmdb.org/t/p/w500"+t.poster_path:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:"",width:"100px"}),(0,O.jsxs)("div",{children:[(0,O.jsxs)(C,{children:[t.title,"  ",(0,O.jsxs)("span",{children:["(",(e=t.release_date,e.slice(0,4)),")"]})]}),(0,O.jsxs)(G,{children:["Rating: ",(0,O.jsx)("span",{children:R(t.vote_average)})]}),(0,O.jsxs)(G,{children:["Overview: ",t.overview]}),(0,O.jsxs)(G,{children:["Genres:",(0,O.jsx)(Y,{movieGenres:t.genres})]})]})]})},E=t(6856),F=(0,_.ZP)(m.rU)(p||(p=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  margin-bottom: 40px;\n  padding: 5px;\n  color: ",";\n  background-color: #dde1e7;\n  border-radius: 25px;\n  box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff73;\n  transition: color 250ms ease-in-out;\n\n  :hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.accent})),H=(0,_.ZP)(E.U1p)(u||(u=(0,k.Z)(["\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n"]))),L=function(){var n,e,t=(0,f.UO)().movieId,r=(0,h.useState)(),i=(0,x.Z)(r,2),o=i[0],s=i[1],c=null!==(n=null===(e=(0,f.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,h.useEffect)((function(){w(t).then((function(n){s(n.data)}))}),[t]),(0,O.jsxs)(P,{children:[(0,O.jsxs)(F,{to:c,children:[(0,O.jsx)(H,{}),"Back to movies"]}),o&&(0,O.jsxs)("div",{children:[(0,O.jsx)(B,{movie:o}),(0,O.jsx)(G,{children:"Addictional information:"}),(0,O.jsxs)("ul",{children:[(0,O.jsx)(y,{children:(0,O.jsx)(m.rU,{to:"credits",state:{from:c},children:"Cast"})}),(0,O.jsx)(y,{children:(0,O.jsx)(m.rU,{to:"reviews",state:{from:c},children:"Reviews"})})]}),(0,O.jsx)(h.Suspense,{children:(0,O.jsx)(f.j3,{})})]})]})}}}]);
//# sourceMappingURL=21.4a053acb.chunk.js.map