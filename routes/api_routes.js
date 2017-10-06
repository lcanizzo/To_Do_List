const toDo = require('../data/to_do.js');
const express = require('express');
const path = require('path');

const api_routing = (app, __dirname)=>{
    app.post('/newTask', (req,res)=>{
        //for some reason this is calling my html_routes and appending the urlencoded data to the host url 
            // works when using built in form method, but not using html $.post...
        let body = req.body;
        console.log("R E Q U E S T:\n", body);  
        toDo_array.push(body);      
        res.json(toDo_array);
        //this handler would take the posted data (new task) object and append the input string to the toDo array, returning the full array in json
    });
};

module.exports = api_routing;