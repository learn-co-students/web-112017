// es2015
import React from 'react';
import ReactDOM from 'react-dom';
// import { Navbar } from './Navbar';
import Article from './Article';

// const myCreateElement = (type, props = {}, children) => {
//   return {
//     $$typeof: Symbol.for('react.element'),
//     type: type,
//     props: { children: children, props },
//     ref: null
//   };
// };

ReactDOM.render(
  <Article articleTitle="hello" articleText="world" />,
  document.getElementById('global')
);

/*
<h1 class="article-heading">My article title</h1>
<p class="article-main">My article text</p>
*/

/*
<!-- how the navbar should look -->
<div class="ui inverted orange menu">
  <a class='item'>
    <h2 class="ui header">
      <i class="paw icon"></i>
      <div class="content">
        ZooKeepr
      </div>
      <div class="sub header">
        Keep track of your animals
      </div>
    </h2>
  </a>
</div>
*/
