import React from "react";
import "./Done.css";
const Done = (props) => {
  const { todos, setTodos } = props;
  console.log(todos);
  const Deleted = (obj) => {
    const dels = todos.filter((del) => del !== obj);
    console.log(dels);
    setTodos(dels);
  };
  return (
    <div className="mainDone">
      <div className="captionbox">
        <h3 className="capdone">DONE</h3>
      </div>
      <div className="Main-displa">
        <div className="dis">
          {todos.map((obj, intex) => {
            console.log(todos);
            if (obj.status) {
              return (
                <div key={intex} className="donebox">
                  <div className="type">
                    <p className="text">{obj.text}</p>
                  </div>
                  <i
                    onClick={() => {
                      Deleted(obj);
                      console.log(obj);
                    }}
                    className="fa-solid fa-trash"
                  ></i>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Done;
