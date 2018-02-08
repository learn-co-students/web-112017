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

#### 9. JWT Authentication Flow
1. User requests access with username and password
2. The app validates the credentials
3. The app gives a signed token to the client
4. The client stores the token and presents it with every request

#### 10. `jwt` gem, secret, and algos

```ruby
class ApplicationController < ActionController::API
  private

  def issue_token payload
    JWT.encode(payload, secret, algorithm)
  end

  def authorize_user!
    if !current_user.present?
      render json: {error: 'No user id present'}
    end
  end

  def current_user
    @current_user ||= User.find_by(id: token_user_id)
  end

  def token_user_id
    decoded_token.first['user_id']
  end

  def decoded_token
    if token
      begin
        JWT.decode(token,secret, true, {algorithm: algorithm})
      rescue JWT::DecodeError
        return [{}]
      end
    else
      [{}]
    end
  end

  def token
    request.headers['Authorization']
  end

  def secret
    "secret"
  end

  def algorithm
    "HS256"
  end
end
```

#### 11. Authorization
