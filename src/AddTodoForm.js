import * as React from 'react';

function AddTodoForm() {
    return(
        <div>
            <form>
                <label htmlFor='todoForm'>Title: </label>
                <input id='todoForm'></input>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;