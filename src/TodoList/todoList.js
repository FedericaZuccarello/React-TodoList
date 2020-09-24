import React from 'react';
import TodoItem from '../TodoItem/todoItem'

class TodoList extends React.Component{

    render(){

        const{ todos} = this.props;

        return(
            <div className='todoListContainer'>
                {
                    todos.map((_todo, _index) => {
                        return(
                            <TodoItem removeTodoFn={this.removeTodo} updateTodoFn={this.updateTodo} key={_index} todo={ _todo}/>
                            )
                    })
                }
            </div>
        );
    }

    updateTodo = (todo) =>{
        this.props.updateTodoFn(todo);
    }

    removeTodo = (todo) =>{
        this.props.removeTodoFn(todo);
    }
}

export default TodoList;