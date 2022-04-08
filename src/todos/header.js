import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../redux/actions";

function Header({ addNewTodo }) {
  const headerInput = useRef(null);

  useEffect(() => {
    headerInput.current.focus();
  });
  const addNewTodoHandle = (event) => {
    if (event.code == "Enter" && event.target.value.trim()) {
      addNewTodo(event.target.value);
      event.target.value = "";
    }
  };

  return (
    <header className="header" data-reactid=".0.0">
      <h1 data-reactid=".0.0.0">todos</h1>
      <input
        className="new-todo"
        onKeyDown={addNewTodoHandle}
        placeholder="What needs to be done?"
        data-reactid=".0.0.1"
        ref={headerInput}
      />
    </header>
  );
}

const mapDispathToProps = {
  addNewTodo,
};

export default connect(null, mapDispathToProps)(Header);
