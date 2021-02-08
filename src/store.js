import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./redux/reducers/client-reducer";

const store = createStore(reducer, applyMiddleware(thunk, logger));
console.log(store.getState());

export default store;
