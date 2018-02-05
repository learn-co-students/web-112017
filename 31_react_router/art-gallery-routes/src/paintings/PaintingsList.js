import React from 'react'
import PaintingItem from './PaintingItem'

const paintingComponents = (paintings, filter) => {
  // we want this to be case insensitive
  const filteredByName = paintings.filter((p) => p.title.toLowerCase().includes(filter.filterName.toLowerCase()))
  const filteredByNameAndDate = filteredByName.filter((p) => p.date && p.date.includes(filter.filterDate))
  const paintingItems = filteredByNameAndDate.map((p) => <PaintingItem painting={ p } key={ p.id } />)
  return paintingItems
}

const PaintingsList = ({ paintings, filter }) => {
  return (
    <div className="paintings-list row">
      { paintingComponents(paintings, filter) }
    </div>
  )

}

export default PaintingsList
