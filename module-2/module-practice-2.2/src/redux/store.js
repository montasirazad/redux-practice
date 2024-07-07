import { legacy_createStore as createStore } from "redux";
import counterReducer from "./simpleCounter/counterReducer";

const store = createStore(counterReducer);

export default store;
