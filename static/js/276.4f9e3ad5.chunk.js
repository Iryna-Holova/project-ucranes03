(self.webpackChunkproject_ucranes03=self.webpackChunkproject_ucranes03||[]).push([[276],{1746:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r="MainTitle_title__R5KXq",i=n(184),o=function(e){var t=e.children;return(0,i.jsx)("h2",{className:r,children:t})}},8099:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r={page:"PageContainer_page__uM9Tb",home:"PageContainer_home__oMp0D",recipe:"PageContainer_recipe__2uBu-",profile:"PageContainer_profile__r6XCR"},i=n(184),o=function(e){var t=e.page,n=e.children;e.tag;return(0,i.jsx)("section",{className:"".concat(r.page," ").concat(t?r[t]:""),children:n})}},8956:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(1087),i="PathInfo_path__rwXvn",o="PathInfo_current__3TPtY",c=n(184),a=function(e){var t=e.current;return(0,c.jsxs)("div",{className:i,children:[(0,c.jsx)(r.rU,{to:"/",children:"Home"}),(0,c.jsx)("span",{children:"/"}),(0,c.jsx)("span",{className:o,children:t})]})}},9887:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r={text:"Subtitle_text__tBnTO",categories:"Subtitle_categories__vridf",recipes:"Subtitle_recipes__qvZt7"},i=n(184),o=function(e){var t=e.section,n=e.children;return(0,i.jsx)("p",{className:"".concat(r.text," ").concat(t?r[t]:""),children:n})}},6033:function(e,t,n){"use strict";n.d(t,{I:function(){return i},k:function(){return r}});var r=function(e){if(e){var t=e.getBoundingClientRect();t.top>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)||e.scrollIntoView({behavior:"smooth",block:"start"})}},i=function(e,t){if(e&&t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=e.scrollLeft+(r.left-n.left)-n.width/2+r.width/2;e.scrollTo({left:i,behavior:"smooth"})}}},4932:function(e,t,n){"use strict";n.d(t,{Pv:function(){return o},S5:function(){return a},eW:function(){return i},kf:function(){return c}});var r=n(1075),i=function(){return(0,r.ac)({query:"(min-width: 1440px)"})},o=function(){return(0,r.ac)({query:"(min-width: 768px) and (max-width: 1440px)"})},c=function(){return(0,r.ac)({query:"(max-width: 768px)"})},a=function(){return(0,r.ac)({query:"(min-resolution: 2dppx)"})}},6276:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(2791),i=n(7689),o=n(4932),c=n(8099),a=n(8956),s=n(1746),u=n(9887),l=n(411),f=n(184),p=function(){return(0,f.jsxs)("div",{children:["UserInfo",(0,f.jsx)(l.Z,{type:"button",onClick:console.log,children:"Log out"}),(0,f.jsx)(l.Z,{type:"button",onClick:console.log,children:"Follow"})]})},d=n(9439),h=n(1087),m=n(6033),v="TabsList_tabs_wrapper__29yMQ",x="TabsList_tabs_list__03iky",b="TabsList_tab__5plTK",g={current:[{name:"My recipes",path:"recipes"},{name:"My favorites",path:"favorites"},{name:"Followers",path:"followers"},{name:"Following",path:"following"}],other:[{name:"Recipes",path:"recipes"},{name:"Followers",path:"followers"}]},y=function(){var e=(0,i.TH)(),t=(0,o.kf)(),n=(0,o.Pv)(),c=(0,r.useState)(null),a=(0,d.Z)(c,2),s=a[0],u=a[1],l=(0,r.useState)(0),p=(0,d.Z)(l,2),y=p[0],_=p[1],w=(0,r.useState)(0),j=(0,d.Z)(w,2),C=j[0],R=j[1],Z=(0,r.useState)(0),k=(0,d.Z)(Z,2),L=k[0],O=k[1],T=(0,r.useRef)(null),E=(0,r.useRef)(null),P=(0,r.useRef)(null),S="current"===(0,i.UO)().id?"current":"other";return(0,r.useLayoutEffect)((function(){u(e.pathname.split("/").slice(-1)[0])}),[e.pathname]),(0,r.useLayoutEffect)((function(){T.current&&E.current&&P.current&&(!function(){var e=P.current,t=e.getBoundingClientRect(),n=E.current.getBoundingClientRect();_(e.offsetWidth),R(t.left-n.left),O(n.width)}(),t&&(0,m.I)(T.current,P.current))}),[s,t,n]),(0,f.jsx)("div",{ref:T,className:v,style:{"--var-active-width":"".concat(y,"px"),"--var-active-left":"".concat(C,"px"),"--var-tabs-width":"".concat(L,"px")},children:(0,f.jsx)("ul",{className:x,ref:E,children:g[S].map((function(e,t){var n=e.name,r=e.path;return(0,f.jsx)("li",{children:(0,f.jsx)(h.OL,{to:r,ref:s===r?P:null,className:b,children:n})},t)}))})})},_=n(8180),w=function(){var e=(0,o.eW)();return(0,f.jsxs)(c.Z,{tag:"section",page:"profile",children:[(0,f.jsxs)("div",{className:"section",children:[(0,f.jsx)(a.Z,{current:"Profile"}),(0,f.jsxs)("div",{children:[(0,f.jsx)(s.Z,{children:"Profile"}),(0,f.jsx)(u.Z,{children:"Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."})]}),!e&&(0,f.jsx)(p,{})]}),(0,f.jsxs)("div",{className:"section_row",children:[e&&(0,f.jsx)(p,{}),(0,f.jsxs)("div",{className:"section",children:[(0,f.jsx)(y,{}),(0,f.jsx)(r.Suspense,{fallback:(0,f.jsx)(_.Z,{}),children:(0,f.jsx)(i.j3,{})})]})]})]})}},3240:function(e,t){"use strict";t.E=function(e,t){return a(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var i=e.expressions.every((function(e){var n=e.feature,r=e.modifier,i=e.value,o=t[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=l(i),o=l(o);break;case"resolution":i=u(i),o=u(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=s(i),o=s(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!n||!i&&n}))};var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,c=/(dpi|dpcm|dppx)?$/;function a(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),o=t[1],c=t[2],a=t[3]||"",s={};return s.inverse=!!o&&"not"===o.toLowerCase(),s.type=c?c.toLowerCase():"all",a=a.match(/\([^\)]+\)/g)||[],s.expressions=a.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:t[2]}})),s}))}function s(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function u(e){var t=parseFloat(e);switch(String(e).match(c)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function l(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},5425:function(e,t,n){"use strict";var r=n(3240).E,i="undefined"!==typeof window?window.matchMedia:null;function o(e,t,n){var o,c=this;function a(e){c.matches=e.matches,c.media=e.media}i&&!n&&(o=i.call(window,e)),o?(this.matches=o.matches,this.media=o.media,o.addListener(a)):(this.matches=r(e,t),this.media=e),this.addListener=function(e){o&&o.addListener(e)},this.removeListener=function(e){o&&o.removeListener(e)},this.dispose=function(){o&&o.removeListener(a)}}e.exports=function(e,t,n){return new o(e,t,n)}},888:function(e,t,n){"use strict";var r=n(9047);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1075:function(e,t,n){"use strict";n.d(t,{ac:function(){return L}});var r=n(9439),i=n(1413),o=n(4925),c=n(2791),a=n(5425),s=n.n(a),u=/[A-Z]/g,l=/^ms-/,f={};function p(e){return"-"+e.toLowerCase()}var d=function(e){if(f.hasOwnProperty(e))return f[e];var t=e.replace(u,p);return f[e]=l.test(t)?"-"+t:t};function h(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(var o=0;o<i;o++){var c=n[o];if(e[c]!==t[c]||!Object.prototype.hasOwnProperty.call(t,c))return!1}return!0}var m=n(2007),v=n.n(m),x=v().oneOfType([v().string,v().number]),b={all:v().bool,grid:v().bool,aural:v().bool,braille:v().bool,handheld:v().bool,print:v().bool,projection:v().bool,screen:v().bool,tty:v().bool,tv:v().bool,embossed:v().bool},g={orientation:v().oneOf(["portrait","landscape"]),scan:v().oneOf(["progressive","interlace"]),aspectRatio:v().string,deviceAspectRatio:v().string,height:x,deviceHeight:x,width:x,deviceWidth:x,color:v().bool,colorIndex:v().bool,monochrome:v().bool,resolution:x,type:Object.keys(b)},y=(0,o.Z)(g,["type"]),_=(0,i.Z)({minAspectRatio:v().string,maxAspectRatio:v().string,minDeviceAspectRatio:v().string,maxDeviceAspectRatio:v().string,minHeight:x,maxHeight:x,minDeviceHeight:x,maxDeviceHeight:x,minWidth:x,maxWidth:x,minDeviceWidth:x,maxDeviceWidth:x,minColor:v().number,maxColor:v().number,minColorIndex:v().number,maxColorIndex:v().number,minMonochrome:v().number,maxMonochrome:v().number,minResolution:x,maxResolution:x},y),w={all:(0,i.Z)((0,i.Z)({},b),_),types:b,matchers:g,features:_},j=function(e){var t=[];return Object.keys(w.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=d(e);return"number"===typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")},C=(0,c.createContext)(void 0),R=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[d(n)]=e[n],t}),{})},Z=function(){var e=(0,c.useRef)(!1);return(0,c.useEffect)((function(){e.current=!0}),[]),e.current},k=function(e){var t=function(){return function(e){return e.query||j(e)}(e)},n=(0,c.useState)(t),i=(0,r.Z)(n,2),o=i[0],a=i[1];return(0,c.useEffect)((function(){var e=t();o!==e&&a(e)}),[e]),o},L=function(e,t,n){var i=function(e){var t=(0,c.useContext)(C),n=function(){return R(e)||R(t)},i=(0,c.useState)(n),o=(0,r.Z)(i,2),a=o[0],s=o[1];return(0,c.useEffect)((function(){var e=n();h(a,e)||s(e)}),[e,t]),a}(t),o=k(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var a=function(e,t){var n=function(){return s()(e,t||{},!!t)},i=(0,c.useState)(n),o=(0,r.Z)(i,2),a=o[0],u=o[1],l=Z();return(0,c.useEffect)((function(){if(l){var e=n();return u(e),function(){e&&e.dispose()}}}),[e,t]),a}(o,i),u=function(e){var t=(0,c.useState)(e.matches),n=(0,r.Z)(t,2),i=n[0],o=n[1];return(0,c.useEffect)((function(){var t=function(e){o(e.matches)};return e.addListener(t),o(e.matches),function(){e.removeListener(t)}}),[e]),i}(a),l=Z();return(0,c.useEffect)((function(){l&&n&&n(u)}),[u]),(0,c.useEffect)((function(){return function(){a&&a.dispose()}}),[]),u}}}]);
//# sourceMappingURL=276.4f9e3ad5.chunk.js.map