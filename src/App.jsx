import { useState } from "react";
import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";
import { bgStyle } from "./Supporters/css.js";
import { userContext } from "./Hooks/context.js";
import Footer from "./components/Footer.jsx";
import AddTodo from "./components/AddTodo.jsx";
const App = () => {
  const [todoList, SettodoList] = useState([]);

  return (
    <>
      <div
        style={bgStyle}
        className="h-[calc(100vh-65px)] sm:h-[calc(100vh-52px)]">
        <Header />
        <userContext.Provider value={{ todoList, SettodoList }}>
          <AddTodo />
          <div className="flex justify-center h-[32rem] overflow-auto  scrollbar-w-0">
            <TodoList />
          </div>
        </userContext.Provider>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
