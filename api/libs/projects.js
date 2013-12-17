"use strict"

var orm = require("orm"),
    config = require("./config"),
    response = require("./response");

var conn = "mysql://" + config.mysql.user + ":" + config.mysql.password + "@" + config.mysql.host + "/" + config.mysql.database;

var db = orm.connect(conn);

var Projects = db.define("projects", 
    { id: 
        { type: "number"
        , unique: true
        , size: 20
        }
    , name:
        { type: "text"
        , size: 50
        }
    , image:
        { type: "text"
        , size: 255
        }
    , description:
        { type: "text"
        , big: true
        }
    , url:
        { type: "text"
        , size: 255
        }
    , isActive: 
        { type: "boolean"
        , defaultValue: true
        }
    , createdOn: 
        { type: "date"
        , time: true
        , defaultValue: new Date().getTime()
        }
    }        
)

var getAll = function(req, res){
    var responseOptions = {};
    responseOptions.callback = req.query.callback || "";
    responseOptions.format = req.query.format || null;
    Projects.find({isActive: true}, function(err, projects){
    
        if(err) throw err;
        var allProjects = {};
        allProjects.projects = projects;
        var apiResponse = response.createResponse(allProjects);
        response.respondToClient(res, responseOptions, apiResponse);
    });
}

module.exports = {
    getAll: getAll
}
