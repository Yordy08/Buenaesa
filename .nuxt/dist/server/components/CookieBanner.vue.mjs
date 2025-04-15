import axios from "axios";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  data() {
    return {
      showBanner: false
      // Mostrar u ocultar el banner
    };
  },
  mounted() {
    const cookiesDecision = localStorage.getItem("cookiesDecision");
    if (!cookiesDecision) {
      this.showBanner = true;
    }
  },
  methods: {
    async acceptCookies() {
      try {
        await axios.post("http://localhost:3001/api/cookies/accept");
        localStorage.setItem("cookiesDecision", "accepted");
        this.showBanner = false;
      } catch (error) {
        console.error("Error al aceptar cookies:", error);
      }
    },
    async rejectCookies() {
      try {
        await axios.post("http://localhost:3001/api/cookies/reject");
        localStorage.setItem("cookiesDecision", "rejected");
        this.showBanner = false;
      } catch (error) {
        console.error("Error al rechazar cookies:", error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($data.showBanner) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "cookie-banner" }, _attrs))} data-v-81da8076><p data-v-81da8076>Este sitio web utiliza cookies para mejorar la experiencia.</p><div class="buttons" data-v-81da8076><button class="accept-btn" data-v-81da8076>Aceptar</button><button class="reject-btn" data-v-81da8076>Rechazar</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CookieBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-81da8076"]]);
export {
  CookieBanner as default
};
//# sourceMappingURL=CookieBanner.vue.mjs.map
