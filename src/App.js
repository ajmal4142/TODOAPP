import React from "react";
import "./App.css";
import { useState } from "react";
import WorkDone from "./WorkDone/Done";
function App() {
  const Delete = (obj) => {
    const dels = todos.filter((del) => del !== obj);
    console.log(dels);
    setTodos(dels);
  };
  const resetInputField = () => {
    setTodo("");
  };
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="Mainbody">
      <h1 className="mainhead">ToDo List</h1>
      <hr className="border"></hr>
      <h3 className="subheading"> Memmorize Your Daily Activities </h3>

      <div className="contents">
        <div className="mainProgress">
          <div className="texting">
            <input
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              type="text"
              placeholder="Type here...."
              className="progessText"
            />

            <i
              onClick={() =>
                setTodos([
                  ...todos,
                  {
                    id: Date.now(),
                    text: todo,
                    status: false,
                    statusrevive: false,
                  },
                ])
              }
              className="fa-thin fa-plus"
            ></i>
            <i
              onClick={resetInputField}
              className="fa-sharp fa-solid fa-eraser"
            ></i>
          </div>

          <div className="Main-display">
            {todos.map((obj, intex) => {
              return (
                <div key={intex} className="progressDisplay">
                  <div className="type">
                    <p className="text">{obj.text}</p>
                  </div>

                  <input
                    className="check"
                    onChange={(e) => {
                      console.log(e.target.checked);
                      console.log(todos);
                      setTodos(
                        todos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        })
                      );
                    }}
                    value={obj.status}
                    type="checkbox"
                  />
                  <i
                    className="fa-solid fa-trash"
                    onClick={(e) => {
                      let isdelete = window.confirm(
                        "Deleting ToDo permanently !"
                      );
                      if (isdelete) {
                        e.target.value = true;
                      }
                      Delete(obj);
                      console.log(obj);
                    }}
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
        <WorkDone setTodos={setTodos} todos={todos} />
      </div>
    </div>
  );
}

export default App;
