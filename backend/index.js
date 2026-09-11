const express = require('express');

const cors = require('cors');



const app = express();

const PORT = 5000;

// Тут пишем эндпоинты
app.use(function(_, _, next){
    console.log("Middleware 1");
});

app.get('/api/data', (req, res) => {

    res.json({ message: 'Привет от Express!' });

});

app.get('/users', (req, res) => {

    res.json({ message: 'юзеры' });
    
});

app.get('/users/posts', (req, res) => {

    res.json({ message: 'посты' });
    
});
app.get('/users/posts/delete', (req, res) => {

    res.json({ message: 'удаленные посты' });

});

app.listen(PORT, () => {

    console.log(`Сервер запущен на порту ${PORT}`);
    console.log(`http://localhost:${PORT}`);


});