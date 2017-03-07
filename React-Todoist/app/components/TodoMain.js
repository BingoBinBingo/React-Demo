import React from 'react'
import TodoItem from './TodoItem'

class TodoMain extends React.Component {
  render(){
    if(this.props.todos.length == 0) {
      return (
        <p className="todo-empty">恭喜您，目前没有待办事项</p>
      )
    } else {
      return (
       <div>
       <p className="undone-title Padding">未完成事项</p>
        <ul className="todo-main">
          {
            this.props.todos.map((todo,index) => {
              //{...this.props} 用来传递TodoMain的todos属性和delete、change方法。
              return <TodoItem text={todo.text} isDone={todo.isDone} index={index} {...this.props} key={index}/>
            })
          }
        </ul>
      </div>
      )
    }
  }
}
export default TodoMain