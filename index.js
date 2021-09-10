const express = require("express");
const conectarDB = require("./database");
const cors = require("cors");

//importacion local
const crudRoutes = require("./routes/crudRoutes");
//crear el servidor
const app = express();

//Conectar a la base de datos
conectarDB();

//habilitar cors
app.use(cors());

// habilitar express.json
app.use(express.json({ extended: true }));

//puerto de la app
const PORT = process.env.PORT || 4000;

//imPORTar rutas

//routes
app.use("/", crudRoutes);

// arrancar la app
app.listen(PORT, "0.0.0.00", () => {
  console.log(`El servidora esta funcionando en el puerto  ${PORT}`);
});
