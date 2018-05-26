import React from 'react'

const Cart = ({cartLength}) => {
  return (
    <div className='level-right'>
      {cartLength > 0 && <span className='tag is-info'>{cartLength}</span>}
      <span className='icon is-large'>
        <i className='fa fa-shopping-cart' />
      </span>
      <span className='is-size-5'>Cart</span>
    </div>
  )
}

export default Cart
