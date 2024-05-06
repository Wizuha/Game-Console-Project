import React from 'react'
import './Product.css'

export default function Product() {
  return (
    <div className='product'>
            <div className='image'>
                <img src='logo192.png' />
            </div>
            <div className='title-price'>
                <p className='title'>Titre</p>
                <p className='price'>Prix</p>
            </div>
    </div>
    
  )
}
