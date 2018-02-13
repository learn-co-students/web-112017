import React from 'react'
import { Redirect } from 'react-router'


const WithAuth = WrappedComponent => {
    return (props) => {
      return (props.auth.loggingIn || props.auth.currentUser) ?
        <WrappedComponent {...props} />
      :
        <Redirect to="/404" />
  }
}


export default WithAuth
//
// const RishiWithoutAuth = (props) => {
//   return (<h1>HI IT ME</h1>)
// }
//
// const RishiWithAuth2 = WithAuth(RishiWithoutAuth)
//
// const RishiWithAuth = (props) => {
//   return
//     (props.auth.loggingIn || props.auth.currentUser) ?
//       <RishiWithoutAuth {...props} />
//     :
//       <Redirect to="/404" />
// }
//
// const NewPaintingFormWithoutAuth = (props) => {
//   return (<form>
//         <input type="text" />
//         <input type="submit" />
//       </form>)
// }
//
// const NewPaintingFormWithAuth2 = WithAuth(NewPaintingFormWithoutAuth)
//
// const NewPaintingFormWithAuth = (props) => {
//   return (props.auth.loggingIn || props.auth.currentUser) ?
//   (
//     <form>
//       <input type="text" />
//       <input type="submit" />
//     </form>
//   )
//   :
//   <Redirect to="/404" />
// }
