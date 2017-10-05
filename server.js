const express = require('express');
const path = require('path');

// S E R V E R    S E T U P
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static(__dirname,+'/public'));

// B O D Y P A R S E R  
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// H A N D L E S B A R S
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engin', 'handlebars');

// R O U T I N G 
const api_routes = require('./routes/api_routes.js');
app.use('/api', api_routes);

const html_routes = require('./routes/html_routes.js');
app.use('/', html_routes);

app.listen(PORT, ()=>{
    console.log('listening on port:', PORT);
})