clase MiProgeso
  extiende HTMLElement {
  connectedCallback() {
    esto. innerHTML = /* html */
      '<progress max="100">
 Cargando...
 </progreso>';
  }
}

customElements. definir(
  "mi-progreso", MiProgeso);
