import React from "react";
import PropTypes from "prop-types";
import { List } from "semantic-ui-react";
import styles from "./ClientDetails.module.css";

const DEFAULT_AVATAR = "https://semantic-ui.com/images/avatar2/small/elyse.png";

const ClientDetails = ({ selectedClient }) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <img className={styles.avatar} src={DEFAULT_AVATAR} />
      <div className={styles.general}>
        <div className={styles.title}>
          {`${selectedClient.general.firstName} ${selectedClient.general.lastName}`}
        </div>
        <div className={styles.subtitle}>
          {`${selectedClient.job.company} - ${selectedClient.job.title}`}
        </div>
      </div>
    </div>
    <h3>Contacts</h3>
    <div className={styles.secondary}>
      <List>
        <List.Item>
          <List.Icon name="envelope" size="large" verticalAlign="middle" />
          <List.Content verticalAlign="middle">
            {selectedClient.contact.email}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="phone" size="large" verticalAlign="middle" />
          <List.Content verticalAlign="middle">
            {selectedClient.contact.phone}
          </List.Content>
        </List.Item>
        <List.Item floated="left">
          <List.Icon
            name="map marker alternate"
            size="large"
            verticalAlign="middle"
          />
          <List.Content verticalAlign="middle">
            {[
              selectedClient.address.country,
              selectedClient.address.city,
              selectedClient.address.street,
              selectedClient.address.zipCode,
            ].join(", ")}
          </List.Content>
        </List.Item>
      </List>
    </div>
  </div>
);

ClientDetails.propTypes = {
  selectedClient: PropTypes.object,
};

export default ClientDetails;
