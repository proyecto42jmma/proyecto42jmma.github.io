const CACHE = "pwa-1.00";


const ARCHIVOS = [
  "css/estilos.css",
  "img/icono256.png",
  "img/icono1024.png",
  "img/icono2048.png",
  "js/config.js",
  "js/CtrlReco.js",
  "js/mi-nav.js",
  "lib/css/botones.css",
  "lib/css/cmp-din.css",
  "lib/css/material-icons.css",
  "lib/css/mi-nav.css",
  "lib/css/principal.css",
  "lib/css/ripple.css",
  "lib/css/roboto.css",
  "lib/fonts/MaterialIcons-Regular.codepoints",
  "lib/fonts/MaterialIcons-Regular.ttf",
  "lib/fonts/roboto-v27-latin-regular.woff",
  "lib/fonts/roboto-v27-latin-regular.woff2",
  "lib/cmp-din.js",
  "lib/movil.js",
  "ayuda.html",
  "favicon.ico",
  "index.html",
  "site.webmanifest",
  "/"
];

addEventListener("install",
  evt => {
    console.log("sw instalado.");
    /* Realiza la instalación.
     * Carga los archivos
     * requeridos en la caché. */
    // @ts-ignore
    evt.waitUntil(cargaCache());
  });

/* Toma los archivos solicitados
 * de la caché; si no los
 * encuentra, se descargan. */
addEventListener("fetch",
  evt => {
    // @ts-ignore
    if (evt.request.method ===
      "GET") {
      // @ts-ignore
      evt.respondWith(
        usaCache(evt));
    }
  });

addEventListener("activate",
  () =>
    console.log("sw activo."));

async function cargaCache() {
  console.log(
    "Intentando cargar cache",
    CACHE);
  const cache =
    await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache", CACHE,
    "cargado");
}

async function usaCache(evt) {
  const cache =
    await caches.open(CACHE);
  const response =
    await cache.match(evt.request,
      { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}
