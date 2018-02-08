## Steps

#### 1. Make API Call

#### 2. Make User In Backend

#### 3. User Call Authenticates

```js
const login = (username, password) => {
  return fetch(`${API_ROOT}/auth/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ username, password });
  }).then(res => res.json());
}
```

```ruby
user = User.find_by(username: params[:username])
if user && user.authenticate(params[:password])
  render json: { id: user.id, username: user.username }
else
  render json: { error: "User is invalid" }, status: 401
end
```

#### 4. Where is Auth State?

#### 5. Passing the flow around using History

```js
this.props.handleSuccess(res)
this.props.history.push('/')
```

#### 6. Do all of this with Logout

#### 7. Set token on Login
```js
localStorage.setItem('token', user.id)
```  

#### 8. Use token to login
Via `componentDidMount` and `auth#show`

```js
const token = localStorage.getItem('token')
const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
}

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers
  }).then(res => res.json())
}
```

```js
componentDidMount() {
  const token = localStorage.getItem('token');
  if (token) {
    api.auth.getCurrentUser().then(user => {
      this.setState({ auth: { currentUser: user } })
    })
  }
}
```

#### 9. Authorization 
