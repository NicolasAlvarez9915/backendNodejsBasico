const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send("<h1>Ejecutando en aws EC</h1>");
});


app.listen(port, () =>{
  console.log("listening: "+port)
});
