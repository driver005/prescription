// Import npm packages
require('dotenv').config()
const bodyParser = require("body-parser");
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require("cors");
const path = require('path');
const http = require("http");

const PORT = process.env.PORT || 8080; // Step 1
// Express configuration
const app = express();
// Create our HTTPS server listening on port 3000.
const server = http.createServer(app);

const api = require('./routes');

// Step 2
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/receipt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", api);

app.use((err, req, res, next) => {
    if (err) {
        if (err.status == null) {
            console.error("Internal unexpected error from:", err.stack);
            res.status(500);
            res.json(err);
        } else {
            res.status(err.status);
            res.json(err);
        }
    } else {
        next();
    }
});


server.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
});