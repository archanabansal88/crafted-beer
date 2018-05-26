import React from 'react'
import Cart from './cart'

const Header = ({cartValue}) => {
  return (
    <section className='hero is-primary is-bold card navbar is-fixed-top'>
      <div className='hero-head'>
        <div className='column level is-mobile'>
          <h1 className='title is-marginless'>
        Crafted Beer
          </h1>
          <Cart cartLength={cartValue} />
        </div>
      </div>
    </section>
  )
}

export default Header
