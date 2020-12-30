import React, {useState } from 'react'

function AddTodoComp(props){
    const [title,setTitle]= useState("");

    const onChangeHandler=(e)=>setTitle(e.target.value)
    const onSubmitHandler=(e)=>{
       e.preventDefault()
       props.AddTodo(title);
       setTitle('')
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler} style={{display:'flex'}}>
                <input
                type="text"
                name="title"
                style={{flex:'10', padding:'10'}}
                placeholder='type here...'
                value={title}
                onChange={onChangeHandler}
                />
                <input
                type='submit'
                value='submit'
                className='btn'
                style={{flex:'1',backgroundColor:'#ced4da'}}
                />
            </form>
        </div>
    )
}

export default AddTodoComp;
