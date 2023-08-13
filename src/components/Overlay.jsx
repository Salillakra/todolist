import { useContext, useState } from "react";
import { userContext } from "../Hooks/context";
import { setLocalStorage } from "../Supporters/LocalStorage";
import { randomEmoji } from "../Supporters/emojis.js";

const Overlay = (props) => {
  const [value, setvalue] = useState("");
  const { todoList, SettodoList } = useContext(userContext);

  function closeAddTodo(event) {
    if (event.target.classList.contains("overlay")) {
      props.CloseAddTodo(false);
    }
  }

  const inputhandler = (event) => {
    setvalue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() !== "") {
      const newTodoItem = { id: Date.now(), text: value, checked: false }; // Generate a unique ID

      SettodoList([...todoList, newTodoItem]);

      setLocalStorage(newTodoItem.id, newTodoItem); // Store using the unique ID as the key

      setvalue("");

      props.CloseAddTodo(false);
    }
  };

  return (
    <>
      <div
        onClick={closeAddTodo}
        className="overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Add Todo {randomEmoji()} </h2>
          <form onSubmit={handleSubmit} className="flex space-x-3 ">
            <input
              onChange={inputhandler}
              type="text"
              className="border border-gray-300 rounded-md p-2 mb-4"
              placeholder="Enter todo..."
            />
            <button
              type="submit"
              className="bg-purple-500 text-white rounded-md px-4 h-10 hover:bg-purple-600">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Overlay;
