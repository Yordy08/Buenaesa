import __nuxt_component_0 from "../node_modules/nuxt/dist/pages/runtime/page.mjs";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import Nav from "../components/Nav.vue.mjs";
import Footer from "../components/Footer.vue.mjs";
import nav2 from "../components/nav2.vue.mjs";
import CookieBanner from "../components/CookieBanner.vue.mjs";
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = resolveComponent("Navbar");
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Nav, null, null, _parent));
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<br><br><hr>`);
      _push(ssrRenderComponent(nav2, null, null, _parent));
      _push(`<hr>`);
      _push(ssrRenderComponent(CookieBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`<br><br>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default.vue.mjs.map
