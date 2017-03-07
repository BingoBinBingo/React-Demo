import React from 'react'

class TodoHeader extends React.Component {
  // 绑定键盘回车事件，添加新任务
  handlerKeyUp(e) {
    if(e.keyCode == 13) {
      let value = e.target.value;
      if(!value) return false;
      let newTodoItem = {
        text: value,
        isDone: false
      };
      e.target.value = '';
      this.props.addTodo(newTodoItem)
    }
  }
  render(){
    return (
        <div className="todo-header boxCenter">
          <input type="text" className="todoInput" onKeyUp={this.handlerKeyUp.bind(this)} placeholder="待办事项"/>
        </div>
    )
  }
}
export default TodoHeader