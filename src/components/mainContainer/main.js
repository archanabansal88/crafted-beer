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
      itemsToRender: 21
    }
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount () {
    fetch('http://starlord.hackerearth.com/beercraft')
      .then((response) => response.json())
      .then((data) => this.setState({data}))
    window.addEventListener('scroll', throttle(this.onScroll, 250), false)
  }

  onScroll () {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)) {
      this.setState((prevState) => ({ itemsToRender: prevState.itemsToRender + 20 }))
    }
  }

  render () {
    const {data, itemsToRender} = this.state
    const items = data && data.slice(0, itemsToRender)

    return (
      <div>
        <Header />
        <section className='level'>
          <div className='card-content level-item'>
            <Search />
          </div>
        </section>
        {data && <List data={items} />}
      </div>
    )
  }
}

export default Main
