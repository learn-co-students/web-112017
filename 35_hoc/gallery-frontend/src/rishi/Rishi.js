import React from 'react'
import { Redirect } from 'react-router'
import WithAuth from '../hoc/WithAuth'


const Rishi = (props) => {
  return (<h1>HI RISHI HERE</h1>)
}

export default WithAuth(Rishi)
