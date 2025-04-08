// The model file will contain all the logic i.e. if statements
const fruits = require('../fruits.json') 

class fruitData {
    constructor(fruit) {
        this.genus = fruit.genus
        this.name = fruit.name
        this.id = fruit.id
        this.family = fruit.family
        this.order = fruit.order
        this.nutritions = fruit.nutritions 
    }

    static showAll() {
        return fruits.map(f => new fruitData(f))
    }

    static show(name) {
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)

        if (fruit) {
            return new fruitData(fruit)
        } else {
            throw 'The fruit does not exist'
        }
    }

    static create(data) {
        const newFruit = data
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == data.name.toLowerCase());
  
        if (fruit) {
            throw "The fruit already exists.";
        } else {
            newFruit["id"] = fruits.length + 1;
            fruits.push(newFruit);

        return new fruitData(newFruit)
    }
}

    update(data) {
        const updateFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())

        if (updateFruit) {
            updateFruit.name = data.name
            updateFruit.family = data.family

            return new fruitData(updateFruit)
        } else {
            throw 'Fruit not found'
        }
    }
    
    destroy() {
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())

        if (deletedFruit) {
            const index = fruits.indexOf(deletedFruit)

            fruits.splice(index, 1)
        } else {
            throw 'Fruit not found'
        }
    }
}

module.exports = fruitData