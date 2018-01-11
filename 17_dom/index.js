// ==============================================
// DOCUMENT OBJECT MODEL (DOM)

// getElements... returns an HTMLCollection object
// This object has a length and indexed keys, so
// elements can be accessed like an array as well
const tds = document.getElementsByTagName("td")
tds.map // `undefined`

// If I need to coerce this HTMLCollection to an
// array, I can use the spread operator
const tdsArr = [...tds]
tdsArr.map // the map function!

// I can use element selectors (getElements... or
// querySelector...) on any element in the DOM.
// Here, I'll find a table, and then look for the
// first `td` element inside of that table
const table = document.getElementById("my-table")
const td = table.querySelector("td")
td // my td!

// Elements can be manipulated like other objects
// in JavaScript. Element objects have properties
// which are any data type
td.style.backgroundColor = "#00ff00"

// Elements can be created, read, updated or deleted.
// Above, we see an example of reading and updating
// Deleting an element is as easy as finding that
// element and calling the `remove` method
td.remove()

// There are two main ways to create elements and
// add them to the DOM tree to be displayed on the page.
// The first is to write some HTML that you want to see
// find the parent element that you want that HTML to be
// added to, and then set that parent's innerHTML to
// the template
const template = `
  <tr>
    <td>Added by templating!</td>
  </tr>
`
table.innerHTML = template
table.innerHTML += template

// The second way to do this is to add code
// programmatically. This means using the methods
// provided by the DOM to create nodes and append
// them to the appropriate parent
const newTr = document.createElement('tr')
const newTd = document.createElement('td')
const newTdText = document.createTextNode('Added programmatically')

newTd.append(newTdText)
newTr.append(newTd)
table.append(newTr)

const newTrCopy = newTr.cloneNode(true)
table.prepend(newTrCopy)

// ==============================================

// ==============================================
// BROWSER OBJECT MODEL

// The browser object model (BOM) encompasses everything
// else given to us by the browser to affect it or our
// application. This includes timers, `location`, `localStorage`, and `console`:

// localStorage
let num_visits = parseInt(localStorage.getItem("num_visits"))
if (num_visits) {
  localStorage.setItem("num_visits", ++num_visits)
} else {
  localStorage.setItem("num_visits", 1)
}

// console
console.log(`You've opened this site ${num_visits} times!`)

// setTimeout
setTimeout(function(newTr, table) {
  const changedTrCopy = newTr.cloneNode(true)
  changedTrCopy.querySelector('td').innerText += ' in a setTimeout!!!'
  table.prepend(changedTrCopy)
}, 3000, newTr, table)

// location (uncomment that line to make it work)
setTimeout(function() {
  // location = 'https://www.google.com'
}, 10000)

// ==============================================
