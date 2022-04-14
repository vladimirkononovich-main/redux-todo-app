import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLocalStorage, setWindowLocation } from "./redux/actions";
import Footer from "./todos/footer";
import Header from "./todos/header";
import Main from "./todos/main/main";

function App({ state, router, setWindowLocation }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.hash !== router[0].windowLocation) {
      setWindowLocation(window.location.hash);
    }
    if (
      window.location.hash !== "#/" &&
      window.location.hash !== "#/active" &&
      window.location.hash !== "#/completed"
    ) {
      navigate("#");
    }
    localStorage.setItem("todos", JSON.stringify(state));
  });

  const notCompletedLength = state.filter(
    (elem) => elem.completed == false
  ).length;
  const completedLength = state.filter((elem) => elem.completed == true).length;

  return (
    <section className="todoapp">
      <div>
        <Header />
        <Main windowLocationHash={router[0].windowLocation} />
      </div>
      {state.length > 0 ? (
        <Footer
          completedLength={completedLength}
          notCompletedLength={notCompletedLength}
          windowLocationHash={router[0].windowLocation}
        />
      ) : null}
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    state: state.todos,
    router: state.router,
  };
};
const mapDispathToProps = {
  setWindowLocation: setWindowLocation,
};
export default connect(mapStateToProps, mapDispathToProps)(App);
