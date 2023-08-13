import React, { useState } from "react";
import Overlay from "./Overlay";

const AddTodo = () => {
  const [addTodo, SetaddTodo] = useState(false);

  function AddTodoHandler(closeTodo) {
    SetaddTodo(closeTodo);
  }
  return (
    <>
      <div className="flex justify-center items-center space-x-2 my-3 ">
        <span
          onClick={AddTodoHandler}
          className="font-bold ml-2 cursor-pointer ">
          Add Todo
        </span>
        <span
          onClick={AddTodoHandler}
          className="inline-flex cursor-pointer items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </span>
      </div>
      {addTodo && <Overlay CloseAddTodo={AddTodoHandler} />}
    </>
  );
};

export default AddTodo;
