import React from 'react';

const ToDoList = (props) => {

    return (
        <>
            <div>
                <button onClick={() => {
                    return props.onSelect(props.id);
                }}> x </button>
                <li>{props.text}</li>
            </div>
        </>
    );
};

export default ToDoList;