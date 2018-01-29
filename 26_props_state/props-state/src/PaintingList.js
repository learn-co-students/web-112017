import React from 'react'
import Painting from './Painting'

const PaintingList = (props) => {
  let painting_elems = props.paintings.map((p) => <Painting painting={p} />)
  return (
    <div>
      <ul>
        {painting_elems}
      </ul>
    </div>
  )
}

export default PaintingList
