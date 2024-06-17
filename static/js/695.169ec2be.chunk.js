"use strict";(self.webpackChunkproject_ucranes03=self.webpackChunkproject_ucranes03||[]).push([[695],{5992:function(e,n,t){t.d(n,{Z:function(){return a}});var r="Empty_text__F5nPx",i=t(3329),a=function(e){var n=e.children;return(0,i.jsx)("p",{className:r,children:n})}},899:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(9439),i=t(1087),a="Pagination_pagination__9X6Z-",c="Pagination_page__eZu9l",s="Pagination_active__ON+Ce",u="Pagination_prev__+HKWv",o="Pagination_next__JvuKw",p=t(3329),l=function(e){var n=e.totalPages,t=(0,i.lr)(),l=(0,r.Z)(t,2),f=l[0],d=l[1],v=parseInt(f.get("page"))||1,h=function(e){d((function(n){var t=new URLSearchParams(n);return t.set("page",e),t}))};return(0,p.jsxs)("div",{className:a,"aria-label":"Page navigation",role:"navigation",children:[v>1&&(0,p.jsx)("button",{onClick:function(){return h(v-1)},className:u,"aria-label":"Previous page",title:"Previous page",children:"Previous"}),(n<=3?Array.from({length:n},(function(e,n){return n+1})):1===v?[1,2,3]:v===n?[n-2,n-1,n]:[v-1,v,v+1]).map((function(e){return(0,p.jsx)("button",{onClick:function(){return h(e)},className:"".concat(e===v&&s," ").concat(c),"aria-label":"Page ".concat(e),"aria-current":e===v,title:"Page ".concat(e),children:e},e)})),v<n&&(0,p.jsx)("button",{onClick:function(){return h(v+1)},className:o,"aria-label":"Next page",title:"Next page",children:"Next"})]})}},7695:function(e,n,t){t.r(n);var r=t(5861),i=t(9439),a=t(4687),c=t.n(a),s=t(2791),u=t(1087),o=t(9985),p=t(9227),l=t(3845),f=t(6882),d=t(5992),v=t(899),h=t(3329);n.default=function(){var e=(0,u.lr)(),n=(0,i.Z)(e,1)[0],t=(0,s.useRef)(null),a=(0,s.useState)(0),_=(0,i.Z)(a,2),g=_[0],m=_[1],x=(0,s.useState)([]),w=(0,i.Z)(x,2),P=w[0],j=w[1],N=(0,s.useCallback)((0,r.Z)(c().mark((function e(){var t,r,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.get("page")||1,e.next=4,(0,o.lZ)({page:t});case 4:r=e.sent,i=r.data,j(i.results),m(i.totalPages),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),(0,p.x)(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[n]);return(0,s.useEffect)((function(){N()}),[N]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{className:"visually-hidden",children:"Favorite recipes"}),0===P.length?(0,h.jsx)(d.Z,{children:"Nothing has been added to your favorite recipes list yet. Please browse our recipes and add your favorites for easy access in the future."}):(0,h.jsx)(l.Z,{children:P.map((function(e){return(0,h.jsx)(f.Z,{recipe:e,update:N},e._id)}))}),g>1&&(0,h.jsx)(v.Z,{totalPages:g,topElementRef:t.current})]})}},3845:function(e,n,t){t.d(n,{Z:function(){return a}});var r="ListItems_list__5gqc0",i=t(3329),a=function(e){var n=e.children;return(0,i.jsx)("ul",{className:r,children:n})}},6882:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(5861),i=t(4687),a=t.n(i),c=t(7689),s=t(4420),u=t(3657),o=t(9985),p=t(9227),l=t(8417),f=t(3439),d="RecipePreview_preview_item__IR3IA",v="RecipePreview_info_wrapper__a4bd9",h="RecipePreview_thumb__UScSn",_="RecipePreview_description_wrapper__Ly1ga",g="RecipePreview_title__OJ+S+",m="RecipePreview_description__H94tK",x="RecipePreview_icons_wrapper__5K765",w="RecipePreview_trash_icon__UCJdD",P="RecipePreview_arrow_icon__yvyDx",j="RecipePreview_icon__1iPmT",N=t(3329),Z=function(e){var n=e.recipe,t=e.update,i=(0,s.I0)(),Z=n._id,b=n.title,k=n.description,y=n.thumb,R=(0,c.UO)().id,C=(0,c.s0)(),I=(0,c.TH)().pathname.includes("favorites"),S=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Ni)(n);case 3:i((0,u.$1)(-1)),t&&t(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,p.x)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),F=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.qG)(n);case 3:i((0,u.gw)(-1)),t&&t(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,p.x)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();return(0,N.jsxs)("li",{className:d,children:[(0,N.jsxs)("div",{className:v,children:[(0,N.jsx)(l.Z,{publicId:y,alt:b,aspectRatio:1,className:h}),(0,N.jsxs)("div",{className:_,children:[(0,N.jsx)("h4",{className:g,children:b}),(0,N.jsx)("p",{className:m,children:k})]})]}),(0,N.jsxs)("div",{className:x,children:[(0,N.jsx)("button",{className:P,onClick:function(){return C("/recipe/".concat(Z))},children:(0,N.jsx)("svg",{className:j,children:(0,N.jsx)("use",{href:"".concat(f.Z,"#icon-arrow-up-right")})})}),"current"===R&&(0,N.jsx)("button",{className:w,onClick:function(){return function(e){I?S(e):F(e)}(Z)},children:(0,N.jsx)("svg",{className:j,children:(0,N.jsx)("use",{href:"".concat(f.Z,"#icon-trash")})})})]})]})}},9985:function(e,n,t){t.d(n,{G3:function(){return i},Ni:function(){return f},Qd:function(){return u},T0:function(){return c},V4:function(){return o},XD:function(){return d},a3:function(){return l},iM:function(){return a},lZ:function(){return s},qG:function(){return p}});var r=t(4156),i=function(e){return r.hi.get("/api/recipes/details/".concat(e))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page,t=e.limit,i=e.category,a=e.ingredients,c=e.area;return r.hi.get("/api/recipes",{params:{page:n,limit:t,category:i,ingredients:a,area:c}})},c=function(){return r.hi.get("/api/recipes/popular")},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page;return r.hi.get("/api/recipes/favorite",{params:{page:n,limit:9}})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page;return r.hi.get("/api/recipes/own",{params:{page:n,limit:9}})},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page,t=arguments.length>1?arguments[1]:void 0;return r.hi.get("/api/recipes/own/".concat(t),{params:{page:n,limit:9}})},p=function(e){return r.hi.delete("/api/own/".concat(e))},l=function(e){return r.hi.patch("/api/recipes/addFavorite/".concat(e))},f=function(e){return r.hi.patch("/api/recipes/removeFavorite/".concat(e))},d=function(e){return r.hi.post("/api/recipes/own",e,{headers:{"Content-Type":"multipart/form-data"}})}}}]);
//# sourceMappingURL=695.169ec2be.chunk.js.map