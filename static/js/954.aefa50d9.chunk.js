"use strict";(self.webpackChunkproject_ucranes03=self.webpackChunkproject_ucranes03||[]).push([[954],{1746:function(e,n,r){r.d(n,{Z:function(){return s}});var i="MainTitle_title__R5KXq",t=r(3329),s=function(e){var n=e.children;return(0,t.jsx)("h2",{className:i,children:n})}},8099:function(e,n,r){r.d(n,{Z:function(){return s}});var i={page:"PageContainer_page__uM9Tb",home:"PageContainer_home__oMp0D",recipe:"PageContainer_recipe__2uBu-",profile:"PageContainer_profile__r6XCR"},t=r(3329),s=function(e){var n=e.page,r=e.children;e.tag;return(0,t.jsx)("section",{className:"".concat(i.page," ").concat(n?i[n]:""),children:r})}},8956:function(e,n,r){r.d(n,{Z:function(){return c}});var i=r(1087),t="PathInfo_path__rwXvn",s="PathInfo_current__3TPtY",a=r(3329),c=function(e){var n=e.current;return(0,a.jsxs)("div",{className:t,children:[(0,a.jsx)(i.rU,{to:"/",children:"Home"}),(0,a.jsx)("span",{children:"/"}),(0,a.jsx)("span",{className:s,children:n})]})}},9887:function(e,n,r){r.d(n,{Z:function(){return s}});var i={text:"Subtitle_text__tBnTO",categories:"Subtitle_categories__vridf",recipes:"Subtitle_recipes__qvZt7"},t=r(3329),s=function(e){var n=e.section,r=e.children;return(0,t.jsx)("p",{className:"".concat(i.text," ").concat(n?i[n]:""),children:r})}},4954:function(e,n,r){r.r(n),r.d(n,{default:function(){return P}});var i=r(8956),t=r(1746),s=r(9887),a=r(3433),c=r(5861),o=r(9439),l=r(1413),d=r(4687),_=r.n(d),u=r(411),p=r(3439),m={title_form:"AddRecipeForm_title_form__Q+N-l",text_form:"AddRecipeForm_text_form__-TJrY",input_file:"AddRecipeForm_input_file__PPysC",icon_camera:"AddRecipeForm_icon_camera__YhABU",box_form:"AddRecipeForm_box_form__nPD0F",box_file:"AddRecipeForm_box_file__iSWAC",photo_file:"AddRecipeForm_photo_file__ZofAL",box_time_categories:"AddRecipeForm_box_time_categories__W7reZ",box_input_name:"AddRecipeForm_box_input_name__RHasj",input_quantity:"AddRecipeForm_input_quantity__KYRDg",list_ingredients:"AddRecipeForm_list_ingredients__2Eu0R",input_name:"AddRecipeForm_input_name__r3WgH",input_description:"AddRecipeForm_input_description__w8CvM",box_select_cat:"AddRecipeForm_box_select_cat__HY6Bf",line_under_input:"AddRecipeForm_line_under_input__y+bX3",text_length:"AddRecipeForm_text_length__HlP0j",box_description:"AddRecipeForm_box_description__GxhAK",title_description:"AddRecipeForm_title_description__DjEhT",box_time_btn:"AddRecipeForm_box_time_btn__UXePS",counter_time:"AddRecipeForm_counter_time__TJCCE",box_name_cate_ingr:"AddRecipeForm_box_name_cate_ingr__TDAnY",box_btn_del_pub:"AddRecipeForm_box_btn_del_pub__thKbD",box_area:"AddRecipeForm_box_area__r9n+O",btn_time:"AddRecipeForm_btn_time__FWlJ8",icon_time:"AddRecipeForm_icon_time__kgJvK",input_preparation:"AddRecipeForm_input_preparation__0okga",btn_delete:"AddRecipeForm_btn_delete__38hBi",delete_btn:"AddRecipeForm_delete_btn__rx85M",error_message:"AddRecipeForm_error_message__1kBQ4"},x=r(1134),h=r(2791),f=r(1031),g=r(4420),b=r(7878),j=r(5787),v=r(1961),Z=r(8007),N=r(4695),y=r(3329),A=Z.Ry().shape({thumb:Z.nK().required("Photo is required").test("fileType","Unsupported File Format",(function(e){return e&&e[0]&&["image/jpeg","image/png","image/gif"].includes(e[0].type)})),title:Z.Z_().required("Title is required"),description:Z.Z_().required("Description is required").max(200,"Description should not exceed 200 characters"),category:Z.Ry().shape({value:Z.Z_().required("Category is required")}).required("Category is required"),area:Z.Ry().shape({value:Z.Z_().required("Area is required")}).required("Area is required"),ingredientsList:Z.IX().of(Z.Ry().shape({id:Z.Z_().required("Ingredient is required"),measure:Z.Z_().required("Measure is required")})).min(1,"At least one ingredient is required"),instructions:Z.Z_().required("Instructions are required").max(200,"Instructions should not exceed 200 characters")}),R={control:function(e){return(0,l.Z)((0,l.Z)({},e),{},{display:"flex",justifyContent:"center",alignItems:"center",gap:"188px",borderRadius:"30px",border:"1px solid var(--color-main-12, rgba(5, 5, 5, 0.12))",width:"100%",marginTop:"8px"})},singleValue:function(e){return(0,l.Z)((0,l.Z)({},e),{},{color:"var(--color-main-60, rgba(5, 5, 5, 0.60))",fontSize:"14px",fontWeight:"500",lineHeight:"1.4",letterSpacing:"-0.02em",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%"})},menu:function(e){return(0,l.Z)((0,l.Z)({},e),{},{color:"var(--color-main-60, rgba(5, 5, 5, 0.60))",fontSize:"14px",fontWeight:"500",lineHeight:"1.4",letterSpacing:"-0.02em"})}},F=function(){var e=(0,h.useState)(null),n=(0,o.Z)(e,2),r=n[0],i=n[1],t=(0,h.useState)(0),s=(0,o.Z)(t,2),d=s[0],Z=s[1],F=(0,h.useState)([]),q=(0,o.Z)(F,2),P=q[0],C=q[1],S=(0,h.useState)(0),k=(0,o.Z)(S,2),w=k[0],T=k[1],I=(0,g.v9)(b.i3),D=(0,g.v9)(j.i9),E=(0,g.v9)(v.AP),H=(0,x.cI)({resolver:(0,N.X)(A)}),K=H.register,M=H.handleSubmit,X=H.control,B=H.formState.errors,O=H.setValue,U=H.getValues,W=H.reset,Y=H.trigger;console.log(B);var L=function(e){var n=e.target.files[0];n&&i(URL.createObjectURL(n))},Q=function(){var e=(0,c.Z)(_().mark((function e(){var n,r;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=U("ingredients"),r=U("measure"),!n||!r){e.next=10;break}return C((function(e){return[].concat((0,a.Z)(e),[{id:n.value,measure:r}])})),O("measure",""),O("ingredients",null),e.next=8,Y("ingredientsList");case 8:e.next=11;break;case 10:alert("Please select an ingredient and enter a measure");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,y.jsx)("form",{onSubmit:M((function(e){0!==P.length?(e.cookingTime=d,e.ingredients=P,e.category=e.category.value,e.area=e.area.value,delete e.measure):alert("Please add at least one ingredient")})),children:(0,y.jsxs)("div",{className:m.box_form,children:[(0,y.jsxs)("div",{className:m.box_file,children:[r?(0,y.jsxs)("label",{style:{display:"none"},children:[(0,y.jsx)("svg",{className:m.icon_camera,children:(0,y.jsx)("use",{href:"".concat(p.Z,"#icon-camera")})}),(0,y.jsx)("input",(0,l.Z)((0,l.Z)({className:m.input_file},K("thumb",{onChange:L})),{},{type:"file"}))]}):(0,y.jsxs)("label",{children:[(0,y.jsx)("svg",{className:m.icon_camera,children:(0,y.jsx)("use",{href:"".concat(p.Z,"#icon-camera")})}),(0,y.jsx)("input",(0,l.Z)((0,l.Z)({className:m.input_file},K("thumb",{onChange:L})),{},{type:"file"}))]}),r&&(0,y.jsx)("img",{className:m.photo_file,src:r,alt:"Preview",width:"100"})]}),B.photo&&(0,y.jsx)("span",{className:m.error_message,children:B.photo.message}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{className:m.box_name_cate_ingr,children:[(0,y.jsxs)("div",{className:m.box_input_name,children:[(0,y.jsx)("input",(0,l.Z)({placeholder:"The name of the recipe",className:m.input_name,type:"text"},K("title"))),B.name&&(0,y.jsx)("span",{className:m.error_message,children:B.name.message}),(0,y.jsxs)("div",{className:m.box_description,children:[(0,y.jsx)("input",(0,l.Z)((0,l.Z)({className:m.input_description},K("description",{onChange:function(e){var n=e.target.value;T(n.length)}})),{},{placeholder:"Enter a description of the dish",type:"text"})),B.description&&(0,y.jsx)("span",{className:m.error_message,children:B.description.message}),(0,y.jsx)("span",{className:m.text_length,children:"".concat(w,"/200")})]})]}),(0,y.jsxs)("div",{className:m.box_time_categories,children:[(0,y.jsxs)("div",{className:m.box_select_cat,children:[(0,y.jsx)("label",{className:m.title_description,children:"Category"}),(0,y.jsx)(x.Qr,{name:"category",control:X,render:function(e){var n=e.field;return(0,y.jsx)(f.ZP,(0,l.Z)((0,l.Z)({placeholder:"Select a category",styles:R},n),{},{options:I}))}}),B.category&&(0,y.jsx)("span",{className:m.error_message,children:B.category.message})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{className:m.title_description,children:"COOKING TIME"}),(0,y.jsxs)("div",{className:m.box_time_btn,children:[(0,y.jsx)("button",{className:m.btn_time,onClick:function(){Z((function(e){return e>0?e-10:0}))},type:"button",children:(0,y.jsx)("svg",{className:m.icon_time,children:(0,y.jsx)("use",{href:"".concat(p.Z,"#icon-minus")})})}),(0,y.jsxs)("span",{className:m.counter_time,children:[d," min"]}),(0,y.jsx)("button",{className:m.btn_time,onClick:function(){Z((function(e){return e+10}))},type:"button",children:(0,y.jsx)("svg",{className:m.icon_time,children:(0,y.jsx)("use",{href:"".concat(p.Z,"#icon-plus")})})})]})]})]}),(0,y.jsxs)("div",{className:m.box_area,children:[(0,y.jsx)("label",{className:m.title_description,children:"Area"}),(0,y.jsx)(x.Qr,{name:"area",control:X,render:function(e){var n=e.field;return(0,y.jsx)(f.ZP,(0,l.Z)((0,l.Z)({placeholder:"Pick area",styles:R},n),{},{options:E}))}})]}),(0,y.jsxs)("div",{className:m.box_ingredients,children:[(0,y.jsx)("label",{className:m.title_description,children:"Ingredients"}),(0,y.jsx)(x.Qr,{name:"ingredients",control:X,render:function(e){var n=e.field;return(0,y.jsx)(f.ZP,(0,l.Z)((0,l.Z)({placeholder:"Add the ingredient",styles:R},n),{},{options:D}))}}),(0,y.jsx)("input",(0,l.Z)((0,l.Z)({className:m.input_quantity},K("measure")),{},{type:"text",placeholder:"Enter quantity"})),B.ingredients&&B.quantity&&(0,y.jsx)("span",{className:m.error_message,children:B.ingredients.message})]})]}),(0,y.jsxs)(u.Z,{type:"button",color:"secondary",size:"normal",onClick:Q,children:[(0,y.jsx)("span",{children:"Add ingredient"}),(0,y.jsx)("svg",{children:(0,y.jsx)("use",{href:"".concat(p.Z,"#icon-plus")})})]}),(0,y.jsx)("ul",{className:m.list_ingredients,children:(0,y.jsx)("li",{})}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{className:m.title_description,children:"Recipe Preparation"}),(0,y.jsx)("textarea",(0,l.Z)((0,l.Z)({className:m.input_preparation},K("instructions")),{},{placeholder:"Enter recipe"})),B.preparation&&(0,y.jsx)("span",{className:m.error_message,children:B.preparation.message})]}),(0,y.jsxs)("div",{className:m.box_btn_del_pub,children:[(0,y.jsx)("button",{onClick:function(){W(),i(null),Z(0),C([])},className:m.delete_btn,children:(0,y.jsx)("svg",{className:m.btn_delete,children:(0,y.jsx)("use",{href:"".concat(p.Z,"#icon-trash")})})}),(0,y.jsx)(u.Z,{type:"submit",color:"primary",size:"large",children:"Publish"})]})]})]})})},q=r(8099),P=function(){return(0,y.jsxs)(q.Z,{tag:"section",children:[(0,y.jsxs)("div",{className:"section",children:[(0,y.jsx)(i.Z,{current:"Add recipe"}),(0,y.jsxs)("div",{children:[(0,y.jsx)(t.Z,{children:"Add recipe"}),(0,y.jsx)(s.Z,{children:"Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."})]})]}),(0,y.jsx)(F,{})]})}},1961:function(e,n,r){r.d(n,{AP:function(){return i}});var i=(0,r(3553).P1)((function(e){return e.areas.items}),(function(e){return e.map((function(e){return{value:e._id,label:e.name}}))}))},7878:function(e,n,r){r.d(n,{i3:function(){return s},pf:function(){return a}});var i=r(3553),t=function(e){return e.categories.items},s=(0,i.P1)(t,(function(e){return e.map((function(e){return{value:e._id,label:e.name}}))})),a=(0,i.P1)([t,function(e,n){return n}],(function(e,n){return null===e||void 0===e?void 0:e.find((function(e){return e._id===n}))}))},5787:function(e,n,r){r.d(n,{i9:function(){return i}});var i=(0,r(3553).P1)((function(e){return e.ingredients.items}),(function(e){return e.map((function(e){return{value:e._id,label:e.name}}))}))}}]);
//# sourceMappingURL=954.aefa50d9.chunk.js.map