function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "All",
    path: "/All",
    component: () => import("../pages/All.vue.mjs")
  },
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "login",
    path: "/login",
    component: () => import("../pages/login.vue.mjs")
  },
  {
    name: "somos",
    path: "/somos",
    component: () => import("../pages/somos.vue.mjs")
  },
  {
    name: "contac",
    path: "/contac",
    component: () => import("../pages/contac.vue.mjs")
  },
  {
    name: "registro",
    path: "/registro",
    component: () => import("../pages/registro.vue.mjs")
  },
  {
    name: "Notis-id",
    path: "/Notis/:id()",
    component: () => import("../pages/Notis/_id_.vue.mjs")
  },
  {
    name: "createnoticias",
    path: "/createnoticias",
    component: () => import("../pages/createnoticias.vue.mjs")
  },
  {
    name: "Categorias-Ciencia",
    path: "/Categorias/Ciencia",
    component: () => import("../pages/Categorias/Ciencia.vue.mjs")
  },
  {
    name: "Categorias-Cultura",
    path: "/Categorias/Cultura",
    component: () => import("../pages/Categorias/Cultura.vue.mjs")
  },
  {
    name: "Categorias-Ambiente",
    path: "/Categorias/Ambiente",
    component: () => import("../pages/Categorias/Ambiente.vue.mjs")
  },
  {
    name: "Categorias-Personajes",
    path: "/Categorias/Personajes",
    component: () => import("../pages/Categorias/Personajes.vue.mjs")
  },
  {
    name: "Categorias-Emprendimiento",
    path: "/Categorias/Emprendimiento",
    component: () => import("../pages/Categorias/Emprendimiento.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt_C__Users_USUARIO_Buenaesa_frontend_.nuxt_routes.mjs.map
