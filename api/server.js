"use strict"
var express = require("express"),
    config = require("./libs/config"),
    projects = require("./libs/projects");

var app = express();

/*
 * Routes
 */

app.get('/', function(req, res){
    
    res.send('This page is not available yet');

});

app.get('/projects', projects.getAll);

/*
 * 404
 */ 
app.get('*', function(req,res){
    res.send('404 Not Found');

})

app.listen(config.app.port);
console.log('Listening on port ' + config.app.port);
