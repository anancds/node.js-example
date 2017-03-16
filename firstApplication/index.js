var server = require("./http");
var router = require("./route");

server.start(router.route);
