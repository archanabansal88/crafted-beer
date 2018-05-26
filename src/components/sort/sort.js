import React from 'react'

const Sort = ({onSortClick, sortBy}) => {
  const isAscActive = sortBy === 'asc' && 'has-text-link'
  const isDesActive = sortBy === 'des' && 'has-text-link'

  return (

    <div className='panel-heading navbar' style={{'zIndex': '29'}}>
      <span className='navbar-item'>Sort By Alcohol Content: </span>
      <a className={`navbar-item ${isAscActive}`} onClick={onSortClick.bind(null, 'asc')}>Low to High</a>
      <a className={`navbar-item ${isDesActive}`} onClick={onSortClick.bind(null, 'des')}>High to Low</a>

    </div>
  )
}

export default Sort
