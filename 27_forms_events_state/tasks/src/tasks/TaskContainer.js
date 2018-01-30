import React from 'react'

import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'


class TaskContainer extends React.Component {
  constructor(props) {
    super(props)

    //this has to do with task object creation, not container
    this.currentTaskId = 0

    this.state = {
      tasks: [this.createTaskObject("Task One"), this.createTaskObject("I love working")]
    }
  }

  onTaskAdded = (newTaskTitle) => {
    this.state.tasks.push(this.createTaskObject(newTaskTitle))
    this.setState({
      tasks: this.state.tasks
    })
  }

  render() {
    return (
      <div>
        <NewTaskForm onTaskAdded={ this.onTaskAdded } />
        <TaskList tasks={ this.state.tasks }/>
      </div>
    )
  }

  //this has to do with task object creation, not container
  createTaskObject = (taskTitle) => {
    return {
      id: ++this.currentTaskId,
      title: taskTitle
    }
  }

}

export default TaskContainer
