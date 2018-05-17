const express = require('express');

var app = express();

// express middleware
app.use(express.static(__dirname+ '/public'));

app.get('/', (req, res) => {
    //res.send('<h1>Hello Express</h1>');
    res.send({
        name: 'haidar',
        age: '16',
        likes: ['programming', 'anime']
    });
});


app.get('/about', (request, response) => {
    response.send(`About page`);
});

app.get('/bad', (req, res) => {
    res.send({
        errorResponse: 'unable to handle request'
    });
});

app.listen(3000,()=>{
    console.log('server is up on port 3000');
});