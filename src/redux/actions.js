import {
    ADD_NEW_TODO,
    CLEAR_COMPLETED_TODO,
    END_EDITING_TODO,
    REMOVE_TODO,
    SET_LOCAL_STORAGE,
    SET_WINDOW_LOCATION,
    START_EDITING_TODO,
    TOOGLE_ALL_TODO,
    TOOGLE_TODO,
  } from "./types";
  
  export const removeTodo = (id) => {
    return {
      type: REMOVE_TODO,
      payload: id,
    };
  };
  export const addNewTodo = (title) => {
    return {
      type: ADD_NEW_TODO,
      payload: title,
    };
  };
  export const toogleTodo = (id) => {
    return {
      type: TOOGLE_TODO,
      payload: id,
    };
  };
  export const toogleAllTodo = (isCompleted) => {
    return {
      type: TOOGLE_ALL_TODO,
      payload: isCompleted,
    };
  };
  export const startEditingTodo = (id) => {
    return {
      type: START_EDITING_TODO,
      payload: id,
    };
  };
  export const endEditingTodo = (obj) => {
    return {
      type: END_EDITING_TODO,
      payload: obj,
    };
  };
  export const clearCompletedTodo = () => {
    return {
      type: CLEAR_COMPLETED_TODO,
      // payload: arg,
    };
  };
  export const setWindowLocation = (windowLocation) => {
    return {
      type: SET_WINDOW_LOCATION,
      payload: windowLocation,
    };
  };
  