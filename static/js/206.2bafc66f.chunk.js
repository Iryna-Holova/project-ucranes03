"use strict";(self.webpackChunkproject_ucranes03=self.webpackChunkproject_ucranes03||[]).push([[206],{3188:function(e,n,r){var t=r(5861),i=r(9439),a=r(4687),o=r.n(a),c=r(2791),s=r(4420),u=r(7689),l=r(9985),d=r(8568),p=r(7263),f=r(3536),v=r(9227),m=r(8417),g=r(1324),h=r(3439),_=r(3003),x=r(3329);n.Z=function(e){var n=e.recipe,r=n._id,a=n.title,b=n.owner,Z=n.description,j=n.thumb,w=n.favorite,k=(0,p.F)().onAuthOpen,C=(0,f.kf)(),N=(0,f.Pv)(),R=(0,u.TH)(),y=(0,u.s0)(),S=(0,s.v9)(d.dy),P=(0,c.useState)(!1),I=(0,i.Z)(P,2),M=I[0],E=I[1],F=(0,c.useState)(!1),H=(0,i.Z)(F,2),A=H[0],L=H[1];(0,c.useEffect)((function(){S&&E(w.includes(S.id))}),[w,S]);var T=R.pathname.includes("recipes")?"".concat(_.Z.recipe_card," ").concat(_.Z.all_recipes):"".concat(_.Z.recipe_card," ").concat(_.Z.popular_recipes),V=function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=3;break}return k(),e.abrupt("return");case 3:if(L(!0),e.prev=4,!M){e.next=11;break}return e.next=8,(0,l.Ni)(r);case 8:E(!1),e.next=14;break;case 11:return e.next=13,(0,l.a3)(r);case 13:E(!0);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),(0,v.x)(e.t0);case 19:return e.prev=19,L(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[4,16,19,22]])})));return function(){return e.apply(this,arguments)}}();return(0,x.jsxs)("li",{className:T,children:[(0,x.jsx)(m.Z,{publicId:j,alt:a,aspectRatio:C?1.49:N?1.24:1,className:_.Z.thumb}),(0,x.jsxs)("div",{className:_.Z.card_details,children:[(0,x.jsx)("h3",{className:_.Z.title,children:a}),(0,x.jsx)("p",{className:_.Z.description,children:Z}),(0,x.jsxs)("div",{className:_.Z.owner_info,children:[(0,x.jsxs)("button",{type:"button",className:_.Z.owner_btn,onClick:function(){S?y("/user/".concat(b._id,"/recipes")):k("/user/".concat(b._id,"/recipes"))},children:[(0,x.jsx)(m.Z,{publicId:b.avatar,className:_.Z.avatar,defaultImage:g.Z,alt:b.name}),b.name]}),(0,x.jsxs)("div",{className:_.Z.icons_wrapper,children:[(0,x.jsx)("button",{type:"button",className:_.Z.heart_icon,onClick:V,disabled:A,"aria-label":M?"Remove from favorites":"Add to favorites","aria-pressed":M,title:M?"Remove from favorites":"Add to favorites",children:(0,x.jsx)("svg",{className:_.Z.icon,children:(0,x.jsx)("use",{href:"".concat(h.Z).concat(M?"#icon-heart-filled":"#icon-heart")})})}),(0,x.jsx)("button",{type:"button",className:_.Z.arrow_icon,onClick:function(){return y("/recipe/".concat(r))},title:"View recipe","aria-label":"View recipe",children:(0,x.jsx)("svg",{className:_.Z.icon,children:(0,x.jsx)("use",{href:"".concat(h.Z,"#icon-arrow-up-right")})})})]})]})]})]})}},6164:function(e,n,r){var t=r(1324),i=r(5265),a=r(3003),o=r(7689),c=r(3329);n.Z=function(){var e=(0,o.TH)().pathname.includes("recipes")?"".concat(a.Z.recipe_card," ").concat(a.Z.all_recipes):"".concat(a.Z.recipe_card," ").concat(a.Z.popular_recipes);return(0,c.jsxs)("li",{style:{animation:"var(--animation-skeleton)"},className:e,children:[(0,c.jsx)("img",{src:i.Z,alt:"placeholder",className:a.Z.thumb}),(0,c.jsxs)("div",{className:a.Z.card_details,children:[(0,c.jsx)("div",{style:{backgroundColor:"var(--color-main-10)",height:"24px",borderRadius:"8px"}}),(0,c.jsx)("div",{style:{backgroundColor:"var(--color-main-10)",borderRadius:"8px"},className:a.Z.description}),(0,c.jsxs)("div",{className:a.Z.owner_info,children:[(0,c.jsx)("img",{src:t.Z,className:a.Z.avatar,alt:"avatar placeholder"}),(0,c.jsxs)("div",{className:a.Z.icons_wrapper,children:[(0,c.jsx)("div",{style:{backgroundColor:"var(--color-main-10)"},className:a.Z.heart_icon}),(0,c.jsx)("div",{style:{backgroundColor:"var(--color-main-10)"},className:a.Z.arrow_icon})]})]})]})]})}},8333:function(e,n,r){r.d(n,{Z:function(){return a}});var t="RecipeList_recipe_list__+8mtI",i=r(3329),a=function(e){var n=e.children;return(0,i.jsx)("ul",{className:t,children:n})}},8206:function(e,n,r){r.r(n),r.d(n,{default:function(){return T}});var t=r(3433),i=r(5861),a=r(9439),o=r(4687),c=r.n(o),s=r(2791),u=r(4420),l=r(1087),d=r(5781),p=r(7878),f=r(3536),v=r(9985),m=r(6033),g=r(9227),h=r(1746),_=r(9887),x=r(5756),b=r(2456),Z=r(3329),j=function(e){var n=e.options,r=e.onChange,t=e.value,i=e.placeholder,a=e.name,o=e.isMulti;return(0,Z.jsx)(x.ZP,{options:n,isSearchable:!0,isClearable:!0,styles:b.X,onChange:function(e){return r(e,{name:a})},value:t,isMulti:o,placeholder:i})},w=r(5787),k=r(1961),C=r(4660),N=r(5954),R="RecipeFilter_filters_container__HHXrz",y=function(){var e=(0,l.lr)(),n=(0,a.Z)(e,2),r=n[0],t=n[1],i=(0,u.v9)(w.i9),o=(0,u.v9)(k.AP),c=(0,u.I0)();(0,s.useEffect)((function(){i.length||c((0,C.D)())}),[c,i]),(0,s.useEffect)((function(){o.length||c((0,N.s)())}),[c,o]);var d=function(e,n){var r=n.name;t((function(n){var t=new URLSearchParams(n);return t.set("page",1),e&&Array.isArray(e)?e.length>0?t.set(r,e.map((function(e){return e.value})).join(",")):t.delete(r):e?t.set(r,e.value):t.delete(r),t}))},p=function(e,n){if(!n)return null;var r=n.split(",");return e.filter((function(e){return r.includes(e.value)}))},f=p(i,r.get("ingredients")),v=p(o,r.get("area"));return(0,Z.jsxs)("div",{className:R,children:[(0,Z.jsx)(j,{name:"ingredients",options:i,onChange:d,value:f,placeholder:"Ingredient",isMulti:!0}),(0,Z.jsx)(j,{name:"area",options:o,onChange:d,value:v,placeholder:"Areas"})]})},S=r(8333),P=r(3188),I=r(6164),M=r(899),E=r(5992),F=r(3439),H="Recipes_header__CbElO",A="Recipes_back_link__1S3uy",L="Recipes_content__rfgM6",T=function(){var e=(0,l.lr)(),n=(0,a.Z)(e,1)[0],r=(0,s.useState)([]),o=(0,a.Z)(r,2),x=o[0],b=o[1],j=(0,s.useState)(0),w=(0,a.Z)(j,2),k=w[0],C=w[1],N=(0,s.useState)(!1),R=(0,a.Z)(N,2),T=R[0],V=R[1],q=(0,u.I0)(),O=(0,s.useRef)(null),X=(0,f.kf)(),z=(0,u.v9)((function(e){return(0,p.pf)(e,n.get("category"))}));return(0,s.useEffect)((function(){z||q((0,d.p)())}),[z,q]),(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)(c().mark((function e(){var r,t,i,a,o,s,u,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.prev=1,t=X?8:12,i=n.get("page")||1,a=n.get("category"),o=null===(r=n.get("ingredients"))||void 0===r?void 0:r.split(","),s=n.get("area"),e.next=9,(0,v.iM)({page:i,limit:t,category:a,ingredients:o,area:s});case 9:u=e.sent,l=u.data,b(l.results),C(l.totalPages),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),(0,g.x)(e.t0);case 18:return e.prev=18,V(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})));return function(){return e.apply(this,arguments)}}();e(),setTimeout((function(){(0,m.k)(O.current)}),100)}),[X,n]),(0,Z.jsxs)("section",{className:"section",children:[(0,Z.jsxs)("div",{className:H,children:[(0,Z.jsxs)(l.rU,{to:"/",className:A,ref:O,children:[(0,Z.jsx)("svg",{width:16,height:16,children:(0,Z.jsx)("use",{href:"".concat(F.Z,"#icon-arrow-left")})}),"Back"]}),(0,Z.jsx)(h.Z,{children:(null===z||void 0===z?void 0:z.name)||"Recipes"}),(0,Z.jsx)(_.Z,{section:"recipes",children:(null===z||void 0===z?void 0:z.description)||"Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."})]}),(0,Z.jsxs)("div",{className:L,children:[(0,Z.jsx)(y,{}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(S.Z,{children:T?(0,t.Z)(Array(X?8:12)).map((function(e,n){return(0,Z.jsx)(I.Z,{},n)})):x.length?x.map((function(e){return(0,Z.jsx)(P.Z,{recipe:e},e._id)})):(0,Z.jsx)(E.Z,{children:"Recipes not found"})}),k>1&&(0,Z.jsx)(M.Z,{totalPages:k,topElementRef:O.current})]})]})]})}},5992:function(e,n,r){r.d(n,{Z:function(){return a}});var t="Empty_text__F5nPx",i=r(3329),a=function(e){var n=e.children;return(0,i.jsx)("p",{className:t,children:n})}},1746:function(e,n,r){r.d(n,{Z:function(){return a}});var t="MainTitle_title__R5KXq",i=r(3329),a=function(e){var n=e.children;return(0,i.jsx)("h2",{className:t,children:n})}},899:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(9439),i=r(1087),a="Pagination_pagination__9X6Z-",o="Pagination_page__eZu9l",c="Pagination_active__ON+Ce",s="Pagination_prev__+HKWv",u="Pagination_next__JvuKw",l=r(3329),d=function(e){var n=e.totalPages,r=(0,i.lr)(),d=(0,t.Z)(r,2),p=d[0],f=d[1],v=parseInt(p.get("page"))||1,m=function(e){f((function(n){var r=new URLSearchParams(n);return r.set("page",e),r}))};return(0,l.jsxs)("div",{className:a,"aria-label":"Page navigation",role:"navigation",children:[v>1&&(0,l.jsx)("button",{onClick:function(){return m(v-1)},className:s,"aria-label":"Previous page",title:"Previous page",children:"Previous"}),(n<=3?Array.from({length:n},(function(e,n){return n+1})):1===v?[1,2,3]:v===n?[n-2,n-1,n]:[v-1,v,v+1]).map((function(e){return(0,l.jsx)("button",{onClick:function(){return m(e)},className:"".concat(e===v&&c," ").concat(o),"aria-label":"Page ".concat(e),"aria-current":e===v,title:"Page ".concat(e),children:e},e)})),v<n&&(0,l.jsx)("button",{onClick:function(){return m(v+1)},className:u,"aria-label":"Next page",title:"Next page",children:"Next"})]})}},2456:function(e,n,r){r.d(n,{X:function(){return i}});var t=r(1413),i={control:function(e){return(0,t.Z)((0,t.Z)({},e),{},{borderRadius:"30px",border:"1px solid var(--color-main-20, rgba(5, 5, 5, 0.20))",fontFamily:"Mulish",fontSize:"16px",fontStyle:"normal",fontWeight:500,lineHeight:"24px",letterSpacing:"-0.02em",color:"var(--color-main, #050505)",boxShadow:"none",padding:"16px 18px",backgroundColor:"var(--color-bg)","&:hover":{borderColor:"var(--color-main-60, rgba(5, 5, 5, 0.60))"},cursor:"pointer"})},valueContainer:function(e){return(0,t.Z)((0,t.Z)({},e),{},{padding:0,margin:0})},input:function(e){return(0,t.Z)((0,t.Z)({},e),{},{padding:0,margin:0})},singleValue:function(e){return(0,t.Z)((0,t.Z)({},e),{},{color:"var(--color-main, #050505)",margin:"0",padding:"0"})},multiValue:function(e){return(0,t.Z)((0,t.Z)({},e),{},{backgroundColor:"transparent",color:"var(--color-main, #050505)",padding:"0",margin:"0"})},multiValueLabel:function(e){return(0,t.Z)((0,t.Z)({},e),{},{color:"var(--color-main, #050505)",fontFamily:"Mulish",fontSize:"16px",fontStyle:"normal",fontWeight:500,lineHeight:"24px",letterSpacing:"-0.02em",padding:"0",margin:"0"})},placeholder:function(e){return(0,t.Z)((0,t.Z)({},e),{},{color:"var(--color-main-60, rgba(5, 5, 5, 0.60))",fontFamily:"Mulish",fontSize:"16px",fontStyle:"normal",fontWeight:500,lineHeight:"24px",letterSpacing:"-0.02em"})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{transition:"var(--transition)",transform:n.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)",color:"var(--color-main, #050505)",padding:4,"&:hover":{color:"var(--color-main, #050505)"}})},clearIndicator:function(e){return(0,t.Z)((0,t.Z)({},e),{},{padding:4,color:"var(--color-main, #050505)","&:hover":{color:"var(--color-main, #050505)"}})},menu:function(e){return(0,t.Z)((0,t.Z)({},e),{},{backgroundColor:"var(--color-bg)",borderRadius:"15px",border:"1px solid var(--color-main-20, rgba(5, 5, 5, 0.20))",padding:"16px 0"})},menuList:function(e){return(0,t.Z)((0,t.Z)({},e),{},{"::-webkit-scrollbar":{width:"5px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{borderRadius:"3px",background:"var(--color-main-80)"},"::-webkit-scrollbar-thumb:hover":{background:"var(--color-main)"},padding:"0 9px 0 14px"})},option:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{fontFamily:"Mulish",fontSize:"16px",fontStyle:"normal",fontWeight:500,lineHeight:"24px",letterSpacing:"-0.02em",color:"var(--color-main, #050505)",borderRadius:"4px",padding:"0 4px",margin:"0",backgroundColor:n.isSelected?"var(--color-main-20)":n.isFocused?"var(--color-main-10)":null,"&:active":{backgroundColor:"var(--color-main-20)"},"&:selected":{backgroundColor:"var(--color-main-10)"}})}}},9887:function(e,n,r){r.d(n,{Z:function(){return a}});var t={text:"Subtitle_text__tBnTO",categories:"Subtitle_categories__vridf",recipes:"Subtitle_recipes__qvZt7"},i=r(3329),a=function(e){var n=e.section,r=e.children;return(0,i.jsx)("p",{className:"".concat(t.text," ").concat(n?t[n]:""),children:r})}},6033:function(e,n,r){r.d(n,{I:function(){return i},k:function(){return t}});var t=function(e){if(e){var n=e.getBoundingClientRect();n.top>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)||e.scrollIntoView({behavior:"smooth",block:"start"})}},i=function(e,n){if(e&&n){var r=e.getBoundingClientRect(),t=n.getBoundingClientRect(),i=e.scrollLeft+(t.left-r.left)-r.width/2+t.width/2;e.scrollTo({left:i,behavior:"smooth"})}}},9985:function(e,n,r){r.d(n,{G3:function(){return i},Ni:function(){return p},Qd:function(){return s},T0:function(){return o},V4:function(){return u},XD:function(){return f},a3:function(){return d},iM:function(){return a},lZ:function(){return c},qG:function(){return l}});var t=r(4156),i=function(e){return t.hi.get("/api/recipes/details/".concat(e))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page,r=e.limit,i=e.category,a=e.ingredients,o=e.area;return t.hi.get("/api/recipes",{params:{page:n,limit:r,category:i,ingredients:a,area:o}})},o=function(){return t.hi.get("/api/recipes/popular")},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page;return t.hi.get("/api/recipes/favorite",{params:{page:n,limit:9}})},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page;return t.hi.get("/api/recipes/own",{params:{page:n,limit:9}})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page,r=arguments.length>1?arguments[1]:void 0;return t.hi.get("/api/recipes/own/".concat(r),{params:{page:n,limit:9}})},l=function(e){return t.hi.delete("/api/own/".concat(e))},d=function(e){return t.hi.patch("/api/recipes/addFavorite/".concat(e))},p=function(e){return t.hi.patch("/api/recipes/removeFavorite/".concat(e))},f=function(e){return t.hi.post("/api/recipes/own",e,{headers:{"Content-Type":"multipart/form-data"}})}},1961:function(e,n,r){r.d(n,{AP:function(){return t}});var t=(0,r(3553).P1)((function(e){return e.areas.items}),(function(e){return e.map((function(e){return{value:e._id,label:e.name}}))}))},7878:function(e,n,r){r.d(n,{i3:function(){return c},pf:function(){return s},us:function(){return i},xU:function(){return o},zh:function(){return a}});var t=r(3553),i=function(e){return e.categories.items},a=function(e){return e.categories.error},o=function(e){return e.categories.isLoading},c=(0,t.P1)(i,(function(e){return e.map((function(e){return{value:e._id,label:e.name}}))})),s=(0,t.P1)([i,function(e,n){return n}],(function(e,n){return null===e||void 0===e?void 0:e.find((function(e){return e._id===n}))}))},5787:function(e,n,r){r.d(n,{i9:function(){return a},jq:function(){return i}});var t=r(3553),i=function(e){return e.ingredients.items},a=(0,t.P1)(i,(function(e){return e.map((function(e){return{value:e._id,label:e.name}}))}))},3003:function(e,n){n.Z={recipe_card:"RecipeCard_recipe_card__OKru5",thumb:"RecipeCard_thumb__ob9-m",card_details:"RecipeCard_card_details__QQLBu",title:"RecipeCard_title__Q8fes",description:"RecipeCard_description__FKT9D",owner_info:"RecipeCard_owner_info__WRsg8",owner_btn:"RecipeCard_owner_btn__UlEl-",avatar:"RecipeCard_avatar__EIqdx",icons_wrapper:"RecipeCard_icons_wrapper__3mYK1",heart_icon:"RecipeCard_heart_icon__qfeO0",arrow_icon:"RecipeCard_arrow_icon__MU94V",icon:"RecipeCard_icon__r2o6b",all_recipes:"RecipeCard_all_recipes__JJ172",popular_recipes:"RecipeCard_popular_recipes__XvlL9"}}}]);
//# sourceMappingURL=206.2bafc66f.chunk.js.map