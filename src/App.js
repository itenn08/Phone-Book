import React, { useState } from "react";
import ClientList from "./components/ClientList/ClientList";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  const [selectedClient, setSelectedClient] = useState(null);
  const handleSelectedClient = (client) => {
    if (client === selectedClient) setSelectedClient(null);
    else setSelectedClient(client);
  };
  return (
    <div className="wrapper">
      <div className="client-list">
        <ClientList onSelectClient={handleSelectedClient} />
      </div>
      {selectedClient ? (
        <ClientDetails selectedClient={selectedClient} />
      ) : (
        "Please select a client to see details!"
      )}
    </div>
  );
}

export default App;
