const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/home', (req, res) => {
    res.status(404).send({
        error: 'page not found',
        name: 'home'
    });
});

app.get('/users', (req, res) => {
    res.send({
        name: 'haidar',
        age: '20'
    }, {
        name: 'amin',
        age: '20'
    }, {
        name: 'zaro',
        age: '20'
    })
});

app.listen(3000, () => {
    console.log('server started');
});

module.exports.app = app;