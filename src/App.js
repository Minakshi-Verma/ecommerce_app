import React, {useState, useEffect} from 'react';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar.jsx';
import {commerce} from './lib/commerce'
import {Products, Navbar, Cart} from './components'

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    // async function to get the datat from the store
    const fetchProducts = async() =>{
        // const response = await commerce.products.list()
        const {data} = await commerce.products.list()
        setProducts(data)
    }

    // function to retrieve the data from the cart
    const fetchCart = async() => {
        // cart is the response that we receive here
        const cart = await commerce.cart.retrieve()
        setCart(cart)   
    }

    // Function to add items to the cart
    
    const handleAddToCart = async(productId, quantity) =>{
        const item = await commerce.cart.add(productId, quantity)
        setCart(item.cart)
    }

    // function is called in useEffect hook and the state is updated with the data received
    useEffect(()=>{
        fetchProducts();
        fetchCart();
    }, [])

    // console.log("Products==>>",products)
    console.log("cart==>>",cart)

    return (
        <div>
            <Navbar totalItems={cart.total_items} />
            <Cart cart= {cart}/>
            <Products products= {products} onAddToCart= {handleAddToCart}/>            
        </div>
    )
}

export default App 