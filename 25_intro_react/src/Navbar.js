const Navbar = props => {
  return myCreateElement('div', { className: 'ui inverted orange menu' }, [
    myCreateElement('a', { className: 'item' }, [
      myCreateElement('h2', { className: 'ui header' }, [
        myCreateElement('i', { className: `${props.icon} icon` }),
        myCreateElement('div', { className: 'content' }, props.title),
        myCreateElement('div', { className: 'sub header' }, props.slogan)
      ])
    ])
  ]);
};

export { Navbar };
// import { Navbar } from 'Navbar'

// const map = () => {};
// const each = () => {};
// const reduce = () => {};
//
// export { map, each, reduce };
// // import { map } from './library'
