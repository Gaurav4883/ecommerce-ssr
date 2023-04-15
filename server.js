const express = require("express")
const cors = require("cors")
const hbs = require("hbs")

const app = express()
const PORT = 5000
app.use(cors())

//ssr setup
app.set('view engine', 'hbs')
app.use(express.static('./public'))
hbs.registerPartials('./views/partials')

const productData = require("./data/products.json")
const productRouter = require("./routes/productRoutes.js")
const homeRouter = require('./routes/homeRoutes.js')

app.use('/', homeRouter)
app.use('/products', productRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})






// app.get('/products', (req, res) => {

//     res.render('index')
// })