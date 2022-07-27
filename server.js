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

app.use('/api/todos', todos);

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));



app.listen(PORT, () => {
    console.log('Server running...');
});