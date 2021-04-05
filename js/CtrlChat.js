importación {
  getAuth,
  getFirestore
} de ".. /lib/fabrica.js";
importación {
  bacalao,
  getString,
  muestraError
} de ".. /lib/util.js";
importación {
  TieneRol
} de "./seguridad.js";

const daoMensaje = getFirestore().
  colección("Mensaje");
dejar que usuarioId = "";
/** @type {HTMLFormElement} */
const forma = documento["forma"];
/** @type {HTMLUListElement} */
const lista = documento.
  querySelector("#lista");

getAuth(). onAuthStateChanged(
  protegido, muestraError);

/** @param {importación(
 ".. /lib/tiposFire.js"). Usuario}
    usuario */
 async function protégé(usuario) {
  if (tieneRol(usuario,
    ["Cliente"])) {
    usuarioId = usuario. correo electrónico;
    consulta();
    forma. addEventListener(
      "someterse", agrega);
  }
}

/** Agrega un usuario a la base de
 * Datos.
 * @param {Evento} evt */
función asincrónica agrega(evt) {
  probar {
    evt. prevenirDefault();
    const formData =
      nuevo FormData(forma);
    /** @type {string} */
    const texto = getString(
      formData, "texto"). recorte();
    marca de tiempo const =
      // @ts-ignorar
      base de incendios. firestore.
        FieldValue.
        servidorTimestamp();
    /** @type {import(
 "./tipos.js"). Mensaje} */
    const modelo = {
      usuarioId,
      texto,
 Timestamp
    };
    /* El modelo se agrega a
     * la colección
     * "Mensaje". */
    esperar daoMensaje. añadir(modelo);
    forma. texto. valor = "";
  } captura (e) {
    muestraError(e);
  }
}

/** Muestra los mensajes
 * almacenados en la colección
 * "Mensaje". Se actualiza
 * automáticamente. */
función consultiva() {
  /* Consulta que se actualiza
   * automáticamente. Pide todos
   * los registros de la colección
   *  "Mensaje"
   * ordenados por el campo
 * "marca de tiempo"
   * de forma
 * Descendente. */
  daoMensaje.
    orderBy("marca de tiempo", "desc").
    onSnapshot(
      htmlLista, errConsulta);
}

/** Muestra los datos enviados por
 * el servidor.
 * Si los datos cambian en el
 * servidor, se vuelve a invocar
 * esta función y recibe los datos
 * Actualizados.
 * @param {importación(
 ".. /lib/tiposFire.js").
 QuerySnapshot} ajustar estructura
 *    parecida a un Array, que
 * Contiene una copia de los
 * Datos del servidor.
 */
función htmlLista(ajustar) {
  dejar html = "";
  if (ajustar. tamaño > 0) {
    /* Cuando el número de
     * documentos devueltos por la
 * consulta es alcalde que 0,
 * revisar uno por uno de los
 * Documentos de la consulta y
 * la muestra. El iterador
 * "doc" apunta a un un
     * documento de la base
     * de datos. */
    snap. forEach(doc =>
      html += htmlFila(doc));
  } más {
    /* Cuando el número de
     * documentos devueltos por la
     * consulta es igual a 0,
     * agrega un texto HTML. */
    html += /* html */
      '<li class="vacio">
 -- Sin heno mensajes
 Registradores. --
 </li>';
  }
  lista. innerHTML = html;
}

/** Agrega el texto HTML
 * que corresponde a un un
 * documento de un mensaje.
 * @param {importación(
 ".. /lib/tiposFire.js").
    DocumentSnapshot} doc */
función htmlFila(doc) {
  /** Recuperar los datos del
   * documento.
   * @type {import("./tipos.js").
                      Mensaje} */
  const datos = doc. datos();
  /* Agrega un li con los datos
   * del documento, los cuales se
   * codifican para evitar
   * inyección de código. */
  retorno ( /* html */
    '<li class="fila">
 <clase fuerte="primario">
        ${bacalao(datos. UsuarioId)}
 </fuerte>
      <span class="secundario">
        ${bacalao(datos. texto)}
      </span>
 </li>');
}

/** Función que se invoca cuando
 * heno un error al recuperar la pérdida
 * mensajes y muestra el error. Al
 * Invocar esta función, la
 * conexión se cancela, por lo
 * cual intenta que otros
 * vez.
 * @param {Error} e */
función errConsulta(e) {
  muestraError(e);
  Intenta otra vez.
  consulta();
}
