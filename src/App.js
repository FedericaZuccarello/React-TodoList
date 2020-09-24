import React from 'react';
import TodoList from './TodoList/todoList'
import AddTodo from './AddTodo/addTodo'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todos: []
    };
  }
  render(){
    return(
        <div className='todoList'>
          <AddTodo addTodoFn = {this.addTodo}/>
          <TodoList removeTodoFn={this.removeTodo} updateTodoFn={this.updateTodo} todos={this.state.todos}/>
        </div>  
      ); 
  }

  //to get called whenever the component is rendered 
  componentDidMount = () => {
    //using local storage
    const todos = localStorage.getItem('todos');
    if(todos){
      const savedTodos = JSON.parse(todos);
      this.setState({
        todos: savedTodos
      });
    }else{
      console.log('No todos');
    }
  }

  //to update the state when add a todo from submit buttom(addTodo)
  //set the async function because we have to wait that this.setState finish
  //before to set the state
  addTodo = async (todo) => {
    await this.setState({todos : [...this.state.todos, {
      text: todo,
      completed: false
    }] });
    //when the state is updated, will update localStorage
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  }

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(
      _todo => {
        if(todo === _todo){
          return{
              text: todo.text,
              completed: !todo.completed
          }
        }else{
          return _todo
        }
      }
    );
    await this.setState({todos : newTodos});
    //save on the storage new updated
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  removeTodo = async (todo) => {
    const newTodos = this.state.todos.map(
      _todo => {
        if(todo !== _todo){
          return _todo
        }
      }
    );
    await this.setState({todos : newTodos});
    
    //update the storage
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }


}

export default App;
