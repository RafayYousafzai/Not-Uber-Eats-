import { createStore } from "redux";
import reducer from "./reducers/index";

// const store = createStore(rootReducer);
export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}
