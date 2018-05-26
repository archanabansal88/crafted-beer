import React from 'react'
import Cart from './cart'

const Header = () => {
  return (
    <section className='hero is-primary is-bold'>
      <div className='hero-head'>
        <div className='container level'>
          <h1 className='title'>
        Crafted Beer
          </h1>
          <Cart />
        </div>
      </div>
    </section>
  )
}

export default Header
