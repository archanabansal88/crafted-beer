import React from 'react'
import Cart from './cart'

const Header = () => {
  return (
    <section className='hero is-primary is-bold card'>
      <div className='hero-head'>
        <div className='card-content level is-mobile'>
          <h1 className='title is-marginless'>
        Crafted Beer
          </h1>
          <Cart />
        </div>
      </div>
    </section>
  )
}

export default Header
