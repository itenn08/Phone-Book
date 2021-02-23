import * as SIDEBAR_TYPES from "./sidebar.types";

const toggleSidebar = () => async (dispatch) => {
  dispatch({
    type: SIDEBAR_TYPES.TOGGLE_SIDEBAR,
    payload: false,
  });
};

export default toggleSidebar;
