const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require("swagger-ui-express");
const swaggerJsondoc = require("swagger-jsdoc");

const musicsRoutes = require('./src/routes/musicsRoutes.js');

const app = express();
const port = 3636;

const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "18521123 - Assignment 3",
        version: "1.0.0",
        description:
          "Document for Music Management API",
        contact: {
          name: "Bao Nam",
          url: "https://github.com/T0nyBlue",
          email: "18521123@gm.uit.edu.vn"
        }
      },
      servers: [
        {
          url: "http://localhost:3636/"
        }
      ]
    },
    apis: ["./api-method-docs.js"]
}
const swaggerDocs = swaggerJsondoc(options);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
    res.json("Hello world!");
});

// app.get(
//     "/docs",
//     swaggerUi.setup(specs, {
//       explorer: true
//     })
// );

app.get('/', (req, res) => {
    res.send('Welcome to music management API!');
});

musicsRoutes(app);

app.listen(port, () => console.log(`Server running on por: http://localhost:${port}`));
