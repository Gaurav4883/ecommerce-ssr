const productData = require('../data/products.json')
const router = require("express").Router()

//return all data
router.get('/', (req, res) => {
    const { category, minprice } = req.query
    const newProd = []

    productData.map((curr) => {
        const { id, title, price, category, image } = curr
        newProd.push({ id, title, price, category, image })
    })

    if (category) {
        const filteredProd = newProd.filter((prod) => prod.category === category)
        res.json(filteredProd)
    }
    if (minprice) {
        const minifiedProd = newProd.filter((prod) => prod.price >= minprice)
        res.json(minifiedProd)
    } else {
        res.render('index', { title: 'mero vai ko kapda pasal', newProd: newProd })
    }


})

// return specific product
router.get('/:id', (req, res) => {
    // const { productId } = req.params
    // res.json(productData[productId] - 1)
    // console.log(req.params.id);
    // res.json(productData[req.params.id - 1])

    if (Number(req.params.id) >= 1 && Number(req.params.id) <= productData.length) {
        res.render('details', { productDetail: productData[req.params.id - 1] })
        console.log(productData[req.params.id - 1]);
        // res.json(productData[req.params.id - 1])
    } else {
        res.send("Invalid url ")
    }

})


module.exports = router