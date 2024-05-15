import React from 'react'
import { useEffect,useState } from 'react'
import './Product.css'

export default function Product() {
    const [products,setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching product',error))       
    },[])
return (
    <div className='console-product'>
        {products.map((product, index) => (
            <div key={index} className='product'>
                <div className='product-item'>
                    <div className='image'>
                        <img src='logo192.png' alt='Product' />
                    </div>
                    <div className='title-price'>
                        <p className='title'>{product.name}</p> 
                        <p className='price'>{product.price}€</p> 
                    </div>
                </div>
            </div>
        ))}
    </div>
);
}