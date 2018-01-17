class App {
  static init() {
    // add event listener to listen for submit events on new task form
    const taskForm = document.getElementById('create-task-form')
    taskForm.addEventListener('submit', App.handleCreateTask)

    // add event listener to listen for submit events on new list form
    const listForm = document.getElementById('create-list-form')
    listForm.addEventListener('submit', App.handleCreateList)

    // add event listener to listen for delete
    const listSection = document.getElementById('lists')
    listSection.addEventListener('click', App.handleDeleteList)
  }

  static handleCreateTask(event) {
    // don't refresh the page
    event.preventDefault()

    // GET INFORMATION FROM THE USER
    // get task list description and priority
    const newTaskListId = document.getElementById('parent-list').value
    const newTaskDescription = document.getElementById('new-task-description').value
    const newTaskPriority = document.getElementById('new-task-priority').value

    // DO SOMETHING WITH THAT INFORMATION
    // build new task

    fetch({
      url: 'http://localhost:3000/tasks',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // what kind of data am i sending?
        'Accept': 'application/json' // what kind of data do i want back?
      },
      body: JSON.stringify({ // pass the data
        description: newTaskDescription,
        priority: newTaskPriority,
        listId: newTaskListId
      })
    }).then(res => res.json())
      .then(taskData => {
        const task = new Task(taskData)

        // RENDER SOMETHING
        // add a new task to the chosen list
        document.getElementById(newTaskListId)
          .querySelector('ul')
          .append(task.itemTemplate())
      })
  }

  static handleCreateList(event) {
    // don't refresh the page
    event.preventDefault()

    // creating a new list instance
    const newListTitle = document.getElementById('new-list-title')
    const list = new List(newListTitle.value)

    // clear the input
    newListTitle.value = ''

    // add an option to the list in the task form
    const listSelect = document.querySelector('#parent-list')
    listSelect.append(list.optionTemplate())

    // show a new list on the page
    const allLists = document.getElementById('lists')
    allLists.append(list.divTemplate())
  }

  static handleDeleteList(event) {
    if (event.target.className === 'delete-list') {
      // find the id of the list to delete
      const listDiv = event.target.parentNode.parentNode
      const listId = listDiv.id
      const listOption = document.querySelector(`option[value="${listId}"]`)

      // remove list div from page
      listDiv.remove()

      // remove list option from dropdown
      listOption.remove()
    }
  }

  // static displayTaskForm(hide = true) {
  //   const taskForm = document.getElementById('create-task-form')
  //   taskForm.style.display = hide ? 'block' : 'none'
  // }
}

document.addEventListener('DOMContentLoaded', App.init);
