import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const usuario = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm" }, _attrs))} data-v-4dbaf753><div class="container" data-v-4dbaf753><a class="navbar-brand fw-bold" href="/" data-v-4dbaf753><span style="${ssrRenderStyle({ "color": "#0FA6A6" })}" data-v-4dbaf753>Buena</span><span style="${ssrRenderStyle({ "color": "#F23568" })}" data-v-4dbaf753>e</span><span style="${ssrRenderStyle({ "color": "#0FA6A6" })}" data-v-4dbaf753>sa.co</span></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-4dbaf753><span class="navbar-toggler-icon" data-v-4dbaf753></span></button><div class="collapse navbar-collapse" id="navbarNav" data-v-4dbaf753><ul class="navbar-nav ms-auto" data-v-4dbaf753><li class="nav-item" data-v-4dbaf753><a class="nav-link active" href="/" data-v-4dbaf753>Inicio</a></li><li class="nav-item" data-v-4dbaf753>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/All",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Noticias`);
          } else {
            return [
              createTextVNode("Noticias")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-4dbaf753>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/somos",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Quienes Somos`);
          } else {
            return [
              createTextVNode("Quienes Somos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-4dbaf753>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contac",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contacto`);
          } else {
            return [
              createTextVNode("Contacto")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (usuario.value) {
        _push(`<li class="nav-item dropdown" data-v-4dbaf753><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-v-4dbaf753> Perfil </a><ul class="dropdown-menu" aria-labelledby="navbarDropdown" data-v-4dbaf753><li data-v-4dbaf753><a class="dropdown-item" style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-4dbaf753>Admin</a></li><li data-v-4dbaf753><a class="dropdown-item" style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-4dbaf753>Cerrar sesión</a></li></ul></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Nav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4dbaf753"]]);
export {
  Nav as default
};
//# sourceMappingURL=Nav.vue.mjs.map
