# Fetch and Promises
- Client-Server architecture
- Anatomy of an HTTP Request
  - The client does some action that sends a request
  - The server receives the request and does some action(s)
  - The server sends back a response that the client will handle
- `XMLHttpRequest` (XHR)
  - Original way we made requests back in the day
  - Made by Microsoft for Outlook
  - Requires `xhr.open(METHOD, PATH_TO_RESOURCE)` and `xhr.send()`
- Promises
  - An object for representing the eventual completion (or failure) of
  an asynchronous operation, and its resulting value
  - Three potential states
    1. **pending** - initial state, neither fulfilled or rejected
    2. **fulfilled** - operation was completed successfully
    3. **rejected** - operation failed
  - A promise can either be fulfilled or rejected and is handled by
  it associated `then`/`catch` method.
- `fetch(PATH_TO_RESOURCE, options)`
  - Promise way of making an API Request
  - **requires** the path of the resource (i.e. a url)
  - *optionally* an options object
    - Where we can set methods, headers, and request body
  - Has a `Body` mixin to declare content type and how it should be handled
    - `res.json()` allows us to take the data and have it be JSON
