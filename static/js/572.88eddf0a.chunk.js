"use strict";(self.webpackChunkproject_ucranes03=self.webpackChunkproject_ucranes03||[]).push([[572],{6977:function(e,t,n){n.d(t,{Z:function(){return M}});var a=n(5861),i=n(9439),r=n(4687),o=n.n(r),s=n(2791),c=n(4420),d=n(7689),u=n(9985),h=n(8568),l=n(923),p=n(600),f=n(6196),m=n(9321),g=n(3439),v=n(1324),_="RecipeCard_recipe_card__OKru5",x="RecipeCard_thumb__ob9-m",y="RecipeCard_card_details__QQLBu",w="RecipeCard_title__Q8fes",b="RecipeCard_description__FKT9D",j="RecipeCard_owner_info__WRsg8",k="RecipeCard_owner_btn__UlEl-",C="RecipeCard_avatar__EIqdx",N="RecipeCard_icons_wrapper__3mYK1",R="RecipeCard_heart_icon__qfeO0",Z="RecipeCard_arrow_icon__MU94V",T="RecipeCard_icon__r2o6b",S="RecipeCard_favorite_heart__eINC5",q="RecipeCard_all_recipes__JJ172",P="RecipeCard_popular_recipes__XvlL9",I=n(4932),E=n(184),A=function(e){var t=e.recipe,n=(0,I.kf)(),r=(0,I.Pv)(),A=t._id,z=t.title,M=t.owner,$=t.description,U=t.thumb,F=t.favorite,L=(0,l.f)(),B=L.onToggleMode,D=L.isSignUp,H=(0,d.s0)(),K=(0,d.TH)(),Q=(0,c.v9)(h.dy),W=(0,s.useState)(!!Q&&F.includes(Q.id)),O=(0,i.Z)(W,2),V=O[0],Y=O[1],J=(0,s.useState)(!1),X=(0,i.Z)(J,2),G=X[0],ee=X[1],te=K.pathname.includes("recipes")?"".concat(_," ").concat(q):"".concat(_," ").concat(P),ne=V?"".concat(R," ").concat(S):"".concat(R),ae=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Q){e.next=3;break}return ee(!0),e.abrupt("return");case 3:if(e.prev=3,!V){e.next=10;break}return Y(!1),e.next=8,(0,u.Ni)(A);case 8:e.next=13;break;case 10:return Y(!0),e.next=13,(0,u.a3)(A);case 13:e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(3),Error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(){return e.apply(this,arguments)}}();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("li",{className:te,children:[(0,E.jsx)(f.Z,{publicId:U,alt:z,aspectRatio:n?1.49:r?1.24:1,className:x}),(0,E.jsxs)("div",{className:y,children:[(0,E.jsx)("h4",{className:w,children:z}),(0,E.jsx)("p",{className:b,children:$}),(0,E.jsxs)("div",{className:j,children:[(0,E.jsxs)("button",{className:k,onClick:function(){Q?H("/user/".concat(M._id,"/recipes")):ee(!0)},children:[(0,E.jsx)(f.Z,{publicId:M.avatar,className:C,defaultImage:v.Z,alt:M.name}),M.name]}),(0,E.jsxs)("div",{className:N,children:[(0,E.jsx)("button",{className:ne,onClick:ae,children:(0,E.jsx)("svg",{className:T,children:(0,E.jsx)("use",{href:"".concat(g.Z,"#icon-heart")})})}),(0,E.jsx)("button",{className:Z,onClick:function(){return H("/recipe/".concat(A))},children:(0,E.jsx)("svg",{className:T,children:(0,E.jsx)("use",{href:"".concat(g.Z,"#icon-arrow-up-right")})})})]})]})]})]}),G&&(0,E.jsx)(m.Z,{onClose:function(){ee(!1)},children:(0,E.jsx)(p.Z,{isSignUp:D,onToggleMode:B})})]})},z="RecipeList_recipe_list__+8mtI",M=function(e){var t=e.recipes;return(0,E.jsx)("ul",{className:z,children:t&&t.map((function(e){return(0,E.jsx)(A,{recipe:e},e._id)}))})}},6196:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(9439),i=n(2791),r=n(8706),o=n(3789),s=n(1896),c=n(8421),d=n(4932);var u=n.p+"static/media/placeholder-image.47615446a99f198bfa3c72de94c54a99.svg",h=n(184),l=function(e){var t=e.publicId,n=e.alt,l=e.aspectRatio,p=void 0===l?"1":l,f=e.defaultImage,m=void 0===f?u:f,g=e.className,v=void 0===g?"":g,_=(0,i.useState)(!1),x=(0,a.Z)(_,2),y=x[0],w=x[1],b=(0,d.S5)(),j=c.x.image(t).resize((0,s.hl)().aspectRatio(p)).format("auto").delivery((0,o.uN)(b?2:1));return y||!t?(0,h.jsx)("img",{src:m,alt:n,className:v}):(0,h.jsx)(r.pw,{cldImg:j,plugins:[(0,r.mA)({rootMargin:"200px"}),(0,r.jW)(),(0,r.W$)({mode:"blur"})],alt:n,onError:function(){w(!0)},className:v})}},8099:function(e,t,n){n.d(t,{Z:function(){return r}});var a={page:"PageContainer_page__uM9Tb",home:"PageContainer_home__oMp0D",recipe:"PageContainer_recipe__2uBu-"},i=n(184),r=function(e){var t=e.page,n=e.children;e.tag;return(0,i.jsx)("section",{className:"".concat(a.page," ").concat(t?a[t]:""),children:n})}},8956:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(1087),i="PathInfo_path__rwXvn",r="PathInfo_current__3TPtY",o=n(184),s=function(e){var t=e.current;return(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)(a.rU,{to:"/",children:"Home"}),(0,o.jsx)("span",{children:"/"}),(0,o.jsx)("span",{className:r,children:t})]})}},8421:function(e,t,n){n.d(t,{I:function(){return s},x:function(){return o}});var a=n(4099),i=n(1896),r=n(3789),o=new a.r({cloud:{cloudName:"dhap6yrcb"}}),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.aspectRatio,a=void 0===n?"auto":n,s=t.width,c=void 0===s?"auto":s,d=t.pixelRatio,u=void 0===d?1:d;return o.image(e).resize((0,i.hl)().width(c).aspectRatio(a)).format("auto").delivery((0,r.uN)(u)).toURL()}},4932:function(e,t,n){n.d(t,{Pv:function(){return r},S5:function(){return s},eW:function(){return i},kf:function(){return o}});var a=n(1075),i=function(){return(0,a.ac)({query:"(min-width: 1440px)"})},r=function(){return(0,a.ac)({query:"(min-width: 768px) and (max-width: 1440px)"})},o=function(){return(0,a.ac)({query:"(max-width: 768px)"})},s=function(){return(0,a.ac)({query:"(min-resolution: 2dppx)"})}},7572:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(9439),i=n(8956),r=n(5861),o=n(4687),s=n.n(o),c=n(2791),d=n(9985),u=n(6977),h="PopularRecipes_title__8YP+o",l=n(184),p=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],i=t[1],o=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.T0)();case 3:t=e.sent,n=t.data,i(n),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){o()}),[]),(0,l.jsxs)("section",{className:"section",children:[(0,l.jsx)("h2",{className:h,children:"Popular recipes"}),(0,l.jsx)(u.Z,{recipes:n})]})},f=function(e){var t=e.ingredients,n=void 0===t?[]:t;return(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"ingredients"}),(0,l.jsx)("ul",{children:n.map((function(e){return(0,l.jsx)("li",{children:e.name},e.id)}))})]})},m=function(e){var t=e.thumb,n=e.title,a=e.category,i=e.time,r=e.description;return(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:t,alt:n}),(0,l.jsx)("h2",{children:n}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:a}),(0,l.jsx)("li",{children:i})]}),(0,l.jsx)("p",{children:r}),(0,l.jsxs)("button",{children:[(0,l.jsx)("img",{src:"",alt:""}),(0,l.jsxs)("span",{children:[(0,l.jsx)("span",{children:"Created by:"}),(0,l.jsx)("span",{})]})]})]})},g=n(411),v=function(e){var t=e.instructions,n=e.status;return(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Recipe Preparation"}),(0,l.jsx)("p",{children:t}),(0,l.jsx)(g.Z,{type:"button",color:"light",size:"normal",onClick:console.log,children:n})]})},_=function(e){var t=e.recipe,n=t.thumb,a=t.title,i=t.category,r=t.time,o=t.description,s=t.ingredients,c=t.instructions;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{thumb:n,title:a,category:i,time:r,description:o}),(0,l.jsx)(f,{ingredients:s}),(0,l.jsx)(v,{instructions:c,status:"Add to favorites"})]})},x=n(8099),y=n(7689),w=[{_id:"6462a8f74c3d0ddd288980b2",title:"Spring onion and prawn empanadas",category:"6462a6cd4c3d0ddd28897f8a",owner:{name:"Vlad"},area:{$oid:"6462a6f04c3d0ddd28897fae"},instructions:"STEP 1\r\n\r\nTo make the dough, rub the butter into the flour and then add the egg white and half the yolk (keep the rest), vinegar, a pinch of salt and enough cold water to make a soft dough. Knead on a floured surface until smooth and then wrap and rest for 30 minutes.\r\n\r\nSTEP 2\r\n\r\nHeat the oven to 180c/fan 160c/gas 4. Trim the green ends of the spring onions and then finely slice the rest. Heat a little oil in a pan and fry them gently until soft but not browned. Add the chilli and garlic, stir and then add the prawns and cook until they are opaque. Season well. Scoop out the prawns and bubble the juices until they thicken, then add back the prawns.\r\n\r\nSTEP 3\r\n\r\nDivide the empanada dough into eight balls and roll out to thin circles on a floured surface. Put some filling on one half of the dough, sprinkle the feta on top and fold the other half over. Trim the edge and then fold and crimp the dough together so the empanada is tightly sealed, put it on an oiled baking sheet either on its side or sitting on its un-crimped edge like a cornish pasty. Repeat with the remaining dough and mixture. Mix the leftover egg yolk with a splash of water and brush the top of the empanadas.\r\n\r\nSTEP 4\r\n\r\nBake for 30 minutes or until golden and slightly crisp around the edges.",description:"Spring onion and prawn empanadas are a tasty Spanish dish of small pastries filled with a mixture of prawns, spring onions, and spices, perfect as a snack or appetizer.",thumb:"https://res.cloudinary.com/dhap6yrcb/image/upload/f_auto/v1717776052/recipes-init/q13vtiik47zcqeentgwe",time:"60",ingredients:[{id:"640c2dd963a319ea671e3770",name:"Squid",measure:"1  bunch",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png"},{id:"640c2dd963a319ea671e3772",name:"Squid",measure:"1  bunch",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f5.png"}],createdAt:{$date:"2023-03-11T19:25:33.248Z"},updatedAt:{$date:"2024-06-09T05:56:15.079Z"},preview:"https://res.cloudinary.com/dhap6yrcb/image/upload/f_auto,h_200,w_200/v1717776052/recipes-init/q13vtiik47zcqeentgwe",favorites:[],favorite:[{$oid:"666439f8cdaa50319cc78607"}]},{_id:"6462a8f74c3d0ddd28898069",title:"Duck Confit",category:"6462a6cd4c3d0ddd28897f93",owner:{name:"Vlad"},area:{$oid:"6462a6f04c3d0ddd28897fa3"},instructions:"The day before you want to make the dish, scatter half the salt, half the garlic and half of the herbs over the base of a small shallow dish. Lay the duck legs, skin-side up, on top, then scatter over the remaining salt, garlic and herbs. Cover the duck and refrigerate overnight. This can be done up to 2 days ahead.\r\nPour the wine into a saucepan that will snugly fit the duck legs in a single layer. Brush the salt off the duck legs and place them, skin-side down, in the wine. Cover the pan with a lid and place over a medium heat. As soon as the wine starts to bubble, turn the heat down to the lowest setting and cook for 2 hours, checking occasionally that the liquid is just barely simmering. (If you own a heat diffuser, it would be good to use it here.) After 2 hours, the duck legs should be submerged in their own fat and the meat should feel incredibly tender when prodded. Leave to cool.\r\nThe duck legs are now cooked and can be eaten immediately \u2013 or you can follow the next step if you like them crisp. If you are preparing ahead, pack the duck legs tightly into a plastic container or jar and pour over the fat, but not the liquid at the bottom of the pan. Cover and leave in the fridge for up to a month, or freeze for up to 3 months. The liquid you are left with makes a tasty gravy, which can be chilled or frozen until needed.\r\nTo reheat and crisp up the duck legs, heat oven to 220C/fan 200C/gas 7. Remove the legs from the fat and place them, skin-side down, in an ovenproof frying pan. Roast for 30-40 mins, turning halfway through, until brown and crisp. Serve with the reheated gravy, a crisp salad and some crisp golden ptoatoes.",description:"Tender and flavorful duck legs that have been slowly cooked in their own fat until they are fall-off-the-bone delicious. A gourmet dish that's surprisingly easy to make.",thumb:"https://res.cloudinary.com/dhap6yrcb/image/upload/f_auto/v1717776198/recipes-init/gjpomu1pjkn1akxhhqe7",time:"160",ingredients:[{id:"640c2dd963a319ea671e3772",name:"Squid",measure:"1  bunch",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png"},{id:"640c2dd963a319ea671e3775",name:"Squid",measure:"1  bunch",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f5.png"}],createdAt:{$date:"2023-03-11T19:25:33.245Z"},updatedAt:{$date:"2024-06-05T18:07:18.793Z"},preview:"https://res.cloudinary.com/dhap6yrcb/image/upload/f_auto,h_200,w_200/v1717776198/recipes-init/gjpomu1pjkn1akxhhqe7",favorites:[]}],b=function(){var e=(0,y.UO)().id,t=(0,c.useState)([]),n=(0,a.Z)(t,2),r=n[0],o=n[1];return(0,c.useEffect)((function(){!function(){var t=w.find((function(t){return t._id===e}));o(t)}()}),[e]),(0,l.jsxs)(x.Z,{page:"recipe",children:[(0,l.jsx)("section",{className:"section",children:r&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{current:r.title}),(0,l.jsx)(_,{recipe:r})]})}),(0,l.jsx)(p,{})]})}},9985:function(e,t,n){n.d(t,{Ni:function(){return u},Qd:function(){return s},T0:function(){return r},a3:function(){return d},iM:function(){return i},lZ:function(){return o},qG:function(){return c}});var a=n(4156),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.page,n=e.limit,i=e.category,r=e.ingredient,o=e.area;return a.hi.get("/api/recipes",{params:{page:t,limit:n,category:i,ingredient:r,area:o}})},r=function(){return a.hi.get("/api/recipes/popular")},o=function(){return a.hi.get("/api/recipes/favorite")},s=function(){return a.hi.get("/api/recipes/own")},c=function(e){return a.hi.delete("/api/own/".concat(e))},d=function(e){return a.hi.patch("/api/recipes/addFavorite/".concat(e))},u=function(e){return a.hi.patch("/api/recipes/removeFavorite/".concat(e))}}}]);
//# sourceMappingURL=572.88eddf0a.chunk.js.map