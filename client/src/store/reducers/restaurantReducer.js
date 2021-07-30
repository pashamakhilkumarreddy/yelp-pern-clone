import { clone } from "ramda";

const initialState = {
  restaurants: [],
};

export function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case "":
      return state;
    default:
      return state;
  }
}
