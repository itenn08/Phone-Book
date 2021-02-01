import React, { useState } from "react";
import SearchForm from "./SearchForm";
import ListItem from "./ListItem";
import styles from "./ClientList.module.css";
import clients from "../../json/clients.json";

const ClientList = () => {
  const [clientsList, setClientsList] = useState(clients);
  return (
    <div className={styles.container}>
      <SearchForm />
      {clientsList.map((client, key) => (
        <ListItem key={key} client={client} />
      ))}
    </div>
  );
};

export default ClientList;
