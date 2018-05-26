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
      filteredData: false,
      isDataLoaded: true
    }
    this.onScroll = this.onScroll.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount () {
    fetch('http://starlord.hackerearth.com/beercraft')
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

  render () {
    const {filteredData, itemsToRender, isDataLoaded, data} = this.state
    const items = filteredData && filteredData.slice(0, itemsToRender)

    return (
      <div>
        <Header />
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
            <List data={items} />
          </div>
        }
      </div>
    )
  }
}

export default Main
