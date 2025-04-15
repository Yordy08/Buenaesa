import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "All",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    const noticiasPorCategoria = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-5 pt-5" }, _attrs))}><!--[-->`);
      ssrRenderList(noticiasPorCategoria.value, (noticiasCategoria, categoria) => {
        _push(`<div class="mb-5"><h2 class="mb-4 border-bottom pb-2" style="${ssrRenderStyle({ "color": "#F23568" })}">${ssrInterpolate(categoria)}</h2><div class="row"><!--[-->`);
        ssrRenderList(noticiasCategoria, (noticia) => {
          _push(`<div class="col-md-4 mb-4 d-flex"><div class="card flex-fill" style="${ssrRenderStyle({ "min-height": "100%" })}">`);
          if (noticia.archivo) {
            _push(`<img${ssrRenderAttr("src", noticia.archivo)} class="card-img-top" alt="Imagen noticia" style="${ssrRenderStyle({ "height": "200px", "object-fit": "cover" })}">`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="card-body d-flex flex-column"><h5 class="card-title">${ssrInterpolate(noticia.titulo)}</h5><p class="card-text flex-grow-1">${ssrInterpolate(noticia.descripcion.length > 120 ? noticia.descripcion.slice(0, 120) + "..." : noticia.descripcion)}</p>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: `/Notis/${noticia._id}`,
            class: "btn btn-outline-primary mt-auto"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Leer más `);
              } else {
                return [
                  createTextVNode(" Leer más ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]-->`);
      if (Object.keys(noticiasPorCategoria.value).length === 0) {
        _push(`<div class="text-center mt-5"><h4>No hay noticias disponibles.</h4></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/All.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=All.vue.mjs.map
