import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "nav2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 d-flex flex-wrap justify-content-center align-items-center gap-3" }, _attrs))} data-v-37026ddb><div class="d-flex align-items-center gap-2" data-v-37026ddb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/Categorias/Ciencia",
        class: "text-decoration-none fw-bold",
        style: { "color": "#0FA6A6" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ciencia e innovación `);
          } else {
            return [
              createTextVNode(" Ciencia e innovación ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="vr" data-v-37026ddb></div></div><div class="d-flex align-items-center gap-2" data-v-37026ddb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/Categorias/Cultura",
        class: "text-decoration-none fw-bold",
        style: { "color": "#F23568" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cultura `);
          } else {
            return [
              createTextVNode(" Cultura ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="vr" data-v-37026ddb></div></div><div class="d-flex align-items-center gap-2" data-v-37026ddb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/Categorias/Personajes",
        class: "text-decoration-none fw-bold",
        style: { "color": "#0FA6A6" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Personajes `);
          } else {
            return [
              createTextVNode(" Personajes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="vr" data-v-37026ddb></div></div><div class="d-flex align-items-center gap-2" data-v-37026ddb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/Categorias/Ambiente",
        class: "text-decoration-none fw-bold",
        style: { "color": "#F23568" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ambiente, paz y convivencia `);
          } else {
            return [
              createTextVNode(" Ambiente, paz y convivencia ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="vr" data-v-37026ddb></div></div><div class="d-flex align-items-center gap-2" data-v-37026ddb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/Categorias/Emprendimiento",
        class: "text-decoration-none fw-bold",
        style: { "color": "#0FA6A6" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Emprendimiento `);
          } else {
            return [
              createTextVNode(" Emprendimiento ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nav2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-37026ddb"]]);
export {
  nav2 as default
};
//# sourceMappingURL=nav2.vue.mjs.map
