import * as React from 'react';
import InputWithLabel from './inputWithLabel';
import TodoList from './TodoList';

function Search({onSearch, searchTerm, todoItems, onRemoveStories}) {
    const handleSearch = (event) => {
        onSearch(event.target.value);
      }
    
      const searchStories = todoItems.filter((x) => x.title.toLowerCase().includes(searchTerm.toLowerCase()))
    
      return(
        <>
            <InputWithLabel 
                id="search"
                value={searchTerm}
                onInputChange={handleSearch}
                isSearch="false"
            >
                <strong>Search: </strong>
            </InputWithLabel>

            <TodoList list={searchStories} onRemoveItem={onRemoveStories}/>
        </>
      )
}

export default Search;



// function Search(props) {
  
//     const handleSearch = (event) => {
//       props.onSearch(event.target.value);
//     }
  
//     const searchStories = props.todoItems.filter((x) => x.title.toLowerCase().includes(props.searchTerm.toLowerCase()))
  
//     return(
//       <>
//         <InputWithLabel id="search"  value={props.searchTerm} onInputChange={handleSearch}/>
//         <TodoList list={searchStories}/>
//       </>
//     )
//   }