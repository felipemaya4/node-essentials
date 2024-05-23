const express = require("express");
const app = express();
const port = 3000;

function isAuthorized(req, res, next) { // middldeware para manejar el control de acceso 
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== 'secretpassword') { // se esta comprobando que posea el header authorization y que tenga el dato correcto 
    return res.status(401).send('Unauthorized: Access Denied'); 
  }

  next();
}

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", isAuthorized, (req, res) => { // si pasa la comprobacion se le retorna la data 
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
  ]);
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "The Bluest Eye",
    },
  ]);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
