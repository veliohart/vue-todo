webpackJsonp([1],{"/war":function(t,e,a){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},"0gL2":function(t,e){},"4hZ5":function(t,e,a){"use strict";var n=a("AMb0"),i={name:"Todo",path:"/",component:n.a};e.a=i},"4j3T":function(t,e,a){"use strict";var n=a("9afF"),i=a("ELvI"),r=a("VU/8"),s=r(n.a,i.a,null,null,null);e.a=s.exports},"5cpX":function(t,e,a){"use strict";var n={name:"SignUp"},i={path:"/signup",name:"Signup",component:n};e.a=i},"9afF":function(t,e,a){"use strict";e.a={name:"Signin"}},"9gSF":function(t,e){},AMb0:function(t,e,a){"use strict";function n(t){a("9gSF")}var i=a("G5SI"),r=a("e2B1"),s=a("VU/8"),o=n,u=s(i.a,r.a,o,"data-v-bf4b1036",null);e.a=u.exports},At5j:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n=function(){}},CH9y:function(t,e,a){"use strict";var n=a("5cpX"),i=a("LwlU"),r=a("VU/8"),s=r(n.a,i.a,null,null,null);e.a=s.exports},ELvI:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",[t._v("signin!!!")])},i=[],r={render:n,staticRenderFns:i};e.a=r},EVrd:function(t,e,a){"use strict";var n=a("CH9y"),i={path:"/signup",name:"Signup",component:n.a};e.a=i},G5SI:function(t,e,a){"use strict";var n=a("Dd8w"),i=a.n(n);e.a={name:"layout",data:function(){return{all:{},done:function(){},active:function(){},initialValue:""}},beforeMount:function(){var t=this;this.$fireApp.auth().signInWithEmailAndPassword("test@mail.com","testpassword").catch(function(e){t.errorCode=e.code,t.errorMessage=e.message})},mounted:function(){var t=this;this.$fireDB.ref("todos").on("value",function(e){console.log("snapshot.val()",e.val()),t.all=e.val()})},methods:{add:function(t){var e=(new Date).getDate()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getFullYear(),a=(new Date).toUTCString();this.$fireDB.ref("todos/"+e).push({text:t,done:!1,createdAt:a,updatedAt:a}),this.initialValue=""},setDone:function(t,e,a){this.$fireDB.ref("todos/"+a+"/"+t).set(i()({},e,{done:!0}))}}}},G7cU:function(t,e){},LwlU:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-layout",{attrs:{"md-gutter":""}},[a("md-layout",{attrs:{"md-flex-xsmall":"100","md-flex-small":"50","md-flex-medium":"33"}},[t._v("\n    md-flex-xsmall "),a("br"),t._v('\n    md-flex-small="50" '),a("br"),t._v('\n    md-flex-medium="33"\n  ')])],1)},i=[],r={render:n,staticRenderFns:i};e.a=r},M93x:function(t,e,a){"use strict";function n(t){a("0gL2")}var i=a("xJD8"),r=a("Yitu"),s=a("VU/8"),o=n,u=s(i.a,r.a,o,null,null);e.a=u.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i=a("Lgyv"),r=a.n(i),s=a("M93x"),o=a("YaEn"),u=a("Pm2m"),l=a("lP0y"),c=a("tzNG");a.n(c);n.default.config.productionTip=!1,n.default.use(r.a),n.default.use(l.a,{apiKey:"AIzaSyDC5_d1hyYBDJo-t7VoD26QV2YN5bke9lk",authDomain:"test-fire-800a5.firebaseapp.com",databaseURL:"https://test-fire-800a5.firebaseio.com",projectId:"test-fire-800a5",storageBucket:"test-fire-800a5.appspot.com",messagingSenderId:"547010154235"}),n.default.material.registerTheme("default",{primary:"blue",accent:"red",warn:"red",background:"white"}),new n.default({el:"#app",router:o.a,template:"<App/>",components:{App:s.a},beforeCreate:u.a,created:u.b})},Paco:function(t,e,a){"use strict";function n(t){a("G7cU")}var i=a("/war"),r=a("hjTa"),s=a("VU/8"),o=n,u=s(i.a,r.a,o,"data-v-715719a8",null);e.a=u.exports},Pm2m:function(t,e,a){"use strict";a.d(e,"b",function(){return i});var n=a("At5j");a.d(e,"a",function(){return n.a});var i=function(){}},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),i=a("/ocq"),r=a("Paco"),s=a("l0yh"),o=a("EVrd"),u=a("4hZ5");n.default.use(i.a),e.a=new i.a({mode:"history",routes:[s.a,o.a,u.a,{path:"/about",name:"about",component:r.a}]})},Yitu:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"phone-viewport"},[a("md-whiteframe",{attrs:{"md-tag":"header","md-elevation":"10"}},[a("md-toolbar",[a("md-button",{staticClass:"md-icon-button",on:{click:t.toggleLeftSidenav}},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v(t._s(t.appTitle))]),t._v(" "),a("router-link",{staticClass:"md-raised md-primary",attrs:{to:{name:"about"},tag:"md-button"}},[t._v("\n            About "),a("md-icon",[t._v("info")])],1)],1)],1),t._v(" "),a("router-view"),t._v(" "),a("md-sidenav",{ref:"leftSidenav",staticClass:"md-left",on:{open:function(e){t.open("Left")}}},[a("md-toolbar",{staticClass:"md-large"},[a("div",{staticClass:"md-toolbar-container"},[a("h3",{staticClass:"md-title"},[t._v("Sidenav content")])])]),t._v(" "),a("md-list",[a("md-list-item",[a("md-icon",[t._v("error")]),t._v(" "),a("span",[a("router-link",{attrs:{to:{name:"Root"},tag:"md-button"}},[t._v("root")])],1)],1),t._v(" "),a("md-list-item",[a("md-icon",[t._v("error")]),t._v(" "),a("span",[a("router-link",{attrs:{to:{name:"Layout"},tag:"md-button"}},[t._v("layout")])],1),t._v(" "),a("md-divider",{staticClass:"md-inset"})],1)],1)],1)],1)])},i=[],r={render:n,staticRenderFns:i};e.a=r},e2B1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-layout",{staticClass:"content-container",attrs:{"md-gutter":"16",tag:"section"}},[a("md-layout",{attrs:{"md-flex-small":"10","md-flex":"25","md-column":"","md-flex-xsmall":"100"}}),t._v(" "),a("md-layout",{attrs:{"md-flex-small":"80","md-flex":"50","md-column":"","md-flex-xsmall":"100"}},[a("md-whiteframe",[a("div",{staticClass:"add-form"},[a("form",{attrs:{novalidate:""},on:{submit:function(e){e.stopPropagation(),e.preventDefault(),t.add(t.initialValue)}}},[a("md-input-container",[a("label",[t._v("що зробити?")]),t._v(" "),a("md-input",{model:{value:t.initialValue,callback:function(e){t.initialValue=e},expression:"initialValue"}})],1)],1)]),t._v(" "),a("md-tabs",{attrs:{"md-right":""}},[a("md-tab",{attrs:{"md-icon":"all_inclusive"}},t._l(t.all,function(e,n,i){return a("md-list",{key:n},[a("md-subheader",[t._v(t._s(n))]),t._v(" "),t._l(e,function(e,i){return a("md-list-item",{key:i},[e.done?a("md-icon",[t._v("done_all")]):a("md-icon",[t._v("bookmark")]),t._v(" "),a("span",[t._v("\n                "+t._s(e.text)+"\n              ")]),t._v(" "),a("span",[a("md-button",{staticClass:"md-icon-button md-mini",attrs:{disabled:e.done},on:{click:function(a){t.setDone(i,e,n)}}},[a("md-icon",[t._v("done")])],1)],1)],1)}),t._v(" "),a("md-divider",{staticClass:"md-inset"})],2)})),t._v(" "),a("md-tab",{attrs:{"md-icon":"notifications_active"}}),t._v(" "),a("md-tab",{attrs:{"md-icon":"done"}},[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.")])])],1)],1)],1)],1)},i=[],r={render:n,staticRenderFns:i};e.a=r},hjTa:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],r={render:n,staticRenderFns:i};e.a=r},l0yh:function(t,e,a){"use strict";var n=a("4j3T"),i={name:"SignIn",path:"/signin",component:n.a};e.a=i},lP0y:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var n=a("OPUS"),i=(a.n(n),a("0jrq")),r=(a.n(i),a("X2NH")),s=(a.n(r),{});s.install=function(t,e){var a=n.initializeApp(e);t.prototype.$fireDB=a.database(),t.prototype.$fireApp=a}},tzNG:function(t,e){},xJD8:function(t,e,a){"use strict";e.a={name:"app",data:function(){return{appTitle:"ToDo"}},methods:{toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()},open:function(t){console.log("Opened: "+t)}}}}},["NHnr"]);
//# sourceMappingURL=app.25314f3a17dd87fc491a.js.map