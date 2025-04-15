import { defineAsyncComponent } from "vue";
const layouts = {
  default: defineAsyncComponent(() => import("../layouts/default.vue.mjs").then((m) => m.default || m))
};
export {
  layouts as default
};
//# sourceMappingURL=virtual_nuxt_C__Users_USUARIO_Buenaesa_frontend_.nuxt_layouts.mjs.map
