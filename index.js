const express = require('express');
const productsRoute = require('./routes/products');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.use('/api/productos', productsRoute);

app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salio mal :(');
});
