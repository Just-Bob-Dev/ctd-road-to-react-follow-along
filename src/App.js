import * as  React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function Search() {
  return(
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

function App() {
  return(
    <div>
      <h1>My Hacker Stories</h1>
      <h2>Some other change to test things</h2>
      <Search />
      <hr />
      <TodoList />
      <AddTodoForm />
    </div>
  );
}

export default App;
