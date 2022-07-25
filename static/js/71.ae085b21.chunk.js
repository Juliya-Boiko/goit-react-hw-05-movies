"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[71],{9546:function(n,e,t){t.d(e,{Y:function(){return i}});var r=t(4569),i=t.n(r)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"39bf866453609a0bc24965bcd414ff90"}})},8071:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,i,o,s,c,a,l,d,p=t(885),u=t(2791),x=t(501),h=t(6871),m=t(5861),f=t(7757),v=t.n(f),j=t(9546),g=function(){var n=(0,m.Z)(v().mark((function n(e){var t;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.Y.get("/movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),b=function(n){return 10*n+"%"},w=t(168),Z=t(6031),k=Z.ZP.ul(r||(r=(0,w.Z)(["\n  display: flex;\n"]))),_=Z.ZP.li(i||(i=(0,w.Z)(["\n  :not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),P=t(184),y=function(n){var e=n.movieGenres;return(0,P.jsx)(k,{children:e.map((function(n){return(0,P.jsx)(_,{children:n.name},n.id)}))})},U=Z.ZP.div(o||(o=(0,w.Z)(["\n  display: flex;\n  max-width: 800px;\n  margin-bottom: 20px;\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),C=Z.ZP.img(s||(s=(0,w.Z)(["\n  display: block;\n  width: 200px;\n  margin-right: 20px;\n"]))),G=Z.ZP.h3(c||(c=(0,w.Z)(["\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  color: ",";\n"])),(function(n){return n.theme.colors.accent})),R=Z.ZP.div(a||(a=(0,w.Z)(["\n  margin-bottom: 10px;\n"]))),A=function(n){var e,t=n.movie;return(0,P.jsxs)(U,{children:[(0,P.jsx)(C,{src:t.poster_path?"https://image.tmdb.org/t/p/w500"+t.poster_path:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:"",width:"100px"}),(0,P.jsxs)("div",{children:[(0,P.jsxs)(G,{children:[t.title,"  ",(0,P.jsxs)("span",{children:["(",(e=t.release_date,e.slice(0,4)),")"]})]}),(0,P.jsxs)(R,{children:["Rating: ",(0,P.jsx)("span",{children:b(t.vote_average)})]}),(0,P.jsxs)(R,{children:["Overview: ",t.overview]}),(0,P.jsxs)(R,{children:["Genres:",(0,P.jsx)(y,{movieGenres:t.genres})]})]})]})},I=t(6856),O=(0,Z.ZP)(x.rU)(l||(l=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  margin-bottom: 40px;\n  padding: 5px;\n  color: ",";\n  background-color: #dde1e7;\n  border-radius: 25px;\n  box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff73;\n  transition: color 250ms ease-in-out;\n\n  :hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.accent})),S=(0,Z.ZP)(I.U1p)(d||(d=(0,w.Z)(["\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n"]))),Y=function(){var n,e,t=(0,h.UO)().movieId,r=(0,u.useState)(),i=(0,p.Z)(r,2),o=i[0],s=i[1],c=null!==(n=null===(e=(0,h.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,u.useEffect)((function(){g(t).then((function(n){s(n.data)}))}),[t]),(0,P.jsxs)("div",{children:[(0,P.jsxs)(O,{to:c,children:[(0,P.jsx)(S,{}),"Back to movies"]}),o&&(0,P.jsxs)("div",{children:[(0,P.jsx)(A,{movie:o}),(0,P.jsx)("p",{children:"Addictional information:"}),(0,P.jsxs)("ul",{children:[(0,P.jsx)("li",{children:(0,P.jsx)(x.rU,{to:"credits",state:{from:c},children:"Cast"})}),(0,P.jsx)("li",{children:(0,P.jsx)(x.rU,{to:"reviews",state:{from:c},children:"Reviews"})})]}),(0,P.jsx)(u.Suspense,{children:(0,P.jsx)(h.j3,{})})]})]})}}}]);
//# sourceMappingURL=71.ae085b21.chunk.js.map