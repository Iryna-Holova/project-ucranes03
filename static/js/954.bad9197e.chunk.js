"use strict";(self.webpackChunkproject_ucranes03=self.webpackChunkproject_ucranes03||[]).push([[954],{6618:function(e,n,r){r.d(n,{Z:function(){return p}});var t=r(9439),i=r(2791),a="Ingredients_ingredient_container__gr-3U",s="Ingredients_img_wrapper__z8MRG",c="Ingredients_name_style__3XTrH",o="Ingredients_measure_style__tz9RC",u="Ingredients_btn__YgUSW",d=r(3439),l=r(5265),_=r(3329),p=function(e){var n=e.img,r=e.name,p=e.measure,m=e._id,h=e.callback,f=void 0===h?null:h,g=(0,i.useState)(n),x=(0,t.Z)(g,2),b=x[0],v=x[1];return(0,_.jsxs)("li",{className:a,children:[(0,_.jsx)("img",{src:b,alt:r,className:s,onError:function(){v(l.Z)}}),(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{className:c,children:r}),(0,_.jsx)("p",{className:o,children:p})]}),f&&(0,_.jsx)("button",{className:u,onClick:function(){return f(m)},children:(0,_.jsx)("svg",{height:16,width:16,children:(0,_.jsx)("use",{href:"".concat(d.Z,"#icon-close")})})})]})}},1746:function(e,n,r){r.d(n,{Z:function(){return a}});var t="MainTitle_title__R5KXq",i=r(3329),a=function(e){var n=e.children;return(0,i.jsx)("h2",{className:t,children:n})}},8099:function(e,n,r){r.d(n,{Z:function(){return a}});var t={page:"PageContainer_page__uM9Tb",home:"PageContainer_home__oMp0D",recipe:"PageContainer_recipe__2uBu-",profile:"PageContainer_profile__r6XCR"},i=r(3329),a=function(e){var n=e.page,r=e.children;e.tag;return(0,i.jsx)("section",{className:"".concat(t.page," ").concat(n?t[n]:""),children:r})}},8956:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(1087),i="PathInfo_path__rwXvn",a="PathInfo_current__3TPtY",s=r(3329),c=function(e){var n=e.current;return(0,s.jsxs)("div",{className:i,children:[(0,s.jsx)(t.rU,{to:"/",children:"Home"}),(0,s.jsx)("span",{children:"/"}),(0,s.jsx)("span",{className:a,children:n})]})}},9887:function(e,n,r){r.d(n,{Z:function(){return a}});var t={text:"Subtitle_text__tBnTO",categories:"Subtitle_categories__vridf",recipes:"Subtitle_recipes__qvZt7"},i=r(3329),a=function(e){var n=e.section,r=e.children;return(0,i.jsx)("p",{className:"".concat(t.text," ").concat(n?t[n]:""),children:r})}},4954:function(e,n,r){r.r(n),r.d(n,{default:function(){return I}});var t=r(8956),i=r(1746),a=r(9887),s=r(3433),c=r(5861),o=r(9439),u=r(1413),d=r(4687),l=r.n(d),_=r(411),p=r(3439),m={title_form:"AddRecipeForm_title_form__Q+N-l",text_form:"AddRecipeForm_text_form__-TJrY",input_file:"AddRecipeForm_input_file__PPysC",icon_camera:"AddRecipeForm_icon_camera__YhABU",box_form:"AddRecipeForm_box_form__nPD0F",box_file:"AddRecipeForm_box_file__iSWAC",photo_file:"AddRecipeForm_photo_file__ZofAL",box_time_categories:"AddRecipeForm_box_time_categories__W7reZ",box_input_name:"AddRecipeForm_box_input_name__RHasj",input_quantity:"AddRecipeForm_input_quantity__KYRDg",list_ingredients:"AddRecipeForm_list_ingredients__2Eu0R",input_name:"AddRecipeForm_input_name__r3WgH",input_description:"AddRecipeForm_input_description__w8CvM",box_select_cat:"AddRecipeForm_box_select_cat__HY6Bf",line_under_input:"AddRecipeForm_line_under_input__y+bX3",text_length:"AddRecipeForm_text_length__HlP0j",box_description:"AddRecipeForm_box_description__GxhAK",title_description:"AddRecipeForm_title_description__DjEhT",box_time_btn:"AddRecipeForm_box_time_btn__UXePS",counter_time:"AddRecipeForm_counter_time__TJCCE",box_name_cate_ingr:"AddRecipeForm_box_name_cate_ingr__TDAnY",box_btn_del_pub:"AddRecipeForm_box_btn_del_pub__thKbD",box_area:"AddRecipeForm_box_area__r9n+O",btn_time:"AddRecipeForm_btn_time__FWlJ8",icon_time:"AddRecipeForm_icon_time__kgJvK",input_preparation:"AddRecipeForm_input_preparation__0okga",btn_delete:"AddRecipeForm_btn_delete__38hBi",delete_btn:"AddRecipeForm_delete_btn__rx85M",boxIngredQuan:"AddRecipeForm_boxIngredQuan__E+YLi",box_ingredients:"AddRecipeForm_box_ingredients__6pYch"},h=r(1134),f=r(2791),g=r(1031),x=r(4420),b=r(7878),v=r(5787),j=r(1961),Z=r(8007),N=r(4695),y=r(6618),R=r(9985),A=r(9227),F=r(7689),q=r(5781),P=r(3329),C=Z.Ry().shape({thumb:Z.nK().required("Photo is required").test("fileType","Unsupported File Format",(function(e){return e&&e[0]&&["image/jpeg","image/png","image/gif"].includes(e[0].type)})),title:Z.Z_().required("Title is required"),description:Z.Z_().required("Description is required").max(200,"Description should not exceed 200 characters"),category:Z.Ry().shape({value:Z.Z_().required("Category is required")}).required("Category is required"),area:Z.Ry().shape({value:Z.Z_().required("Area is required")}).required("Area is required"),ingredientsList:Z.IX().of(Z.Ry().shape({id:Z.Z_().required("Ingredient is required"),measure:Z.Z_().required("Measure is required")})).min(1,"At least one ingredient is required"),instructions:Z.Z_().required("Instructions are required").max(2500,"Instructions should not exceed 2500 characters")}),w={control:function(e){return(0,u.Z)((0,u.Z)({},e),{},{display:"flex",justifyContent:"center",alignItems:"center",gap:"188px",borderRadius:"30px",border:"1px solid var(--color-main-12, rgba(5, 5, 5, 0.12))",width:"100%",marginTop:"8px"})},singleValue:function(e){return(0,u.Z)((0,u.Z)({},e),{},{color:"var(--color-main-60, rgba(5, 5, 5, 0.60))",fontSize:"14px",fontWeight:"500",lineHeight:"1.4",letterSpacing:"-0.02em",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%"})},menu:function(e){return(0,u.Z)((0,u.Z)({},e),{},{color:"var(--color-main-60, rgba(5, 5, 5, 0.60))",fontSize:"14px",fontWeight:"500",lineHeight:"1.4",letterSpacing:"-0.02em"})}},S=function(){var e=(0,f.useState)(null),n=(0,o.Z)(e,2),r=n[0],t=n[1],i=(0,f.useState)(0),a=(0,o.Z)(i,2),d=a[0],Z=a[1],S=(0,f.useState)([]),k=(0,o.Z)(S,2),I=k[0],T=k[1],D=(0,f.useState)(0),E=(0,o.Z)(D,2),X=E[0],M=E[1],U=(0,x.v9)(b.i3),Y=(0,x.v9)(v.i9),H=(0,x.v9)(j.AP),L=(0,x.v9)(v.jq),Q=(0,f.useState)([]),z=(0,o.Z)(Q,2),K=z[0],W=z[1],O=(0,F.s0)(),B=(0,x.I0)();(0,f.useEffect)((function(){U.length||B((0,q.p)())}),[U.length,B]);var G=(0,h.cI)({resolver:(0,N.X)(C)}),J=G.register,V=G.handleSubmit,$=G.control,ee=G.formState.errors,ne=G.setValue,re=G.getValues,te=G.reset,ie=G.trigger,ae=function(){var e=(0,c.Z)(l().mark((function e(n){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==I.length){e.next=3;break}return alert("Please add at least one ingredient"),e.abrupt("return");case 3:return n.time=d,n.ingredients=I,n.category=n.category.value,n.area=n.area.value,delete n.measure,(r=new FormData).append("title",n.title),r.append("description",n.description),r.append("category",n.category),r.append("area",n.area),r.append("instructions",n.instructions),r.append("thumb",n.thumb[0]),r.append("time",n.time),I.forEach((function(e,n){r.append("ingredients[".concat(n,"][id]"),e.id),r.append("ingredients[".concat(n,"][measure]"),e.measure)})),e.prev=17,e.next=20,(0,R.XD)(r);case 20:O("/user/current"),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(17),(0,A.x)(e.t0);case 26:case"end":return e.stop()}}),e,null,[[17,23]])})));return function(n){return e.apply(this,arguments)}}(),se=function(e){T((function(n){return n.filter((function(n){return n.id!==e}))})),W((function(n){return n.filter((function(n){return n._id!==e}))}))},ce=function(e){var n=e.target.files[0];n&&t(URL.createObjectURL(n))},oe=function(){var e=(0,c.Z)(l().mark((function e(){var n,r,t,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=re("ingredients"),r=re("measure"),!n||!r){e.next=12;break}return T((function(e){return[].concat((0,s.Z)(e),[{id:n.value,measure:r}])})),(t=L.find((function(e){return e._id===n.value})))&&(i=(0,u.Z)((0,u.Z)({},t),{},{measure:r}),W((function(e){return[].concat((0,s.Z)(e),[i])}))),ne("measure",""),ne("ingredients",null),e.next=10,ie("ingredientsList");case 10:e.next=13;break;case 12:alert("Please select an ingredient and enter a measure");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,P.jsx)("form",{onSubmit:V(ae),children:(0,P.jsxs)("div",{className:m.box_form,children:[(0,P.jsxs)("div",{className:m.box_file,children:[r?(0,P.jsxs)("label",{style:{display:"none"},children:[(0,P.jsx)("svg",{className:m.icon_camera,children:(0,P.jsx)("use",{href:"".concat(p.Z,"#icon-camera")})}),(0,P.jsx)("input",(0,u.Z)((0,u.Z)({className:m.input_file},J("thumb",{onChange:ce})),{},{type:"file"}))]}):(0,P.jsxs)("label",{children:[(0,P.jsx)("svg",{className:m.icon_camera,children:(0,P.jsx)("use",{href:"".concat(p.Z,"#icon-camera")})}),(0,P.jsx)("input",(0,u.Z)((0,u.Z)({className:m.input_file},J("thumb",{onChange:ce})),{},{type:"file"}))]}),r&&(0,P.jsx)("img",{className:m.photo_file,src:r,alt:"Preview",width:"100"})]}),ee.photo&&(0,P.jsx)("span",{className:m.error_message,children:ee.photo.message}),(0,P.jsxs)("div",{children:[(0,P.jsxs)("div",{className:m.box_name_cate_ingr,children:[(0,P.jsxs)("div",{className:m.box_input_name,children:[(0,P.jsx)("input",(0,u.Z)({placeholder:"The name of the recipe",className:m.input_name,type:"text"},J("title"))),ee.name&&(0,P.jsx)("span",{className:m.error_message,children:ee.name.message}),(0,P.jsxs)("div",{className:m.box_description,children:[(0,P.jsx)("input",(0,u.Z)((0,u.Z)({maxLength:200,className:m.input_description},J("description",{onChange:function(e){var n=e.target.value;M(n.length)}})),{},{placeholder:"Enter a description of the dish",type:"text"})),ee.description&&(0,P.jsx)("span",{className:m.error_message,children:ee.description.message}),(0,P.jsx)("span",{className:m.text_length,children:"".concat(X,"/200")})]})]}),(0,P.jsxs)("div",{className:m.box_time_categories,children:[(0,P.jsxs)("div",{className:m.box_select_cat,children:[(0,P.jsx)("label",{className:m.title_description,children:"Category"}),(0,P.jsx)(h.Qr,{name:"category",control:$,render:function(e){var n=e.field;return(0,P.jsx)(g.ZP,(0,u.Z)((0,u.Z)({placeholder:"Select a category",styles:w},n),{},{options:U}))}}),ee.category&&(0,P.jsx)("span",{className:m.error_message,children:ee.category.message})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("label",{className:m.title_description,children:"COOKING TIME"}),(0,P.jsxs)("div",{className:m.box_time_btn,children:[(0,P.jsx)("button",{className:m.btn_time,onClick:function(){Z((function(e){return e>0?e-10:0}))},type:"button",children:(0,P.jsx)("svg",{className:m.icon_time,children:(0,P.jsx)("use",{href:"".concat(p.Z,"#icon-minus")})})}),(0,P.jsxs)("span",{className:m.counter_time,children:[d," min"]}),(0,P.jsx)("button",{className:m.btn_time,onClick:function(){Z((function(e){return e+10}))},type:"button",children:(0,P.jsx)("svg",{className:m.icon_time,children:(0,P.jsx)("use",{href:"".concat(p.Z,"#icon-plus")})})})]})]})]}),(0,P.jsxs)("div",{className:m.box_area,children:[(0,P.jsx)("label",{className:m.title_description,children:"Area"}),(0,P.jsx)(h.Qr,{name:"area",control:$,render:function(e){var n=e.field;return(0,P.jsx)(g.ZP,(0,u.Z)((0,u.Z)({placeholder:"Pick area",styles:w},n),{},{options:H}))}})]}),(0,P.jsxs)("div",{className:m.box_ingredients,children:[(0,P.jsx)("label",{className:m.title_description,children:"Ingredients"}),(0,P.jsxs)("div",{className:m.boxIngredQuan,children:[(0,P.jsxs)("div",{children:[" ",(0,P.jsx)(h.Qr,{name:"ingredients",control:$,render:function(e){var n=e.field;return(0,P.jsx)(g.ZP,(0,u.Z)((0,u.Z)({placeholder:"Add the ingredient",styles:w},n),{},{options:Y}))}})]}),(0,P.jsxs)("div",{children:[" ",(0,P.jsx)("input",(0,u.Z)((0,u.Z)({className:m.input_quantity},J("measure")),{},{type:"text",placeholder:"Enter quantity"}))]})]}),ee.ingredients&&ee.quantity&&(0,P.jsx)("span",{className:m.error_message,children:ee.ingredients.message})]})]}),(0,P.jsxs)(_.Z,{type:"button",color:"secondary",size:"normal",onClick:oe,children:[(0,P.jsx)("span",{children:"Add ingredient"}),(0,P.jsx)("svg",{children:(0,P.jsx)("use",{href:"".concat(p.Z,"#icon-plus")})})]}),(0,P.jsx)("ul",{className:m.list_ingredients,children:K.length>0&&K.map((function(e){var n=e.img,r=e.name,t=e.measure,i=e._id;return(0,P.jsx)(y.Z,{_id:i,callback:se,img:n,name:r,measure:t},i)}))}),(0,P.jsxs)("div",{children:[(0,P.jsx)("label",{className:m.title_description,children:"Recipe Preparation"}),(0,P.jsx)("textarea",(0,u.Z)((0,u.Z)({className:m.input_preparation},J("instructions")),{},{placeholder:"Enter recipe"})),ee.preparation&&(0,P.jsx)("span",{className:m.error_message,children:ee.preparation.message})]}),(0,P.jsxs)("div",{className:m.box_btn_del_pub,children:[(0,P.jsx)("button",{onClick:function(){te(),t(null),Z(0),T([])},className:m.delete_btn,children:(0,P.jsx)("svg",{className:m.btn_delete,children:(0,P.jsx)("use",{href:"".concat(p.Z,"#icon-trash")})})}),(0,P.jsx)(_.Z,{type:"submit",color:"primary",size:"large",children:"Publish"})]})]})]})})},k=r(8099),I=function(){return(0,P.jsxs)(k.Z,{tag:"section",children:[(0,P.jsxs)("div",{className:"section",children:[(0,P.jsx)(t.Z,{current:"Add recipe"}),(0,P.jsxs)("div",{children:[(0,P.jsx)(i.Z,{children:"Add recipe"}),(0,P.jsx)(a.Z,{children:"Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."})]})]}),(0,P.jsx)(S,{})]})}},9985:function(e,n,r){r.d(n,{G3:function(){return i},Ni:function(){return _},Qd:function(){return o},T0:function(){return s},V4:function(){return u},XD:function(){return p},a3:function(){return l},iM:function(){return a},lZ:function(){return c},qG:function(){return d}});var t=r(4156),i=function(e){return t.hi.get("/api/recipes/details/".concat(e))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page,r=e.limit,i=e.category,a=e.ingredient,s=e.area;return t.hi.get("/api/recipes",{params:{page:n,limit:r,category:i,ingredient:a,area:s}})},s=function(){return t.hi.get("/api/recipes/popular")},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page;return t.hi.get("/api/recipes/favorite",{params:{page:n,limit:9}})},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page;return t.hi.get("/api/recipes/own",{params:{page:n,limit:9}})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page,r=arguments.length>1?arguments[1]:void 0;return t.hi.get("/api/recipes/own/".concat(r),{params:{page:n,limit:9}})},d=function(e){return t.hi.delete("/api/own/".concat(e))},l=function(e){return t.hi.patch("/api/recipes/addFavorite/".concat(e))},_=function(e){return t.hi.patch("/api/recipes/removeFavorite/".concat(e))},p=function(e){return t.hi.post("/api/recipes/own",e,{headers:{"Content-Type":"multipart/form-data"}})}},1961:function(e,n,r){r.d(n,{AP:function(){return t}});var t=(0,r(3553).P1)((function(e){return e.areas.items}),(function(e){return e.map((function(e){return{value:e._id,label:e.name}}))}))},7878:function(e,n,r){r.d(n,{i3:function(){return c},pf:function(){return o},us:function(){return i},xU:function(){return s},zh:function(){return a}});var t=r(3553),i=function(e){return e.categories.items},a=function(e){return e.categories.error},s=function(e){return e.categories.isLoading},c=(0,t.P1)(i,(function(e){return e.map((function(e){return{value:e._id,label:e.name}}))})),o=(0,t.P1)([i,function(e,n){return n}],(function(e,n){return null===e||void 0===e?void 0:e.find((function(e){return e._id===n}))}))},5787:function(e,n,r){r.d(n,{i9:function(){return a},jq:function(){return i}});var t=r(3553),i=function(e){return e.ingredients.items},a=(0,t.P1)(i,(function(e){return e.map((function(e){return{value:e._id,label:e.name}}))}))}}]);
//# sourceMappingURL=954.bad9197e.chunk.js.map