"use strict";(self.webpackChunkmoviefinder=self.webpackChunkmoviefinder||[]).push([[701],{2940:function(n,e,t){t.d(e,{z:function(){return c}});var r,o=t(168),a=t(4313).ZP.button(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 10px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background-color: orangered;\n  text-align: center;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.3);\n\n  transition: box-shadow 250ms linear, scale 250ms linear;\n\n  :hover,\n  :focus {\n    scale: 1.1;\n    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);\n  }\n"]))),i=t(184),c=function(n){var e=n.onClick,t=n.children;return(0,i.jsx)(a,{onClick:e,type:"button",children:t})}},8444:function(n,e,t){t.d(e,{s:function(){return m}});var r,o,a,i=t(168),c=t(4313),s=c.ZP.p(r||(r=(0,i.Z)(["\n  font-size: 12px;\n  font-weight:600;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding: 10px 10px 0 10px;\n  text-align: center;\n  margin: 0;\n"]))),u=c.ZP.div(o||(o=(0,i.Z)(["\n  font-size: 12px;\n  font-weight: 600;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding: 10px 10px 0 10px;\n  text-align: center;\n  color: orangered;\n  margin: 0;\n"]))),p=c.ZP.ul(a||(a=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  list-style: none;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  padding: 0;\n  justify-content: center;\n\n  img {\n    border-radius: 5px;\n    display: block;\n    height: 300px;\n    max-width: 100%;\n  }\n  \n  li {\n    background-color: #f1e6db;\n    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.3);\n    transition: box-shadow 250ms linear, transform 250ms linear;\n    height: 100%;\n    width: 200px;\n    border-radius: 5px;\n    padding-bottom: 10px;\n   }\n\n  li:hover {\n    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);\n    transform: scale(1.02);\n  }\n"]))),l=t(1087),d=t(7689),x=(t(2880),t(9248)),f=t(4054),g=t(5984),h=t(184),m=function(n){var e=n.movies,t=n.ganre,r=(0,d.TH)(),o=function(n){return n.map((function(n){return t.length>0?t.find((function(e){return e.id===n})).name:null})).join(", ")};return(0,h.jsx)(p,{children:e.map((function(n){return(0,h.jsxs)("li",{children:[(0,h.jsx)(l.rU,{to:"/movies/".concat(n.id),state:{from:r},children:null!==n.poster_path?(0,h.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(n.poster_path),alt:"",width:"200"}):(0,h.jsx)("img",{src:f,alt:"",width:"200"})}),(0,h.jsx)(s,{id:n.id,children:n.original_title}),n.original_title.length>30&&(0,h.jsx)(x.u,{anchorId:n.id,content:n.original_title,place:"bottom",noArrow:"true",style:{backgroundColor:"#e2954d",color:"black",fontSize:"12px"}}),(0,h.jsxs)(u,{id:n.genre_ids,children:[n.genre_ids.length<=0?(0,h.jsx)("span",{style:{color:"red"},children:"No genre"}):o(n.genre_ids),o(n.genre_ids).length>=29&&(0,h.jsx)(x.u,{anchorId:n.genre_ids,content:o(n.genre_ids),place:"bottom",noArrow:"true",style:{backgroundColor:"#e2954d",color:"black"}})]})]},(0,g.x0)())}))})}},6888:function(n,e,t){t.d(e,{Cm:function(){return x},El:function(){return p},MS:function(){return f},TW:function(){return d},X2:function(){return s},sO:function(){return l},wW:function(){return u}});var r=t(5861),o=t(4687),a=t.n(o),i=t(2388);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="d9a5502e7ecfc2f8fab8d65f4cbb6057",s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/genre/movie/list?api_key=".concat(c,"&language=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.genres);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/week?api_key=".concat(c,"&page=").concat(e,"&language=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e,t,r){var o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c,"&query=").concat(e,"&language=").concat(r,"&").concat(t,"&include_adult=false"));case 2:return o=n.sent,n.abrupt("return",o.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=").concat(t,"&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/videos?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4641:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,o,a,i,c,s,u,p,l=t(3433),d=t(9439),x=t(2791),f=t(1087),g=t(168),h=t(4313),m=h.ZP.form(r||(r=(0,g.Z)(["\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  position: relative;\n  margin-bottom: 50px;\n  text-transform: uppercase;\n"]))),b=h.ZP.input(o||(o=(0,g.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 5px;\n  border: 1px solid black;\n  box-shadow: 3px 3px 3px 1px rgba(228, 152, 54, 0.2);\n  width: auto;\n  font: inherit;\n  \n  transition: color linear 250ms, box-shadow linear 250ms,\n    border-color linear 250ms;\n\n  :hover,\n  :focus {\n    color: orangered;\n    box-shadow: 1px 11px 11px -4px rgba(228, 152, 54, 0.47);\n    border-color: orangered;\n  }\n"]))),v=h.ZP.button(a||(a=(0,g.Z)(["\n  margin-left: 10px;\n  padding: 8px;\n  border: 1px solid black;\n  border-radius: 4px;\n  width: 80px;\n  height: auto;\n  background-color: transparent;\n  color: black;\n  cursor: pointer;\n  font: inherit;\n  font-weight: 500;\n  box-shadow: 3px 3px 3px 1px rgba(228, 152, 54, 0.2);\n\n  transition: color linear 250ms,\n    box-shadow linear 250ms, background-color linear 250ms,\n    border-color linear 250ms;\n\n  :hover {\n    color: white;\n    background-color: orangered;\n    border-color: orangered;\n    box-shadow: 1px 11px 11px -4px rgba(228, 152, 54, 0.47);\n  }\n"]))),w=t(7123),y=t(184),Z=function(n){var e=n.onSubmit,t=(0,x.useContext)(w.n).value;return(0,y.jsx)("div",{children:(0,y.jsxs)(m,{autoComplete:"off",onSubmit:function(n){n.preventDefault();var t=n.target.elements.query;e(t.value),n.target.reset()},children:[(0,y.jsx)("label",{children:(0,y.jsx)(b,{type:"text",name:"query"})}),(0,y.jsx)(v,{type:"submit",children:"ru"===t?"\u041f\u043e\u0438\u0441\u043a":"Search"})]})})},j=t(6888),k=t(8444),_=h.ZP.div(i||(i=(0,g.Z)(["\n  padding-top: 40px;\n  padding-bottom: 40px;\n  padding-left: 20px;\n  padding-right: 20px;\n  min-height: 100%;\n"]))),P=t(2940),C=h.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  gap: 20px;\n  text-align: center;\n  align-items: center;\n  letter-spacing: 10;\n\n"]))),S=h.ZP.p(s||(s=(0,g.Z)(["\n  font-size: 20px;\n  line-height: 40px;\n  color: black;\n  \n  b{\n    color: orangered;;\n  }\n"]))),z=t(110),q=function(n){var e=n.query,t=n.value;return(0,y.jsxs)(C,{children:[(0,y.jsx)("img",{src:z,alt:"logo",width:150}),(0,y.jsxs)(S,{children:["ru"===t?"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043d\u0435\u0442 \u0444\u0438\u043b\u044c\u043c\u043e\u0432, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443: ":"Sorry, there are no movies matching your search:",(0,y.jsxs)("b",{children:["'",e,"'"]})," ",(0,y.jsx)("br",{}),"ru"===t?"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437...":"Please try again..."]})]})},A=h.ZP.div(u||(u=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  text-align: center;\n  align-items: center;\n  letter-spacing: 10;\n\n"]))),E=h.ZP.p(p||(p=(0,g.Z)(["\n  font-size: 20px;\n  line-height: 40px;\n  color: red;\n"]))),L=t(9294),U=function(n){var e=n.value;return(0,y.jsxs)(A,{children:[(0,y.jsx)("img",{src:L,alt:"logo",width:200}),(0,y.jsx)(E,{children:"ru"===e?"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u043f\u043e\u0441\u043a \u0444\u0438\u043b\u044c\u043c\u0430. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430 \u0438\u043b\u0438 \u0435\u0433\u043e \u0447\u0430\u0441\u0442\u044c":"Let start searching movie. Enter the name of the movie or part of it"})]})},I=t(9085),N=function(){var n,e=(0,x.useState)([]),t=(0,d.Z)(e,2),r=t[0],o=t[1],a=(0,x.useState)([]),i=(0,d.Z)(a,2),c=i[0],s=i[1],u=(0,x.useState)(1),p=(0,d.Z)(u,2),g=p[0],h=p[1],m=(0,x.useState)(null),b=(0,d.Z)(m,2),v=b[0],C=b[1],S=(0,f.lr)(),z=(0,d.Z)(S,2),A=z[0],E=z[1],L=null!==(n=A.get("query"))&&void 0!==n?n:"",N=(0,x.useContext)(w.n).value;if((0,x.useEffect)((function(){""!==L&&((0,j.X2)(N).then((function(n){if("ru"===N){var e=n.map((function(n){var e={};return e.id=n.id,e.name=n.name[0].toUpperCase()+n.name.slice(1,n.name.length),e}));s(e)}else s(n)})),(0,j.El)(L,g,N).then((function(n){o((function(e){return[].concat((0,l.Z)(e),(0,l.Z)(n.results))})),C(n.total_results)})))}),[L,g,N]),r){return(0,y.jsxs)(_,{children:[(0,y.jsx)(Z,{onSubmit:function(n){return n===L?I.Am.error("ru"===N?"\u0412\u044b \u0443\u0436\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e '".concat(n,"'"):"You're currently viewing search results by '".concat(n,"'")):""===n?I.Am.error("ru"===N?"\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u0432\u0435\u043b\u0438 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430":"You did not enter anything to search"):(h(1),o([]),void E(""!==n?{query:n}:{}))}}),0===v&&(0,y.jsx)(q,{value:N,query:L}),""===L&&0!==v&&(0,y.jsx)(U,{value:N}),L&&(0,y.jsx)(k.s,{movies:r,ganre:c}),v/12>=g&&""!==L&&(0,y.jsx)(P.z,{onClick:function(){h((function(n){return n+1}))},children:"ru"===N?"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435":"Load more"})]})}}},4054:function(n,e,t){n.exports=t.p+"static/media/NoPoster.21cc4a70d3b080640626.jpg"},110:function(n,e,t){n.exports=t.p+"static/media/Sad.289e0329a182c9d09c37.png"},9294:function(n,e,t){n.exports=t.p+"static/media/welcome.5b243c3ab71964667596.jpg"}}]);
//# sourceMappingURL=701.ebfec7dd.chunk.js.map