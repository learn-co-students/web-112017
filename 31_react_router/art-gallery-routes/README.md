### Manipulating the Browser's URL

```js
window.history.pushState({}, null, "page")
```

```js
window.history.back()
```

### Components we use and Rishi's Cheat Sheet

#### BrowserRouter

We'll use this in one place in our application (and one place only). Very top level, essentially listening for when the route changes, and making that info accessible.

```jsx
<BrowserRouter>
   <App />
</BrowserRouter>
```

#### Switch

Pick one of the following routes (the first that matches), don't look at the others (like an if/ else if/ else if).

#### Route

Conditionally render a certain component based on what the route looks like.

```jsx
<Switch>
  <Route path="/login" component={Login} />
  <Route path="/paintings" component={PaintingsContainer} />
  <Route path="/" component={About} />
</Switch>
```

```jsx
<Route
  path="/paintings/:slug
  render={ ({ match }) => {
    return <PaintingItem painting={getPainting(match.params.slug)} />;
  } } />
```

#### Link

Changes the url we see in the browser, must have a 'to' prop.

```jsx
<Link to="/paintings" className="item">Paintings</Link>
```

#### Redirect

Forces a redirect to a particular route. We won't use this here.
