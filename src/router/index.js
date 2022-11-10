import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'InicioSesion',
    component: () => import('../views/InicioSesion.vue')
  },
  {
    path: '/register',
    name: 'Registrar',
    component: () => import('../views/Registrar.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { requiereAuth : true }
  },
  {
    path: '/category',
    name: 'Categoria',
    component: () => import('../views/Categoria.vue'),
    meta: { requiereAuth : true }
  },
  {
    path: '/category/create',
    name: 'CrearCategoria',
    component: () => import('../views/CrearCategoria.vue'),
    meta: { requiereAuth : true }
  },
  {
    path: '/category/edit',
    name: 'EditarCategoria',
    component: () => import('../views/EditarCategoria.vue'),
    meta: { requiereAuth : true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

var permitido;

router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requiereAuth)){
   
    permitido = localStorage.getItem("token");
    console.log("data token");
    console.log(permitido );

    if(permitido == null || permitido.length<=0){
      console.log("primera opción" );
      next({path: '/'});
    }else{
      console.log("segunda opción" );
      next();
      
    }
  }else{
    console.log("tercera opción" );
    next();
  }
});

export default router