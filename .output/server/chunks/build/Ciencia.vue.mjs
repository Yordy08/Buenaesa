import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Ciencia",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    const noticiasCiencia = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-5 pt-5" }, _attrs))}><h1 class="mb-4 text-center" style="${ssrRenderStyle({ "color": "#0FA6A6" })}">Noticias de Ciencia e Innovación</h1><div class="d-flex flex-wrap justify-content-center"><!--[-->`);
      ssrRenderList(noticiasCiencia.value, (noticia) => {
        _push(`<div class="card mb-4 mx-2" style="${ssrRenderStyle({ "width": "18rem" })}">`);
        if (noticia.archivo) {
          _push(`<img${ssrRenderAttr("src", noticia.archivo)} class="card-img-top" alt="Imagen de la noticia" style="${ssrRenderStyle({ "height": "200px", "object-fit": "cover" })}">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="card-body"><h5 class="card-title">${ssrInterpolate(noticia.titulo)}</h5><p style="${ssrRenderStyle({ "display": "-webkit-box", "-webkit-line-clamp": "3", "line-clamp": "3", "-webkit-box-orient": "vertical", "overflow": "hidden", "text-overflow": "ellipsis", "text-align": "justify", "word-spacing": "-1px", "letter-spacing": "-0.5px" })}">${ssrInterpolate(noticia.descripcion.length > 120 ? noticia.descripcion.slice(0, 120) + "..." : noticia.descripcion)}</p><p class="card-text"><small class="text-muted">${ssrInterpolate(noticia.fecha.slice(0, 10))}</small></p>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: `/Notis/${noticia._id}`,
          class: "btn btn-primary"
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
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
      if (noticiasCiencia.value.length === 0) {
        _push(`<div class="text-center mt-5"><h4>No hay noticias de ciencia e innovación aún.</h4></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Categorias/Ciencia.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Ciencia.vue.mjs.map
