import{r as n,g as _,c as a,a as s,j as d,F as m,k as h,l as x,o as r,b as v,t as c,w as y,d as b}from"./CrcHS_TD.js";const f={class:"container mt-5 pt-5"},g={class:"d-flex flex-wrap justify-content-center"},k=["src"],w={class:"card-body"},N={class:"card-title"},C={style:{display:"-webkit-box","-webkit-line-clamp":"3","line-clamp":"3","-webkit-box-orient":"vertical",overflow:"hidden","text-overflow":"ellipsis","text-align":"justify","word-spacing":"-1px","letter-spacing":"-0.5px"}},j={class:"card-text"},V={class:"text-muted"},B={key:0,class:"text-center mt-5"},E={__name:"Cultura",setup(F){const i=n([]),l=n([]),u=async()=>{try{const o=await $fetch("http://localhost:3001/api/noticias");console.log("Noticias recibidas:",o),i.value=o,l.value=i.value.filter(e=>e.categoria==="Cultura")}catch(o){console.error("Error al obtener noticias:",o)}};return _(()=>{u()}),(o,e)=>{const p=x("router-link");return r(),a("div",f,[e[2]||(e[2]=s("h1",{class:"mb-4 text-center",style:{color:"#0FA6A6"}},"Noticias de Cultura",-1)),s("div",g,[(r(!0),a(m,null,h(l.value,t=>(r(),a("div",{key:t._id,class:"card mb-4 mx-2",style:{width:"18rem"}},[t.archivo?(r(),a("img",{key:0,src:t.archivo,class:"card-img-top",alt:"Imagen de la noticia",style:{height:"200px","object-fit":"cover"}},null,8,k)):d("",!0),s("div",w,[s("h5",N,c(t.titulo),1),s("p",C,c(t.descripcion.length>120?t.descripcion.slice(0,120)+"...":t.descripcion),1),s("p",j,[s("small",V,c(t.fecha.slice(0,10)),1)]),v(p,{to:`/Notis/${t._id}`,class:"btn btn-primary"},{default:y(()=>e[0]||(e[0]=[b(" Leer más ")])),_:2},1032,["to"])])]))),128))]),l.value.length===0?(r(),a("div",B,e[1]||(e[1]=[s("h4",null,"No hay noticias de Cultura aún.",-1)]))):d("",!0)])}}};export{E as default};
