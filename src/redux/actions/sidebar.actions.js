import * as SIDEBAR_TYPES from "./sidebar.types";

export const openSidebar = () => ({
  type: SIDEBAR_TYPES.OPEN_SIDEBAR,
});

export const closeSidebar = () => ({
  type: SIDEBAR_TYPES.CLOSE_SIDEBAR,
});
