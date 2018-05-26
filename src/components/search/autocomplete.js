import React from 'react'
import './style.css'

const AutoComplete = ({data, searchTerm, onItemClick}) => {
  const filteredData = data
    .filter((value) => value.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)

  return (
    <ul className='list-container'>
      {filteredData
        .map((value) =>
          <li className='list-items' key={value.id} onClick={onItemClick.bind(null, value.name)}>
            {value.name}
          </li>
        )}

      {filteredData.length === 0 && <div className='list-items'>No Data Found </div>}
    </ul>

  )
}

export default AutoComplete
