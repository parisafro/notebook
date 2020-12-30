import React,{useState,useEffect} from 'react';
import Todo from './components/Todo';
import Header from './components/layout/Header';
import AddTodoComp from './components/AddTodoComp';
import About from './components/pages/About';
// import PropTypes from 'prop-types';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import axios from 'axios';

function App(){
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>setTodos(res.data))
  }, [])

  const [todos,setTodos]=useState([]);

  const MarkDone=(id)=>{
    setTodos(todos.map(e=>{
      if(e.id===id)
      {
        e.completed=!e.completed
      }
      return e;
    }))
  }
    
  const delTodo=(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>setTodos(todos.filter(
      todo=>todo.id!==id
    )))
  }

  const AddTodo=(title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{

    headers:{},

    data:{
      title,
      compeleted:false
    }
  })
      .then(res =>setTodos(
      [...todos, res.data] 
      ));
  }

  return(
    
    <Router>
      <div className='App'>
        <div className="container">
          <Header/>
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <AddTodoComp AddTodo={AddTodo}/>
              <Todo 
              todos={todos} 
              MarkDone={MarkDone}
              delTodo={delTodo}/>
            </React.Fragment>
          )}/>
          <Route path='/About' component={About}/>
        </div>
      </div>
    </Router>
  )
}

export default App;