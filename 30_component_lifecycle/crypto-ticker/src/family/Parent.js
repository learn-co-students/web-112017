import React from 'react'
import Child from './Child'

class Parent extends React.Component {

  componentWillMount() {
    console.log("Parent will mount!")
  }

  render() {
    console.log("Parent rendering")
    return <Child />
  }

  componentDidMount() {
    console.log("Parent mounted!")
  }

}

export default Parent
