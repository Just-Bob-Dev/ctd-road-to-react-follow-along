import * as  React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import Search from './search';

const initialTodoItems = [
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


const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(JSON.parse(localStorage.getItem(key)) || initialState);

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value]);

  return [value, setValue];
}

function App() {
  // const[searchTerm, setSearchTerm] = useSemiPersistentState('search', '');

  const [todoList, setTodoList] = useSemiPersistentState('todoList', []);

  const [stories, setStories] = React.useState(initialTodoItems);

  const handleRemoveStories = item => {
    const newStories = stories.filter(story => item.id !== story.id);
    setStories(newStories);
  }

  const handleRemoveTodoItems = item => {
    const tempTodoItemArray = todoList.filter(todo => item.id !== todo.id);
    setTodoList(tempTodoItemArray);
  }

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return(
    <>
      <h1>My Hacker Stories</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <hr />
      <TodoList list={todoList} onRemoveItem={handleRemoveTodoItems}/>
      {/* <p>{newTodo}</p> */}
      <hr />
      {/* <Search onSearch={setSearchTerm} searchTerm={searchTerm} todoItems={stories} onRemoveStories={handleRemoveStories}/> */}
      
    </>
  );
}

export default App;
