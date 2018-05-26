import React from 'react'

const List = ({data}) => {
  return (
    <div className='container'>
      <ul className='columns is-multiline'>
        {data.map((value, index) => {
          return <li key={index} className='column is-4'>
            <div className='card'>
              <div className='card-content'>
                <div className='title is-5'>{value.name}</div>
                <div className='subtitle'>{value.style}</div>
                <div>{value.ounces} oz</div>
              </div>
              <footer className='card-footer'>
                <a href='#' className='card-footer-item'>Add to Cart</a>
              </footer>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}

export default List
