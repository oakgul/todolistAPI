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
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
const PORT = process.env.PORT || 5000;

app.use('/api/todos', todos);



app.listen(PORT, () => {
    console.log('Server running...');
});