const express = require("express");
const dotenv = require("dotenv");
const todos = require("./routers/todos");
const connectDatabase = require("./helpers/connectDB");

dotenv.config({
    path: "./config/env/config.env"
})

connectDatabase();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api/todos', todos);





app.listen(PORT, () => {
    console.log('Server running...');
});