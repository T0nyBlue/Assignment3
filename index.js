const express = require('express');
const bodyParser = require('body-parser');
const musicsRoutes = require('./src/routes/musicsRoutes.js');

const app = express();
const port = 3636;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

musicsRoutes(app);

app.get('/', (req, res) => {
    res.send('Welcome to music management API!');
});

app.listen(port, () => console.log(`Server running on por: http://localhost:${port}`));
