const express = require('express');
const router = express.Router();
const { getAllTodo } = require('../controllers/getAllTodo');
const { createTodo } = require('../controllers/createTodo');
const { updateTodo } = require('../controllers/updateTodo');
const { deleteTodo } = require('../controllers/deleteTodo');


router.get('/', getAllTodo);
router.post('/create', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;

