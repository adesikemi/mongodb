const { Model } = require('mongoose')
let Models = require('../models/todo')

const getTodo = async (req, res) => {
    try {
        const models = await Models.find()
        res.json(models)
    }
    catch (err) {
        res.send(`Error ${err}`)
    }
}


const getSpecificTodo = async (req, res) => {
    try {
        const specificTodo = await Models.findById(req.params.id)
        res.json(specificTodo)
    }
    catch (err) {
        res.send(`Error ${err}`)
    }
}


const postTodo = async (req, res) => {
    const { title, description, timestamp } = req.body
    if (!(title && description && timestamp)) {
        return res.status(404).json({ sucess: false, message: 'please provide the values for title, description and timestamp' })
    }
    const eachTodo = new Models({
        title: title,
        description: description,
        timestamp: timestamp
    })

    try {
        const a1 = await eachTodo.save()
        res.status(201).json(a1)
    }
    catch (err) {
        res.send('Error')
    }
}


const updateTodo = async (req, res) => {
    try {
        const todo = await Models.findById(req.params.id)
        todo.title = req.body.title
        todo.description = req.body.description
        todo.timestamp = req.body.timestamp
        const a1 = await todo.save()
        res.json(a1)
    }
    catch (err) {
        res.send(`Error ${err}`)
    }
}


const deleteTodo = async (req, res) => {
    try {
        const todo = await Models.findById(req.params.id)
        todo.title = req.body.title
        todo.description = req.body.description
        todo.timestamp = req.body.timestamp
        const a1 = await todo.remove()
        res.json(a1)
    }
    catch (err) {
        res.send(`Error ${err}`)
    }
}
module.exports = {
    getTodo,
    getSpecificTodo,
    postTodo,
    updateTodo,
    deleteTodo
}