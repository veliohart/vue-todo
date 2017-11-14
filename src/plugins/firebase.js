import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const fire = {}

fire.install = function (Vue, options) {
  const firebaseApp = firebase.initializeApp(options)
  Vue.prototype.$fireDB = firebaseApp.database()
  Vue.prototype.$fireApp = firebaseApp
  Vue.prototype.$auth = firebaseApp.auth()
}

export {fire}
