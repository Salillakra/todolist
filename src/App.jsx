import React, { useState } from "react";
import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";
import { bgStyle } from "./Supporters/css.js";
import { userContext } from "./Hooks/context.js";
import Footer from "./components/Footer.jsx";
const App = () => {
  const [todoList, SettodoList] = useState([]);

  return (
    <>
      <div style={bgStyle} className=" h-screen">
        <Header />
        <div className="flex justify-center">
          <userContext.Provider value={{ todoList, SettodoList }}>
            <TodoList />
          </userContext.Provider>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default App;
