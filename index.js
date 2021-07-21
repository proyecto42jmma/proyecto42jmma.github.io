const express =
  require("express");
const http = require("http");
const path = require("path");
const multer = require('multer');
const validaUsuario = require(
  "./servicios/validaUsuario");

/** Complemento para el servidor
 *  web */
const app = express();
/** Comportamiento base del
 * servidor web */
const httpserver =
  // @ts-ignore
  http.Server(app);
/** Ubicación de la carpeta de
 * archivos del sitio. */
const archivos = path.
  join(__dirname, "www");
/** Manejo de datos multipart. */
const multipart = multer();

// utiliza la carpeta de archivos.
app.use(express.static(archivos));
/* El recurso "/valida" procesa
 * solicitudes post en formato
 * multipart sin archivos adjuntos
 * e invoca la función
 * validaUsuario para procesar la
 * solicitud. */
app.post('/valida',
  multipart.none(),
  validaUsuario);
/* El servidor empieza a escuchar
 * solucitudes en el puerto
 * 3000.  */
httpserver.listen(3000);
