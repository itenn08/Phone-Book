import React, { useEffect } from "react";
import SearchForm from "./SearchForm";
import ListItem from "./ListItem";
import { Loader } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { loadClients } from "../../redux/actions/client.actions";
import styles from "./ClientList.module.css";

const ClientList = () => {
  const { clientsFiltered, loading } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadClients());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <SearchForm className={styles.search} />
      {loading ? (
        <Loader active inline="centered" />
      ) : (
        <div>
          {Object.values(clientsFiltered).map((client, key) => (
            <ListItem key={key} client={client} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientList;
