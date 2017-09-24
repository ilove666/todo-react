import { createStore } from 'redux';
import RootReducers from "../reducers/RootReducers";

export default function configureStore(initialState) {
  return createStore(RootReducers, initialState);
}
