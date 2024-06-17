"use strict";(self.webpackChunkproject_ucranes03=self.webpackChunkproject_ucranes03||[]).push([[868],{3188:function(e,n,r){var a=r(5861),i=r(9439),t=r(4687),c=r.n(t),s=r(2791),o=r(4420),l=r(7689),u=r(9985),p=r(8568),d=r(7263),_=r(3536),f=r(9227),h=r(8417),m=r(1324),v=r(3439),x=r(3003),j=r(3329);n.Z=function(e){var n=e.recipe,r=n._id,t=n.title,g=n.owner,Z=n.description,N=n.thumb,b=n.favorite,w=(0,d.F)().onAuthOpen,R=(0,_.kf)(),C=(0,_.Pv)(),k=(0,l.TH)(),I=(0,l.s0)(),y=(0,o.v9)(p.dy),M=(0,s.useState)(!1),P=(0,i.Z)(M,2),T=P[0],S=P[1],F=(0,s.useState)(!1),O=(0,i.Z)(F,2),A=O[0],G=O[1];(0,s.useEffect)((function(){y&&S(b.includes(y.id))}),[b,y]);var X=k.pathname.includes("recipes")?"".concat(x.Z.recipe_card," ").concat(x.Z.all_recipes):"".concat(x.Z.recipe_card," ").concat(x.Z.popular_recipes),E=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=3;break}return w(),e.abrupt("return");case 3:if(G(!0),e.prev=4,!T){e.next=11;break}return e.next=8,(0,u.Ni)(r);case 8:S(!1),e.next=14;break;case 11:return e.next=13,(0,u.a3)(r);case 13:S(!0);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),(0,f.x)(e.t0);case 19:return e.prev=19,G(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[4,16,19,22]])})));return function(){return e.apply(this,arguments)}}();return(0,j.jsxs)("li",{className:X,children:[(0,j.jsx)(h.Z,{publicId:N,alt:t,aspectRatio:R?1.49:C?1.24:1,className:x.Z.thumb}),(0,j.jsxs)("div",{className:x.Z.card_details,children:[(0,j.jsx)("h3",{className:x.Z.title,children:t}),(0,j.jsx)("p",{className:x.Z.description,children:Z}),(0,j.jsxs)("div",{className:x.Z.owner_info,children:[(0,j.jsxs)("button",{type:"button",className:x.Z.owner_btn,onClick:function(){y?I("/user/".concat(g._id,"/recipes")):w("/user/".concat(g._id,"/recipes"))},children:[(0,j.jsx)(h.Z,{publicId:g.avatar,className:x.Z.avatar,defaultImage:m.Z,alt:g.name}),g.name]}),(0,j.jsxs)("div",{className:x.Z.icons_wrapper,children:[(0,j.jsx)("button",{type:"button",className:x.Z.heart_icon,onClick:E,disabled:A,"aria-label":T?"Remove from favorites":"Add to favorites","aria-pressed":T,title:T?"Remove from favorites":"Add to favorites",children:(0,j.jsx)("svg",{className:x.Z.icon,children:(0,j.jsx)("use",{href:"".concat(v.Z).concat(T?"#icon-heart-filled":"#icon-heart")})})}),(0,j.jsx)("button",{type:"button",className:x.Z.arrow_icon,onClick:function(){return I("/recipe/".concat(r))},title:"View recipe","aria-label":"View recipe",children:(0,j.jsx)("svg",{className:x.Z.icon,children:(0,j.jsx)("use",{href:"".concat(v.Z,"#icon-arrow-up-right")})})})]})]})]})]})}},6164:function(e,n,r){var a=r(1324),i=r(5265),t=r(3003),c=r(7689),s=r(3329);n.Z=function(){var e=(0,c.TH)().pathname.includes("recipes")?"".concat(t.Z.recipe_card," ").concat(t.Z.all_recipes):"".concat(t.Z.recipe_card," ").concat(t.Z.popular_recipes);return(0,s.jsxs)("li",{style:{animation:"var(--animation-skeleton)"},className:e,children:[(0,s.jsx)("img",{src:i.Z,alt:"placeholder",className:t.Z.thumb}),(0,s.jsxs)("div",{className:t.Z.card_details,children:[(0,s.jsx)("div",{style:{backgroundColor:"var(--color-main-10)",height:"24px",borderRadius:"8px"}}),(0,s.jsx)("div",{style:{backgroundColor:"var(--color-main-10)",borderRadius:"8px"},className:t.Z.description}),(0,s.jsxs)("div",{className:t.Z.owner_info,children:[(0,s.jsx)("img",{src:a.Z,className:t.Z.avatar,alt:"avatar placeholder"}),(0,s.jsxs)("div",{className:t.Z.icons_wrapper,children:[(0,s.jsx)("div",{style:{backgroundColor:"var(--color-main-10)"},className:t.Z.heart_icon}),(0,s.jsx)("div",{style:{backgroundColor:"var(--color-main-10)"},className:t.Z.arrow_icon})]})]})]})]})}},8333:function(e,n,r){r.d(n,{Z:function(){return t}});var a="RecipeList_recipe_list__+8mtI",i=r(3329),t=function(e){var n=e.children;return(0,i.jsx)("ul",{className:a,children:n})}},6618:function(e,n,r){r.d(n,{Z:function(){return _}});var a=r(9439),i=r(2791),t="Ingredients_ingredient_container__gr-3U",c="Ingredients_img_wrapper__z8MRG",s="Ingredients_name_style__3XTrH",o="Ingredients_measure_style__tz9RC",l="Ingredients_btn__YgUSW",u=r(3439),p=r(5265),d=r(3329),_=function(e){var n=e.img,r=e.name,_=e.measure,f=e._id,h=e.callback,m=void 0===h?null:h,v=(0,i.useState)(n),x=(0,a.Z)(v,2),j=x[0],g=x[1];return(0,d.jsxs)("li",{className:t,children:[(0,d.jsx)("img",{src:j,alt:r,className:c,onError:function(){g(p.Z)}}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:s,children:r}),(0,d.jsx)("p",{className:o,children:_})]}),m&&(0,d.jsx)("button",{className:l,onClick:function(){return m(f)},children:(0,d.jsx)("svg",{height:16,width:16,children:(0,d.jsx)("use",{href:"".concat(u.Z,"#icon-close")})})})]})}},8099:function(e,n,r){r.d(n,{Z:function(){return t}});var a={page:"PageContainer_page__uM9Tb",home:"PageContainer_home__oMp0D",recipe:"PageContainer_recipe__2uBu-",profile:"PageContainer_profile__r6XCR"},i=r(3329),t=function(e){var n=e.page,r=e.children,t=e.tag;return"section"===(void 0===t?"div":t)?(0,i.jsx)("section",{className:"".concat(a.page," ").concat(n?a[n]:""),children:r}):(0,i.jsx)("div",{className:"".concat(a.page," ").concat(n?a[n]:""),children:r})}},8956:function(e,n,r){r.d(n,{Z:function(){return s}});var a=r(1087),i="PathInfo_path__rwXvn",t="PathInfo_current__3TPtY",c=r(3329),s=function(e){var n=e.current;return(0,c.jsxs)("div",{className:i,children:[(0,c.jsx)(a.rU,{to:"/",children:"Home"}),(0,c.jsx)("span",{children:"/"}),(0,c.jsx)("span",{className:t,children:n})]})}},7868:function(e,n,r){r.r(n),r.d(n,{default:function(){return B}});var a=r(5861),i=r(9439),t=r(4687),c=r.n(t),s=r(2791),o=r(7689),l=r(9985),u=r(9227),p=r(3536),d=r(8956),_=r(3433),f=r(8333),h=r(3188),m=r(6164),v="PopularRecipes_title__8YP+o",x=r(3329),j=function(){var e=(0,s.useState)([]),n=(0,i.Z)(e,2),r=n[0],t=n[1],o=(0,s.useState)(!1),p=(0,i.Z)(o,2),d=p[0],j=p[1],g=function(){var e=(0,a.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,l.T0)();case 4:n=e.sent,r=n.data,t(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),(0,u.x)(e.t0);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){g()}),[]),(0,x.jsxs)("section",{className:"section",children:[(0,x.jsx)("h2",{className:v,children:"Popular recipes"}),(0,x.jsx)(f.Z,{children:d?(0,_.Z)(Array(4)).map((function(e,n){return(0,x.jsx)(m.Z,{},n)})):r.map((function(e){return(0,x.jsx)(h.Z,{recipe:e},e._id)}))})]})},g=r(4420),Z=r(8568),N=r(6618),b="RecipeIngredients_title__glYQM",w="RecipeIngredients_list__oq936",R=function(e){var n=e.ingredients,r=void 0===n?[]:n;return(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{className:b,children:"ingredients"}),(0,x.jsx)("ul",{className:w,children:r.map((function(e){var n=e.id,r=n.name,a=n._id,i=n.img,t=e.measure;return(0,x.jsx)(N.Z,{img:i,name:r,measure:t},a)}))})]})},C=r(8417),k="RecipeMainInfo_img_container__W17Hs",I="RecipeMainInfo_container_info__iLSQG",y="RecipeMainInfo_title__upfnK",M="RecipeMainInfo_list__ilh-f",P="RecipeMainInfo_list_item__GNQO3",T="RecipeMainInfo_description__aNDOe",S="RecipeMainInfo_avatar_container__PuBfX",F="RecipeMainInfo_btn_wrapper__i0Rim",O="RecipeMainInfo_creator__Ud2l1",A="RecipeMainInfo_creator_info__BfWMX",G="RecipeMainInfo_creator_name__yhSRS",X=r(1324),E=function(e){var n=e.thumb,r=e.title,a=e.category,i=e.time,t=e.area,c=e.description,s=e.owner,o=e.handlerGoToOwner,l=(0,p.eW)(),u=(0,p.kf)(),d=(0,p.Pv)();return(0,x.jsxs)(x.Fragment,{children:[!l&&(0,x.jsx)(C.Z,{publicId:n,alt:r,aspectRatio:u?1.078:d?1.76:1,className:k}),(0,x.jsxs)("div",{className:I,children:[(0,x.jsx)("h2",{className:y,children:r}),(0,x.jsxs)("ul",{className:M,children:[(0,x.jsx)("li",{className:P,children:t}),(0,x.jsx)("li",{className:P,children:a}),(0,x.jsxs)("li",{className:P,children:[i," min"]})]}),(0,x.jsx)("p",{className:T,children:c}),(0,x.jsxs)("button",{type:"button",className:F,onClick:o,children:[(0,x.jsx)(C.Z,{publicId:s.avatar,alt:s.name,defaultImage:X.Z,className:S}),(0,x.jsxs)("span",{className:O,children:[(0,x.jsx)("span",{className:A,children:"Created by:"}),(0,x.jsx)("span",{className:G,children:s.name})]})]})]})]})},Q=r(411),U="RecipePreparation_preparation_wrapper__najNu",W="RecipePreparation_title__aaXuL",H=function(e){var n=e.instructions,r=e.status,a=e.handlerAddToFavorite,i=e.isPending,t=n.split("\r\n");return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:U,children:[(0,x.jsx)("h3",{className:W,children:"Recipe Preparation"}),t.map((function(e,n){return(0,x.jsx)("p",{children:e},n)}))]}),(0,x.jsx)(Q.Z,{type:"button",color:"light",size:"normal",onClick:a,disabled:i,children:r})]})},L=r(7263),Y=function(e){var n=e.recipe,r=n.thumb,t=n.title,p=n.category,d=n.time,_=n.area.name,f=n.description,h=n.owner,m=n.ingredients,v=n.instructions,j=n.favorite,N=(0,L.F)().onAuthOpen,b=(0,g.v9)(Z.dy),w=(0,o.s0)(),C=(0,s.useState)(!1),k=(0,i.Z)(C,2),I=k[0],y=k[1],M=(0,s.useState)(!!b&&j.includes(b.id)),P=(0,i.Z)(M,2),T=P[0],S=P[1],F=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=3;break}return N(),e.abrupt("return");case 3:if(e.prev=3,y(!0),!T){e.next=11;break}return e.next=8,(0,l.Ni)(n._id);case 8:S(!1),e.next=14;break;case 11:return e.next=13,(0,l.a3)(n._id);case 13:S(!0);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),(0,u.x)(e.t0);case 19:return e.prev=19,y(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[3,16,19,22]])})));return function(){return e.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(E,{thumb:r,title:t,category:p.name,time:d,area:_,description:f,owner:h,handlerGoToOwner:function(){b?w("/user/".concat(n.owner._id,"/recipes")):N("/user/".concat(n.owner._id,"/recipes"))}}),(0,x.jsx)(R,{ingredients:m}),(0,x.jsx)(H,{instructions:v,status:T?"Remove from favorites":"Add to favorites",handlerAddToFavorite:F,isPending:I})]})},q=r(8099),B=function(){var e=(0,p.eW)(),n=(0,o.UO)().id,r=(0,s.useState)(null),t=(0,i.Z)(r,2),_=t[0],f=t[1];return(0,s.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})})),(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.G3)(n);case 3:r=e.sent,a=r.data,f(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),(0,u.x)(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,x.jsxs)(q.Z,{page:"recipe",children:[(0,x.jsxs)("section",{className:"section ",children:[(0,x.jsx)(d.Z,{current:null===_||void 0===_?void 0:_.title}),(0,x.jsx)("div",{className:"section_row",children:_&&(0,x.jsxs)(x.Fragment,{children:[e&&(0,x.jsx)(C.Z,{publicId:_.thumb,alt:_.title,aspectRatio:1.37}),(0,x.jsx)("div",{className:"section",children:(0,x.jsx)(Y,{recipe:_})})]})})]}),(0,x.jsx)(j,{})]})}},9985:function(e,n,r){r.d(n,{G3:function(){return i},Ni:function(){return d},Qd:function(){return o},T0:function(){return c},V4:function(){return l},XD:function(){return _},a3:function(){return p},iM:function(){return t},lZ:function(){return s},qG:function(){return u}});var a=r(4156),i=function(e){return a.hi.get("/api/recipes/details/".concat(e))},t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page,r=e.limit,i=e.category,t=e.ingredients,c=e.area;return a.hi.get("/api/recipes",{params:{page:n,limit:r,category:i,ingredients:t,area:c}})},c=function(){return a.hi.get("/api/recipes/popular")},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page;return a.hi.get("/api/recipes/favorite",{params:{page:n,limit:9}})},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page;return a.hi.get("/api/recipes/own",{params:{page:n,limit:9}})},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page,r=arguments.length>1?arguments[1]:void 0;return a.hi.get("/api/recipes/own/".concat(r),{params:{page:n,limit:9}})},u=function(e){return a.hi.delete("/api/own/".concat(e))},p=function(e){return a.hi.patch("/api/recipes/addFavorite/".concat(e))},d=function(e){return a.hi.patch("/api/recipes/removeFavorite/".concat(e))},_=function(e){return a.hi.post("/api/recipes/own",e,{headers:{"Content-Type":"multipart/form-data"}})}},3003:function(e,n){n.Z={recipe_card:"RecipeCard_recipe_card__OKru5",thumb:"RecipeCard_thumb__ob9-m",card_details:"RecipeCard_card_details__QQLBu",title:"RecipeCard_title__Q8fes",description:"RecipeCard_description__FKT9D",owner_info:"RecipeCard_owner_info__WRsg8",owner_btn:"RecipeCard_owner_btn__UlEl-",avatar:"RecipeCard_avatar__EIqdx",icons_wrapper:"RecipeCard_icons_wrapper__3mYK1",heart_icon:"RecipeCard_heart_icon__qfeO0",arrow_icon:"RecipeCard_arrow_icon__MU94V",icon:"RecipeCard_icon__r2o6b",all_recipes:"RecipeCard_all_recipes__JJ172",popular_recipes:"RecipeCard_popular_recipes__XvlL9"}}}]);
//# sourceMappingURL=868.2b29294e.chunk.js.map