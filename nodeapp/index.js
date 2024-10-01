var express = require("express");
var app = express();

app.get("/", function (req, res) {
	res.send('{ "response": "Hello, Welcome to Valaxy" }');
});

app.get("/will", function (req, res) {
	res.send('{ "response": "Hello World" }');
});

app.get("/ready", function (req, res) {
	res.send('{ "response": " Great!, It works!" }');
});

// Change the port to avoid permission issues
const PORT = process.env.PORT || 4001;

app.listen(PORT, function (err) {
	if (err) {
		console.error("Error starting server:", err);
		return;
	}
	console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
