const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');


// register middleware - interceptor
app.use((req,res,next)=>{
    var now = new Date().toString();
    var log = `${now} : ${req.method} : ${req.url}`;
    console.log(log);
    fs.appendFileSync('server.log',log+'\n');
    // continue with the rests
    next();
});

// app.use((req,res,next)=>{
//     // check if maintainance mode - do not call next 
//     res.render('maintainance.hbs');
// });

// express middleware // http://localhost:3000/help.html
// handlebars - dynammic templating - express static directory
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

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});