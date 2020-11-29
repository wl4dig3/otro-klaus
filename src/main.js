import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'



Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(IconsPlugin)
Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyBNmlJ3Ic0l2xkqP0gwLdjnl57btOqLyFY",
  authDomain: "atentica-desafio.firebaseapp.com",
  databaseURL: "https://atentica-desafio.firebaseio.com",
  projectId: "atentica-desafio",
  storageBucket: "atentica-desafio.appspot.com",
  messagingSenderId: "415571816563",
  appId: "1:415571816563:web:865ec4697c455f875afa06"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

