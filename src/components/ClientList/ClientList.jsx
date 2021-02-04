import React, { useState } from "react";
import SearchForm from "./SearchForm";
import ListItem from "./ListItem";
import Content from ".././Content/Content";
import styles from "./ClientList.module.css";
import clients from "../../json/clients.json";

const ClientList = () => {
  const [showContacts, setShowContacts] = useState(false);
  const [profile, setProfile] = useState("");
  const createProfile = (client) => {
    setProfile(client);
    setShowContacts(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <div className={styles.container}>
          <SearchForm className={styles.search} />
          {clients.map((client, key) => (
            <ListItem
              key={key}
              client={client}
              onClick={() => createProfile(client)}
            />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        {showContacts && <Content content={profile} />}
      </div>
    </div>
  );
};

export default ClientList;
