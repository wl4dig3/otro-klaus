import Vue from 'vue'
import VueRouter from 'vue-router'
import Inventario from '../views/Inventario.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inventario',
    name: 'Inventario',
    component: Inventario,
    meta: {
      login: true,
    }
  },
    
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/imagenes',
    name: 'Imagenes',
    component: () => import('../views/Imagenes.vue'),
    
  },
  
  {
    path: '/',
    name: 'LadingPage',
    component: () => import('../views/LadingPage.vue'),
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue'),
  },
  {
    path: '*',
    component: () => import( '../views/NotFound.vue')
  }
]
    

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  // console.log(usuario);
  let autorizacion = to.matched.some((route) => route.meta.login);

  if (!usuario && autorizacion) {
    next("/login");
  } else if (usuario && !autorizacion) {
    next("/");
  } else {
    next();
  }
});

export default router
