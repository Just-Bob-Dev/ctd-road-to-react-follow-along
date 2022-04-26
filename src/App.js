import * as  React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function Search(props) {
  
  const handleSearch = (event) => {
    console.log(event);
    props.onSearch(event.target.value);
  }

  const searchStories = props.todoItems.filter((x) => x.title.toLowerCase().includes(props.searchTerm.toLowerCase()))

  return(
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={handleSearch}/>
      <p>Searching for: <strong>{props.searchTerm}</strong></p>
      <TodoList list={searchStories}/>
    </div>
  )
}

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [todoList, setTodoList] = React.useState([]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

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
      <AddTodoForm onAddTodo={addTodo}/>
      <hr />
      <TodoList list={todoList} />
      {/* <p>{newTodo}</p> */}
      <Search onSearch={setSearchTerm} searchTerm={searchTerm} todoItems={todoItems}/>
      
    </div>
  );
}

export default App;
