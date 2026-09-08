const express = require('express');

const cors = require('cors');



const app = express();

const PORT = 5000;

// Тут пишем эндпоинты

app.get('/api/data', (req, res) => {

    res.json({ message: 'Привет от Express!' });

});

app.listen(PORT, () => {

    console.log(`Сервер запущен на порту ${PORT}`);


});