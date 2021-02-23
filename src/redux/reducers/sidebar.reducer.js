import * as SIDEBAR_TYPES from "../actions/sidebar.types";

const initialState = {
  mobileMenu: false,
};

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    case SIDEBAR_TYPES.TOGGLE_SIDEBAR:
      return {
        ...state,
        mobileMenu: !state.mobileMenu,
      };
    default:
      return state;
  }
}
