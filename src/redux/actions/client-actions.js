export const LOAD_CLIENT_SUCCESS = "LOAD_CLIENT_SUCCESS";
export const LOAD_CLIENT_FAILURE = "LOAD_CLIENT_FAILURE";
export const LOAD_CLIENT_STARTED = "LOAD_CLIENT_STARTED";
export const SELECT_CLIENT = "SELECT_CLIENT";
export const SEARCH_CLIENT = "SEARCH_CLIENT";

import axios from "axios";

export const loadClients = () => {
  return (dispatch) => {
    dispatch(loadClientsStarted());

    axios
      .get("api/clients.json", {
        completed: false,
      })
      .then((res) => {
        dispatch(loadClientsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(loadClientsFailure(err.message));
      });
  };
};

const loadClientsSuccess = (clients) => ({
  type: LOAD_CLIENT_SUCCESS,
  payload: {
    ...clients,
  },
});

const loadClientsStarted = () => ({
  type: LOAD_CLIENT_STARTED,
});

const loadClientsFailure = (error) => ({
  type: LOAD_CLIENT_FAILURE,
  payload: {
    error,
  },
});

export const selectClient = (client) => ({
  type: SELECT_CLIENT,
  payload: client,
});

export const searchClient = (keywords) => ({
  type: SEARCH_CLIENT,
  payload: keywords,
});
