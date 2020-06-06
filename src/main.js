import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyAO99N6UxvHZIzY5yBMKH1E80_4jvgh-tI",
  authDomain: "vue-bookkeeping-56e1f.firebaseapp.com",
  databaseURL: "https://vue-bookkeeping-56e1f.firebaseio.com",
  projectId: "vue-bookkeeping-56e1f",
  storageBucket: "vue-bookkeeping-56e1f.appspot.com",
  messagingSenderId: "985607322782",
  appId: "1:985607322782:web:7f330d62c10239635ecf8f",
  measurementId: "G-1NHVZ2JWSF"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
