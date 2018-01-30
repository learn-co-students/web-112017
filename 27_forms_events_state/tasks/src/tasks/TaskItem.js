import React from 'react'

class TaskItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>{this.props.task.title}</h3>
      </div>
    )
  }
}

export default TaskItem
