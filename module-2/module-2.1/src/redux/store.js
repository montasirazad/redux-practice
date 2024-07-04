import { legacy_createStore as createStore } from "redux";
import counterReducer from "../../../module-2-react/src/redux/counter/counterReducer";

const store = createStore(counterReducer);

export default store;
