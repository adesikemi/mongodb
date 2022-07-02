const express = require('express');
const router = express.Router();

const {
    getTodo,
    getSpecificTodo,
    postTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoController');

router.get('/', getTodo)
router.get('/:id', getSpecificTodo)
router.post('/', postTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router