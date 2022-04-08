import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { clearCompletedTodo } from "../redux/actions";

function Footer({
  clearCompletedTodo,
  notCompletedLength,
  windowLocationHash,
  completedLength
}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{notCompletedLength}</strong>
        <span> </span>
        <span>item{notCompletedLength !== 1 ? "s" : null} </span>
        <span> left</span>
      </span>
      <ul className="filters">
        <li>
          <Link
            to="/"
            className={windowLocationHash == "#/" ? "selected" : null}
          >
            All
          </Link>
        </li>
        <span> </span>
        <li>
          <Link
            to="/active"
            className={windowLocationHash == "#/active" ? "selected" : null}
          >
            Active
          </Link>
        </li>
        <span> </span>
        <li>
          <Link
            to="/completed"
            className={windowLocationHash == "#/completed" ? "selected" : null}
          >
            Completed
          </Link>
        </li>
      </ul>
      {completedLength > 0 ? (
        <button
          className="clear-completed"
          onClick={() => clearCompletedTodo()}
        >
          Clear completed
        </button>
      ) : null}
    </footer>
  );
}
const mapDispathToProps = {
  clearCompletedTodo: clearCompletedTodo,
};

export default connect(null, mapDispathToProps)(Footer);
