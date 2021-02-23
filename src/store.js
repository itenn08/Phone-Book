import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./redux/reducers/reducers";

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
