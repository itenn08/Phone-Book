import * as CLIENT_TYPES from "../actions/client.types";

const initialState = {
  clientDetails: null,
  clients: [],
  clientsFiltered: [],
  loading: false,
  error: null,
};

export default function clientList(state = initialState, action) {
  switch (action.type) {
    case CLIENT_TYPES.LOAD_CLIENTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case CLIENT_TYPES.LOAD_CLIENTS_FULFILLED:
      return {
        ...state,
        clients: action.payload,
        clientsFiltered: action.payload,
        loading: false,
        error: null,
      };
    case CLIENT_TYPES.LOAD_CLIENTS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case CLIENT_TYPES.SELECT_CLIENTS: {
      return {
        ...state,
        clientDetails:
          state.clientDetails === action.payload ? null : action.payload,
      };
    }
    case CLIENT_TYPES.SEARCH_CLIENTS: {
      const searchResult = Object.values(state.clients).filter((client) => {
        const keywords = `${client.id} ${client.general.firstName} ${client.general.lastName} ${client.general.lastName} ${client.address.street} ${client.address.city} ${client.address.zipCode} ${client.address.country} ${client.address.country} ${client.contact.email} ${client.contact.phone} ${client.job.company} ${client.job.title}`;
        return (
          keywords.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
        );
      });
      return {
        ...state,
        clientsFiltered: action.payload === "" ? state.clients : searchResult,
      };
    }
    default:
      return state;
  }
}
