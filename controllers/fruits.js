//The controller will carry out all the request flows

const fruitData = require('../models/Fruit') // We've capitalised it because it is a functional model coming from Fruit.js

const index = async (req,res) => {
    try {                              // This is in a try catch to show the user if there is an error if the page fails to load
        const fruits = await fruitData.showAll() // This function is used to present all the fruit data on the page.
        res.status(200).send(fruits)
    } catch {
        res.status(500).send({ error: "Server Error" })
    }
}

const show = async (req,res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruit = await fruitData.show(name)
        res.status(200).send(fruit)
    } catch {
        res.status(404).send({ error: err})
    }

}

const create = async(req,res) => {

    try {
        const newFruit = await fruitData.create(req.body)
        res.status(201).send(newFruit)
    } catch(err) {
        res.status(409).send({ error: err})
    }
}

const update = async(req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruit = await fruitData.show(name)
        const result = await fruit.update(req.body)
        res.status(200).send(result)
    } catch (err) {
        res.status(404).send({ error: err})
    }
}

const destroy = async(req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruit = await fruitData.show(name)
        const result = await fruit.destroy()
        res.sendStatus(204)
    } catch (err) {
        res.status(404).send({ error: err})
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}