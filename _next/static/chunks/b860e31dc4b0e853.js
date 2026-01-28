(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88776,t=>t.a(async(e,s)=>{try{let e=`<template>
  <details>
    <summary>
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="14px">
          <path
            d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
          />
        </svg>
      </slot>
      <slot name="title"></slot>
    </summary>
  </details>
</template>
`,o=`details {
  pointer-events: all;
}

summary {
  outline: none;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 12px;
}

summary:hover ::slotted(span[slot='title']) {
  text-decoration: underline;
}

details > summary::marker {
  display: none;
}

details > summary::-webkit-details-marker {
  display: none;
}

slot[name='title'] {
  cursor: pointer;
}

slot[name='title']:hover {
  text-decoration: underline;
}

slot[name='icon'] {
  cursor: pointer;
  display: flex;
  transition: transform 0.35s ease-in-out;
}

details[open] slot[name='icon'] {
  transform: rotate(90deg);
}
`,a=async()=>{let t=new DOMParser().parseFromString(e,"text/html").querySelector("template"),s=document.createElement("style");return s.textContent=o,t.content.prepend(s),class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(t.content.cloneNode(!0))}static get observedAttributes(){return["width"]}connectedCallback(){let t=this.shadowRoot;if(t){let e=t.querySelector("details"),s=this.getAttribute("width");e.style.setProperty("width",s??"100%"),e.addEventListener("toggle",e=>{let s=e.target;if(s.open){let t=document.createElement("you-tube");t.setAttribute("data-id",this.id),s.appendChild(t)}else{let e=t.querySelector(`you-tube[data-id="${this.id}"]`);e&&e.remove()}},!1)}}attributeChangedCallback(t,e,s){"width"===t&&this.shadowRoot?.querySelector("details")?.style.setProperty("width",s||e||"100%")}}},l=await a();t.s(["YoutubeVid",()=>l]),s()}catch(t){s(t)}},!0)]);