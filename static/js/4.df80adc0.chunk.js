(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{343:function(e,n,a){e.exports={selectedPage:"Paginator_selectedPage__3SIki"}},344:function(e,n,a){e.exports={avatar:"Users_avatar__1HQnL"}},345:function(e,n,a){e.exports=a.p+"static/media/blank-avatar.c0d9f96a.jpg"},347:function(e,n,a){"use strict";a.r(n);var t=a(23),r=a(24),l=a(26),o=a(25),u=a(0),c=a.n(u),i=a(68),s=a(14),g=a(84),f=a(147),p=a(11),m=function(e){return e.usersPage.users},d=function(e){return e.usersPage.pageSize},v=function(e){return e.usersPage.totalPages},P=function(e){return e.usersPage.currentPage},E=function(e){return e.usersPage.isFetching},h=a(343),b=a.n(h),w=function(e){for(var n=e.totalPages,a=e.currentPage,t=e.onPageChanged,r=[],l=1;l<=n;l++)r.push(l);return c.a.createElement("div",null,r.map((function(e){return c.a.createElement("span",{key:e.toString(),className:a===e?b.a.selectedPage.toString():void 0,onClick:function(){t(e)}},e)})))},k=a(344),C=a.n(k),j=a(345),y=a.n(j),S=a(15),U=function(e){var n=e.user,a=e.follow,t=e.unfollow;return c.a.createElement("div",null,c.a.createElement("span",null,c.a.createElement("div",null,c.a.createElement(S.b,{to:"/profile/"+n.id},c.a.createElement("img",{className:C.a.avatar,src:null!=n.photoUrl?n.photoUrl:y.a}))),c.a.createElement("div",null,n.id),c.a.createElement("div",null,n.followed?c.a.createElement("button",{onClick:function(){t(n.id)}},"Follow"):c.a.createElement("button",{onClick:function(){a(n.id)}},"Unfollow"))),c.a.createElement("span",null,c.a.createElement("div",null,n.fullName),c.a.createElement("div",null,n.status)),c.a.createElement("span",null,c.a.createElement("div",null,n.location)))},O=function(e){Object(l.a)(a,e);var n=Object(o.a)(a);function a(){var e;Object(t.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=n.call.apply(n,[this].concat(l))).onPageChanged=function(n){var a=e.props;(0,a.loadUsers)(n,a.pageSize)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,a=e.pageSize;(0,e.loadUsers)(n,a)}},{key:"render",value:function(){var e=this.props,n=e.isFetching,a=e.totalPages,t=e.currentPage,r=e.onPageChanged,l=e.users,o=e.follow,u=e.unfollow;return c.a.createElement(c.a.Fragment,null,n?c.a.createElement(g.a,null):void 0,c.a.createElement("div",null,c.a.createElement(w,{totalPages:a,currentPage:t,onPageChanged:r}),l.map((function(e){return c.a.createElement(U,{user:e,follow:o,unfollow:u})}))))}}]),a}(c.a.PureComponent);n.default=Object(p.d)(Object(s.b)((function(e){return{users:m(e),pageSize:d(e),totalPages:v(e),currentPage:P(e),isFetching:E(e)}}),{follow:i.b,unfollow:i.e,loadUsers:i.c}),f.a)(O)}}]);
//# sourceMappingURL=4.df80adc0.chunk.js.map