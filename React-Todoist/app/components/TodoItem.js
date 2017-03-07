import React from 'react'
import ReactDOM from 'react-dom'


class TodoItem extends React.Component {
  handlerChange() {
    let isDone = !this.props.isDone;
    this.props.changeTodoState(this.props.index, isDone);
  }
  handlerDelete() {
    this.props.deleteTodo(this.props.index)
  }
  render() {
    let className = this.props.isDone?'task-done':''
    return (
      <li className={className+' task'}>
        <label>
        <input type="checkbox" className="input_check" checked={this.props.isDone} onChange={this.handlerChange.bind(this)} />
        <i className="time">{this.props.time}</i>
        <span>{this.props.text}</span>
        <a className="operate-btn delBtn" ref="delButton" onClick={this.handlerDelete.bind(this)}>删除</a>
        </label>
      </li>
    )
  }
}

export default TodoItem