import React from 'react'

const Search = () => {
  return (
    <div className='field has-addons'>
      <div className='control'>
        <input className='input' type='text' placeholder='search beer' />
      </div>
      <div className='control'>
        <a className='button is-info'>
      Search
        </a>
      </div>
    </div>
  )
}

export default Search
