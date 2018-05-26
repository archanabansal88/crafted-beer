import React, {Component} from 'react'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.handleSearchText = this.handleSearchText.bind(this)
  }

  handleSearchText (event) {
    this.setState({searchTerm: event.target.value})
  }

  render () {
    const {searchTerm} = this.state
    const {onSearchClick} = this.props
    return (
      <div className='field has-addons'>
        <div className='control'>
          <input className='input' type='text' placeholder='search beer' onChange={this.handleSearchText} value={searchTerm} />
        </div>
        <div className='control'>
          <a className='button is-info' onClick={onSearchClick.bind(null, searchTerm)}>
      Search
          </a>
        </div>
      </div>
    )
  }
}

export default Search
