document.addEventListener('DOMContentLoaded', function() {
  // ADDING ONE EVENT HANDLER TO ONE ELEMENT
  // ---
  // All we have to do to add event listeners to an element is to
  // first select the element and then call `addEventListener` on it
  // with the type of the event and the function to be called later.
  //
  // const p = document.querySelector("p")
  // p.addEventListener("click", function(event) { event.target.style.color = 'red'; })



  // ADDING ONE EVENT HANDLER TO MULTIPLE ELEMENTS ONE BY ONE
  // ---
  // This technique works well when there aren't dynamic elements
  // being added to the page. For example, when we weren't adding
  // new paragraphs to the page, this is a fine technique to use.
  // However, once our page becomes dynamic, then we need a way
  // to handle events for existing elements as well as newly created
  // elements all at the same time.
  //
  // const pTags = document.querySelectorAll("p")
  // pTags.forEach(function(p) {
  //   p.addEventListener("click", function(event) {
  //     event.target.style.color = 'red'
  //   })
  // })
  //
  // // addings event handlers to all as on page at this time
  // const aTags = document.querySelectorAll("a")
  // aTags.forEach(function(a) {
  //   // const a = document.querySelector("a")
  //   a.addEventListener("click", handleDelete)
  // })



  // ADDING ONE EVENT LISTENER TO MULTIPLE ELEMENTS IN ONE SWOOP
  // ---
  // Here, we want to use a technique called event delegation. Event
  // delegation depends on bubbling. That is, when an event is fired
  // on a child element, the parent element also becomes aware of that
  // event. We can use this to add ONE event listener to multiple elements
  // only one time. We have to find the parent element of all elements that
  // we want to attach the event to, and then add the event listener to
  // that. In the callback function, all we need to do is put a conditional
  // which filters actions based on properties of what's interacted with.

  function handleDelegatedParagraphClick(event) {
    if (event.target.tagName === "P") {
      event.target.style.color = 'blue'
    }
  }

  function handleDelegatedDelete(event) {
    if (event.target.tagName === "A") {
      event.preventDefault() // don't do the default action

      event.target.parentNode.remove()
    }
  }

  const pContainer = document.querySelector("main")
  pContainer.addEventListener("click", handleDelegatedParagraphClick)
  pContainer.addEventListener("click", handleDelegatedDelete)



  // ADDING ELEMENTS TO PAGE BASED ON EVENTS (DYNAMICALLY)
  // ---
  // Adding elements to the page programmatically is a very
  // common pattern in developing applications. For us, it means
  // defining when an element is added to the page (or, after
  // which event), as well as how that element looks.

  const form = document.querySelector("form")
  const input = document.querySelector("input[type=text]")

  function handleFormSubmit(event) {
    event.preventDefault()

    const value = input.value

    const newP = document.createElement("p")
    newP.innerText = `${value} `

    const newA = document.createElement("a")
    newA.innerText = 'x'
    newA.href = '#'

    newP.append(newA)
    pContainer.append(newP)

    input.value = ''
  }

  form.addEventListener("submit", handleFormSubmit)
})
