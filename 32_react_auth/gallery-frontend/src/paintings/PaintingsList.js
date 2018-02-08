import React from 'react'
import PaintingItem from './PaintingItem'
import { Link } from 'react-router-dom'

const paintingComponents = (paintings, filter) => {
  // we want this to be case insensitive
  const filteredByName = paintings.filter((p) => p.title.toLowerCase().includes(filter.filterName.toLowerCase()))
  const filteredByNameAndDate = filteredByName.filter((p) => p.date && p.date.includes(filter.filterDate))
  const paintingItems = filteredByNameAndDate.map((p) => {
    return (<Link to={`/paintings/${p.id}`} key={ p.id }>
      <PaintingItem painting={ p } />
    </Link>)
  })
  return paintingItems
}

const PaintingsList = ({ paintings, filter }) => {
  console.log("rerendering list")
  return (
    <div className="paintings-list row">
      { paintingComponents(paintings, filter) }
    </div>
  )

}

export default PaintingsList
