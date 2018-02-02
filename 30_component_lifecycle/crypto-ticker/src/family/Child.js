import React from 'react'


class Child extends React.Component {
    componentWillMount() {
      console.log("Child will mount!")
    }

    render() {
      console.log("Child rendering")
      return <div />
    }

    componentDidMount() {
      console.log("Child mounted!")
    }

}

export default Child
