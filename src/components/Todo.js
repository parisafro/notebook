import React from 'react';
import TodoItem from './TodoItem';
// import PropTypes from 'prop-types';


function Todo(props) {
return props.todos.map((item)=>(
    <TodoItem 
    key={item.id} 
    TodoItems={item} 
    MarkDone={props.MarkDone}
    delTodo={props.delTodo}/>
))
}
export default Todo;