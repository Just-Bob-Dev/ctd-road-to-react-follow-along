import * as  React from 'react';
import TodoListItem from './TodoListItem';

function TodoList(props) {
  const {list} = props
    return(
        <ul>
          { 
            list.map(function(listItem) {
              return (<TodoListItem key={listItem.id} item={listItem}/>);
            })
          }
        </ul>
      );
}

export default TodoList;