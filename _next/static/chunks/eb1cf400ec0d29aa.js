(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,23823,e=>e.a(async(t,a)=>{try{let t=`<template>
  <iframe
    width="100%"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  >
  </iframe>
</template>
`,r=`:host {
  display: flex;
  background: black;
  padding: 16px;
  border-radius: 16px;
  margin: 16px 0 0;
  aspect-ratio: 16 / 9;
}

:host iframe {
  padding: 0;
  margin: 0;
  border: none;
}
`,o=async()=>{let e=new DOMParser().parseFromString(t,"text/html").querySelector("template"),a=document.createElement("style");return a.textContent=r,e.content.prepend(a),class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(e.content.cloneNode(!0))}connectedCallback(){let e=this.shadowRoot;e&&e.querySelector("iframe").setAttribute("src",`https://www.youtube.com/embed/${this.dataset.id}`)}}},c=await o();e.s(["YouTube",()=>c]),a()}catch(e){a(e)}},!0)]);