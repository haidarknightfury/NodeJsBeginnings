var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.urlencoded({ extended: false }));

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
function middlewareFunction(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
}
app.use(middlewareFunction);

/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */
function rootHanlder(req, res) {
  res.send("Hello Express");
}
app.get("/root", rootHanlder);

/** 3) Serve an HTML file */
function defaultPathHandler(req, res) {
  let absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
}
app.get("/", defaultPathHandler);

/** 4) Serve static assets  */
app.use(
  express.static(__dirname + "/public")
); /** 6) Use the .env file to configure the app */

/** 5) serve JSON on a specific route */ app.get("/json", function(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE == "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

/** 8) Chaining middleware. A Time server */
function timeMilddleware(req, res, next) {
  req.time = new Date().toString();
  next();
}

function timeFinalHandler(req, res) {
  let time = req.time;
  res.json({ time: req.time });
}

app.get("/now", timeMilddleware, timeFinalHandler);

/** 9)  Get input from client - Route parameters */

function echoHandler(req, res) {
  res.json({ echo: req.params.word });
}
app.get("/:word/echo", echoHandler);

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
// https://entertaining-albertosaurus.glitch.me/name?first=firstname&last=lastname
function nameHandler(req, res) {
  let fname = req.query.first;
  let lname = req.query.last;
  res.json({ name: `${fname} ${lname}` });
}

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

/** 12) Get data form POST  */
function namePostHandler(req, res) {
  let fname = req.body.first;
  let lname = req.body.last;
  res.json({ name: `${fname} ${lname}` });
}
app
  .route("/name")
  .get(nameHandler)
  .post(namePostHandler);

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
