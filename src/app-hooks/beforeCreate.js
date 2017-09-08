export const initFireBase = () => {
  const $body = document.body
  const config = {
    apiKey: 'AIzaSyDC5_d1hyYBDJo-t7VoD26QV2YN5bke9lk',
    authDomain: 'test-fire-800a5.firebaseapp.com',
    databaseURL: 'https://test-fire-800a5.firebaseio.com',
    projectId: 'test-fire-800a5',
    storageBucket: 'test-fire-800a5.appspot.com',
    messagingSenderId: '547010154235'
  }
  const $gfbs = document.createElement('script')
  $gfbs.onload = (e) => {
    window.firebase.initializeApp(config)
  }
  $gfbs.type = 'text/javascript'
  $gfbs.src = 'https://www.gstatic.com/firebasejs/4.3.0/firebase.js'
  $body.append($gfbs)
}

export const beforeCreate = () => {
  // initFireBase()
}
