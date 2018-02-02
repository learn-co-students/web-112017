import React from 'react'

import StockTicker from './StockTicker'

class StockContainer extends React.Component {

  allStocks = ['AAPL', 'AMZN', 'GOOGL', 'CROX', 'INTC', 'VIAB']

  render() {
     return this.allStocks.map((t) => {
       return (<StockTicker
          ticker={t}
        />)
     })
  }

}

export default StockContainer
