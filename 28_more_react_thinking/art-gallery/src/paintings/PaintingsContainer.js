import React from 'react'
import PaintingsSearch from './PaintingsSearch'
import PaintingsList from './PaintingsList'

class PaintingsContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      filter: {
        filterName: "",
        filterDate: ""
      }
    }
  }

  setFilter = (f) => {
    const newFilter = {...this.state.filter, ...f}
    this.setState({
      filter: newFilter
    })
  }

  render() {
    return (
      <div className="paintings-container">
        <PaintingsSearch setFilter={ this.setFilter } />
        <PaintingsList paintings={ this.props.paintings } filter={this.state.filter} />
      </div>
    )
  }
}

export default PaintingsContainer
