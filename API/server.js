const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors')
//CAMBIAR A HTTPS CUANDO SEA PRODUCTIVO
const http = require('http');
const port = 80;
const app = express();


// public static string ConexionPrincipal => @"Data Source = SQL5054.site4now.net; Initial Catalog = db_a55757_todochilo; User Id = db_a55757_todochilo_admin; Passwor>

// Enable cors
app.use(cors());


//parse rquest of content-type: aplication-json
app.use(bodyParse.json());

// parse request of content-type: application/x-ww-form-urlencoded
// app.use(bodyParse.urlencoded({ extended: true }));

app.use(bodyParse.raw({limit:'50mb'}));


const options = {
  //   key:fs.readFileSync('/etc/letsencrypt/live/srv481740.hstgr.cloud/privkey.pem'),
  //   cert:fs.readFileSync('/etc/letsencrypt/live/srv481740.hstgr.cloud/cert.pem')
};

http.createServer(options,app).listen(port,()=>{
  console.log('Server is rouning in port '+port)
});

//simple route
app.get('/', (req, res) => {
  res.json({ message: `Welcome api TODO CHILO` });
});

require("./src/routes/clientes.routes")(app);
require("./src/routes/login.routes")(app);
require("./src/routes/ventas.routes")(app);
require("./src/routes/inventario.routes")(app);
require("./src/routes/productos.routes")(app);
require("./src/routes/cotizacion.routes")(app);
require("./src/routes/etiquetas.routes")(app);
require("./src/routes/permisos.routes")(app);
require("./src/routes/public/candidatos.routes")(app);
require("./src/routes/public/categorias.routes")(app);
