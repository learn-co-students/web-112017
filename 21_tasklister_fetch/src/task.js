class Task {
  constructor({id, listId, description, priority}) {
    this.id = id
    this.listId = listId
    this.description = description
    this.priority = priority
  }

  itemTemplate() {
    const newTask = document.createElement('li')
    newTask.innerHTML = `Task: ${this.description} <br> Priority: ${this.priority}`
    return newTask
  }
}
