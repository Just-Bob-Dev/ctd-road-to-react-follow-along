import * as  React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1   
  }
]

function listPoints (item) {
  return <li>{item.points}</li>
}

function App() {
  const listItems = list.map(function(item){
    return <li>{item.url}</li>
  })

  return(
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" />

      <hr />

      {/** render the list 
       * piece meal problems and then move forward.
       */}
      <ul>
        { 
          list.map(function(item) {
            return <li key={item.objectID}>{item.title}</li>;
          })
        }
        {
          listItems
        }
        {
          list.map(listPoints)
        }
      </ul>

      <hr />
      <ul>
        {
          list.map(function(item) {
            return (
              <li key={item.points}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <p>{item.points}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
