importación {
  CargaRoles
} de ".. /js/seguridad.js";
importación {
  getAuth
} de ".. /lib/fabrica.js";
importación {
  muestraError
} de ".. /lib/util.js";

clase MiNav extiende HTMLElement {
  connectedCallback() {
    esto. innerHTML = /* html */
      '<ul>
        <li>
          <a href="index.html">
            Sesión</a>
        </li>
 </ul>';
    esto. ul =
      esto. querySelector("ul");
    getAuth(). onAuthStateChanged(
      usuario => esto.
        cambiaUsuario(usuario),
      muestraError);
  }

  /**
   * @param {importación(
 ".. /lib/tiposFire.js"). Usuario}
      usu */
  async cambiaUsuario(usu ) {
    if (usu && usu.  correo electrónico) {
      dejar html = "";
      papeles de const =
        esperar cargaRoles(
          usu. correo electrónico);
     if (roles. tiene("Cliente")) {
        html += /* html */
          '<li>
            <a href=
              "chat.html">Chat</a>
 </li>';
      }
      if (roles. tiene(
        "Administrador")) {
        html += /* html */
          '<li>
            <a href=
"alumnos.html">Alumnos</a>
 </li>';
      }
      esto. ul. innerHTML += html;
    }
  }
}

customElements. definir(
  "mi-nav", MiNav);
