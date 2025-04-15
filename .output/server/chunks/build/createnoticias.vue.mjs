import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
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
  __name: "createnoticias",
  __ssrInlineRender: true,
  setup(__props) {
    const titulo = ref("");
    const descripcion = ref("");
    const categoria = ref("");
    ref(null);
    const noticias = ref([]);
    const editando = ref(false);
    ref(null);
    const busqueda = ref("");
    const cargando = ref(false);
    const noticiasFiltradas = computed(() => {
      return noticias.value.filter(
        (noticia) => noticia.titulo.toLowerCase().includes(busqueda.value.toLowerCase()) || noticia.descripcion.toLowerCase().includes(busqueda.value.toLowerCase()) || noticia.categoria.toLowerCase().includes(busqueda.value.toLowerCase())
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-85d81f6e><br data-v-85d81f6e><br data-v-85d81f6e><br data-v-85d81f6e>`);
      if (cargando.value) {
        _push(`<div class="overlay-cargando" data-v-85d81f6e><div class="spinner" data-v-85d81f6e></div><p data-v-85d81f6e>Creando noticia...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="titulo" data-v-85d81f6e>Gestión de Noticias</h1><form class="formulario" data-v-85d81f6e><input type="text"${ssrRenderAttr("value", titulo.value)} placeholder="Título" required data-v-85d81f6e><textarea placeholder="Descripción" required data-v-85d81f6e>${ssrInterpolate(descripcion.value)}</textarea><select required data-v-85d81f6e><option value="" disabled selected data-v-85d81f6e>Selecciona una categoría</option><option value="Emprendimiento" data-v-85d81f6e${ssrIncludeBooleanAttr(Array.isArray(categoria.value) ? ssrLooseContain(categoria.value, "Emprendimiento") : ssrLooseEqual(categoria.value, "Emprendimiento")) ? " selected" : ""}>Emprendimiento</option><option value="Ciencia e innovación" data-v-85d81f6e${ssrIncludeBooleanAttr(Array.isArray(categoria.value) ? ssrLooseContain(categoria.value, "Ciencia e innovación") : ssrLooseEqual(categoria.value, "Ciencia e innovación")) ? " selected" : ""}>Ciencia e innovación</option><option value="Cultura" data-v-85d81f6e${ssrIncludeBooleanAttr(Array.isArray(categoria.value) ? ssrLooseContain(categoria.value, "Cultura") : ssrLooseEqual(categoria.value, "Cultura")) ? " selected" : ""}>Cultura</option><option value="Personajes" data-v-85d81f6e${ssrIncludeBooleanAttr(Array.isArray(categoria.value) ? ssrLooseContain(categoria.value, "Personajes") : ssrLooseEqual(categoria.value, "Personajes")) ? " selected" : ""}>Personajes</option><option value="Ambiente" data-v-85d81f6e${ssrIncludeBooleanAttr(Array.isArray(categoria.value) ? ssrLooseContain(categoria.value, "Ambiente") : ssrLooseEqual(categoria.value, "Ambiente")) ? " selected" : ""}> Ambiente Paz y Convivencia</option></select><input type="file" data-v-85d81f6e><button type="submit" class="boton-enviar"${ssrIncludeBooleanAttr(cargando.value) ? " disabled" : ""} data-v-85d81f6e>${ssrInterpolate(editando.value ? "Actualizar Noticia" : "Crear Noticia")}</button></form><br data-v-85d81f6e><input type="text"${ssrRenderAttr("value", busqueda.value)} placeholder="Buscar noticias..." class="input-busqueda" data-v-85d81f6e><div class="tabla-container" data-v-85d81f6e><table class="tabla" data-v-85d81f6e><thead data-v-85d81f6e><tr data-v-85d81f6e><th data-v-85d81f6e>Título</th><th data-v-85d81f6e>Descripción</th><th data-v-85d81f6e>Categoría</th><th data-v-85d81f6e>Imagen</th><th data-v-85d81f6e>Acciones</th></tr></thead><tbody data-v-85d81f6e><!--[-->`);
      ssrRenderList(noticiasFiltradas.value, (noticia) => {
        _push(`<tr data-v-85d81f6e><td data-v-85d81f6e>${ssrInterpolate(noticia.titulo)}</td><td data-v-85d81f6e>${ssrInterpolate(noticia.descripcion)}</td><td data-v-85d81f6e>${ssrInterpolate(noticia.categoria)}</td><td data-v-85d81f6e>`);
        if (noticia.archivo) {
          _push(`<img${ssrRenderAttr("src", noticia.archivo)} class="imagen-noticia" data-v-85d81f6e>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td data-v-85d81f6e><button class="boton-editar" data-v-85d81f6e>Editar</button><button class="boton-eliminar" data-v-85d81f6e>Eliminar</button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/createnoticias.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createnoticias = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-85d81f6e"]]);

export { createnoticias as default };
//# sourceMappingURL=createnoticias.vue.mjs.map
