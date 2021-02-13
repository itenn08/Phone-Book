import React from "react";
import ClientList from "../components/ClientList/ClientList";
import ClientDetails from "../components/ClientDetails/ClientDetails";

const Main = () => (
  <div className="wrapper">
    <div className="client-list">
      <ClientList />
    </div>
    <ClientDetails />
  </div>
);

export default Main;
