webpackJsonp([18],{125:function(n,t){},129:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{staticClass:"main"})],1)},staticRenderFns:[]}},25:function(n,t,e){"use strict";e.d(t,"f",function(){return r}),e.d(t,"b",function(){return c}),e.d(t,"a",function(){return u}),e.d(t,"g",function(){return a}),e.d(t,"c",function(){return i}),e.d(t,"d",function(){return s}),e.d(t,"e",function(){return f});var o=e(54),r=function(n){return o.a.fetchPost("/users/login",n)},c=function(n){return o.a.fetchPost("/users/loginOut",n)},u=function(n){return o.a.fetchPost("/users/userInfo",n)},a=function(n){return o.a.fetchPost("/users/register",n)},i=function(n){return o.a.fetchPost("/users/upload",n)},s=function(n){return o.a.fetchPost("/users/updateheadimage",n)},f=function(n){return o.a.fetchGet("/goods/productHome",n)}},47:function(n,t,e){"use strict";var o=e(15),r=e(130),c=function(n){return e.e(5).then(function(){var t=[e(150)];n.apply(null,t)}.bind(this)).catch(e.oe)},u=function(n){return e.e(12).then(function(){var t=[e(151)];n.apply(null,t)}.bind(this)).catch(e.oe)},a=function(n){return e.e(2).then(function(){var t=[e(139)];n.apply(null,t)}.bind(this)).catch(e.oe)},i=function(n){return e.e(10).then(function(){var t=[e(137)];n.apply(null,t)}.bind(this)).catch(e.oe)},s=function(n){return e.e(4).then(function(){var t=[e(138)];n.apply(null,t)}.bind(this)).catch(e.oe)},f=function(n){return e.e(1).then(function(){var t=[e(135)];n.apply(null,t)}.bind(this)).catch(e.oe)},p=function(n){return e.e(6).then(function(){var t=[e(140)];n.apply(null,t)}.bind(this)).catch(e.oe)},h=function(n){return e.e(3).then(function(){var t=[e(149)];n.apply(null,t)}.bind(this)).catch(e.oe)},d=function(n){return e.e(13).then(function(){var t=[e(147)];n.apply(null,t)}.bind(this)).catch(e.oe)},l=function(n){return e.e(7).then(function(){var t=[e(146)];n.apply(null,t)}.bind(this)).catch(e.oe)},m=function(n){return e.e(9).then(function(){var t=[e(143)];n.apply(null,t)}.bind(this)).catch(e.oe)},v=function(n){return e.e(15).then(function(){var t=[e(145)];n.apply(null,t)}.bind(this)).catch(e.oe)},g=function(n){return e.e(16).then(function(){var t=[e(144)];n.apply(null,t)}.bind(this)).catch(e.oe)},I=function(n){return e.e(14).then(function(){var t=[e(148)];n.apply(null,t)}.bind(this)).catch(e.oe)},b=function(n){return e.e(0).then(function(){var t=[e(136)];n.apply(null,t)}.bind(this)).catch(e.oe)},y=function(n){return e.e(8).then(function(){var t=[e(141)];n.apply(null,t)}.bind(this)).catch(e.oe)},w=function(n){return e.e(11).then(function(){var t=[e(142)];n.apply(null,t)}.bind(this)).catch(e.oe)};o.a.use(r.a),t.a=new r.a({routes:[{path:"/",component:c,name:"index",redirect:"/home",children:[{path:"home",component:a},{path:"goods",component:i},{path:"goodsDetails",name:"goodsDetails",component:s}]},{path:"/login",name:"login",component:u},{path:"/cart",name:"cart",component:f},{path:"/order",name:"order",component:p,children:[{path:"paysuccess",name:"paysuccess",component:w},{path:"payment",name:"payment",component:y}]},{path:"/user",name:"user",component:h,redirect:"/user/orderList",children:[{path:"orderList",name:"订单列表",component:d},{path:"information",name:"账户资料",component:l},{path:"addressList",name:"收货地址",component:m},{path:"coupon",name:"我的优惠",component:v},{path:"support",name:"售后服务",component:I},{path:"aihuishou",name:"以旧换新",component:g}]},{path:"/checkout",name:"checkout",component:b},{path:"*",redirect:"/home"}]})},48:function(n,t,e){"use strict";var o=e(15),r=e(56),c=e(79),u=e(77);o.a.use(r.a);var a={login:!1,userInfo:null,cartList:[],showMoveImg:!1,elLeft:0,elTop:0,moveImgUrl:null,cartPositionT:0,cartPositionL:0,receiveInCart:!1,showCart:!1};t.a=new r.a.Store({state:a,action:u.a,mutations:c.a})},52:function(n,t,e){function o(n){e(125)}var r=e(53)(e(80),e(129),o,null,null);n.exports=r.exports},54:function(n,t,e){"use strict";var o=e(84),r=e.n(o),c=e(58),u=e.n(c);u.a.defaults.timeout=5e3,u.a.defaults.headers.post["Content-Type"]="application/x-www=form-urlencoded",t.a={fetchGet:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new r.a(function(e,o){u.a.get("http://47.94.248.92:3333"+n,t).then(function(n){e(n.data)}).catch(function(n){o(n)})})},fetchPost:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new r.a(function(e,o){u.a.post("http://47.94.248.92:3333"+n,t).then(function(n){e(n.data)}).catch(function(n){o(n)})})}}},57:function(n,t,e){"use strict";e.d(t,"b",function(){return c}),e.d(t,"a",function(){return u}),e.d(t,"c",function(){return a});var o=e(81),r=e.n(o),c=function(n,t){n&&("string"!=typeof t&&(t=r()(t)),window.localStorage.setItem(n,t))},u=function(n){if(n)return window.localStorage.getItem(n)},a=function(n){n&&window.localStorage.removeItem(n)}},76:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(15),r=e(52),c=e.n(r),u=e(47),a=e(48),i=e(51),s=e.n(i),f=e(50),p=e.n(f),h=e(49),d=e.n(h),l=e(25);o.a.use(p.a),o.a.use(d.a),o.a.use(s.a,{loading:"/static/images/load.gif"}),o.a.config.productionTip=!1;var m=["/home","/goods","/login","/goodsDetails"];u.a.beforeEach(function(n,t,o){e.i(l.a)().then(function(t){"1"===t.status?-1!==m.indexOf(n.path)?o():o("/login"):(a.a.commit("RECORD_USERINFO",{info:t.result}),"/login"===n.path&&o({path:"/"}),o())})}),new o.a({el:"#app",store:a.a,router:u.a,render:function(n){return n(c.a)}})},77:function(n,t,e){"use strict";t.a={}},78:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return r}),e.d(t,"h",function(){return c}),e.d(t,"g",function(){return u}),e.d(t,"c",function(){return a}),e.d(t,"d",function(){return i}),e.d(t,"e",function(){return s}),e.d(t,"f",function(){return f});var o="INIT_BUYCART",r="ADD_CART",c="GET_USERINFO",u="RECORD_USERINFO",a="ADD_ANIMATION",i="SHOW_CART",s="REDUCE_CART",f="EDIT_CART"},79:function(n,t,e){"use strict";var o,r=e(85),c=e.n(r),u=e(55),a=e.n(u),i=e(78),s=e(57);t.a=(o={},c()(o,i.a,function(n){var t=e.i(s.a)("buyCart");t&&(n.cartList=JSON.parse(t))}),c()(o,i.b,function(n,t){var o=t.productId,r=t.productPrice,c=t.productName,u=t.productImg,a=t.productNum,i=void 0===a?1:a,f=n.cartList,p=!0,h={productId:o,productPrice:r,productName:c,productImg:u};f.length&&f.forEach(function(n){n.productId===o&&n.productNum>=0&&(p=!1,n.productNum+=i)}),f.length&&!p||(h.productNum=i,h.checked="1",f.push(h)),n.cartList=f,e.i(s.b)("buyCart",f)}),c()(o,i.c,function(n,t){var e=t.moveShow,o=t.elLeft,r=t.elTop,c=t.img,u=t.cartPositionT,a=t.cartPositionL,i=t.receiveInCart;n.showMoveImg=e,o&&(n.elLeft=o,n.elTop=r),n.moveImgUrl=c,n.receiveInCart=i,u&&(n.cartPositionT=u,n.cartPositionL=a)}),c()(o,i.d,function(n,t){var e=t.showCart;n.showCart=e}),c()(o,i.e,function(n,t){var o=t.productId,r=n.cartList;r.forEach(function(n,t){n.productId===o&&(n.productNum>1?n.productNum--:r.splice(t,1))}),n.cartList=r,e.i(s.b)("buyCart",n.cartList)}),c()(o,i.f,function(n,t){var o=t.productId,r=t.productNum,c=t.checked,u=n.cartList;r?u.forEach(function(n,t){n.productId===o&&(n.productNum=r,n.checked=c)}):o?u.forEach(function(n,t){n.productId===o&&u.splice(t,1)}):u.forEach(function(n){n.checked=c?"1":"0"}),n.cartList=u,e.i(s.b)("buyCart",n.cartList)}),c()(o,i.g,function(n,t){n.userInfo=t,n.login=!0,e.i(s.b)("userInfo",t)}),c()(o,i.h,function(n,t){n.userInfo&&n.userInfo.username!==t.username||n.login&&(t.message?n.userInfo=null:n.userInfo=a()({},t))}),o)},80:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}}},[76]);
//# sourceMappingURL=app.1b088e733ba5e9c986d8.js.map