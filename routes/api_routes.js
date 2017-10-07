const express = require('express');
const path = require('path');
const connection = require('../config/connection.js');

const api_routing = (app, __dirname)=>{

    // Create a new task
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
        });
    });

    // Delete an existing task
    app.get('/deleteTask/:id', (req,res)=>{
        console.log('P A R A M S  I D:\n', req.params.id)
        connection.query("DELETE FROM to_dos WHERE id=?", [req.params.id],(err,result)=>{
            if(err){
                console.log("ERROR:\n", err);
                return res.status(500).end();
            } 
            else if (result.affectedRows == 0){
                console.log("No such item exists");
                return res.status(404).end();
            } 
            else {
                console.log(result);
                res.status(200).end();
            }
        })
    });

    // Mark an existing task as complete
    app.get('/completeTask/:id', (req,res)=>{
        console.log('P A R A M S  I D:\n', req.params.id)
        connection.query("UPDATE to_dos SET completed=true WHERE id=?", [req.params.id], (err, result)=>{
            if(err){
                console.log("ERROR:\n", err);
                return res.status(500).end();
            } 
            else if (result.changedRows == 0){
                console.log("No such item exists");
                return res.status(404).end();
            } 
            else {
                console.log(result);
                res.status(200).end();
            }
        })        
    })

    // Mark an existing task as unfinished
    app.get('/unfinishedTask/:id', (req,res)=>{
        console.log('P A R A M S  I D:\n', req.params.id)
        connection.query("UPDATE to_dos SET completed=false WHERE id=?", [req.params.id], (err, result)=>{
            if(err){
                console.log("ERROR:\n", err);
                return res.status(500).end();
            } 
            else if (result.changedRows == 0){
                console.log("No such item exists");
                return res.status(404).end();
            } 
            else {
                console.log(result);
                res.status(200).end();
            }
        })        
    })
};

module.exports = api_routing;