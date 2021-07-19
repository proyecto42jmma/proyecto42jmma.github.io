/** Descripción del navegador en
 * que se ejecuta este código. */
export const USER_AGENT =
  navigator.userAgent ||
  navigator.vendor ||
  window["opera"];
if (/android/i.test(USER_AGENT)) {
  document.body.classList
    .add("android");
}
if (/iPad|iPhone|iPod|Mac/.
  test(USER_AGENT) &&
  !window.MSStream) {
  document.body.classList.
    add('ios');
}
/** Sin un elemento tiene un
 * mensaje de validación, lo
 * muestra en su elemento de ayuda
 * y si no, muestra un texto de
 * ayuda. 
 * @param {HTMLInputElement|
 *  HTMLTextAreaElement|
 *  HTMLSelectElement|
 *  HTMLOutputElement|null} e
 * referencia a un elemento que
 * contiene datos.
 * @param {HTMLOutputElement|
 *  null} out
 * elemento de ayuda para e.
 * @param {string} ok mensaje de
 * ayuda cuando el estado de e es
 * válido. */
export function msg(e, out, ok) {
  if (e && out) {
    if (e.validity.valid) {
      out.value = ok;
    } else {
      out.value =
        e.validationMessage;
    }
  }
}

/** Registra un service worker
 * para instalar la aplicación en
 * el caché del navegador.
 * @param {string} sw nombre del
 *  service worker. */
export async function regSw(sw) {
  try {
    /* Registra el service worker,
     * que debe estar en la
     * carpeta principal. */
    const registro =
      await navigator.
        serviceWorker.
        register(sw);
    console.log(
      `${sw} registrado.`);
    console.log(registro);
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
}
