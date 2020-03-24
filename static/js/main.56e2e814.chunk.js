(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[1],{132:function(e,t,n){e.exports=n(227)},140:function(e,t,n){},141:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(14),c=n(31),s=(n(140),n(11)),i=n(19),o=n(51),l=n(52),f=n(53),m=n(54);n(141);function d(e){return a.a.createElement("div",{className:"header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm"},a.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},a.a.createElement(s.b,{to:"/"},"IT-community")),e.isAuth?a.a.createElement("div",null,a.a.createElement("span",{className:"login-name"},e.login),a.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:e.logoutThunkCreator},"Logout")):a.a.createElement(s.b,{className:"btn btn-outline-primary",to:"/login"},"Sign up"))}n(6);var p=n(27),h=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.authThunkCreator()}},{key:"render",value:function(){return a.a.createElement(d,this.props)}}]),n}(r.Component),g=Object(c.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{authThunkCreator:p.b,logoutThunkCreator:p.d})(h);n(161);function v(){return a.a.createElement("nav",{className:"col-md-2 d-none d-md-block bg-light sidebar"},a.a.createElement("div",{className:"sidebar-sticky"},a.a.createElement("ul",{className:"nav flex-column"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(s.c,{to:"/profile",className:"nav-link",activeClassName:"is-active"},"Profile")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(s.c,{to:"/dialogs",className:"nav-link",activeClassName:"is-active"},"Message")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(s.c,{to:"news",className:"nav-link",activeClassName:"is-active"},"News")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(s.c,{to:"/music",className:"nav-link",activeClassName:"is-active"},"Music")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(s.c,{to:"/users",className:"nav-link",activeClassName:"is-active"},"Find Users")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(s.c,{to:"/settings",className:"nav-link",activeClassName:"is-active"},"Settings")))))}n(162);function b(){return a.a.createElement("div",{className:"news-content"},"News work!")}n(163);function E(){return a.a.createElement("div",{className:"music-content"},"Music work!")}n(164);function O(){return a.a.createElement("div",{className:"settings-content"},"Settings work!")}var w=n(50),S=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(w.a,null)},a.a.createElement(e,t))}},y=(n(166),Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,304))}))),N=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,305))})),j=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,306))})),T=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,307))}));function k(e){return a.a.createElement(s.a,{basename:""},a.a.createElement("div",{className:"app container"},a.a.createElement(g,null),a.a.createElement("div",{className:"content"},a.a.createElement(v,null),a.a.createElement("div",{className:"main-content"},a.a.createElement(i.d,null,a.a.createElement(i.b,{path:"/profile/:userId?",render:S(y)}),a.a.createElement(i.b,{path:"/dialogs",render:S(N)}),a.a.createElement(i.b,{path:"/users",render:S(j)}),a.a.createElement(i.b,{path:"/news",component:b}),a.a.createElement(i.b,{path:"/music",component:E}),a.a.createElement(i.b,{path:"/settings",component:O}),a.a.createElement(i.b,{path:"/login",render:S(T)}))))))}var U=n(23),x=n(70),C=n(56),I=n(72),A=n(82),P=n(78),G=Object(U.c)({profilePage:C.d,dialogsPage:x.b,friendsPage:I.g,auth:p.a,form:P.a}),R=Object(U.e)(G,Object(U.a)(A.a));Object(u.render)(a.a.createElement(c.a,{store:R},a.a.createElement(k,null)),document.getElementById("root"))},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return p}));var r=n(4),a=n.n(r),u=n(10),c=n(5),s=n(6),i=n(40),o={userId:null,email:null,login:null,isAuth:null},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USER-DATA":return Object(c.a)({},e,{},t.data,{isAuth:!!(t.data.userId&&t.data.email&&t.data.login)});default:return e}},f=function(e,t,n,r){return{type:"auth/SET-USER-DATA",data:{userId:e,email:t,login:n}}},m=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.getAuth();case 2:0===(n=e.sent).resultCode?(r=n.data,u=r.id,c=r.email,i=r.login,t(f(u,c,i))):t(f(null,null,null));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var r=Object(u.a)(a.a.mark((function r(u){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.login(e,t,n);case 2:0===(c=r.sent).resultCode?u(m()):u(Object(i.a)("login",{_error:c.messages}));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},p=function(e,t,n){return function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.resultCode&&t(f(null,null,null));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),u=(n(165),function(e){return a.a.createElement("div",{className:"preloader"},a.a.createElement("img",{src:"https://youclever.org/book/website/youclever/template/images/loader.gif"}))})},56:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return g}));var r=n(4),a=n.n(r),u=n(10),c=n(24),s=n(5),i=n(6),o="profile/ADD-POST",l={posts:[{id:1,message:"Hey! How are you?"},{id:2,message:"Good!"},{id:3,message:"briliant!"}],profile:null,status:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n=t.text;return n.trim()?Object(s.a)({},e,{posts:[].concat(Object(c.a)(e.posts),[{id:e.posts.length+1,message:n.trim()}])}):e;case"profile/SET-USER-PROFILE":return Object(s.a)({},e,{profile:t.profile});case"profile/GET-USER-STATUS":return Object(s.a)({},e,{status:t.status});default:return e}},m=function(e){return{type:o,text:e}},d=function(e){return{type:"profile/GET-USER-STATUS",status:e}},p=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getProfile(e);case 2:r=t.sent,n({type:"profile/SET-USER-PROFILE",profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(d(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},6:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=n(81),a=r.create({withCredentials:!0,baseURL:"https://test-api.mokeev1995.ru/api/1.0/",headers:{"API-KEY":"ba70ec26-57ac-470b-860a-3c404909718d"}}),u={getUsers:function(e,t){return a.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},followUsers:function(e){return a.post("follow/".concat(e),{}).then((function(e){return e.data}))},unfollowUsers:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))}},s={getAuth:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}}},70:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=n(24),a=n(5),u={dialogs:[{id:1,name:"Vasya"},{id:2,name:"Tanya"},{id:3,name:"Sasha"},{id:4,name:"Masha"},{id:5,name:"Ann"},{id:6,name:"Alex"}],messages:[{id:1,message:"Hey!"},{id:2,message:"No-no-no!"},{id:3,message:"Oh!"},{id:4,message:"Go away!"}]},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":var n=t.newText;return n.trim()?Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:e.messages.length+1,message:n.trim()}])}):e;default:return e}},s=function(e){return{type:"dialogs/ADD-MESSAGE",newText:e}}},72:function(e,t,n){"use strict";n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return E}));var r=n(4),a=n.n(r),u=n(10),c=n(24),s=n(5),i=n(6),o={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followInProgress:[]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user/FOLLOW":return Object(s.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)({},e,{followed:!0}):e}))});case"user/UNFOLLOW":return Object(s.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)({},e,{followed:!1}):e}))});case"user/SET-USERS":return Object(s.a)({},e,{users:t.users});case"user/SET-CURRENT-PAGE":return Object(s.a)({},e,{currentPage:t.currentPage});case"user/SET-TOTAL-USER-COUNT":return Object(s.a)({},e,{totalUsersCount:t.totalUsersCount});case"user/TOGGE-IS-FETCHING":return Object(s.a)({},e,{isFetching:t.isFetching});case"user/TOGGE-IS-FOLLOWING-PROGRESS":return Object(s.a)({},e,{followInProgress:t.isFetching?[].concat(Object(c.a)(e.followInProgress),[t.userId]):e.followInProgress.filter((function(e){return e!==t.userId}))});default:return e}},f=function(e){return{type:"user/FOLLOW",userId:e}},m=function(e){return{type:"user/UNFOLLOW",userId:e}},d=function(e){return{type:"user/SET-CURRENT-PAGE",currentPage:e}},p=function(e){return{type:"user/TOGGE-IS-FETCHING",isFetching:e}},h=function(e,t){return{type:"user/TOGGE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},g=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(p(!0)),n.next=3,i.c.getUsers(e,t);case 3:u=n.sent,r(p(!1)),r({type:"user/SET-USERS",users:u.items}),r({type:"user/SET-TOTAL-USER-COUNT",totalUsersCount:u.totalCount}),r(d(t));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(){var e=Object(u.a)(a.a.mark((function e(t,n,r,u){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(u(n)),t(h(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),b=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(n,e,i.c.followUsers.bind(i.c),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(n,e,i.c.unfollowUsers.bind(i.c),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}},[[132,2,3]]]);
//# sourceMappingURL=main.56e2e814.chunk.js.map