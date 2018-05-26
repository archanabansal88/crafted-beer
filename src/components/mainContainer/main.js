import React, {Component} from 'react'
import Header from '../header'
import Search from '../search'
import List from '../beerList'
import Sort from '../sort'
import throttle from '../../utils/throttle'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: false,
      itemsToRender: 21,
      filteredData: false,
      isDataLoaded: true,
      sortBy: false,
      cart: []
    }
    this.onScroll = this.onScroll.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSortClick = this.handleSortClick.bind(this)
    this.handleAddCartClick = this.handleAddCartClick.bind(this)
  }

  componentDidMount () {
    const cartValue = window.localStorage.getItem('cart')
    const cart = cartValue ? JSON.parse(cartValue) : []
    this.setState({cart})

    window.fetch('http://starlord.hackerearth.com/beercraft')
      .then((response) => response.json())
      .then((data) => this.setState({data, filteredData: data, isDataLoaded: false}))
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

  handleSortClick (type) {
    const {filteredData} = this.state
    const sortedData = filteredData.sort((prev, next) => prev.abv - next.abv)
    if (type === 'des') {
      sortedData.reverse()
    }
    this.setState({filteredData: sortedData, sortBy: type})
  }

  handleAddCartClick (value) {
    const {cart} = this.state
    cart.push(value)
    this.setState({cart})
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }

  render () {
    const {filteredData, itemsToRender, isDataLoaded, data, sortBy, cart} = this.state
    const items = filteredData && filteredData.slice(0, itemsToRender)

    return (
      <div>
        <Header cartValue={cart.length} />
        {isDataLoaded &&
          <div className='level'><div className='level-item'>
            <span className='is-size-1 card-content'>
              <i className='fas fa-spinner fa-pulse' />
            </span>
            <span className='is-size-3'>Loading</span>
          </div>
          </div>}
        {filteredData &&
          <div>
            <section className='level'>
              <div className='card-content level-item'>
                <Search onSearchClick={this.handleSearch} data={data} />
              </div>
            </section>
            <div className='container'>
              <div className='panel'>
                <Sort onSortClick={this.handleSortClick} sortBy={sortBy} />
                <List data={items} onAddCartClick={this.handleAddCartClick} />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Main
