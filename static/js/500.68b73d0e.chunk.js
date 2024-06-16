"use strict";(self.webpackChunkproject_ucranes03=self.webpackChunkproject_ucranes03||[]).push([[500],{8333:function(e,n,r){r.d(n,{Z:function(){return a}});var t="RecipeList_recipe_list__+8mtI",i=r(3329),a=function(e){var n=e.children;return(0,i.jsx)("ul",{className:t,children:n})}},500:function(e,n,r){r.r(n),r.d(n,{default:function(){return re}});var t=r(3433),i=r(5861),a=r(9439),c=r(4687),o=r.n(c),s=r(2791),u=r(4420),l=r(1087),d=r(5781),p=r(7878),f=r(3536),m=r(9985),v=r(6033),h=r(9227),g=r(1746),_=r(9887),x=r(1031),b=r(1413),j={control:function(e){return(0,b.Z)((0,b.Z)({},e),{},{borderRadius:"30px",border:"1px solid var(--color-main-20, rgba(5, 5, 5, 0.20))",fontFamily:"Mulish",fontSize:"16px",fontStyle:"normal",fontWeight:500,lineHeight:"24px",letterSpacing:"-0.02em",color:"var(--color-main, #050505)",boxShadow:"none",padding:"16px 18px",backgroundColor:"var(--color-bg)","&:hover":{borderColor:"var(--color-main)"},cursor:"pointer"})},valueContainer:function(e){return(0,b.Z)((0,b.Z)({},e),{},{padding:0,margin:0})},input:function(e){return(0,b.Z)((0,b.Z)({},e),{},{padding:0,margin:0})},singleValue:function(e){return(0,b.Z)((0,b.Z)({},e),{},{color:"var(--color-main, #050505)",margin:"0",padding:"0"})},placeholder:function(e){return(0,b.Z)((0,b.Z)({},e),{},{color:"var(--color-main-60, rgba(5, 5, 5, 0.60))",fontFamily:"Mulish",fontSize:"16px",fontStyle:"normal",fontWeight:500,lineHeight:"24px",letterSpacing:"-0.02em"})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{transition:"var(--transition)",transform:n.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)",color:"var(--color-main, #050505)",padding:4,"&:hover":{color:"var(--color-main, #050505)"}})},clearIndicator:function(e){return(0,b.Z)((0,b.Z)({},e),{},{padding:4,color:"var(--color-main, #050505)"})},menu:function(e){return(0,b.Z)((0,b.Z)({},e),{},{backgroundColor:"var(--color-bg)",borderRadius:"15px",borderColor:"var(--color-main-20, rgba(5, 5, 5, 0.20))",padding:"16px 0"})},menuList:function(e){return(0,b.Z)((0,b.Z)({},e),{},{"::-webkit-scrollbar":{width:"5px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{borderRadius:"3px",background:"var(--color-main-80)"},"::-webkit-scrollbar-thumb:hover":{background:"var(--color-main)"},padding:"0 13px 0 18px"})},option:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{fontFamily:"Mulish",fontSize:"16px",fontStyle:"normal",fontWeight:500,lineHeight:"24px",letterSpacing:"-0.02em",color:"var(--color-main, #050505)",borderRadius:"4px",padding:"0 4px",margin:"0",backgroundColor:n.isSelected?"var(--color-main-20)":n.isFocused?"var(--color-main-10)":null,"&:active":{backgroundColor:"var(--color-main-20)"},"&:selected":{backgroundColor:"var(--color-main-10)"}})}},Z=r(3329),C=function(e){var n=e.options,r=e.onChange,t=e.value,i=e.placeholder,a=e.name;return(0,Z.jsx)(x.ZP,{options:n,isSearchable:!0,isClearable:!0,styles:j,onChange:function(e){return r(e,{name:a})},value:t,placeholder:i})},k=r(5787),N=r(1961),w="RecipeFilter_filters_container__HHXrz",R=function(){var e=(0,l.lr)(),n=(0,a.Z)(e,2),r=n[0],t=n[1],i=(0,u.v9)(k.i9),c=(0,u.v9)(N.AP),o=function(e,n){var r=n.name;t((function(n){var t=new URLSearchParams(n);return t.set("page",1),e?t.set(r,e.value):t.delete(r),t}))},s=function(e,n){return e.find((function(e){return e.value===n}))||null},d=s(i,r.get("ingredient")),p=s(c,r.get("area"));return(0,Z.jsxs)("div",{className:w,children:[(0,Z.jsx)(C,{name:"ingredient",options:i,onChange:o,value:d,placeholder:"Ingredients"}),(0,Z.jsx)(C,{name:"area",options:c,onChange:o,value:p,placeholder:"Areas"})]})},y=r(8333),S=r(7689),P=r(8568),I=r(5427),H=r(8417),F=r(1324),E=r(3439),L="RecipeCard_recipe_card__OKru5",M="RecipeCard_thumb__ob9-m",T="RecipeCard_card_details__QQLBu",q="RecipeCard_title__Q8fes",O="RecipeCard_description__FKT9D",A="RecipeCard_owner_info__WRsg8",B="RecipeCard_owner_btn__UlEl-",K="RecipeCard_avatar__EIqdx",U="RecipeCard_icons_wrapper__3mYK1",z="RecipeCard_heart_icon__qfeO0",W="RecipeCard_arrow_icon__MU94V",X="RecipeCard_icon__r2o6b",Q="RecipeCard_all_recipes__JJ172",V="RecipeCard_popular_recipes__XvlL9",D=function(e){var n=e.recipe,r=n._id,t=n.title,c=n.owner,l=n.description,d=n.thumb,p=n.favorite,v=(0,I.F)().onAuthOpen,g=(0,f.kf)(),_=(0,f.Pv)(),x=(0,S.TH)(),b=(0,S.s0)(),j=(0,u.v9)(P.dy),C=(0,s.useState)(!1),k=(0,a.Z)(C,2),N=k[0],w=k[1],R=(0,s.useState)(!1),y=(0,a.Z)(R,2),D=y[0],J=y[1];(0,s.useEffect)((function(){j&&w(p.includes(j.id))}),[p,j]);var G=x.pathname.includes("recipes")?"".concat(L," ").concat(Q):"".concat(L," ").concat(V),Y=function(){var e=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return v(),e.abrupt("return");case 3:if(J(!0),e.prev=4,!N){e.next=11;break}return e.next=8,(0,m.Ni)(r);case 8:w(!1),e.next=14;break;case 11:return e.next=13,(0,m.a3)(r);case 13:w(!0);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),(0,h.x)(e.t0);case 19:return e.prev=19,J(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[4,16,19,22]])})));return function(){return e.apply(this,arguments)}}();return(0,Z.jsxs)("li",{className:G,children:[(0,Z.jsx)(H.Z,{publicId:d,alt:t,aspectRatio:g?1.49:_?1.24:1,className:M}),(0,Z.jsxs)("div",{className:T,children:[(0,Z.jsx)("h4",{className:q,children:t}),(0,Z.jsx)("p",{className:O,children:l}),(0,Z.jsxs)("div",{className:A,children:[(0,Z.jsxs)("button",{className:B,onClick:function(){j?b("/user/".concat(c._id,"/recipes")):v("/user/".concat(c._id,"/recipes"))},children:[(0,Z.jsx)(H.Z,{publicId:c.avatar,className:K,defaultImage:F.Z,alt:c.name}),c.name]}),(0,Z.jsxs)("div",{className:U,children:[(0,Z.jsx)("button",{className:z,onClick:Y,disabled:D,children:(0,Z.jsx)("svg",{className:X,children:(0,Z.jsx)("use",{href:"".concat(E.Z).concat(N?"#icon-heart-filled":"#icon-heart")})})}),(0,Z.jsx)("button",{className:W,onClick:function(){return b("/recipe/".concat(r))},children:(0,Z.jsx)("svg",{className:X,children:(0,Z.jsx)("use",{href:"".concat(E.Z,"#icon-arrow-up-right")})})})]})]})]})]})},J=r(5265),G=function(){var e=(0,S.TH)().pathname.includes("recipes")?"".concat(L," ").concat(Q):"".concat(L," ").concat(V);return(0,Z.jsxs)("li",{style:{animation:"var(--animation-skeleton)"},className:e,children:[(0,Z.jsx)("img",{src:J.Z,alt:"placeholder",className:M}),(0,Z.jsxs)("div",{className:T,children:[(0,Z.jsx)("div",{style:{backgroundColor:"var(--color-main-10)",height:"24px"}}),(0,Z.jsx)("div",{style:{backgroundColor:"var(--color-main-10)"},className:O}),(0,Z.jsxs)("div",{className:A,children:[(0,Z.jsx)("img",{src:F.Z,className:K,alt:"avatar placeholder"}),(0,Z.jsxs)("div",{className:U,children:[(0,Z.jsx)("div",{className:z}),(0,Z.jsx)("div",{className:W})]})]})]})]})},Y=r(899),$="Recipes_header__CbElO",ee="Recipes_back_link__1S3uy",ne="Recipes_content__rfgM6",re=function(){var e=(0,l.lr)(),n=(0,a.Z)(e,1)[0],r=(0,s.useState)([]),c=(0,a.Z)(r,2),x=c[0],b=c[1],j=(0,s.useState)(0),C=(0,a.Z)(j,2),k=C[0],N=C[1],w=(0,s.useState)(!1),S=(0,a.Z)(w,2),P=S[0],I=S[1],H=(0,u.I0)(),F=(0,s.useRef)(null),L=(0,f.kf)(),M=(0,u.v9)((function(e){return(0,p.pf)(e,n.get("category"))}));return(0,s.useEffect)((function(){M||H((0,d.p)())}),[M,H]),(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)(o().mark((function e(){var r,t,i,a,c,s,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.prev=1,r=L?8:12,t=n.get("page")||1,i=n.get("category"),a=n.get("ingredient"),c=n.get("area"),e.next=9,(0,m.iM)({page:t,limit:r,category:i,ingredient:a,area:c});case 9:s=e.sent,u=s.data,b(u.results),N(u.totalPages),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),(0,h.x)(e.t0);case 18:return e.prev=18,I(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})));return function(){return e.apply(this,arguments)}}();(0,v.k)(F.current),e()}),[L,n]),(0,Z.jsxs)("section",{className:"section",children:[(0,Z.jsx)("div",{ref:F}),(0,Z.jsxs)("div",{className:$,children:[(0,Z.jsxs)(l.rU,{to:"/",className:ee,children:[(0,Z.jsx)("svg",{width:16,height:16,children:(0,Z.jsx)("use",{href:"".concat(E.Z,"#icon-arrow-left")})}),"Back"]}),(0,Z.jsx)(g.Z,{children:(null===M||void 0===M?void 0:M.name)||"Recipes"}),(0,Z.jsx)(_.Z,{section:"recipes",children:(null===M||void 0===M?void 0:M.description)||"Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."})]}),(0,Z.jsxs)("div",{className:ne,children:[(0,Z.jsx)(R,{}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(y.Z,{recipes:x,children:P?(0,t.Z)(Array(L?8:12)).map((function(e,n){return(0,Z.jsx)(G,{},n)})):x.map((function(e){return(0,Z.jsx)(D,{recipe:e},e._id)}))}),k>1&&(0,Z.jsx)(Y.Z,{totalPages:k,topElementRef:F.current})]})]})]})}},1746:function(e,n,r){r.d(n,{Z:function(){return a}});var t="MainTitle_title__R5KXq",i=r(3329),a=function(e){var n=e.children;return(0,i.jsx)("h2",{className:t,children:n})}},899:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(9439),i=r(1087),a="Pagination_pagination__9X6Z-",c="Pagination_page__eZu9l",o="Pagination_active__ON+Ce",s="Pagination_prev__+HKWv",u="Pagination_next__JvuKw",l=r(3329),d=function(e){var n=e.totalPages,r=(0,i.lr)(),d=(0,t.Z)(r,2),p=d[0],f=d[1],m=parseInt(p.get("page"))||1,v=function(e){f((function(n){var r=new URLSearchParams(n);return r.set("page",e),r}))};return(0,l.jsxs)("div",{className:a,children:[m>1&&(0,l.jsx)("button",{onClick:function(){return v(m-1)},className:s,children:"Previous"}),(n<=3?Array.from({length:n},(function(e,n){return n+1})):1===m?[1,2,3]:m===n?[n-2,n-1,n]:[m-1,m,m+1]).map((function(e){return(0,l.jsx)("button",{onClick:function(){return v(e)},className:"".concat(e===m&&o," ").concat(c),children:e},e)})),m<n&&(0,l.jsx)("button",{onClick:function(){return v(m+1)},className:u,children:"Next"})]})}},9887:function(e,n,r){r.d(n,{Z:function(){return a}});var t={text:"Subtitle_text__tBnTO",categories:"Subtitle_categories__vridf",recipes:"Subtitle_recipes__qvZt7"},i=r(3329),a=function(e){var n=e.section,r=e.children;return(0,i.jsx)("p",{className:"".concat(t.text," ").concat(n?t[n]:""),children:r})}},6033:function(e,n,r){r.d(n,{I:function(){return i},k:function(){return t}});var t=function(e){if(e){var n=e.getBoundingClientRect();n.top>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)||e.scrollIntoView({behavior:"smooth",block:"start"})}},i=function(e,n){if(e&&n){var r=e.getBoundingClientRect(),t=n.getBoundingClientRect(),i=e.scrollLeft+(t.left-r.left)-r.width/2+t.width/2;e.scrollTo({left:i,behavior:"smooth"})}}},9985:function(e,n,r){r.d(n,{G3:function(){return i},Ni:function(){return p},Qd:function(){return s},T0:function(){return c},V4:function(){return u},XD:function(){return f},a3:function(){return d},iM:function(){return a},lZ:function(){return o},qG:function(){return l}});var t=r(4156),i=function(e){return t.hi.get("/api/recipes/details/".concat(e))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page,r=e.limit,i=e.category,a=e.ingredient,c=e.area;return t.hi.get("/api/recipes",{params:{page:n,limit:r,category:i,ingredient:a,area:c}})},c=function(){return t.hi.get("/api/recipes/popular")},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page;return t.hi.get("/api/recipes/favorite",{params:{page:n,limit:9}})},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page;return t.hi.get("/api/recipes/own",{params:{page:n,limit:9}})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page,r=arguments.length>1?arguments[1]:void 0;return t.hi.get("/api/recipes/own/".concat(r),{params:{page:n,limit:9}})},l=function(e){return t.hi.delete("/api/own/".concat(e))},d=function(e){return t.hi.patch("/api/recipes/addFavorite/".concat(e))},p=function(e){return t.hi.patch("/api/recipes/removeFavorite/".concat(e))},f=function(e){return t.hi.post("/api/recipes/own",e,{headers:{"Content-Type":"multipart/form-data"}})}},1961:function(e,n,r){r.d(n,{AP:function(){return t}});var t=(0,r(3553).P1)((function(e){return e.areas.items}),(function(e){return e.map((function(e){return{value:e._id,label:e.name}}))}))},7878:function(e,n,r){r.d(n,{i3:function(){return o},pf:function(){return s},us:function(){return i},xU:function(){return c},zh:function(){return a}});var t=r(3553),i=function(e){return e.categories.items},a=function(e){return e.categories.error},c=function(e){return e.categories.isLoading},o=(0,t.P1)(i,(function(e){return e.map((function(e){return{value:e._id,label:e.name}}))})),s=(0,t.P1)([i,function(e,n){return n}],(function(e,n){return null===e||void 0===e?void 0:e.find((function(e){return e._id===n}))}))},5787:function(e,n,r){r.d(n,{i9:function(){return a},jq:function(){return i}});var t=r(3553),i=function(e){return e.ingredients.items},a=(0,t.P1)(i,(function(e){return e.map((function(e){return{value:e._id,label:e.name}}))}))}}]);
//# sourceMappingURL=500.68b73d0e.chunk.js.map