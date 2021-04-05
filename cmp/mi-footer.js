clase MiFooter
  extiende HTMLElement {
  connectedCallback() {
    esto. innerHTML = /* html */
      '<p>
 &copiar; 2021
        Ricardo Armando Machorro Reyes.
 </p>';
  }
}

customElements. definir(
  "mi-pie de página", MiFooter);
