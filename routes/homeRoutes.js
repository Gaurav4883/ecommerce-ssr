const productData = require('../data/products.json')
const router = require("express").Router()

//return all data
router.get('/', (req, res) => {
    res.send("ecommerce api")
    console.log("yoo");
})

module.exports = router