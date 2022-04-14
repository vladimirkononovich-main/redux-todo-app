import { useRef } from "react";
import { connect } from "react-redux";
import { toogleAllTodo } from "../../redux/actions";
import TodoItem from "./todoItem";

function Main({ todos, toogleAllTodo, windowLocationHash }) {
  const isAllCompleted = todos.every((elem) => elem.completed == true);
  
  const filteredTodos = todos.filter((elem) => {
    if (windowLocationHash == "#/") {
      return elem;
    }
    if (windowLocationHash == "#/active") {
      return elem.completed !== true;
    }
    if (windowLocationHash == "#/completed") {
      return elem.completed == true;
    }
  });

  return (
    <section className="main">
      {todos.length > 0 ? (
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={() => toogleAllTodo(isAllCompleted)}
          checked={isAllCompleted}
        />
      ) : null}
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {filteredTodos.map((elem) => {
          return <TodoItem key={elem.id} elem={elem} />;
        })}
      </ul>
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
const mapDispathToProps = {
  toogleAllTodo: toogleAllTodo,
};
export default connect(mapStateToProps, mapDispathToProps)(Main);
