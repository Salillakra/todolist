import TodoFragment from "./TodoFragment";
import { getLocalStorage } from "../Supporters/LocalStorage";
import { useState } from "react";

const TodoList = () => {
  const [value, setValue] = useState(false); //For rerendering after deleting the TodoFragment

  function TodoFragRender() {
    const localStorageData = getLocalStorage();
    if (localStorageData) {
      return localStorageData.map((element, index) => (
        <TodoFragment
          key={index}
          id={element.id}
          text={element.text}
          reRender={setValue}
        />
      ));
    }
  }
  return (
    <>
      <div className="w-full sm:w-2/5 ">{TodoFragRender()}</div>
    </>
  );
};

export default TodoList;
