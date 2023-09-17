import React from 'react'
import Header from '../HeaderNavigation/Header'
import './mainhomepageStyle.scss'
import Products from '../CoffeeShopProducts/ProductCards'


const mainhomepage = () => {
  return (
    <div>
      <Header/>
      <div className='headerimage'>
      </div>
      <Products/>
    </div>
  )
}

export default mainhomepage;