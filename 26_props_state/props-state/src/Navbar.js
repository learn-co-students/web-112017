import React from 'react';

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      professionalism: true,
      color: 'blue'
    }

    this.toggleProfessionalism = this.toggleProfessionalism.bind(this)
    this.slogan = this.slogan.bind(this)

  }

  toggleProfessionalism() {
    if (this.state.professionalism) {
      this.setState({
        professionalism: false
      });
    } else {
      this.setState({
        professionalism: true
      });
    }
    console.log(this.state.professionalism);
  }

  slogan() {
    if (this.state.professionalism) {
      return this.props.profSlogan;
    } else {
      return this.props.unprofSlogan;
    }
  }

  render() { return (
  <div className='ui inverted orange menu'>
    <a className='item'>
      <h2 className='ui header'>
        <div className='content'>{this.props.title}</div>
        <div className='sub header'>{ this.slogan() }</div>
      </h2>
    </a>
    <div className="right menu">
      <div className="item">
        <div className="ui button" onClick={ this.toggleProfessionalism }>
          Toggle Professionalism
        </div>
      </div>
    </div>
  </div>);
  }
}
//
// const Navbar = props => {
//   return (<div className='ui inverted orange menu'>
//     <a className='item'>
//       <h2 className='ui header'>
//         <div className='content'>{props.title}</div>
//         <div className='sub header'>{props.slogan}</div>
//       </h2>
//     </a>
//     <div className="right menu">
//       <div className="item">
//         <div className="ui button">
//           Toggle Professionalism
//         </div>
//       </div>
//     </div>
//   </div>);
// };


export { Navbar };
