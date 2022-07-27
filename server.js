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
const PORT = process.env.PORT;

app.use('/api/todos', todos);



app.listen(PORT, () => {
    console.log('Server running...');
});