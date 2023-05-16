//Step2: create view
var server = require(`./server`);
var router = require("./router");
var handler = require("./handler");
var handle = {};
//Assigning handler to a path name using key-value pairs
handle[`/home`] = handler.home;
handle[`/review`] = handler.review;
handle[`/`] = handler.home;
server.startserver(router.route, handle);
