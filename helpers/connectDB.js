const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
    .then(() => {
        console.log('DB connected...');
    })
    .catch(err => console.error(err));
}

module.exports = connectDatabase;