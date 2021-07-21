const CUE = "cue";
/**@type {HTMLFormElement|null}*/
const sesión = document["sesión"];
/**@type {HTMLFormElement|null}*/
const login = document["login"];

let humanoAcreditado = false;

if (sesión) {
  sesión.terminar.
    addEventListener(
      "click", terminaSesión);
}
if (login) {
  login.addEventListener("submit",
    iniciaSesión);
  login.humano.addEventListener(
    "input", soyHumano);
}

muestraSesion();

function soyHumano() {
  if (login) {
    humanoAcreditado =
      login.humano.
        valueAsNumber > 0;
  }
}

function muestraSesion() {
  const cue = sessionStorage.
    getItem(CUE);
  if (sesión) {
    sesión.hidden = !cue;
    sesión.cue.value = cue || "";
  }
  if (login) {
    login.hidden = Boolean(cue);
  }
}

/** @param {Event} evt */
async function iniciaSesión(evt) {
  try {
    evt.preventDefault();
    if (!login) {
      throw new Error(
        "Login nulo.");
    }
    if (!sesión) {
      throw new Error(
        "Sesión nula.");
    }
    if (!humanoAcreditado) {
      alert("Comprueba que " +
        "eres un humano.");
      return;
    }
    /** Toma los datos de la
     * forma. */
    const datos =
      new FormData(login);
    /* Usa el método POST para
     * enviar los datos de la
     * forma al recurso
     * "/verifica" en el
     * servidor. */
    const res = await fetch(
      "/valida",
      {
        method: "POST",
        body: datos
      });
    if (res.ok) {
      const resp =
        await res.text();
      if (resp) {
        sessionStorage.setItem(
          CUE, login.cue.value);
        muestraSesion();
        login.cue.value = "";
        login.match.value = "";
        login.humano.
          valueAsNumber = 0;
        humanoAcreditado = false;
      } else {
        alert(
          "Datos incorrectos");
      }
    } else {
      throw new Error(
        res.statusText);
    }
  } catch (e) {
    muestraError(e);
  }
}

async function terminaSesión() {
  sessionStorage.removeItem(CUE);
  muestraSesion();
}

function muestraError(e) {
  console.error(e);
  alert(e.message);
}
