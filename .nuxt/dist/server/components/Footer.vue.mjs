import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  name: "Footer"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-3d122f04><div class="footer-container" data-v-3d122f04><p data-v-3d122f04>© 2025 Buenaesa.co - Todos los derechos reservados.</p><div class="footer-links" data-v-3d122f04>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/privacidad",
    class: "footer-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Política de Privacidad`);
      } else {
        return [
          createTextVNode("Política de Privacidad")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/terminos",
    class: "footer-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Términos de Servicio`);
      } else {
        return [
          createTextVNode("Términos de Servicio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3d122f04"]]);
export {
  Footer as default
};
//# sourceMappingURL=Footer.vue.mjs.map
