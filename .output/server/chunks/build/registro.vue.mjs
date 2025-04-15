import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';
import { useRouter } from 'vue-router';

const _sfc_main = {
  __name: "registro",
  __ssrInlineRender: true,
  setup(__props) {
    const nombre = ref("");
    const email = ref("");
    const password = ref("");
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><div><label>Nombre</label><input${ssrRenderAttr("value", nombre.value)} type="text" placeholder="Tu nombre" required></div><div><label>Email</label><input${ssrRenderAttr("value", email.value)} type="email" placeholder="Tu email" required></div><div><label>Contraseña</label><input${ssrRenderAttr("value", password.value)} type="password" placeholder="Tu contraseña" required></div><button type="submit">Registrarse</button></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/registro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=registro.vue.mjs.map
