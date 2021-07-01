import express from 'express';

const cartRoutes = express.Router();


interface CartItem {
    id: number,
    product: string,
    price: number,
    quantity: number
}

let CartArray: CartItem[] = [
    {
        id: 1,
        product: 'apple', 
        price: 1.00,
        quantity: 20
    },
    {
        id: 2,
        product: 'orange', 
        price: 2.00,
        quantity: 10
        
    },
    {
        id: 3,
        product: 'pear', 
        price: 3.00,
        quantity: 15
    },
];
let nextItemId: number = CartArray.length + 1;

function filterMaxPrice(maxPrice: number): CartItem[] {
    return cartItemsfilter((item) => {
        return item.price <= maxPrice;
    })
}

function filterPrefix(prefix: string): CartItem[] {
    return cartItemsfilter((item) => {
        return item.product.toLowerCase().startsWith(prefix.toLowerCase());
    })
}

function filterPageSize(pageSize: number): CartItem[] {
    let keptCartItems: CartItem[] = [];
    for (let i: number = 0; i < pageSize; i++) {
    return cartItemsfilter((item) => {
        return cartItems.splice(pageSize - 1, cartItems.length);
    })
}

cartRoutes.get("/cart-items", (req, res) => {
    let allCart = CartItem[] = [];

    const maxPrice: number = req.query.maxPrice ? Number(req.query.maxPrice) : 0;
    const prefix: string = req.query.prefix ? String(req.query.prefix) : '';
    const pageSize: number = req.query.pageSize ? Number(req.query.pageSize) : 0;

if (maxPrice) {
    allCart = filterMaxPrice(maxPrice);
} else if (prefix) {
    allCart = filterPrefix(prefix)
} else if (pageSize) {
    allCart = filterPageSize(pageSize);
} else {
    allCart = cartItems;
}

    res.json(allCart);
})

//get cart items by id

cartRoutes.get("/cart-items/:id", (req, res) => {
    let foundCart = CartArray.find(item) => {
        return CartArray.id === parseInt(req.params.id);
    }
    if (foundCart) {
        res.json(foundCart);
    } else {
        res.sendStatus(404);
    }
})


export default cartRoutes
