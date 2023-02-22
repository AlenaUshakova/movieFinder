"use strict";(self.webpackChunkmoviefinder=self.webpackChunkmoviefinder||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,c,i,u,s=e(9439),o=e(6888),p=e(2791),f=e(7689),d=e(168),l=e(4313),x=l.ZP.div(r||(r=(0,d.Z)(["\n  padding: 20px 0;\n"]))),h=l.ZP.ul(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  list-style: none;\n  margin: 0 auto;\n  padding: 0;\n  justify-content: center;\n  text-align: center;\n  width:100%;\n"]))),g=l.ZP.li(c||(c=(0,d.Z)(["\n  flex-basis: calc((100% - 30px) / 3);\n  border: 1px dotted orangered;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  font-size: 9px;\n  height: auto;\n  font-weight: 700;\n\n  p {\n    margin: 3px 0 0 0;\n  }\n\n  @media screen and (min-width: 480px) {\n    flex-basis: calc((100% - 40px) / 5);\n  }\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 70px) / 8);\n  }\n\n  @media screen and (min-width: 1200px) {\n    flex-basis: calc((100% - 120px) / 13);\n  }\n"]))),v=l.ZP.img(i||(i=(0,d.Z)(["\n  display: block;\n  max-width: 100%;\n  height: 120px;\n\n"]))),m=l.ZP.span(u||(u=(0,d.Z)(["\n  color: orangered;\n"]))),w=e(5984),y=e(7123),Z=e(184),b=function(){var n=(0,f.UO)().id,t=(0,p.useState)(),e=(0,s.Z)(t,2),r=e[0],a=e[1],c=(0,p.useContext)(y.n).value;return(0,p.useEffect)((function(){(0,o.TW)(n,c).then(a)}),[n,c]),r?(0,Z.jsx)(x,{children:0===r.length?(0,Z.jsx)("p",{style:{margin:"0",textAlign:"center"},children:"ru"===c?"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0444\u0438\u043b\u044c\u043c\u0430 \u043d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e \u0430\u043a\u0442\u0435\u0440\u0441\u043a\u043e\u043c\u0443 \u0441\u043e\u0441\u0442\u0430\u0432\u0443":'We don"t have any cast for this movie'}):(0,Z.jsx)(h,{children:r.map((function(n){return(0,Z.jsxs)(g,{children:[(0,Z.jsx)(v,{src:n.profile_path?"".concat("https://image.tmdb.org/t/p/w500").concat(n.profile_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnNH6I8IvZndxspJlJ0BDEyUNHxLvNokyWQ&usqp=CAU",alt:"",width:"80"}),(0,Z.jsxs)("div",{style:{padding:"5px"},children:[(0,Z.jsx)("p",{children:n.name}),(0,Z.jsxs)("p",{children:["ru"===c?"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u0436: ":"Character: "," ",(0,Z.jsx)(m,{children:n.character})]})]})]},(0,w.x0)())}))})}):null}},6888:function(n,t,e){e.d(t,{Cm:function(){return l},El:function(){return p},MS:function(){return x},TW:function(){return d},X2:function(){return s},sO:function(){return f},wW:function(){return o}});var r=e(5861),a=e(4687),c=e.n(a),i=e(2388);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="d9a5502e7ecfc2f8fab8d65f4cbb6057",s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/genre/movie/list?api_key=".concat(u,"&language=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.genres);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/week?api_key=".concat(u,"&page=").concat(t,"&language=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e,r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(u,"&query=").concat(t,"&language=").concat(r,"&").concat(e,"&include_adult=false"));case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(u,"&language=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=").concat(e,"&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/videos?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},5984:function(n,t,e){e.d(t,{x0:function(){return r}});var r=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",e=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&e[n];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t}}}]);
//# sourceMappingURL=736.37e295ed.chunk.js.map