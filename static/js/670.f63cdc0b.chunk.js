"use strict";(self.webpackChunkproject_ucranes03=self.webpackChunkproject_ucranes03||[]).push([[670],{899:function(e,r,n){n.d(r,{Z:function(){return _}});var t=n(9439),s=n(1087),a="Pagination_pagination__9X6Z-",i="Pagination_page__eZu9l",c="Pagination_active__ON+Ce",u="Pagination_prev__+HKWv",l="Pagination_next__JvuKw",o=n(3329),_=function(e){var r=e.totalPages,n=(0,s.lr)(),_=(0,t.Z)(n,2),p=_[0],d=_[1],h=parseInt(p.get("page"))||1,f=function(e){d((function(r){var n=new URLSearchParams(r);return n.set("page",e),n}))};return(0,o.jsxs)("div",{className:a,children:[h>1&&(0,o.jsx)("button",{onClick:function(){return f(h-1)},className:u,children:"Previous"}),(r<=3?Array.from({length:r},(function(e,r){return r+1})):1===h?[1,2,3]:h===r?[r-2,r-1,r]:[h-1,h,h+1]).map((function(e){return(0,o.jsx)("button",{onClick:function(){return f(e)},className:"".concat(e===h&&c," ").concat(i),children:e},e)})),h<r&&(0,o.jsx)("button",{onClick:function(){return f(h+1)},className:l,children:"Next"})]})}},7670:function(e,r,n){n.r(r);var t=n(3433),s=n(5861),a=n(9439),i=n(4687),c=n.n(i),u=n(2791),l=n(4420),o=n(1087),_=n(7689),p=n(8568),d=n(6809),h=n(899),f=n(3845),m=n(1608),v=n(5633),x=n(3329);r.default=function(){var e=(0,o.lr)(),r=(0,a.Z)(e,1)[0],n=(0,_.UO)().id,i="current"===n,g=(0,u.useState)(!1),Z=(0,a.Z)(g,2),j=Z[0],w=Z[1],N=(0,u.useState)([]),k=(0,a.Z)(N,2),C=k[0],y=k[1],b=(0,u.useState)(0),U=(0,a.Z)(b,2),P=U[0],F=U[1],I=(0,l.v9)(p.Vh);return(0,u.useEffect)((function(){var e=function(){var e=(0,s.Z)(c().mark((function e(){var t,s,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(!0),e.prev=1,t=r.get("page")||1,!i){e.next=9;break}return e.next=6,(0,d.W6)({page:t,limit:5});case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,(0,d.ET)(n,{page:t,limit:5});case 11:e.t0=e.sent;case 12:s=e.t0,a=s.data,y(a.results),F(a.totalPages),e.next=20;break;case 18:e.prev=18,e.t1=e.catch(1);case 20:return e.prev=20,w(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,18,20,23]])})));return function(){return e.apply(this,arguments)}}();e()}),[r,n,i]),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{className:"visually-hidden",children:"Followers"}),(0,x.jsxs)(f.Z,{children:[j&&(0,t.Z)(Array(5)).map((function(e,r){return(0,x.jsx)(v.Z,{})})),!j&&C.map((function(e){return(0,x.jsx)(m.Z,{user:e,following:I},e.id)}))]}),P>1&&(0,x.jsx)(h.Z,{totalPages:P})]})}},3845:function(e,r,n){n.d(r,{Z:function(){return a}});var t="ListItems_list__5gqc0",s=n(3329),a=function(e){var r=e.children;return(0,s.jsx)("ul",{className:t,children:r})}},1608:function(e,r,n){var t=n(5861),s=n(4687),a=n.n(s),i=n(4420),c=n(1087),u=n(8568),l=n(3657),o=n(3536),_=n(6809),p=n(411),d=n(3439),h=n(1324),f=n(8417),m=n(4322),v=n(3329);r.Z=function(e){var r=e.user,n=r.id,s=r.name,x=r.avatar,g=r.recipes,Z=(0,o.Pv)(),j=(0,o.eW)(),w=(0,i.v9)(u.Vh),N=(0,i.v9)(u.dy),k=(0,i.I0)(),C=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.ER)(r);case 3:n=e.sent,t=n.data,k((0,l.g8)(t.following)),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),y=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.Am)(r);case 3:n=e.sent,t=n.data,k((0,l.g8)(t.following)),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}();return(0,v.jsxs)("li",{className:m.Z.follow_list_item,children:[(0,v.jsxs)("div",{className:m.Z.user_info_container,children:[(0,v.jsx)("div",{className:m.Z.user_avatar_container,children:(0,v.jsx)(f.Z,{className:m.Z.user_avatar,publicId:x,alt:s+"'s photo",defaultImage:h.Z})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{className:m.Z.user_name,children:s}),(0,v.jsxs)("p",{className:m.Z.user_recepies,children:["Own recipes: ",g.length]}),N.id!==n&&(w.includes(n)?(0,v.jsx)(p.Z,{type:"button",color:"light",size:"small",onClick:function(){return C(n)},children:"Following"}):(0,v.jsx)(p.Z,{type:"button",color:"light",size:"small",onClick:function(){return y(n)},children:"Follow"}))]})]}),(j||Z)&&(0,v.jsx)("ul",{className:m.Z.recipes_pictures_list,children:g.slice(0,Z?3:4).map((function(e){var r=e.id,n=e.thumb,t=e.title;return(0,v.jsx)("li",{className:m.Z.recipes_pictures_item,children:(0,v.jsx)(c.rU,{to:"/recipe/".concat(r),children:(0,v.jsx)(f.Z,{publicId:n,alt:t})})},r)}))}),(0,v.jsx)(c.rU,{to:N.id!==n?"/user/".concat(n):"/user/current",className:m.Z.user_link_arrow,children:(0,v.jsx)("svg",{width:"16",height:"16",children:(0,v.jsx)("use",{href:d.Z+"#icon-arrow-up-right"})})})]})}},5633:function(e,r,n){var t=n(3433),s=n(1413),a=n(3536),i=n(411),c=n(4322),u=n(3329);r.Z=function(){var e={backgroundColor:"#05050570"},r=(0,a.Pv)(),n=(0,a.eW)();return(0,u.jsxs)("li",{style:{height:"142.02px"},className:c.Z.follow_list_item,children:[(0,u.jsxs)("div",{className:c.Z.user_info_container,children:[(0,u.jsx)("div",{style:(0,s.Z)((0,s.Z)({},e),{},{marginRight:"16px"}),className:c.Z.user_avatar}),(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{style:(0,s.Z)((0,s.Z)({},e),{},{width:"64px",height:"20px",marginBottom:"16px"}),className:c.Z.user_name,children:" "}),(0,u.jsx)("p",{style:(0,s.Z)((0,s.Z)({},e),{},{width:"80px",height:"12px"}),className:c.Z.user_recepies,children:" "}),(0,u.jsx)(i.Z,{style:{backgroundColor:"#05050570",color:"#05050500"},type:"button",color:"light",size:"small",children:"Following"})]})]}),(0,u.jsxs)("ul",{className:c.Z.recipes_pictures_list,children:[n&&(0,t.Z)(Array(4)).map((function(r,n){return(0,u.jsx)("li",{style:e,className:c.Z.recipes_pictures_item},n)})),r&&(0,t.Z)(Array(3)).map((function(r,n){return(0,u.jsx)("li",{style:e,className:c.Z.recipes_pictures_item},n)}))]}),(0,u.jsx)("div",{style:{backgroundColor:"#05050570"},className:c.Z.user_link_arrow})]})}},6809:function(e,r,n){n.d(r,{$7:function(){return s},Am:function(){return i},ER:function(){return a},ET:function(){return c},W6:function(){return u}});var t=n(4156),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.page,n=e.limit;return t.hi.get("/api/users/following",{params:{page:r,limit:n}})},a=function(e){return t.hi.patch("/api/users/removeFollowing/".concat(e))},i=function(e){return t.hi.patch("/api/users/addFollowing/".concat(e))},c=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.page,s=r.limit;return t.hi.get("/api/users/followers/".concat(e),{params:{page:n,limit:s}})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.page,n=e.limit;return t.hi.get("/api/users/followers",{params:{page:r,limit:n}})}},4322:function(e,r){r.Z={follow_list_item:"UserCard_follow_list_item__Q2t1M",user_link_arrow:"UserCard_user_link_arrow__o4Tz3",user_info_container:"UserCard_user_info_container__y8H9o",user_avatar:"UserCard_user_avatar__TqQ7F",user_avatar_container:"UserCard_user_avatar_container__hKd0U",selected_user:"UserCard_selected_user__ef5FD",user_name:"UserCard_user_name__y-vTC",user_recepies:"UserCard_user_recepies__plJKh",recipes_pictures_list:"UserCard_recipes_pictures_list__U02IH",recipes_pictures_item:"UserCard_recipes_pictures_item__LICFH"}}}]);
//# sourceMappingURL=670.f63cdc0b.chunk.js.map