import React, {useState, useEffect} from 'react';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar.jsx';
import {commerce} from './lib/commerce'
import {Products, Navbar} from './components'

const App = () => {
    const [products, setProducts] = useState([])

    // async function to get the datat from the store
    const fetchProducts = async() =>{
        // const response = await commerce.products.list()
        const {data} = await commerce.products.list()
        setProducts(data)
    }

    // function is called and the state is updated with the data received
    useEffect(()=>{
        fetchProducts()
    }, [])
    console.log(products)

    return (
        <div>
            <Navbar />
            <Products />            
        </div>
    )
}

export default App 