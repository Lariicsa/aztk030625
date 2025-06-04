const express = require("express");
const cors = require("cors");
const app = express();

const allowCrossDomain = function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	res.header(
		"Access-Control-Allow-Headers",
		"Content-Type, Authorization, Content-Length, X-Requested-With, Accept, x-jwt-token"
	);

	next();
};

//CORS config
app.use(express.json());
app.options("*", cors());
app.use(allowCrossDomain);

//ROUTES
const mainRoute = require("./routes/index");

app.use("/api", mainRoute);

// entry point
const startServer = () => {
	const PORT = 3000;
	console.log(`Enviroment ${PORT}/api`);
	app.listen(PORT, () => {
		console.log(`Server listening on http://localhost:${PORT}/api`);
	});
};

startServer();

module.exports = app;
