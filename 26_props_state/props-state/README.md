# Props & State

* What is a component? What should be a component?
* `create-react-app` & `semantic-ui-css`
* Build the Painting List with props
* Changing Navbar color with state
* What should be a prop or state?


## Helpful Code

### Make Painting Pretty

```html
<div className="item">
  <div className="ui small image">
    <img src={props.painting.image} alt={props.painting.slug} />
  </div>
  <div className="middle aligned content">
    <div className="header">{`"${props.painting.title}" by ${props.painting
      .artist.name}`}</div>
    <div className="description">
      <a>
        <i className="large caret up icon" />
        {props.painting.votes} votes
      </a>
    </div>
  </div>
</div>
```

### Right Item on Navbar

```html
<div className="right menu">
  <div className="item">
    <div className="ui button">
      Change Color
    </div>
  </div>
</div>
```
