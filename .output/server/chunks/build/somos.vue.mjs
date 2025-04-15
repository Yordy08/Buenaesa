import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-wrapper" }, _attrs))} data-v-96f7ff37><h1 data-v-96f7ff37>Quiénes Somos</h1><p data-v-96f7ff37> En <strong data-v-96f7ff37>Buenaesa.co</strong>, creemos en el poder de la información clara, veraz y cercana. Somos un medio digital independiente que conecta a las personas con lo que realmente importa en su comunidad, su región y el mundo. </p><p data-v-96f7ff37> Nuestra plataforma nace con el propósito de ofrecer contenido útil, entretenido y comprometido con la verdad. Comunicamos de forma directa, sin rodeos, porque sabemos que la buena información es una herramienta poderosa para el cambio. </p><p data-v-96f7ff37> Somos un equipo apasionado por la comunicación, el periodismo social, el análisis y la cercanía con nuestros lectores. Desde Montería, Córdoba, trabajamos cada día para ser una fuente confiable para ti. </p><p data-v-96f7ff37> Buenaesa.co es más que un sitio web: es una comunidad informada, crítica y participativa. </p><div class="highlight" data-v-96f7ff37><p data-v-96f7ff37><em data-v-96f7ff37>Buenaesa.co – Información con propósito.</em></p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/somos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const somos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-96f7ff37"]]);

export { somos as default };
//# sourceMappingURL=somos.vue.mjs.map
