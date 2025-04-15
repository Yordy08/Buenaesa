import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import { useRoute } from "vue-router";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const noticia = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const route = useRoute();
    route.params.id;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-21536d17><section class="noticia-detalle" data-v-21536d17><div class="max-width" data-v-21536d17><br data-v-21536d17>`);
      if (loading.value) {
        _push(`<div class="loading" data-v-21536d17>Cargando...</div>`);
      } else if (error.value) {
        _push(`<div class="error" data-v-21536d17>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<div data-v-21536d17><h3 data-v-21536d17>${ssrInterpolate(noticia.value.titulo)}</h3><p data-v-21536d17>${ssrInterpolate(noticia.value.descripcion)}</p>`);
        if (noticia.value.archivo) {
          _push(`<img${ssrRenderAttr("src", noticia.value.archivo)} alt="Imagen de la noticia" data-v-21536d17>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Notis/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21536d17"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_.vue.mjs.map
