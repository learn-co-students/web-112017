import React from 'react'


class NewTaskForm extends React.Component {

  constructor(props) {
    super(props)
    // this.value = "hello world"

    this.state = {
      value: ""
    }
  }

  onNewFormInputChange = (e) => {
    const newVal = e.target.value.toUpperCase()
    this.setState({
      value: newVal
    })
  }

  onNewFormSubmit = (e) => {
    e.preventDefault()
    this.props.onTaskAdded(this.state.value)
  }

  render() {
    return (
      <div>
        <form className='new-task-form' onChange={ this.onNewFormInputChange } onSubmit= { this.onNewFormSubmit }>
          <input type='text' placeholder='Task title' name='title' ></input>
          <input type='submit' value='Add Task'></input>
        </form>
        <p> { this.state.value } </p>
      </div>
    )
  }

}

export default NewTaskForm
