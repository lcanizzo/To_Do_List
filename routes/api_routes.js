const toDo = require('../data/to_do.js');
const express = require('express');
const path = require('path');

const api_routing = (app, __dirname)=>{
    app.post('/newTask', (req,res)=>{
        let body = req.body;
        console.log("R E Q U E S T:\n", body);  
        toDo_array.push(body);      
        res.json(toDo_array);
    });
};

module.exports = api_routing;