"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[207],{3207:function(e,t,a){a.a(e,async function(e,r){try{a.d(t,{YouTube:function(){return c}});let e=`<template>
  <iframe
    width="100%"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  >
  </iframe>
</template>
`,n=`:host {
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
`,o=async()=>{let t=new DOMParser().parseFromString(e,"text/html").querySelector("template"),a=document.createElement("style");return a.textContent=n,t.content.prepend(a),class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(t.content.cloneNode(!0))}connectedCallback(){let e=this.shadowRoot;e&&e.querySelector("iframe").setAttribute("src",`https://www.youtube.com/embed/${this.dataset.id}`)}}},c=await o();r()}catch(e){r(e)}},1)}}]);