import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useRouter } from "vue-router";
import "sweetalert2";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-page" }, _attrs))} data-v-a009ff8d><div class="form-container animate__animated animate__fadeInDown" data-v-a009ff8d><h2 data-v-a009ff8d>Iniciar Sesión</h2><form data-v-a009ff8d><div class="input-group" data-v-a009ff8d><label data-v-a009ff8d>Email</label><input${ssrRenderAttr("value", email.value)} type="email" placeholder="Tu email" required data-v-a009ff8d></div><div class="input-group" data-v-a009ff8d><label data-v-a009ff8d>Contraseña</label><input${ssrRenderAttr("value", password.value)} type="password" placeholder="Tu contraseña" required data-v-a009ff8d></div><button type="submit" class="btn-submit" data-v-a009ff8d>Entrar</button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a009ff8d"]]);
export {
  login as default
};
//# sourceMappingURL=login.vue.mjs.map
