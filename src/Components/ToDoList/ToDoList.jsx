import { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  //   let arr = []; // This will not trigger rerender
  let [arr, setarr] = useState([]); // This will trigger a re render

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newItem = event.target.todoInput.value;
    // arr = [...arr, newItem]; // Adding new elements to an array with spread operator
    setarr([...arr, newItem]);
    console.log(arr);
  };

  //delete the tasks from tasks list
  const onItemDelete = (event, index) => {
    console.log(index);
  };

  return (
    <div className="todo-list">
      <h3>ToDo List</h3>
      <form onSubmit={onFormSubmit}>
        <input
          name="todoInput"
          type={"text"}
          placeholder="Enter a to do item"
        />
        <input type={"submit"} value={"Add Item"} />
      </form>
      <ul>
        {arr.map((item, index) => (
          <li key={index} id={index}>
            <span>{item}</span>
            {/* <button onClick={onItemDelete.bind(null,null,index)}>Delete</button> */}
            <button
              onClick={(event) => {
                onItemDelete(event, index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
