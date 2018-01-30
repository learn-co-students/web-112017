import React from 'react'
import TaskItem from './TaskItem'

class TaskList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    this.taskItems = this.props.tasks.map((t) => <TaskItem key={t.id} task={t}></TaskItem>)
    return (
      <div>
        <ul>
          {this.taskItems}
        </ul>
      </div>
    )
  }
}

export default TaskList;
