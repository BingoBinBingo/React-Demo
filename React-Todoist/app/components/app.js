/**
 * Created by FSX on 6/03/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'


class App extends React.Component{
    // 定义组件
    constructor(){

    super()
    //初始化todoist数组状态
    this.state = {
     todos:[]
    }

    }
  
  addTodo(item){

   this.state.todos.push(item)
   this.setState({todos:this.state.todos});
  }

  render(){

    return(
     <div className="todo-wrapper boxCenter">
      
      <TodoHeader addTodo={this.addTodo.bind(this)} />
      <TodoMain todos={this.state.todos}/>
      
     </div>

      )
  }

}

ReactDOM.render(<App/>,document.getElementById('container'))