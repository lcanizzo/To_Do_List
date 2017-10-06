const toDo = require('../data/to_do.js');
const express = require('express');
const path = require('path');

const html_routing = (app, __dirname)=>{
    app.get('/', (req,res)=>{
        console.log('routed to html');
        // res.render('index.handlebars');
        res.sendFile(path.join(__dirname, "starter.html"));        
    })
}

module.exports= html_routing;