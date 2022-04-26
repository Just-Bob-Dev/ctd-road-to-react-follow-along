import * as React from 'react';

function AddTodoForm(props) {
    const {onAddTodo} = props;
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoObj = {id: Date.now(), title: todoTitle}

        onAddTodo(todoObj);
    
        setTodoTitle('');
    }

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }
    
    return(
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor='todoForm'>Title: </label>
                <input id='todoForm' value={todoTitle} onChange={handleTitleChange} name="title" ></input>
                <button type='submit'>Add</button>
            </form>
            {/* <p>
                Searching for: <strong>{todoTitle}</strong>
            </p> */}
        </div>
    )
}

export default AddTodoForm;