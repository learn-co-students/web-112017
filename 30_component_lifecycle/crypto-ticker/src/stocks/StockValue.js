import React from 'react'

class StockValue extends React.Component {
  state = { color: "black"}

  getColorByPrice(newPrice, oldPrice) {
    if (oldPrice == 0) return "black"
    if (newPrice > oldPrice) {
      return "green"
    } else if (newPrice < oldPrice) {
      return "red"
    } else {
      return "black"
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
    // const newColor = this.getColorByPrice(nextProps.price, this.props.price)
    // if (newColor != "black"
    //     || this.props.price == 0
    //     || this.state.color != "black" && newColor == "black") {
    //   console.log(`rerendered ${this.props.ticker} `)
    //   return true
    // } else {
    //   return false
    // }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      color: this.getColorByPrice(nextProps.price, this.props.price)
    })
  }

  render() {
    return (<div>
        <h1>{this.props.ticker}</h1>
        <h3 style={{"color": this.state.color}}>{this.props.price}</h3>
      </div>)
  }

}

export default StockValue
