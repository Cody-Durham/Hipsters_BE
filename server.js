console.log('Hey There!')
// GET ENVIRONMENTAL VARIABLES
require("dotenv").config();

//GET PORT FROM ENV VARIABLES
const PORT = process.env.PORT;

// IMPORT DEPENDENCIES // middleware
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// IMPORT DATABASE CONNECTION
const mongoose = require("./db/connection");

// CREATE EXPRESS APPLICATION OBJECT
const app = express();

// connecting the !!!ROUTER!!!! (hipsters controller)
const hipsterRouter = require('./controllers/Hipster_controller')

// Setup Middleware
app.use(cors()); // <----- add cors headers
app.use(express.json()); // <---- parses JSON bodies and adds them to req.body
app.use(morgan("tiny")); // <----- logging for debugging


app.get('/', (req, res) => {res.send('The server is working!!')}) // <-- route to test the server
app.use('/hipsters', hipsterRouter) // <-- send all requests for /hipsters to hipsterRouter

app.get('/', (req, res) => res.send('hit the default route guy!'))

app.listen(PORT, () => console.log(`Listening in on port ${PORT}` ))

