const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

// middleware
app.use(express.urlencoded({extended: true})); // this is to GET information
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(methodOverride('_method')); 

app.set('view engine', 'ejs'); // to run ejs on the application
app.set('views', path.join(__dirname, 'views')); // to run views on each directory, combining current to process.cw
app.use(express.static('public'));

let products = [
    {  
        id: uuid(),
        brand: 'Delmonte',
        product: 'Tomato Sauce',
        img: 'https://kitchenconvenienceph.com/cdn/shop/products/DELMONTETOMATOSAUCE1KG_1024x1024@2x.jpg?v=1601036728'
    },
    {
        id: uuid(),
        brand: 'Delmonte',
        product: 'Pineapple Juice',
        img: 'https://down-ph.img.susercontent.com/file/fa78886945e46f55c1b8cdf02c97814c'
    },
    {
        id: uuid(),
        brand: 'Delmonte',
        product: 'Pineapple Slices',
        img: 'https://www.delmontefoodservice.com/sites/default/files/2023-02/rendition%20%282%29.jpg'
   
    },
    {
        id: uuid(),
        brand: 'Delmonte',
        product: 'Tomato Ketchup',
        img: 'https://kitchenconvenienceph.com/cdn/shop/products/DELMONTEKETCHUP567H_grande.jpg?v=1601036479'
    }
]

app.get('/products', (req, res) => {
    res.render('products/index', {products});
});

// Create a new route for a new products
app.get('/products/new', (req, res) => {
    res.render('products/new');
});

// route for post in new products
app.post('/products', (req, res) => {
    const { brand, product, img } = req.body;
    products.push({ id: uuid(), brand, product, img });
    res.redirect('/products'); 
});

//================================================================

// show per id route
app.get('/products/:id', (req, res) => {
    const {id} = req.params;
    const product = products.find(p => p.id === id);
    res.render('products/show', {product});
})

//================================================================

// edit products route
app.get('/products/:id/edit', (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === id);
    res.render('products/edit', { product });
});

// edit products patch 
app.patch('/products/:id', (req, res) => {
    const { id } = req.params;
    const foundProduct = products.find(p => p.id === id);
    const { brand, product, img } = req.body;
    foundProduct.brand = brand;
    foundProduct.product = product;
    foundProduct.img = img;
    res.redirect('/products');
});

// =================================================================
// route for delete
app.delete('/products/:id', (req, res) => {
    const {id} = req.params;
    products = products.filter(c => c.id !== id);
    res.redirect('/products')
})

//================================================================

app.listen(8080, () => {
    console.log('Server running...');
    console.log('Listening on port 8080!');
})