import { combineReducers } from "redux";
import clientList from "./client.reducer";
import sidebar from "./sidebar.reducer";

export default combineReducers({
  clientList,
  sidebar,
});
