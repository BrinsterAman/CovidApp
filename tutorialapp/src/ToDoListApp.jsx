import React, { useState } from 'react';
import ToDoList from './ToDoList';

const ToDoListApp = () => {

  const [inputList, setInputList] = useState();
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listEvent = () => {
    setItems((prevItem) => {
      return [...prevItem, inputList];
    })
    setInputList('');
  };

  const deleteItem = (id) => {
    setItems((prevItem) => {
      return prevItem.filter((arrEle, i) => {
        return i !== id;
      });
    });
  };

  return (
    <>
      <div>
        <div>
          <br />
          <h1> ToDo List</h1>
          <br />
          <input type="text" placeholder="Add an item" value={inputList}
            onChange={itemEvent} />
          <button onClick={listEvent}> + </button>

          <ol>
            {items.map((itemVal, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );

};

export default ToDoListApp;
