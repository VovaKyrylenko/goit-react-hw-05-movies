"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{126:function(n,t,e){var r=e(87),a=e(77),u=e(184);t.Z=function(n){var t=n.data,e=n.url,c=n.location;return(0,u.jsx)(a.aV,{children:t.map((function(n){var t=n.id,o=n.title;return(0,u.jsx)(a.ck,{children:(0,u.jsx)(r.rU,{to:"".concat(e).concat(t),state:{from:c},children:o})},t)}))})}},77:function(n,t,e){e.d(t,{Dx:function(){return i},aV:function(){return s},ck:function(){return f}});var r,a,u,c=e(168),o=e(444),i=o.ZP.p(r||(r=(0,c.Z)(["\n  margin-bottom: 10px;\n  margin-left: 15px;\n  font-size: 25px;\n  font-weight: bold;\n"]))),s=o.ZP.ul(a||(a=(0,c.Z)(["\n  margin-left: 15px;\n  list-style: none;\n"]))),f=o.ZP.li(u||(u=(0,c.Z)(["\n  font-size: 14px;\n  margin-bottom: 5px;\n"])))},310:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,u,c,o,i=e(433),s=e(861),f=e(439),p=e(757),l=e.n(p),d=e(791),m=e(87),x=e(689),v=e(170),h=e(168),Z=e(444),b=Z.ZP.form(r||(r=(0,h.Z)(["\n  margin-top: 10px;\n"]))),g=Z.ZP.input(a||(a=(0,h.Z)(["\n  margin-bottom: 15px;\n  width: 250px;\n  border: 1px solid #ccc;\n  &:hover,\n  :focus {\n    outline: 0;\n    border-color: transparent;\n    box-shadow: 0 0 3px #00bfff;\n  }\n"]))),y=Z.ZP.button(u||(u=(0,h.Z)(["\n  border: 1px solid #ccc;\n"]))),w=(Z.ZP.ul(c||(c=(0,h.Z)(["\n  margin-left: 15px;\n  list-style: circle;\n"]))),Z.ZP.li(o||(o=(0,h.Z)(["\n  font-size: 14px;\n  margin-bottom: 5px;\n"]))),e(126)),k=e(184),j=function(){var n,t=(0,d.useState)([]),e=(0,f.Z)(t,2),r=e[0],a=e[1],u=(0,d.useState)(""),c=(0,f.Z)(u,2),o=c[0],p=c[1],h=(0,m.lr)(),Z=(0,f.Z)(h,2),j=Z[0],P=Z[1],q=null!==(n=j.get("query"))&&void 0!==n?n:"",S=(0,x.TH)();(0,d.useEffect)((function(){function n(){return(n=(0,s.Z)(l().mark((function n(){var t,e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.Wf(q);case 3:if(t=n.sent,e=t.results,a((0,i.Z)(e)),!(e.length>0)){n.next=9;break}return p("resolved"),n.abrupt("return");case 9:p("empty"),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0.message),p("rejected");case 16:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}""!==q&&(p("pending"),function(){n.apply(this,arguments)}())}),[q]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(b,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget;P({query:t.elements.query.value}),t.reset(),a([])},children:[(0,k.jsx)(g,{type:"text",name:"query"}),(0,k.jsx)(y,{type:"submit",children:"Search"})]}),"empty"===o&&(0,k.jsx)("p",{children:"No matches for your query.."}),r&&(0,k.jsx)(w.Z,{data:r,url:"",location:S})]})}},170:function(n,t,e){e.d(t,{HI:function(){return i},Ku:function(){return f},Pg:function(){return s},Wf:function(){return l},lV:function(){return p}});var r=e(861),a=e(757),u=e.n(a),c=e(263),o=new URLSearchParams({api_key:"f36ca5f08fabb02f79441db3f5d1a857"});c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?".concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=310.37625682.chunk.js.map