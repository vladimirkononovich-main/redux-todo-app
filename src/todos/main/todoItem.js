import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import {
  endEditingTodo,
  removeTodo,
  startEditingTodo,
  toogleTodo,
} from "../../redux/actions";

function TodoItem({
  removeTodo,
  toogleTodo,
  startEditingTodo,
  endEditingTodo,
  elem,
}) {
  const inputEdit = useRef(null);
  useEffect(() => {
    inputEdit.current.focus();
  });

  const endEditingTodoHandler = (event) => {
    if (event.key == "Enter" && event.target.value.trim()) {
      endEditingTodo({ id: elem.id, title: event.target.value });
    }
    if (event.key == "Escape") {
      event.target.value = elem.title;
      endEditingTodo({ id: elem.id, title: elem.title });
    }
    if (event.key == "Enter" && !event.target.value.trim()) {
      removeTodo(elem.id);
    }
    if (!event.key && !event.target.value.trim()) {
      removeTodo(elem.id);
    }
    if (!event.key && event.target.value.trim()) {
      endEditingTodo({ id: elem.id, title: event.target.value });
    }
  };
  
  return (
    <li
      className={
        (elem.completed == true ? "completed" : null) +
        " " +
        (elem.editing == true ? "editing" : null)
      }
      onDoubleClick={() => startEditingTodo(elem.id)}
    >
      <div className="view ">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => toogleTodo(elem.id)}
          checked={elem.completed}
        />
        <label>{elem.title}</label>
        <button
          className="destroy"
          onClick={() => removeTodo(elem.id)}
        ></button>
      </div>
      <input
        className="edit"
        defaultValue={elem.title}
        ref={inputEdit}
        onKeyDown={endEditingTodoHandler}
        onBlur={endEditingTodoHandler}
      />
    </li>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
const mapDispathToProps = {
  removeTodo: removeTodo,
  toogleTodo: toogleTodo,
  startEditingTodo: startEditingTodo,
  endEditingTodo: endEditingTodo,
};
export default connect(mapStateToProps, mapDispathToProps)(TodoItem);
