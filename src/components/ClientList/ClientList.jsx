import React, { useEffect } from "react";
import SearchForm from "./SearchForm";
import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { loadClients } from "../../redux/actions/client-actions";
import styles from "./ClientList.module.css";

const ClientList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadClients());
  }, [dispatch]);
  const clients = useSelector((state) => state.clients);
  return (
    <div className={styles.container}>
      <SearchForm className={styles.search} />
      {clients.map((client, key) => (
        <ListItem key={key} client={client} />
      ))}
    </div>
  );
};

export default ClientList;
