const initialState = {
  clientDetails: null,
  clients: [],
  clientFiltered: [],
  loading: false,
  error: null,
};

export default function clientList(state = initialState, action) {
  switch (action.type) {
    case "LOAD_CLIENT_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_CLIENT_SUCCESS":
      return {
        ...state,
        clients: action.payload,
        clientFiltered: action.payload,
        loading: false,
        error: null,
      };
    case "LOAD_CLIENT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "SELECT_CLIENT": {
      return {
        ...state,
        clientDetails:
          state.clientDetails === action.payload ? null : action.payload,
      };
    }
    case "SEARCH_CLIENT": {
      const searchResult = Object.values(state.clients).filter((client) => {
        const keywords = `${client.id}${client.general.firstName}${client.general.lastName}${client.general.lastName}${client.address.street}${client.address.city}${client.address.zipCode}${client.address.country}${client.address.country}${client.contact.email}${client.contact.phone}${client.job.company}${client.job.title}`;
        return (
          keywords.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
        );
      });
      return {
        ...state,
        clientFiltered: action.payload === "" ? state.clients : searchResult,
      };
    }
    default:
      return state;
  }
}
