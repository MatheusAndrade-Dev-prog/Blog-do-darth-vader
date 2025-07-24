class TituloDinamico extends HTMLElement {
   constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });

      //base do componete
      const componeteRoot = document.createElement("h1");
      componeteRoot.textContent = this.getAttribute("titulo");
      //estilizar o componete
      const style = document.createElement("style");
      style.textContent = `
        h1{
            color: red;
        }
        `;

      // enviar para a shadow
      shadow.appendChild(componeteRoot);
      shadow.appendChild(style);
   }
}
customElements.define("titulo-dinamico", TituloDinamico);
