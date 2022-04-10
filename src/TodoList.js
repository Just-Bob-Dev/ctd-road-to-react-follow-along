import * as  React from 'react';

const todoList = [
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

function TodoList() {
    return(
        <ul>
          { 
            todoList.map(function(item) {
              return (
                <li key={item.id}>{item.title}
                  <p>{item.points}</p>
                  <p>{item.url}</p>
                </li>
              );
            })
          }
        </ul>
      );
}

export default TodoList;