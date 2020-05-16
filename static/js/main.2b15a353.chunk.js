(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[1],{135:function(e,t,n){e.exports=n(231)},143:function(e,t,n){},144:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(41),u=n(22),s=(n(143),n(14)),o=n(53),i=n(54),l=n(56),f=n(55),d=n(15),m=(n(144),function(e){var t=e.isAuth,n=e.login,r=e.logoutThunkCreator;return a.a.createElement("div",{className:"header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm"},a.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},a.a.createElement(d.a,{to:"/"},"IT-community")),t?a.a.createElement("div",null,a.a.createElement("span",{className:"login-name"},n),a.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:r},"Logout")):a.a.createElement(d.a,{className:"btn btn-outline-primary",to:"/login"},"Sign up"))}),p=n(29),b={authThunkCreator:p.b,logoutThunkCreator:p.d},h=Object(u.c)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),b)(function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.authThunkCreator()}},{key:"render",value:function(){return a.a.createElement(m,this.props)}}]),n}(r.Component)),v=(n(164),function(){return a.a.createElement("nav",{className:"col-md-2 d-none d-md-block bg-light sidebar"},a.a.createElement("div",{className:"sidebar-sticky"},a.a.createElement("ul",{className:"nav flex-column"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(d.b,{to:"/profile",className:"nav-link",activeClassName:"is-active"},"Profile")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(d.b,{to:"/dialogs",className:"nav-link",activeClassName:"is-active"},"Message")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(d.b,{to:"news",className:"nav-link",activeClassName:"is-active"},"News")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(d.b,{to:"/music",className:"nav-link",activeClassName:"is-active"},"Music")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(d.b,{to:"/users",className:"nav-link",activeClassName:"is-active"},"Users")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(d.b,{to:"/settings",className:"nav-link",activeClassName:"is-active"},"Settings")))))}),g=(n(165),function(){return a.a.createElement("div",{className:"news-content"},"News work!")}),O=(n(166),function(){return a.a.createElement("div",{className:"music-content"},"Music work!")}),E=(n(167),function(){return a.a.createElement("div",{className:"settings-content"},"Settings work!")}),j=n(52),w=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(j.a,null)},a.a.createElement(e,t))}},y=(n(169),n(170),function(){return a.a.createElement("div",{className:"notfound"},"404 PAGE NOT FOUND")}),S=n(32),T=n(20),N=n(72),x=n(58),k=n(74),U=n(85),C=n(81),P=n(80),A=n(11),I=Object(A.a)(),R=Object(T.c)({profilePage:x.d,dialogsPage:N.b,friendsPage:k.d,auth:p.a,form:C.a,router:Object(S.b)(I)}),L=Object(T.e)(R,Object(T.d)(Object(T.a)(U.a),Object(T.a)(Object(P.a)(I)))),G=function(){return a.a.createElement("div",{className:"notfound"},"User with this id not found")},F=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,311))})),D=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,312))})),H=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,313))})),M=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,314))})),W=function(){return a.a.createElement(S.a,{history:I},a.a.createElement("div",{className:"app container"},a.a.createElement(h,null),a.a.createElement("div",{className:"content"},a.a.createElement(v,null),a.a.createElement("div",{className:"main-content"},a.a.createElement(s.d,null,a.a.createElement(s.b,{path:"/profile/error",render:G}),a.a.createElement(s.b,{path:"/profile/:userId?",render:w(F)}),a.a.createElement(s.b,{path:"/dialogs",render:w(D)}),a.a.createElement(s.b,{path:"/users",render:w(H)}),a.a.createElement(s.b,{path:"/news",component:g}),a.a.createElement(s.b,{path:"/music",component:O}),a.a.createElement(s.b,{path:"/settings",component:E}),a.a.createElement(s.b,{path:"/login",render:w(M)}),a.a.createElement(s.a,{exact:!0,from:"/",to:"/profile"}),a.a.createElement(s.b,{render:function(){return a.a.createElement(y,null)}}))))))};Object(c.render)(a.a.createElement(u.a,{store:L},a.a.createElement(W,null)),document.getElementById("root"))},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return p}));var r=n(4),a=n.n(r),c=n(9),u=n(2),s=n(8),o=n(27),i={userId:void 0,email:void 0,login:void 0,isAuth:void 0,captchaURL:void 0},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USER-DATA":return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.data),{},{isAuth:!!(t.data.userId&&t.data.email&&t.data.login)});case"auth/GET-CAPTCHA-URL":return Object(u.a)(Object(u.a)({},e),{},{captchaURL:t.captchaUrl});default:return e}},f=function(e,t,n,r,a){return{type:"auth/SET-USER-DATA",data:{userId:e,email:t,login:n,captcha:a}}},d=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,u,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.getAuth();case 2:0===(n=e.sent).resultCode?(r=n.data,c=r.id,u=r.email,o=r.login,t(f(c,u,o))):t(f());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(e,t,n,r){return function(){var u=Object(c.a)(a.a.mark((function c(u){var i;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.login(e,t,n,r);case 2:if(0!==(i=a.sent).resultCode){a.next=8;break}return a.next=6,u(d());case 6:a.next=12;break;case 8:if(10!==i.resultCode){a.next=11;break}return a.next=11,u(b());case 11:u(Object(o.b)("login",{_error:i.messages}));case 12:case"end":return a.stop()}}),c)})));return function(e){return u.apply(this,arguments)}}()},p=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.resultCode&&t(f(void 0,void 0,void 0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.getCaptchaURL();case 2:n=e.sent,t({type:"auth/GET-CAPTCHA-URL",captchaUrl:n.url});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),c=(n(168),function(){return a.a.createElement("div",{className:"preloader"},a.a.createElement("img",{src:"https://youclever.org/book/website/youclever/template/images/loader.gif",alt:""}))})},58:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return g})),n.d(t,"g",(function(){return O})),n.d(t,"f",(function(){return E})),n.d(t,"e",(function(){return j}));var r=n(4),a=n.n(r),c=n(9),u=n(25),s=n(2),o=n(8),i=n(27),l=n(7),f="profile/ADD-POST",d={posts:[{id:1,message:"Hey! How are you?"},{id:2,message:"Good!"},{id:3,message:"briliant!"}],profile:void 0,status:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n=t.text;return n.trim()?Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[{id:e.posts.length+1,message:n.trim()}])}):e;case"profile/SET-USER-PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"profile/GET-USER-STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"profile/SET-USER-PHOTO":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.file})});default:return e}},p=function(e){return{type:f,text:e}},b=function(e){return{type:"profile/GET-USER-STATUS",status:e}},h=function(e){return{type:"profile/SET-USER-PHOTO",file:e}},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.b.getProfile(e);case 3:r=t.sent,n({type:"profile/SET-USER-PROFILE",profile:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(Object(l.d)("/profile/error"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(b(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n(h(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.saveProfile(e);case 2:if(0!==(c=t.sent).resultCode){t.next=11;break}if(u=r().auth.userId){t.next=8;break}return n(Object(l.d)("/profile/error")),t.abrupt("return");case 8:n(v(u)),t.next=13;break;case 11:return n(Object(i.b)("edit-profile",{_error:c.messages[0]})),t.abrupt("return",Promise.reject(c.messages[0]));case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},72:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var r=n(25),a=n(2),c={dialogs:[{id:1,name:"Vasya"},{id:2,name:"Tanya"},{id:3,name:"Sasha"},{id:4,name:"Masha"},{id:5,name:"Ann"},{id:6,name:"Alex"}],messages:[{id:1,message:"Hey!"},{id:2,message:"No-no-no!"},{id:3,message:"Oh!"},{id:4,message:"Go away!"}]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":var n=t.newText;return n.trim()?Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:e.messages.length+1,message:n.trim()}])}):e;default:return e}},s=function(e){return{type:"dialogs/ADD-MESSAGE",newText:e}}},74:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return O}));var r=n(4),a=n.n(r),c=n(9),u=n(25),s=n(2),o=n(8),i={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followInProgress:[]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user/FOLLOW":return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!0}):e}))});case"user/UNFOLLOW":return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!1}):e}))});case"user/SET-USERS":return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case"user/SET-CURRENT-PAGE":return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case"user/SET-TOTAL-USER-COUNT":return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"user/TOGGLE-IS-FETCHING":return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case"user/TOGGLE-IS-FOLLOWING-PROGRESS":return Object(s.a)(Object(s.a)({},e),{},{followInProgress:t.isFetching?[].concat(Object(u.a)(e.followInProgress),[t.userId]):e.followInProgress.filter((function(e){return e!==t.userId}))});default:return e}},f=function(e){return{type:"user/FOLLOW",userId:e}},d=function(e){return{type:"user/UNFOLLOW",userId:e}},m=function(e){return{type:"user/SET-CURRENT-PAGE",currentPage:e}},p=function(e){return{type:"user/TOGGLE-IS-FETCHING",isFetching:e}},b=function(e,t){return{type:"user/TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},h=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(p(!0)),n.next=3,o.d.getUsers(e,t);case 3:c=n.sent,r(p(!1)),r({type:"user/SET-USERS",users:c.items}),r({type:"user/SET-TOTAL-USER-COUNT",totalUsersCount:c.totalCount}),r(m(t));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(b(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,e,o.d.followUsers.bind(o.d),f);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,e,o.d.unfollowUsers.bind(o.d),d);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},8:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o}));var r=n(84),a=r.create({withCredentials:!0,baseURL:"https://test-api.mokeev1995.ru/api/1.0/",headers:{"API-KEY":"4531d9e2-5896-44a2-8434-2e6848972af0"}}),c={getUsers:function(e,t){return a.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},followUsers:function(e){return a.post("follow/".concat(e),{}).then((function(e){return e.data}))},unfollowUsers:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},u={getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return a.put("profile",e).then((function(e){return e.data}))}},s={getAuth:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}},o={getCaptchaURL:function(){return a.get("security/get-captcha-url").then((function(e){return e.data}))}}}},[[135,2,3]]]);
//# sourceMappingURL=main.2b15a353.chunk.js.map