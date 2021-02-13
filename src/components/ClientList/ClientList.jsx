import React from "react";
import { Loader } from "semantic-ui-react";
import { useSelector } from "react-redux";
import SearchForm from "./SearchForm";
import ListItem from "./ListItem";
import styles from "./ClientList.module.css";

const ClientList = () => {
  const { clientsFiltered, loading } = useSelector((state) => state);

  return (
    <div className={styles.container}>
      <SearchForm className={styles.search} />
      {loading ? (
        <Loader active inline="centered" />
      ) : (
        <div>
          {clientsFiltered.map((client) => (
            <ListItem key={client.id} client={client} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientList;
