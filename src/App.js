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
  },
  {
    id: 3,
    title: 'something else',
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

const storiesReducer = ( state, action ) => {
  switch(action.type) {
    case 'SET_STORIES':
      return {
        ...state,
        data: action.payload
      }
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    case 'REMOVE_STORY':
      // return state.filter( story =>  action.payload.id !== story.id)
      return {
        ...state,
        data: state.data.filter(story => action.payload.id !== story.id)
      }
    default:
      throw new Error('error');
  }
}

const getInitialListItems = () =>
    new Promise(resolve => 
      setTimeout(
        () => resolve({ data: { todos: initialTodoItems } }),
        2000
      )
    );

function App() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', '');
  const [todoList, setTodoList] = useSemiPersistentState('todoList', []);

  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    {data: [], isLoading: false, isError: false}
  )

  React.useEffect(() => {
    dispatchStories({type: 'STORIES_FETCH_INIT'});

    // setIsLoading(true);
    getInitialListItems().then(result => {
      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.todos
      });
    })
    .catch(() => dispatchStories({type: 'STORIES_FETCH_FAILURE'}))
  }, []);

  const handleRemoveStories = item => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item
    })
  }

  const removeTodo = item => {
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
      <TodoList list={todoList} onRemoveItem={removeTodo}/> {/* will be onRemoveTodo when reviewing */}
      {/* <p>{newTodo}</p> */}
      <hr />
      {stories.isError && <p>Something Went Wrong</p>}
      {stories.isLoading ? (
        <p>Loading ...</p> ) :
        (<Search onSearch={setSearchTerm} searchTerm={searchTerm} stories={stories} onRemoveStories={handleRemoveStories}/>)
      }
      
      
    </>
  );
}

export default App;
