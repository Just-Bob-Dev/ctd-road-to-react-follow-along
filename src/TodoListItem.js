import * as  React from 'react';

function TodoListItem(props) {
    const {item, onRemoveItem} = props;
    return(
        <>
            <li>
                <span>{item.title}</span>
                <button onClick={() => onRemoveItem(item)}>Remove</button>
            </li>
            
        </>
    );
}

export default TodoListItem;