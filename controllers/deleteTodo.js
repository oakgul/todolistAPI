const Todos = require('../models/Todos');

const deleteTodo = async (req, res, next) => {
    const { id } = req.params;
    const todo = await Todos.findById(id);
    await todo.remove();

    return res
        .status(200)
        .json({
            success : true,
            message : 'Todo Silindi!'
        });
}

module.exports = {
    deleteTodo
}