const Todos = require('../models/Todos');

const createTodo = async (req, res, next) => {
    const {content, priotry} = req.body;
    const todo = await Todos.create({
        content,
        priotry
    })

    res
        .status(200)
        .json({
            success: true,
            data: todo
        })

}

module.exports = {
    createTodo
}