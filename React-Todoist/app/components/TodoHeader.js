import React from 'react'
import ReactDOM from 'react-dom'


class TodoHeader extends React.Component {
  // 绑定键盘回车事件，添加新任务
  handlerKeyUp(e) {
    if(e.keyCode == 13) {
      let value = e.target.value;
      if(!value) return false;
      let date = new Date().Format("yyyy-MM-dd hh:mm")
      let newTodoItem = {
        text: value,
        isDone: false,
        time: date
      };
      e.target.value = '';
      this.props.addTodo(newTodoItem)
    }
  }
  componentWillMount() {
    //日期格式化
    Date.prototype.Format = function (fmt) {
      let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    }
  }
  render(){
    return (
        <div className="todo-header">
          <input className="todoInput" autoFocus ref="input" onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="待办事项，回车键确认"/>
        </div>
    )
  }
}
export default TodoHeader