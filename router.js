//Step3: routers
function route(handle, pathname, res, reviewData) {
  console.log("Routing req for  ", pathname);
  if (typeof handle[pathname] === "function") {
    handle[pathname](res, reviewData);
  } else {
    console.log("No handler for ", pathname);
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404: not found");
    res.end();
  }
}
exports.route = route;
