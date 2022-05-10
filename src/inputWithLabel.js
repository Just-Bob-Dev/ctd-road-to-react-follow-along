import * as  React from 'react';

function InputWithLabel({id, value, type = 'text', onInputChange, isSearch, isFocused, children}) {
    const inputRef = React.useRef()
    React.useEffect(() => {
        if(isFocused) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <>
            <label htmlFor={id}> {children} </label>
            <input id={id} type={type} value={value} onChange={onInputChange} ref={inputRef}/>
            {isSearch ? <p>Searching for: <strong>{value}</strong></p>: <hr/>}
        </>
    )
}

export default InputWithLabel;