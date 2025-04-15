import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "Emprendimiento",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    const noticiasEmprendimiento = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-5 pt-5" }, _attrs))} data-v-f63ca97a><h1 class="mb-4 text-center" style="${ssrRenderStyle({ "color": "#0FA6A6" })}" data-v-f63ca97a>Noticias de Emprendimiento</h1><div class="d-flex flex-wrap justify-content-center" data-v-f63ca97a><!--[-->`);
      ssrRenderList(noticiasEmprendimiento.value, (noticia) => {
        _push(`<div class="card mb-4 mx-2" style="${ssrRenderStyle({ "width": "18rem" })}" data-v-f63ca97a>`);
        if (noticia.archivo) {
          _push(`<img${ssrRenderAttr("src", noticia.archivo)} class="card-img-top" alt="Imagen de la noticia" data-v-f63ca97a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="card-body" data-v-f63ca97a><h5 class="card-title" data-v-f63ca97a>${ssrInterpolate(noticia.titulo)}</h5><p style="${ssrRenderStyle({ "display": "-webkit-box", "-webkit-line-clamp": "3", "line-clamp": "3", "-webkit-box-orient": "vertical", "overflow": "hidden", "text-overflow": "ellipsis", "text-align": "justify", "word-spacing": "-1px", "letter-spacing": "-0.5px" })}" data-v-f63ca97a>${ssrInterpolate(noticia.descripcion.length > 120 ? noticia.descripcion.slice(0, 120) + "..." : noticia.descripcion)}</p><p class="card-text" data-v-f63ca97a><small class="text-muted" data-v-f63ca97a>${ssrInterpolate(noticia.fecha.slice(0, 10))}</small></p><a${ssrRenderAttr("href", `/Notis/${noticia._id}`)} class="btn btn-primary" data-v-f63ca97a>Leer más</a></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (noticiasEmprendimiento.value.length === 0) {
        _push(`<div class="text-center mt-5" data-v-f63ca97a><h4 data-v-f63ca97a>No hay noticias de emprendimiento aún.</h4></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Categorias/Emprendimiento.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Emprendimiento = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f63ca97a"]]);
export {
  Emprendimiento as default
};
//# sourceMappingURL=Emprendimiento.vue.mjs.map
