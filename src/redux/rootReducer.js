import { combineReducers } from "redux";
import { routerReducer } from "./routerReducer";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
  router: routerReducer,
});
