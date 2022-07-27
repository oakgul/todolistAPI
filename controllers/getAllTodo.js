const Todos = require('../models/Todos');

const getAllTodo = async (req, res, next) => {
    const allTodos = await Todos.find();
    return res 
        .status(200)
        .json({
            success: true,
            data: allTodos
        });
}

module.exports = {
    getAllTodo
}