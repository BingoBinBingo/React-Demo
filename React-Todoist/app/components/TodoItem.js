import React from 'react'


class TodoItem extends React.Component {

  render() {
    let className = this.props.isDone?'task-done':''
    return (
      <li>
        <label >
          <input type="checkbox" className="ant-checkbox-input" />
          <span className={className} title={this.props.text} >{this.props.text}</span>

        </label>
        <a className="delBtn">删除</a>
       </li>
    )
  }
}

export default TodoItem