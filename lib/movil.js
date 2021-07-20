export const USER_AGENT =
  navigator.userAgent ||
  navigator.vendor ||
  window["opera"];
if (/.*android.*/i.
  test(USER_AGENT)) {
  document.body.classList
    .add("android");
}
if (
  /.*(iPad|iPhone|iPod|Mac).*/.
    test(USER_AGENT) &&
  !window.MSStream) {
  document.body.classList.
    add('ios');
}

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
