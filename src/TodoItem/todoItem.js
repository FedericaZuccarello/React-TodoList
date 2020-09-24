import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
class TodoItem extends React.Component{

    render(){

        const {todo} = this.props;

        if(todo){
            return(
            <div className='contaier'>
                <div className={ 'todoItem'+ (todo.completed ? ' completed' : '')} onClick={this.toggleTodo}>
                    {todo.text} 
                </div>
                <FontAwesomeIcon icon={faTrash} onClick={this.removeTodo}/>
            </div>
        )
        }else{
            return(
                <div hidden></div>
            )
        }
        
    };

    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todo);
    }

    removeTodo = () => {
        this.props.removeTodoFn(this.props.todo);
    }
}

export default TodoItem;