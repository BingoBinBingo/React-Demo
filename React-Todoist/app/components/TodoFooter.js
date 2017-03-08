import React from 'react'


class TodoFooter extends React.Component {
  deleteAll() {
    this.props.clearDone()
  }
  changeAll(e) {
    this.props.changeTodoState(null, e.target.checked, true)
  }
  render() {
    let untodos = this.props.todoCount - this.props.todoDoneCount
    let todoed = this.props.todoDoneCount
    let alltodos = this.props.todoCount
    if (alltodos == 0) {
      return false
    } else {

      return (
        <div className="todo-footer">

        <div className="operate-pannel">
        <label className="allChecked">
          <input className="input_check" type="checkbox" checked={this.props.isAllChecked} onChange={this.changeAll.bind(this)} />全选
        </label>
        <span className="operate-btn item-alltodo">所有:{alltodos}</span>
        <span className="operate-btn item-untodo">未完成:{untodos}</span>
        <span className="operate-btn item-todoed">已完成:{todoed}</span>
        </div>
        <a className="operate-btn delAllBtn" onClick={this.deleteAll.bind(this)}>清空已完成</a>
      </div>
      )

    }

  }
}

export default TodoFooter