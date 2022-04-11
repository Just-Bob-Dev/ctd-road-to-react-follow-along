import * as React from 'react';

function AddTodoForm(props) {
    // const [todoTitle, setTodoTitle] = React.useState('');

    const handleAddTodo = (event) => {
        event.preventDefault();

        const newTodo = event.target.title.value;

        props.onAddTodo(newTodo);
    
        event.target.title.value = '';
        // setSearchTerm(event.target.value);
        // console.log("about to pass up");
        // props.onSearch(event);
    }
    return(
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor='todoForm'>Title: </label>
                <input id='todoForm' name="title" ></input>
                <button type='submit'>Add</button>
            </form>
            {/* <p>
                Searching for: <strong>{todoTitle}</strong>
            </p> */}
        </div>
    )
}

export default AddTodoForm;