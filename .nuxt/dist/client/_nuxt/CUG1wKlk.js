import{r as u,g as v,c as s,j as _,F as m,k as h,a as o,l as b,o as r,t as i,b as f,w as y,d as x}from"./CrcHS_TD.js";const k={class:"container mt-5 pt-5"},N={class:"mb-4 border-bottom pb-2",style:{color:"#F23568"}},w={class:"row"},C={class:"card flex-fill",style:{"min-height":"100%"}},V=["src"],j={class:"card-body d-flex flex-column"},B={class:"card-title"},F={class:"card-text flex-grow-1"},E={key:0,class:"text-center mt-5"},$={__name:"All",setup(L){const p=u([]),c=u({}),g=async()=>{try{const a=await $fetch("http://localhost:3001/api/noticias");p.value=a,c.value=a.reduce((t,n)=>{const l=n.categoria||"Sin Categoría";return t[l]||(t[l]=[]),t[l].push(n),t},{}),console.log("Noticias agrupadas:",c.value)}catch(a){console.error("Error al obtener noticias:",a)}};return v(()=>{g()}),(a,t)=>{const n=b("router-link");return r(),s("div",k,[(r(!0),s(m,null,h(c.value,(l,d)=>(r(),s("div",{key:d,class:"mb-5"},[o("h2",N,i(d),1),o("div",w,[(r(!0),s(m,null,h(l,e=>(r(),s("div",{key:e._id,class:"col-md-4 mb-4 d-flex"},[o("div",C,[e.archivo?(r(),s("img",{key:0,src:e.archivo,class:"card-img-top",alt:"Imagen noticia",style:{height:"200px","object-fit":"cover"}},null,8,V)):_("",!0),o("div",j,[o("h5",B,i(e.titulo),1),o("p",F,i(e.descripcion.length>120?e.descripcion.slice(0,120)+"...":e.descripcion),1),f(n,{to:`/Notis/${e._id}`,class:"btn btn-outline-primary mt-auto"},{default:y(()=>t[0]||(t[0]=[x(" Leer más ")])),_:2},1032,["to"])])])]))),128))])]))),128)),Object.keys(c.value).length===0?(r(),s("div",E,t[1]||(t[1]=[o("h4",null,"No hay noticias disponibles.",-1)]))):_("",!0)])}}};export{$ as default};
