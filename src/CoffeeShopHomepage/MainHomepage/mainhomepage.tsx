import React from 'react'
import Header from '../HeaderNavigation/Header'
import './mainhomepageStyle.scss'
import Products from '../CoffeeShopProducts/ProductCards'
import Footer from '../Footer/CoffeeshopFooter'

const mainhomepage = () => {
  return (
    <div>
      <Header/>
      <div className='headerimage'>
      </div>
      <Products/>
      <Footer/>
    </div>
  )
}

export default mainhomepage;