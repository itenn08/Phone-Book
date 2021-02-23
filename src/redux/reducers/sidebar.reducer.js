import * as SIDEBAR_TYPES from "../actions/sidebar.types";

const initialState = {
  mobileMenu: false,
};

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    case SIDEBAR_TYPES.CLOSE_SIDEBAR:
      return {
        ...state,
        mobileMenu: false,
      };
    case SIDEBAR_TYPES.OPEN_SIDEBAR:
      return {
        ...state,
        mobileMenu: true,
      };
    default:
      return state;
  }
}
