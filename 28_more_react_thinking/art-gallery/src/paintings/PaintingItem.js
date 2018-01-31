import React from 'react'

const PaintingItem = ({ painting }) => {
  return (
    <div className="painting-item col s12 m6 l4">
      <div className="card">
        <div className="card-image responsive-image">
          <img src={ painting.image } alt={ painting.title } />
          <span className="card-title">{ painting.title }</span>
        </div>
        <div className="card-content">
          <p>By { painting.artist.name } in { painting.date }</p>
        </div>
      </div>
    </div>
  )
}

export default PaintingItem
