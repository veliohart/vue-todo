webpackJsonp([1],{"/war":function(t,e,n){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},"0gL2":function(t,e){},"4hZ5":function(t,e,n){"use strict";var a=n("AMb0"),i={name:"Todo",path:"/",component:a.a};e.a=i},"4j3T":function(t,e,n){"use strict";var a=n("9afF"),i=n("ELvI"),o=n("VU/8"),r=o(a.a,i.a,null,null,null);e.a=r.exports},"5cpX":function(t,e,n){"use strict";var a={name:"SignUp"},i={path:"/signup",name:"Signup",component:a};e.a=i},"9afF":function(t,e,n){"use strict";e.a={name:"Signin"}},"9gSF":function(t,e){},AMb0:function(t,e,n){"use strict";function a(t){n("9gSF")}var i=n("G5SI"),o=n("e2B1"),r=n("VU/8"),s=a,u=r(i.a,o.a,s,"data-v-bf4b1036",null);e.a=u.exports},At5j:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(){}},CH9y:function(t,e,n){"use strict";var a=n("5cpX"),i=n("LwlU"),o=n("VU/8"),r=o(a.a,i.a,null,null,null);e.a=r.exports},ELvI:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",[t._v("signin!!!")])},i=[],o={render:a,staticRenderFns:i};e.a=o},EVrd:function(t,e,n){"use strict";var a=n("CH9y"),i={path:"/signup",name:"Signup",component:a.a};e.a=i},G5SI:function(t,e,n){"use strict";var a=n("Dd8w"),i=n.n(a),o=n("Pyzh");e.a={name:"layout",data:function(){return{all:{},done:{},active:{},initialValue:""}},beforeMount:function(){this.$fireApp.auth().signInWithEmailAndPassword("test@mail.com","testpassword").catch(function(t){console.log(t)})},mounted:function(){var t=this;this.$fireDB.ref("todos").on("value",function(e){t.all=n.i(o.a)(e.val()),t.done=n.i(o.a)(e.val(),!0),t.active=n.i(o.a)(e.val(),!1)})},methods:{add:function(t){var e=(new Date).getDate()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getFullYear(),n=(new Date).toUTCString();this.$fireDB.ref("todos/"+e).push({text:t,done:!1,createdAt:n,updatedAt:n}),this.initialValue=""},setDone:function(t,e){this.$fireDB.ref("todos/"+e+"/"+t.key).set(i()({},t,{done:!0}))}}}},G7cU:function(t,e){},LwlU:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-layout",{attrs:{"md-gutter":""}},[n("md-layout",{attrs:{"md-flex-xsmall":"100","md-flex-small":"50","md-flex-medium":"33"}},[t._v("\n    md-flex-xsmall "),n("br"),t._v('\n    md-flex-small="50" '),n("br"),t._v('\n    md-flex-medium="33"\n  ')])],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},M93x:function(t,e,n){"use strict";function a(t){n("0gL2")}var i=n("xJD8"),o=n("Yitu"),r=n("VU/8"),s=a,u=r(i.a,o.a,s,null,null);e.a=u.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("Lgyv"),o=n.n(i),r=n("M93x"),s=n("YaEn"),u=n("Pm2m"),l=n("lP0y"),c=n("tzNG");n.n(c);a.default.config.productionTip=!1,a.default.use(o.a),a.default.use(l.a,{apiKey:"AIzaSyDC5_d1hyYBDJo-t7VoD26QV2YN5bke9lk",authDomain:"test-fire-800a5.firebaseapp.com",databaseURL:"https://test-fire-800a5.firebaseio.com",projectId:"test-fire-800a5",storageBucket:"test-fire-800a5.appspot.com",messagingSenderId:"547010154235"}),a.default.material.registerTheme("default",{primary:"blue",accent:"red",warn:"red",background:"white"}),new a.default({el:"#app",router:s.a,template:"<App/>",components:{App:r.a},beforeCreate:u.a,created:u.b})},Paco:function(t,e,n){"use strict";function a(t){n("G7cU")}var i=n("/war"),o=n("hjTa"),r=n("VU/8"),s=a,u=r(i.a,o.a,s,"data-v-715719a8",null);e.a=u.exports},Pm2m:function(t,e,n){"use strict";n.d(e,"b",function(){return i});var a=n("At5j");n.d(e,"a",function(){return a.a});var i=function(){}},Pyzh:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var a=n("M4fF"),i=n.n(a),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return i.a.map(t,function(t,n){return{date:n,todos:i.a.filter(t,function(t,n){return t.key=n,null===e?t:t.done===e&&t}).sort(function(t,e){return!0===t.done?1:0})}}).sort(function(t,e){return new Date(t.date)<new Date(e.date)?1:0}).filter(function(t){return t.todos.length>0})}},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),i=n("/ocq"),o=n("Paco"),r=n("l0yh"),s=n("EVrd"),u=n("4hZ5");a.default.use(i.a),e.a=new i.a({mode:"history",routes:[r.a,s.a,u.a,{path:"/about",name:"about",component:o.a}]})},Yitu:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"phone-viewport"},[n("md-whiteframe",{attrs:{"md-tag":"header","md-elevation":"10"}},[n("md-toolbar",[n("md-button",{staticClass:"md-icon-button",on:{click:t.toggleLeftSidenav}},[n("md-icon",[t._v("menu")])],1),t._v(" "),n("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v(t._s(t.appTitle))]),t._v(" "),n("router-link",{staticClass:"md-raised md-primary",attrs:{to:{name:"about"},tag:"md-button"}},[t._v("\n            About "),n("md-icon",[t._v("info")])],1)],1)],1),t._v(" "),n("router-view"),t._v(" "),n("md-sidenav",{ref:"leftSidenav",staticClass:"md-left",on:{open:function(e){t.open("Left")}}},[n("md-toolbar",{staticClass:"md-large"},[n("div",{staticClass:"md-toolbar-container"},[n("h3",{staticClass:"md-title"},[t._v("Sidenav content")])])]),t._v(" "),n("md-list",[n("md-list-item",[n("md-icon",[t._v("error")]),t._v(" "),n("span",[n("router-link",{attrs:{to:{name:"Root"},tag:"md-button"}},[t._v("root")])],1)],1),t._v(" "),n("md-list-item",[n("md-icon",[t._v("error")]),t._v(" "),n("span",[n("router-link",{attrs:{to:{name:"Layout"},tag:"md-button"}},[t._v("layout")])],1),t._v(" "),n("md-divider",{staticClass:"md-inset"})],1)],1)],1)],1)])},i=[],o={render:a,staticRenderFns:i};e.a=o},e2B1:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-layout",{staticClass:"content-container",attrs:{"md-align":"center",tag:"section"}},[n("md-layout",{attrs:{"md-flex-small":"80","md-flex":"50","md-column":"","md-flex-xsmall":"100"}},[n("md-whiteframe",[n("div",{staticClass:"add-form"},[n("form",{attrs:{novalidate:""},on:{submit:function(e){e.stopPropagation(),e.preventDefault(),t.add(t.initialValue)}}},[n("md-input-container",[n("label",[t._v("що зробити?")]),t._v(" "),n("md-input",{model:{value:t.initialValue,callback:function(e){t.initialValue=e},expression:"initialValue"}})],1)],1)]),t._v(" "),n("md-tabs",{attrs:{"md-right":""}},[n("md-tab",{attrs:{"md-icon":"all_inclusive"}},t._l(t.all,function(e,a){return n("md-list",{key:a},[n("md-subheader",[t._v(t._s(e.date))]),t._v(" "),t._l(e.todos,function(a,i){return n("md-list-item",{key:i},[a.done?n("md-icon",[t._v("done_all")]):n("md-icon",[t._v("bookmark")]),t._v(" "),a.done?n("span",{staticClass:"done"},[t._v("\n                "+t._s(a.text)+"\n              ")]):n("span",[t._v("\n                "+t._s(a.text)+"\n              ")]),t._v(" "),n("span",[n("md-button",{staticClass:"md-icon-button md-mini",attrs:{disabled:a.done},on:{click:function(n){t.setDone(a,e.date)}}},[n("md-icon",[t._v("done")])],1)],1)],1)}),t._v(" "),n("md-divider",{staticClass:"md-inset"})],2)})),t._v(" "),n("md-tab",{attrs:{"md-icon":"notifications_active"}},t._l(t.active,function(e,a){return n("md-list",{key:a},[n("md-subheader",[t._v(t._s(e.date))]),t._v(" "),t._l(e.todos,function(a,i){return n("md-list-item",{key:a.key},[n("md-icon",[t._v("bookmark")]),t._v(" "),n("span",[t._v("\n                "+t._s(a.text)+"\n              ")]),t._v(" "),n("span",[n("md-button",{staticClass:"md-icon-button md-mini",attrs:{disabled:a.done},on:{click:function(n){t.setDone(a,e.date)}}},[n("md-icon",[t._v("done")])],1)],1)],1)}),t._v(" "),n("md-divider",{staticClass:"md-inset"})],2)})),t._v(" "),n("md-tab",{attrs:{"md-icon":"done"}},t._l(t.done,function(e,a){return n("md-list",{key:a},[n("md-subheader",[t._v(t._s(e.date))]),t._v(" "),t._l(e.todos,function(a,i){return n("md-list-item",{key:i},[n("md-icon",[t._v("done_all")]),t._v(" "),n("span",{staticClass:"done"},[t._v("\n                "+t._s(a.text)+" \n              ")]),t._v(" "),n("span",[n("md-button",{staticClass:"md-icon-button md-mini",attrs:{disabled:a.done},on:{click:function(n){t.setDone(a,e.date)}}},[n("md-icon",[t._v("done")])],1)],1)],1)}),t._v(" "),n("md-divider",{staticClass:"md-inset"})],2)}))],1)],1)],1)],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},hjTa:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],o={render:a,staticRenderFns:i};e.a=o},l0yh:function(t,e,n){"use strict";var a=n("4j3T"),i={name:"SignIn",path:"/signin",component:a.a};e.a=i},lP0y:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var a=n("OPUS"),i=(n.n(a),n("0jrq")),o=(n.n(i),n("X2NH")),r=(n.n(o),{});r.install=function(t,e){var n=a.initializeApp(e);t.prototype.$fireDB=n.database(),t.prototype.$fireApp=n}},tzNG:function(t,e){},xJD8:function(t,e,n){"use strict";e.a={name:"app",data:function(){return{appTitle:"ToDo"}},methods:{toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()},open:function(t){console.log("Opened: "+t)}}}}},["NHnr"]);
//# sourceMappingURL=app.b5e6e65c74b872847552.js.map