import * as  React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function Search() {
  const handleChange = (event) => {
    console.log(event);
  }

  const handleMouseOver = (event) => {
    console.log(event);
  }

  return(
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={handleChange} onMouseOver={handleMouseOver}/>
    </div>
  )
}

function App() {
  // const handleAddition = (event) => {
  //   console.log("caught it: ", event.target.value);
  // }
  const [newTodo, setNewTodo] = React.useState('');

  const todoItems = [
    {
      id: 0,
      title: 'Finish Patio',
      author: 'Bob',
      points: 5
    },
    {
      id: 1,
      title: 'Paint Bench',
      author: 'Bob',
      points: 2 
    },
    {
      id: 2,
      title: 'Grade Assignments',
      author: 'Bob',
      points: 10
    }
  ]

  return(
    <div>
      <h1>My Hacker Stories</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <hr />
      <TodoList list={todoItems} />
      <p>{newTodo}</p>
    </div>
  );
}

export default App;
