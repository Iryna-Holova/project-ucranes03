"use strict";(self.webpackChunkproject_ucranes03=self.webpackChunkproject_ucranes03||[]).push([[670],{5992:(e,s,t)=>{t.d(s,{Z:()=>i});const a="Empty_text__F5nPx";var r=t(3329);const i=e=>{let{children:s}=e;return(0,r.jsx)("p",{className:a,children:s})}},899:(e,s,t)=>{t.d(s,{Z:()=>_});var a=t(1087);const r="Pagination_pagination__9X6Z-",i="Pagination_page__eZu9l",n="Pagination_active__ON+Ce",l="Pagination_prev__+HKWv",c="Pagination_next__JvuKw";var o=t(3329);const _=e=>{let{totalPages:s}=e;const[t,_]=(0,a.lr)(),u=parseInt(t.get("page"))||1,d=e=>{_((s=>{const t=new URLSearchParams(s);return t.set("page",e),t}))};return(0,o.jsxs)("div",{className:r,"aria-label":"Page navigation",role:"navigation",children:[u>1&&(0,o.jsx)("button",{onClick:()=>d(u-1),className:l,"aria-label":"Previous page",title:"Previous page",children:"Previous"}),(s<=3?Array.from({length:s},((e,s)=>s+1)):1===u?[1,2,3]:u===s?[s-2,s-1,s]:[u-1,u,u+1]).map((e=>(0,o.jsx)("button",{onClick:()=>d(e),className:"".concat(e===u&&n," ").concat(i),"aria-label":"Page ".concat(e),"aria-current":e===u,title:"Page ".concat(e),children:e},e))),u<s&&(0,o.jsx)("button",{onClick:()=>d(u+1),className:c,"aria-label":"Next page",title:"Next page",children:"Next"})]})}},7670:(e,s,t)=>{t.r(s),t.d(s,{default:()=>v});var a=t(2791),r=t(4420),i=t(7689),n=t(1087),l=t(8568),c=t(6809),o=t(751),_=t(6033),u=t(899),d=t(3845),p=t(5992),m=t(1608),h=t(5633),g=t(3329);const v=()=>{const e=(0,i.UO)().id,s=(0,a.useRef)(null),t="current"===e,v=(0,r.v9)(l.Vh),[x]=(0,n.lr)(),[f,w]=(0,a.useState)([]),[Z,j]=(0,a.useState)(!1),[k,N]=(0,a.useState)(0);return(0,a.useEffect)((()=>{(0,_.xf)(s.current),(async()=>{j(!0);const s=x.get("page")||1;try{const{data:a}=t?await(0,c.W6)({page:s,limit:5}):await(0,c.ET)(e,{page:s,limit:5});w(a.results),N(a.totalPages)}catch(a){(0,o.x)(a.response.data)}finally{j(!1)}})()}),[t,x,e]),(0,g.jsxs)("div",{children:[(0,g.jsx)("span",{ref:s,style:{position:"absolute"}}),(0,g.jsx)("h3",{className:"visually-hidden",children:"Followers"}),Z||0!==f.length?(0,g.jsxs)(d.Z,{children:[Z&&[...Array(5)].map(((e,s)=>(0,g.jsx)(h.Z,{},s))),!Z&&f.map((e=>(0,g.jsx)(m.Z,{user:e,following:v},e.id)))]}):(0,g.jsx)(p.Z,{children:"There are currently no followers on your account. Please engage our visitors with interesting content and draw their attention to your profile."}),k>1&&(0,g.jsx)(u.Z,{totalPages:k})]})}},3845:(e,s,t)=>{t.d(s,{Z:()=>i});const a="ListItems_list__5gqc0";var r=t(3329);const i=e=>{let{children:s}=e;return(0,r.jsx)("ul",{className:a,children:s})}},1608:(e,s,t)=>{t.d(s,{Z:()=>g});var a=t(2791),r=t(4420),i=t(1087),n=t(8568),l=t(3657),c=t(3536),o=t(6809),_=t(411),u=t(3439),d=t(1324),p=t(8417),m=t(4322),h=t(3329);const g=e=>{let{user:{id:s,name:t,avatar:g,recipes:v},onRemove:x=null}=e;const f=(0,c.Pv)(),w=(0,c.eW)(),Z=(0,r.v9)(n.Vh),j=(0,r.v9)(n.dy),k=(0,r.I0)(),[N,C]=(0,a.useState)(!1);return(0,h.jsxs)("li",{className:m.Z.follow_list_item,children:[(0,h.jsxs)("div",{className:m.Z.user_info_container,children:[(0,h.jsx)("div",{className:m.Z.user_avatar_container,children:(0,h.jsx)(p.Z,{className:m.Z.user_avatar,publicId:g,alt:t+"'s photo",defaultImage:d.Z})}),(0,h.jsxs)("div",{className:m.Z.user_name_container,children:[(0,h.jsx)("h4",{className:m.Z.user_name,children:t}),(0,h.jsxs)("p",{className:m.Z.user_recepies,children:["Own recipes: ",v.length]}),j.id!==s&&(Z.includes(s)?(0,h.jsx)(_.Z,{type:"button",color:"light",size:"small",disabled:N,onClick:()=>(async e=>{try{C(!0);const{data:s}=await(0,o.ER)(e);k((0,l.g8)(s.following)),x&&x()}catch(s){}finally{C(!1)}})(s),children:"Following"}):(0,h.jsx)(_.Z,{type:"button",color:"light",size:"small",disabled:N,onClick:()=>(async e=>{try{C(!0);const{data:s}=await(0,o.Am)(e);k((0,l.g8)(s.following))}catch(s){}finally{C(!1)}})(s),children:"Follow"}))]})]}),(w||f)&&(0,h.jsx)("ul",{className:m.Z.recipes_pictures_list,children:v.slice(0,f?3:4).map((e=>{let{id:s,thumb:t,title:a}=e;return(0,h.jsx)("li",{className:m.Z.recipes_pictures_item,children:(0,h.jsx)(i.rU,{to:"/recipe/".concat(s),children:(0,h.jsx)(p.Z,{publicId:t,alt:a})})},s)}))}),(0,h.jsx)(i.rU,{to:j.id!==s?"/user/".concat(s):"/user/current",className:m.Z.user_link_arrow,children:(0,h.jsx)("svg",{width:"16",height:"16",children:(0,h.jsx)("use",{href:u.Z+"#icon-arrow-up-right"})})})]})}},5633:(e,s,t)=>{t.d(s,{Z:()=>n});var a=t(3536),r=t(4322),i=t(3329);const n=()=>{const e=(0,a.Pv)(),s=(0,a.eW)();return(0,i.jsxs)("li",{className:"".concat(r.Z.follow_list_item," ").concat(r.Z.follow_list_item_skeleton),children:[(0,i.jsxs)("div",{className:r.Z.user_info_container,children:[(0,i.jsx)("div",{className:"".concat(r.Z.user_avatar," ").concat(r.Z.user_avatar_skeleton)}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"".concat(r.Z.user_name," ").concat(r.Z.user_name_skeleton),children:" "}),(0,i.jsx)("p",{className:"".concat(r.Z.user_recepies," ").concat(r.Z.user_recepies_skeleton),children:" "}),(0,i.jsx)("div",{className:r.Z.button_skeleton})]})]}),(0,i.jsxs)("ul",{className:r.Z.recipes_pictures_list,children:[s&&[...Array(4)].map(((e,s)=>(0,i.jsx)("li",{className:"".concat(r.Z.recipes_pictures_item," ").concat(r.Z.recipes_pictures_item_skeleton)},s))),e&&[...Array(3)].map(((e,s)=>(0,i.jsx)("li",{className:"".concat(r.Z.recipes_pictures_item," ").concat(r.Z.recipes_pictures_item_skeleton)},s)))]}),(0,i.jsx)("div",{className:"".concat(r.Z.user_link_arrow," ").concat(r.Z.user_link_arrow_skeleton)})]})}},6033:(e,s,t)=>{t.d(s,{II:()=>i,kI:()=>a,xf:()=>r});const a=e=>{if(!e)return;const s=e.getBoundingClientRect();s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight)||e.scrollIntoView({behavior:"smooth",block:"start"})},r=e=>{if(!e)return;e.getBoundingClientRect().top<0&&window.scrollTo({top:e.offsetTop-100,behavior:"smooth"})},i=(e,s)=>{if(!e||!s)return;const t=e.getBoundingClientRect(),a=s.getBoundingClientRect(),r=e.scrollLeft+(a.left-t.left)-t.width/2+a.width/2;e.scrollTo({left:r,behavior:"smooth"})}},6809:(e,s,t)=>{t.d(s,{$7:()=>r,Am:()=>l,ER:()=>c,ET:()=>i,W6:()=>n});var a=t(9503);const r=function(){let{page:e,limit:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.hi.get("/api/users/following",{params:{page:e,limit:s}})},i=function(e){let{page:s,limit:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.hi.get("/api/users/followers/".concat(e),{params:{page:s,limit:t}})},n=function(){let{page:e,limit:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.hi.get("/api/users/followers",{params:{page:e,limit:s}})},l=e=>a.hi.patch("/api/users/addFollowing/".concat(e)),c=e=>a.hi.patch("/api/users/removeFollowing/".concat(e))},4322:(e,s,t)=>{t.d(s,{Z:()=>a});const a={follow_list_item:"UserCard_follow_list_item__Q2t1M",follow_list_item_skeleton:"UserCard_follow_list_item_skeleton__7mmBq",user_link_arrow:"UserCard_user_link_arrow__o4Tz3",user_link_arrow_skeleton:"UserCard_user_link_arrow_skeleton__6AYYN",user_info_container:"UserCard_user_info_container__y8H9o",user_avatar:"UserCard_user_avatar__TqQ7F",user_avatar_container:"UserCard_user_avatar_container__hKd0U",user_avatar_skeleton:"UserCard_user_avatar_skeleton__fcPfc",user_name:"UserCard_user_name__y-vTC",user_name_skeleton:"UserCard_user_name_skeleton__FlnJ3",user_recepies:"UserCard_user_recepies__plJKh",user_recepies_skeleton:"UserCard_user_recepies_skeleton__VJsdx",button_skeleton:"UserCard_button_skeleton__ZpLmV",recipes_pictures_list:"UserCard_recipes_pictures_list__U02IH",recipes_pictures_item:"UserCard_recipes_pictures_item__LICFH",recipes_pictures_item_skeleton:"UserCard_recipes_pictures_item_skeleton__RGsQ6",user_name_container:"UserCard_user_name_container__0m5rw"}}}]);
//# sourceMappingURL=670.3094b262.chunk.js.map