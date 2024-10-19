// Import Express
const express = require('express')
const morgan = require('morgan')

// Create an Express app
const app = express()
app.use(morgan('dev'))

// Defined routes

//TASK 1
app.get('/hello', (req, res) => {
    console.log(req.query)
    const name = req.query.name
   

    res.send(`Hello there, ${name}!`)
  })

//TASK 2
app.get('/roll/:number', (req, res) => {
    const numberParam = req.params.number;

    const number = parseInt(numberParam, 10);
    if (isNaN(number)) {
        return res.send("10");
    }
    const rolledNumber = Math.floor(Math.random() * (number + 1));
    res.send(`You rolled a ${rolledNumber}.`);
});

// Listen for requests on port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000")
  })

//TASK 3

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
//collectibles
app.get('/collectibles/:index', (req, res) => {
    const indexParam = req.params.index;

// Validating if the parameter is a number
    const index = parseInt(indexParam, 10);
    if (isNaN(index) || index < 0 || index >= collectibles.length) {
        return res.status(400).send("Invalid index. Please specify a valid number.");
    }

// Responding with the collectible at the specified index
    const collectible = collectibles[index];
    res.send(`Collectible: ${collectible.name}, Price: $${collectible.price.toFixed(2)}`);
});

//TASK 4


const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    const { type, minPrice, maxPrice } = req.query;

    let filteredShoes = shoes;

    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }
    
    if (minPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= Number(minPrice));
    }
    
    if (maxPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= Number(maxPrice));
    }

    res.json(filteredShoes);
});























































// http://localhost:3000/







































