import React, {Component} from 'react'
import Header from '../header'
import Search from '../search'
import List from '../beerList'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: false
    }
  }

  componentDidMount () {
    fetch('http://starlord.hackerearth.com/beercraft')
      .then((response) => response.json())
      .then((data) => this.setState({data}))
  }
  render () {
    const {data} = this.state
    console.log(data)
    return (
      <div>
        <Header />
        <section className='level'>
          <div className='card-content level-item'>
            <Search />
          </div>
        </section>
        {data && <List data={data} />}
      </div>
    )
  }
}

export default Main
