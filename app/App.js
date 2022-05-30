const express = require('express');
const cors = require('cors');
const db = require('./data/db')
const app = express();

app.use(cors())
app.use(express.json());


const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
    db();
})


module.exports = app
