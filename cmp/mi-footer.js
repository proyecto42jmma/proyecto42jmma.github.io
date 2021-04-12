class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
