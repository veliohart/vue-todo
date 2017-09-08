// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App'
import router from './router'
import {beforeCreate, created} from './app-hooks'
import {fire} from './plugins/firebase'

import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(fire, {
  apiKey: 'AIzaSyDC5_d1hyYBDJo-t7VoD26QV2YN5bke9lk',
  authDomain: 'test-fire-800a5.firebaseapp.com',
  databaseURL: 'https://test-fire-800a5.firebaseio.com',
  projectId: 'test-fire-800a5',
  storageBucket: 'test-fire-800a5.appspot.com',
  messagingSenderId: '547010154235'
})
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'white'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  beforeCreate,
  created
})
