import React from 'react'
import Header from '../header'
import Search from '../search'

const Main = () => {
  return (
    <div>
      <Header />
      <section className='level'>
        <div className='card-content level-item'>
          <Search />
        </div>
      </section>
    </div>
  )
}

export default Main
