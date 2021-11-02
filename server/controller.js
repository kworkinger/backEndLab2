const { request, response} = require("express")
const houses = require("./db.json")
globalId = 4

module.exports = {
    getHouses: (request, response) => {
        response.status(200).send(houses)
    },
    deleteHouse: (request, response) => {
        let index = houses.findIndex(elem => elem.id === +request.params.id)
        houses.splice(index, 1)
        response.status(200).send(houses)
    },
    createHouse: (request, response) => {
        //give the request an id and store the data provided in the back end
        let {address, price, imageURL} = request.body
        let newHouse = {
            id: globalId,
            address,
            price: +price,
            imageURL: imageURL
        }
        houses.push(newHouse)
        response.status(200).send(houses)
        globalId++
    },
    updateHouse: (request, response) => {
        let {id} = request.params
        let {type} = request.body
        let index = houses.findIndex(elem => elem.id === +id)
            console.log("hello world")        
        if (houses[index].price >= 10000000) {
          response.status(400).send("We only sell homes below 10 million US dollars")  
        } else if (houses[index].price <= 100000) {
            response.status(400).send("We do not sell homes below 100K US dollars")
        } else if (type === "minus") {
            houses[index].price -= 10000
            response.status(200).send(houses)
        } else if (type === "plus") {
            houses[index].price += 10000
            response.status(200).send(houses)
        }
    }
}