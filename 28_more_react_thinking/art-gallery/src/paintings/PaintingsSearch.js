import React from 'react'

class PaintingsSearch extends React.Component {

  setFilter = (e) => {
    this.props.setFilter({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="paintings-search row">
        <div className="col s8">
          <input placeholder="Filter By Name" type="text" name="filterName" onChange={ this.setFilter } />
        </div>
        <div className="col s4">
          <input placeholder="Filter by Date" type="number" name="filterDate" onChange={ this.setFilter } />
        </div>
      </div>
    )
  }
}

export default PaintingsSearch
