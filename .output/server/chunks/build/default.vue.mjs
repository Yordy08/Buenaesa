import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import axios from 'axios';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Nav = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4dbaf753"]]);

const _sfc_main$3 = {
  name: "Footer"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-3d122f04><div class="footer-container" data-v-3d122f04><p data-v-3d122f04>© 2025 Buenaesa.co - Todos los derechos reservados.</p><div class="footer-links" data-v-3d122f04>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/privacidad",
    class: "footer-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Política de Privacidad`);
      } else {
        return [
          createTextVNode("Política de Privacidad")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/terminos",
    class: "footer-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Términos de Servicio`);
      } else {
        return [
          createTextVNode("Términos de Servicio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-3d122f04"]]);

const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const nav2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-37026ddb"]]);

const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CookieBanner = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-81da8076"]]);

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = resolveComponent("Navbar");
      const _component_NuxtPage = __nuxt_component_0$1;
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

export { _sfc_main as default };
//# sourceMappingURL=default.vue.mjs.map
