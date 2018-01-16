const List = (function createListClass() {
  let listId = 0
  return class List {
    constructor(title) {
      this.title = title
      this.id = ++listId
    }

    optionTemplate() {
      const newOption = document.createElement('option')
      newOption.value = this.id
      newOption.innerText = this.title
      return newOption
    }

    divTemplate() {
      const newList = document.createElement('div')
      newList.className = "list"
      newList.id = this.id
      const newListH2 = document.createElement('h2')
      const newListUl = document.createElement('ul')
      const newListDeleteButton = document.createElement('button')
      newListDeleteButton.className = 'delete-list'
      newListDeleteButton.innerText = 'X'
      newListH2.append(newListDeleteButton)
      newListH2.append(this.title)
      newList.append(newListH2)
      newList.append(newListUl)
      return newList
    }
  }
})()
