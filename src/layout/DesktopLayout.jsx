import React from "react";
import PropTypes from "prop-types";
import ClientList from "../components/ClientList/ClientList";

const DesktopLayout = (props) => (
  <div className="wrapper">
    <div className="client-list clientList_container">
      <ClientList />
    </div>
    {props.children}
  </div>
);

DesktopLayout.propTypes = {
  children: PropTypes.array,
};

export default DesktopLayout;
