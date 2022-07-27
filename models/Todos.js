const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodosSchema = new Schema({
    content: {
        type : String,
        default: "Ömür biter todolar bitmez..."
    },
    priotry: {
        type: String,
        default: "Low"
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    deadLine: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "progress",
        enum: ["progress", "done"]
    }
});

module.exports = mongoose.model("Todos", TodosSchema);