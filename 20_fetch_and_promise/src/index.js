/*
 * Here we are adding our Event Listener to get our form's value
 */
document.getElementById('github-search').addEventListener('submit', function(e) {
  e.preventDefault()

  const username = document.querySelector('input[type="text"]')[0].value

  getUser(username);
});

function getUser(name) {

  fetch('https://api.github.com/users/' + name)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      assignValues(data);
      return data
    })
    .then(function(response) {
      getFollowers(response.followers_url);
    })
}

function assignValues(response) {
  document.getElementById('loader').style = 'display: none';

  document.getElementById('avatar').src = response.avatar_url;
  document.getElementById('name').innerText = response.name;
  document.getElementById('username').innerText = response.login;
  document.getElementById('location').innerText = response.location;
  document.getElementById('bio').innerText = response.bio;
  document.getElementById('count').innerText = 'Followers: ' + response.followers;
}

function getFollowers(url) {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(followers) {
      listFollowers(followers);
    });
}

function listFollowers(followers) {
  followers.forEach(function(f) {
    var li = document.createElement('li');
    li.innerHTML = '<a href="' + f.html_url + '">'
      + '<img src="' + f.avatar_url + '" alt="' + f.login + '"/>'
      + '</a>';

    document.getElementById('list').appendChild(li);
  });
}
