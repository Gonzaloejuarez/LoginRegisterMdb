const express = require('express');
const cors = require('cors');
const db = require('./data/db');

const controllers = require('./controllers');
const app = express();

app.use(cors())
app.use(express.json());

app.get('/user/:userId', controllers.GetUser);
app.post('/register', controllers.GetRegisterUser);
app.post('/login' , controllers.GetLogin);


const PORT = 3001;


app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
    db();
})


module.exports = app
