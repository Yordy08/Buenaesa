import { ref, resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    const primerasNoticias = ref([]);
    const noticiasPorCategoria = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_center = resolveComponent("center");
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6d990b54><section class="pt-5" style="${ssrRenderStyle({ "background": "linear-gradient(to right, #F23568, #0FA6A6)", "min-height": "95vh", "display": "flex", "justify-content": "center", "align-items": "center", "text-align": "center" })}" data-v-6d990b54><div class="container" data-v-6d990b54><div id="newsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-v-6d990b54><div class="carousel-inner" data-v-6d990b54><!--[-->`);
      ssrRenderList(primerasNoticias.value, (noticia, index2) => {
        _push(`<div class="${ssrRenderClass(["carousel-item", { active: index2 === 0 }])}" data-v-6d990b54>`);
        if (noticia.archivo) {
          _push(`<img${ssrRenderAttr("src", noticia.archivo)} alt="Imagen" class="d-block w-100" style="${ssrRenderStyle({ "max-height": "80vh", "object-fit": "cover", "width": "100%" })}" data-v-6d990b54>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="carousel-caption d-none d-md-block p-3 rounded" style="${ssrRenderStyle({ "background": "rgba(0, 0, 0, 0.6)", "backdrop-filter": "blur(5px)", "border-radius": "1rem" })}" data-v-6d990b54><h5 class="fw-bold text-white" data-v-6d990b54>${ssrInterpolate(noticia.titulo)}</h5><p class="text-light" data-v-6d990b54>${ssrInterpolate(noticia.descripcion.length > 230 ? noticia.descripcion.slice(0, 230) + "..." : noticia.descripcion)}</p>`);
        _push(ssrRenderComponent(_component_center, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_router_link, {
                to: `/Notis/${noticia._id}`,
                class: "btn btn-outline-light mt-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Ver más `);
                  } else {
                    return [
                      createTextVNode(" Ver más ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_router_link, {
                  to: `/Notis/${noticia._id}`,
                  class: "btn btn-outline-light mt-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Ver más ")
                  ]),
                  _: 2
                }, 1032, ["to"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="d-block d-md-none text-center mt-3" data-v-6d990b54><h5 class="fw-bold text-white" data-v-6d990b54>${ssrInterpolate(noticia.titulo)}</h5><p class="text-light" data-v-6d990b54>${ssrInterpolate(noticia.descripcion.length > 230 ? noticia.descripcion.slice(0, 230) + "..." : noticia.descripcion)}</p><a${ssrRenderAttr("href", `/Notis/${noticia._id}`)} class="btn btn-outline-light mt-2" data-v-6d990b54> Ver más </a></div></div>`);
      });
      _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-target="#newsCarousel" data-bs-slide="prev" data-v-6d990b54><span class="carousel-control-prev-icon" aria-hidden="true" data-v-6d990b54></span><span class="visually-hidden" data-v-6d990b54>Anterior</span></button><button class="carousel-control-next" type="button" data-bs-target="#newsCarousel" data-bs-slide="next" data-v-6d990b54><span class="carousel-control-next-icon" aria-hidden="true" data-v-6d990b54></span><span class="visually-hidden" data-v-6d990b54>Siguiente</span></button></div></div></section><section id="noticias" class="py-5" data-v-6d990b54><div class="container" data-v-6d990b54><!--[-->`);
      ssrRenderList(noticiasPorCategoria.value, (noticiasCategoria, categoria) => {
        _push(`<div class="mb-5" data-v-6d990b54><h3 class="mb-3" data-v-6d990b54>${ssrInterpolate(categoria)}</h3><div class="slider-container" data-v-6d990b54><div class="slider"${ssrRenderAttr("id", `slider-${categoria}`)} data-v-6d990b54><!--[-->`);
        ssrRenderList(noticiasCategoria, (noticia) => {
          _push(`<div class="card" data-v-6d990b54>`);
          if (noticia.archivo) {
            _push(`<img${ssrRenderAttr("src", noticia.archivo)} alt="Imagen" class="card-img-top" data-v-6d990b54>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="card-body" data-v-6d990b54><h5 class="card-title" data-v-6d990b54>${ssrInterpolate(noticia.titulo.length > 10 ? noticia.descripcion.slice(0, 120) + "..." : noticia.titulo)}</h5><div class="mt-auto text-center" data-v-6d990b54><a${ssrRenderAttr("href", `/Notis/${noticia._id}`)} class="btn btn-outline-info" data-v-6d990b54>Explorar Noticias</a></div></div></div>`);
        });
        _push(`<!--]--></div><div class="slider-buttons" data-v-6d990b54><button class="slider-button-left" data-v-6d990b54>‹</button><button class="slider-button-right" data-v-6d990b54>›</button></div></div></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6d990b54"]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
