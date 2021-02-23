import React from "react";
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
  children: React.Node,
};

export default DesktopLayout;
