export class CmpDin
  extends HTMLElement {
  connectedCallback() {
    setTimeout(
      () => this.prepara(),
      100);
  }
  prepara() {
    /**
     * @type {
        HTMLInputElement|
        HTMLTextAreaElement|
        HTMLSelectElement|
        HTMLOutputElement|
        null} */
    this._elem =
      this.querySelector(
        `input, textarea,
        select, output`);
    this.addEventListener("focus",
      () => this.analiza(), true);
    this.addEventListener(
      "focusout",
      () => this.analiza(), true);
    this.analiza();
  }
  analiza() {
    const e = this._elem;
    if (e) {
      if (!e.validity.badInput &&
        e.value.length === 0) {
        e.classList.
          remove("valor");
      } else {
        e.classList.add("valor");
      }
    }
  }
}
customElements.define(
  "cmp-din", CmpDin);
