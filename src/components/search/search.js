import React, {Component} from 'react'
import AutoComplete from './autocomplete'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      isListVisible: false
    }
    this.handleSearchText = this.handleSearchText.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.hideList = this.hideList.bind(this)
    this.handleBodyClick = this.handleBodyClick.bind(this)
  }

  handleSearchText (event) {
    this.setState({searchTerm: event.target.value})
  }

  handleFocus () {
    this.attachClick()
    this.setState({isListVisible: true})
  }

  handleItemClick (item) {
    this.detachClick()
    this.setState({searchTerm: item, isListVisible: false})
    this.props.onSearchClick(item)
  }

  attachClick () {
    document.body.addEventListener('click', this.handleBodyClick)
  }

  handleBodyClick (event) {
    if (!this.SearchContainer.contains(event.target)) {
      this.hideList()
    }
  }

  detachClick () {
    document.body.removeEventListener('click', this.handleBodyClick)
  }

  hideList () {
    this.setState({isListVisible: false})
    this.detachClick()
  }

  render () {
    const {searchTerm, isListVisible} = this.state
    const {onSearchClick, data} = this.props
    return (
      <div className='field has-addons'>
        <div className='control' ref={(input) => { this.SearchContainer = input }}>
          <input className='input' type='text' placeholder='search beer' onFocus={this.handleFocus} onChange={this.handleSearchText} value={searchTerm} />
          {isListVisible && searchTerm.length > 0 && <AutoComplete data={data} searchTerm={searchTerm} onItemClick={this.handleItemClick} />}
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
