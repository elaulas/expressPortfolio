var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {


app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "../about.html"))
})
app.get("/projects", function(req, res){
    res.sendFile(path.join(__dirname, "../projects.html"))
})
app.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "../contact.html"))
})
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
};