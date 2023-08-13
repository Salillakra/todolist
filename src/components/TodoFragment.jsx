import { useState } from "react";
import {
  CheckedStateUpdater,
  getCheckedState,
} from "../Supporters/LocalStorage.js";

const TodoFragment = (props) => {
  const [checked, setChecked] = useState(getCheckedState(props.id));

  function handleDelete() {
    localStorage.removeItem(`todo_${props.id}`);
    props.reRender((prev) => !prev); //ReRendering the parent component
  }

  function handleCheck() {
    const newChecked = !checked;
    CheckedStateUpdater(props.id, newChecked); // Pass the updated value
    setChecked((prev) => !prev); // Update the state
  }

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4 mx-2">
      <label className="flex items-center space-x-2">
        <input
          checked={getCheckedState(props.id)}
          onChange={handleCheck}
          type="checkbox"
          className="h-6 w-6 form-checkbox cursor-pointer text-green-500"
        />
        <span
          className={`flex flex-col transition-all cursor-pointer text-lg font-medium ${
            getCheckedState(props.id) && "line-through text-slate-400"
          }`}>
          <span>{props.text}</span>
        </span>
      </label>
      <button
        onClick={handleDelete}
        className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600">
        Delete
      </button>
    </div>
  );
};

export default TodoFragment;
