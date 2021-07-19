export class MiNav
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<a href="index.html">
        <span
          class="material-icons">
          home
        </span>
        Inicio
      </a>
      <a href="ayuda.html">
        <span
          class="material-icons">
          help
        </span>
        Ayuda
      </a>`;
  }
}
customElements.define(
  "mi-nav", MiNav);
