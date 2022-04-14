import {
    ADD_NEW_TODO,
    CLEAR_COMPLETED_TODO,
    END_EDITING_TODO,
    REMOVE_TODO,
    START_EDITING_TODO,
    TOOGLE_ALL_TODO,
    TOOGLE_TODO,
  } from "./types";
  
  const initState = JSON.parse(localStorage.getItem("todos")) || [];
  
  export const todosReducer = (state = initState, action) => {
    switch (action.type) {
      case ADD_NEW_TODO:
        return [
          ...state,
          {
            title: action.payload,
            id: performance.now(),
            completed: false,
            editing: false,
          },
        ];
  
      case REMOVE_TODO:
        return [
          ...state.filter((elem) => {
            return elem.id !== action.payload;
          }),
        ];
  
      case TOOGLE_TODO:
        return [
          ...state.map((elem) => {
            if (action.payload == elem.id) {
              return {
                ...elem,
                completed: !elem.completed,
              };
            }
            return elem;
          }),
        ];
  
      case TOOGLE_ALL_TODO:
        return [
          ...state.map((elem) => {
            return {
              ...elem,
              completed: !action.payload,
            };
          }),
        ];
  
      case START_EDITING_TODO:
        return [
          ...state.map((elem) => {
            if (elem.id == action.payload) {
              return {
                ...elem,
                editing: !elem.editing,
              };
            }
            return elem;
          }),
        ];
  
      case END_EDITING_TODO:
        return [
          ...state.map((elem) => {
            if (elem.id == action.payload.id) {
              return {
                ...elem,
                editing: false,
                title: action.payload.title,
              };
            }
            return elem;
          }),
        ];
  
      case CLEAR_COMPLETED_TODO:
        return [...state.filter((elem) => elem.completed == false)];
  
      default:
        return state;
    }
  };
  