
const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
}

const API_ROOT = 'localhost:3001/api/v1'

const getPaintings = () => {
  return fetch(`${API_ROOT}/auth/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ username, password });
  }).then(res => res.json());
}


export default {
  paintings: {
    getPaintings
  }
}
