import data from "../../json/clients.json";
const initialState = {
  clientDetails: null,
  clients: [],
  clientFiltered: null,
};

export default function clientList(state = initialState, action) {
  switch (action.type) {
    case "LOAD_CLIENT": {
      return {
        ...state,
        clients: data,
        clientFiltered: data,
      };
    }
    case "SELECT_CLIENT": {
      return {
        ...state,
        clientDetails:
          state.clientDetails === action.payload ? null : action.payload,
      };
    }
    case "SEARCH_CLIENT": {
      const searchResult = state.clients.filter((client) => {
        const keywords = `${client.id}${client.general.firstName}${client.general.lastName}${client.general.lastName}${client.address.street}${client.address.city}${client.address.zipCode}${client.address.country}${client.address.country}${client.contact.email}${client.contact.phone}${client.job.company}${client.job.title}`;
        return (
          keywords.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
        );
      });
      return {
        ...state,
        clients: action.payload === "" ? data : searchResult,
      };
    }
    default:
      return state;
  }
}
