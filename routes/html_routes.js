const express = require('express');
const path = require('path');
const connection = require('../config/connection.js');

const html_routing = (app, __dirname)=>{
    app.get('/', (req,res)=>{
        console.log('routed to html');
        connection.query("SELECT * FROM to_dos;", (err,data)=>{
            if(err){
                console.log("ERROR:\n", err);
                return res.status(500).end();
            }
            console.log("To-Dos DATA:\n", data);
            res.render('index.handlebars', {to_dos: data});            
        })
    });
}

module.exports= html_routing;