import React from 'react'

const List = ({data, onAddCartClick}) => {
  return (
    <div className='panel-block'>
      <ul className='columns is-multiline'>
        {data.map((value, index) => {
          const {name, style, abv, ounces} = value
          return <li key={index} className='column is-4'>
            <div className='card'>
              <div className='card-content'>
                <div className='title is-5'>{name}</div>
                <div className='subtitle'>{style}</div>
                {abv && <div>Alcohol Content- {abv} %</div>}
                <div>{ounces} oz</div>
              </div>
              <footer className='card-footer'>
                <a href='#' className='card-footer-item' onClick={onAddCartClick.bind(null, value)}>Add to Cart</a>
              </footer>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}

export default List
