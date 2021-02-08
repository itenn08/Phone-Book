export const LOAD_CLIENT = "LOAD_CLIENT";
export const SELECT_CLIENT = "SELECT_CLIENT";
export const SEARCH_CLIENT = "SEARCH_CLIENT";

export const loadClients = () => ({
  type: LOAD_CLIENT,
});

export const selectClient = (client) => ({
  type: SELECT_CLIENT,
  payload: client,
});

export const searchClient = (keywords) => ({
  type: SEARCH_CLIENT,
  payload: keywords,
});
