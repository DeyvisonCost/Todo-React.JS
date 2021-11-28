import React, { useState } from "react";
// import "./TList.css";

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      props.onAddItem(text);
      setText("");
    }
  }

  return (
    <form>
      <input
        className="inputAdd"
        type="text"
        onChange={handleChange}
        value={text}
        maxLength="40"
      ></input>
      <button className="inputBtn" onClick={addItem}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
