import React from 'react'
import StockValue from './StockValue'

class StockTicker extends React.Component {
  state = { price: 0 }

  componentWillMount() {
    this.url = `https://api.iextrading.com/1.0/stock/${this.props.ticker}/batch?types=quote,news,chart&range=1s&last=1`
  }

  refreshStockInfo = () => {
    fetch(this.url).then(r => r.json()).then(j => {
      this.setState({
        price: j.quote.iexRealtimePrice
      })
    })
  }

  componentDidMount() {
    // this.refreshStockInfo()
    setInterval(this.refreshStockInfo, 1000)
  }

  render() {
    return <StockValue ticker={this.props.ticker} price={this.state.price} />

  }

}

export default StockTicker
