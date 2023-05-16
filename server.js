//Step1: create server module
var http = require(`http`);
var url = require(`url`);

function startserver(route, handle) {
  function onReq(req, res) {
    var pathname = url.parse(req.url).pathname;
    var reviewData = "";
    console.log("req recieve for ", pathname);
    req.setEncoding("utf8");
    req.addListener("data", function (chunk) {
      reviewData += chunk;
    });
    req.addListener("end", function () {
      route(handle, pathname, res, reviewData);
    });

    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.write("Hello from server");
    // res.end();
  }
  http.createServer(onReq).listen(8888);
}
exports.startserver = startserver;
console.log("Server started on port 8888");
