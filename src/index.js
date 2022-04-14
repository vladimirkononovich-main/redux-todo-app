import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import { HashRouter } from "react-router-dom";

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
// 
const app = (
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
