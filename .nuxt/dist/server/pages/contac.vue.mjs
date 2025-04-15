import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-wrapper" }, _attrs))} data-v-f7d1f8cb><div class="contact-info" data-v-f7d1f8cb><h2 data-v-f7d1f8cb>Información de contacto</h2><p data-v-f7d1f8cb><strong data-v-f7d1f8cb>Correo electrónico:</strong> contacto@tusitio.com</p><p data-v-f7d1f8cb><strong data-v-f7d1f8cb>Teléfono:</strong> +57 300 123 4567</p><p data-v-f7d1f8cb><strong data-v-f7d1f8cb>Dirección:</strong> Montería, Córdoba, Colombia</p></div><div class="map-container" data-v-f7d1f8cb><iframe title="Ubicación en Montería" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.130825043479!2d-75.88297302587646!3d8.747983195016078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5ea32177cd1a07%3A0xc514c9bb6abf5ef0!2sMonter%C3%ADa%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sco!4v1712799872825!5m2!1ses-419!2sco" width="100%" height="350" style="${ssrRenderStyle({ "border": "0" })}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-f7d1f8cb></iframe></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contac.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contac = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f7d1f8cb"]]);
export {
  contac as default
};
//# sourceMappingURL=contac.vue.mjs.map
