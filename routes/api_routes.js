const toDo = require('../data/to_do.js');
const express = require('express');
const path = require('path');
const connection = require('../config/connection.js');

const api_routing = (app, __dirname)=>{
    app.post('/newTask', (req,res)=>{
        let newTask = req.body.newTask;
        console.log("R E Q U E S T:\n",  req.body);  
        connection.query("INSERT INTO to_dos (newTask) VALUES (?)", [newTask], (err, result)=>{
            if(err){
                console.log("ERROR:\n", err);
                return res.status(500).end();
            }
            console.log("R E S U L T:\n", { id: result.insertId });
            res.json({ id: result.insertId });
        })
    });
};

module.exports = api_routing;