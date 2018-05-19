const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');


// express middleware // http://localhost:3000/help.html
// handlebars - dynammic templating
app.use(express.static(__dirname + '/public'));

// helper to be available for all hbs files
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(str)=>{
    return str.toUpperCase();
})

app.get('/', (req, res) => {
    //res.send('<h1>Hello Express</h1>');
    // res.send({
    //     name: 'haidar',
    //     age: '16',
    //     likes: ['programming', 'anime']
    // });
    res.render('home.hbs', {
        pageTitle: 'Home page',
        currentYear: new Date().getFullYear(),
        welcomeMessage : `welcome haidar`
    })
});


app.get('/about', (request, response) => {
    //response.send(`About page`);
    response.render('about.hbs', {
        pageTitle: 'About page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorResponse: 'unable to handle request'
    });
});

app.listen(3000, () => {
    console.log('server is up on port 3000');
});