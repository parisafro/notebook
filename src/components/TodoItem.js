import React, { Component } from 'react';
// import PropTypes from 'prop-types';

function TodoItem(props){
    const getStyle=()=>{
        return{
            background:'#c2d6d6',
            padding:'10px',
            borderBottom:'1px #000 dotted',
            textDecoration:props.TodoItems.completed ? 'line-through': 'none'
        }
    }
    const {id,title}=props.TodoItems;
    return(
        <div style={getStyle()}>
            <p>
                <input type="checkbox" onChange={()=>props.MarkDone(id)}/>
                {title}
                <button onClick={()=>props.delTodo(id)} style={btnStyle}>x</button>
            </p>
        </div>
    )
}

const btnStyle={
    background:'red',
    color:'white',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    float:'right',
    curser:'pointer'
}

export default TodoItem;
