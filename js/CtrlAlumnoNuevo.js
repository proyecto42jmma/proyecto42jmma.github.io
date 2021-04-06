import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  muestraAlumnos
} from "./navegacion.js";
import {
  tieneRol
} from "./seguridad.js";

const daoAlumno =
  getFirestore().
    colección("Alumno");
/** @type {HTMLFormElement} */
const forma = documento["forma"];
getAuth(). onAuthStateChanged(
  protegido, muestraError);

/** @param {importación(
 ".. /lib/tiposFire.js"). Usuario}
    usuario */
 async function protégé(usuario) {
  if (tieneRol(usuario,
    ["Administrador"])) {
    forma. addEventListener(
      "someterse", guarda);
  }
}

/** @param {Evento} evt */
función asincrónica guarda(evt) {
  probar {
    evt. prevenirDefault();
    const formData =
      nuevo FormData(forma);
    const matricula = getString(
        formData, "matricula"). recorte();  
    const nombre = getString(formData, "nombre"). recorte();
    const telefono = getString(formData, "telefono"). recorte();
    grupo const  = getString(formData, "grupo"). recorte();
    const fecha = getString(formData, "fecha"). recorte();
    /**
     * @type {
        import("./tipos.js").
                Alumno} */
    const modelo = {
 matricular,
      nombre,
 telefono,
      grupo,
      fecha 
    };
    esperar daoAlumno.
      añadir(modelo);
    muestraAlumnos();
  } captura (e) {
    muestraError(e);
  }
}
