import React from "react";
import SearchForm from "./SearchForm";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
import clients from "../../json/clients.json";
import styles from "./ClientList.module.css";

const ClientList = ({ onSelectClient }) => (
  <div className={styles.container}>
    <SearchForm className={styles.search} />
    {clients.map((client, key) => (
      <ListItem
        key={key}
        client={client}
        onClick={() => onSelectClient(client)}
      />
    ))}
  </div>
);
ClientList.propTypes = {
  onSelectClient: PropTypes.func,
};
export default ClientList;
