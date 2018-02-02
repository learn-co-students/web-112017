import React from 'react'
import Parent from './Parent'

class GrandParent extends React.Component {

  componentWillMount() {
    console.log("Grandparent will mount!")
  }

  render() {
    console.log("Grandparent rendering")
    return <Parent />
  }

  componentDidMount() {
    console.log("GrandParent mounted!")
  }

}

export default GrandParent
