const toDo = require('../data/to_do.js');
const express = require('express');
const path = require('path');

const api_routing = (app, __dirname)=>{
    app.post('/newTask', (req,res)=>{
        let body = req.body;
        console.log("R E Q U E S T:\n", body);  
        toDo.push(body);      
        res.json(toDo);
        //this handler would take the posted data (new task) object and append the input string to the toDo array, returning the full array in json
    });
};

module.exports = api_routing;