import axios from "axios";
import * as CLIENT_TYPES from "./client.types";

export const loadClients = () => async (dispatch) => {
  dispatch({ type: CLIENT_TYPES.LOAD_CLIENTS_PENDING });
  try {
    const { data: clients } = await axios.get("api/clients.json");
    dispatch({ type: CLIENT_TYPES.LOAD_CLIENTS_FULFILLED, payload: clients });
  } catch (err) {
    dispatch({
      type: CLIENT_TYPES.LOAD_CLIENTS_REJECTED,
      payload: err.message,
    });
  }
};

export const selectClient = (client) => ({
  type: CLIENT_TYPES.SELECT_CLIENTS,
  payload: client,
});

export const searchClient = (keywords) => ({
  type: CLIENT_TYPES.SEARCH_CLIENTS,
  payload: keywords,
});
