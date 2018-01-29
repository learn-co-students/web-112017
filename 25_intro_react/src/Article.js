import React from 'react';

class Article extends React.Component {
  render() {
    // return React.createElement('div', {}, [
    //   React.createElement('h1', { className: 'article-heading' }, 'something'),
    //   React.createElement('p', { className: 'article-main' }, 'something')
    // ]);

    return (
      <div>
        <h1 className="article-heading">{this.props.articleTitle}</h1>
        <p className="article-main">{this.props.articleText}</p>
      </div>
    );
  }
}

export default Article;
// import Article from 'Article.js'
