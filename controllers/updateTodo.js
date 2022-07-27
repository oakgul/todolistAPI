const Todos = require('../models/Todos');

const updateTodo = async (req, res, next) => {
    const { id } = req.params;
    const { content } = req.body;

    let todos = await Todos.findById(id);
    todos.content = content;

    await todos.save();

    return res
        .status(200)
        .json({
            success : true,
            data : todos
        });
}

module.exports = {
    updateTodo
}