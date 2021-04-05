importación {
  getAuth
} de ".. /lib/fabrica.js";
importación {
  muestraError
} de ".. /lib/util.js";
importación {
  iniciaSesión,
  terminaSesión
} de "./seguridad.js";

/** @type {HTMLFormElement} */
const forma = documento["forma"];
/** @type {HTMLImageElement} */
const avatar = documento.
  querySelector("#avatar");

/* Escucha cambios de usuario.
 * El primer parámetro es una
 * función que se invoca cada que
 * Heno un cambio de usuario y
 * recibe los datos del usuario.
 * El segundo parámetro es una
 * función que se invoca cuando se
 * presentar un error en un cambio
 * de usuario y recibe un error.
 */
getAuth(). onAuthStateChanged(
  muestraSesión, muestraError);

/** Muestra los datos del usuario
 * o mandar a iniciar sesión en
 * caso de que no haya habido.
 * @param {importación(
 ".. /lib/tiposFire").
 Usuario} usuario modelo con las
 *    características del usuario
 *    o null si no ha iniciado
 * Sesión. */
función asincrónica
  muestraSesión(usuario) {
  if (usuario && usuario. correo electrónico) {
    Usuario aceptado.
    forma. correo electrónico. valor =
      usuario. correo electrónico || "";
    forma. nombre. valor =
      usuario. displayName || "";
    avatar. src =
      usuario. fotoURL || "";
    forma. terminarSesión.
      addEventListener(
        "clic", terminaSesión);
  } más {
    No hay ha iniciado sesión.
    iniciaSesión();
  }
}
