// Import Packages
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Module Imports 
const employeeRoute = require("./routes/employeeRoutes");

// .env path
dotenv.config({ path: "./config.env" });

// Server Create
const app = express();

// Express Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes import
app.use("/employee", employeeRoute);

// DB Connection
try {
	mongoose.connect(
		process.env.DATABASE_URL,
		{
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		() => {
			app.listen(process.env.PORT, console.log(` http://localhost:${process.env.PORT}`));
			console.log("Connected to DB!");
		}
	);
} catch (error) {
	console.log(error);
}
