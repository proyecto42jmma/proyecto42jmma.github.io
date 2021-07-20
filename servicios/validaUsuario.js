const MongoClient =
  require('mongodb').MongoClient;
/* Cambia el valor por el que te
 * proporciona Atlas y cambia
 * <password> por la contraseña
 * del usuario que creaste dentro
 * de Atlas. */
const uri = "mongodb+srv://usuario:1vpSUISs7CERvDKu@cluster0.nvilc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/**
 * @param {import("express").
 *   Request} req solicitud que
 *  recibe el  servidor web.
 * @param {import("express").
 *  Response} res respuesta que
 *  devuelve el servidor web. */
async function
  validaUsuario(req, res) {
  /* Crea un cliente que se
   * conecta a la base de
   * datos. */
  const client = new MongoClient(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  try {
    await client.connect();
    const usuario = client.
      db("aut").
      collection("usuario");
    /* Los datos enviados por la
     * página vienen en la
     * propiedad body de req. */
    const datos = req.body;
    /* Cuenta en la base de datos
     * los documentos que tengan
     *  nombre === datos.cue
     * y
     *  contrasena === datos.match
     */
    const total = await usuario.
      countDocuments({
        nombre: datos.cue,
        contrasena: datos.match
      });
    if (total > 0) {
      /* Devuelve a la página el
       * texto "ok". */
      res.send("ok");
      return;
    }
    /* Devuelve a la página el
     * texto "". */
    res.send("");
  } catch (e) {
    res.send("");
    console.log(e);
  } finally {
    client.close();
  }
}

module.exports = validaUsuario;
