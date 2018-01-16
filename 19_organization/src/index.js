document.addEventListener('DOMContentLoaded', function(DOMContentLoadedEvent) {
  // create unique lists
  let listId = 0

  // if there's not one list, hide task form
  const taskForm = document.getElementById('create-task-form')
  taskForm.style.display = 'none'

  // add event listener to listen for submit events on new task form
  taskForm.addEventListener('submit', function(event) {
    // don't refresh the page
    event.preventDefault()

    // get task list description and priority
    const newTaskList = document.getElementById('parent-list')
    const newTaskDescription = document.getElementById('new-task-description')
    const newTaskPriority = document.getElementById('new-task-priority')

    // build new task
    const newTask = document.createElement('li')
    newTask.innerHTML = `Task: ${newTaskDescription.value} <br> Priority: ${newTaskPriority.value}`

    // add a new task to the chosen list
    document.getElementById(newTaskList.value).querySelector('ul').append(newTask)
  })

  // add event listener to listen for submit events on new list form
  const listForm = document.getElementById('create-list-form')
  listForm.addEventListener('submit', function(event) {
    ++listId

    // don't refresh the page
    event.preventDefault()

    // if there's at least one list, display task form
    taskForm.style.display = 'block'

    // add an option to the list in the task form
    const newListTitle = document.getElementById('new-list-title')
    const listSelect = taskForm.querySelector('#parent-list')
    const newOption = document.createElement('option')
    newOption.value = listId
    newOption.innerText = newListTitle.value
    listSelect.append(newOption)

    // show a new list on the page
    const newList = document.createElement('div')
    newList.className = "list"
    newList.id = listId
    const newListH2 = document.createElement('h2')
    const newListUl = document.createElement('ul')
    const newListDeleteButton = document.createElement('button')
    newListDeleteButton.className = 'delete-list'
    newListDeleteButton.innerText = 'X'
    newListH2.append(newListDeleteButton)
    newListH2.append(newListTitle.value)
    newList.append(newListH2)
    newList.append(newListUl)
    const allLists = document.getElementById('lists')
    allLists.append(newList)

    // clear the input
    newListTitle.value = ''

    // add functionality to delete a list
    newListDeleteButton.addEventListener('click', function(event) {
      // remove list div from page
      event.target.parentNode.parentNode.remove()

      // remove list option from dropdown
      newOption.remove()

      // if there are no lists, then hide the task create form
      if (!allLists.children.length) {
        taskForm.style.display = 'none'
      }
    })
  })

});
