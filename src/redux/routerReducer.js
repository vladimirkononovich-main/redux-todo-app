import { SET_WINDOW_LOCATION } from "./types";

const initState = [{ windowLocation: null }];

export const routerReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_WINDOW_LOCATION:
      return [
        ...state.map((elem) => {
          return {
            ...elem,
            windowLocation: action.payload,
          };
        }),
      ];

    default:
      return state;
  }
};
