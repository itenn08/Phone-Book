import React from "react";
import { useSelector } from "react-redux";
import ClientList from "./components/ClientList/ClientList";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  const clientDetails = useSelector((state) => state.clientDetails);
  return (
    <div className="wrapper">
      <div className="client-list">
        <ClientList />
      </div>
      {clientDetails ? (
        <ClientDetails selectedClient={clientDetails} />
      ) : (
        "Please select a client to see details!"
      )}
    </div>
  );
}

export default App;
