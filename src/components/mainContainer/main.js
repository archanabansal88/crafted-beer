import React, {Component} from 'react'
import Header from '../header'
import Search from '../search'
import List from '../beerList'
import throttle from '../../utils/throttle'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: false,
      itemsToRender: 21,
      searchedItem: '',
      filteredData: false
    }
    this.onScroll = this.onScroll.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount () {
    fetch('http://starlord.hackerearth.com/beercraft')
      .then((response) => response.json())
      .then((data) => this.setState({data, filteredData: data}))
    window.addEventListener('scroll', throttle(this.onScroll, 250), false)
  }

  handleSearch (text) {
    const filteredData = this.state.data.filter((data) => data.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
    this.setState({filteredData})
  }

  onScroll () {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)) {
      this.setState((prevState) => ({ itemsToRender: prevState.itemsToRender + 20 }))
    }
  }

  render () {
    const {filteredData, itemsToRender} = this.state
    const items = filteredData && filteredData.slice(0, itemsToRender)

    return (
      <div>
        <Header />
        <section className='level'>
          <div className='card-content level-item'>
            <Search onSearchClick={this.handleSearch} />
          </div>
        </section>
        {filteredData && <List data={items} />}
      </div>
    )
  }
}

export default Main
