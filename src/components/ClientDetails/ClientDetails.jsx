import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dimmer, Loader, Segment, List } from "semantic-ui-react";
import { selectClient } from "../../redux/actions/client.actions";
import styles from "./ClientDetails.module.css";

const DEFAULT_AVATAR = "https://semantic-ui.com/images/avatar2/small/elyse.png";

const ClientDetails = () => {
  const { clientId } = useParams();
  const { clientDetails, clients } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadClientById = (id) => {
      dispatch(selectClient(id));
    };

    if (clients.length && clientId) {
      loadClientById(clientId);
    }
  }, [clients, clientId]);

  if (!clientDetails)
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader inverted content="Loading" />
        </Dimmer>
      </Segment>
    );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.avatar} src={DEFAULT_AVATAR} />
        <div className={styles.general}>
          <div className={styles.title}>
            {`${clientDetails.general.firstName} ${clientDetails.general.lastName}`}
          </div>
          <div className={styles.subtitle}>
            {`${clientDetails.job.company} - ${clientDetails.job.title}`}
          </div>
        </div>
      </div>
      <h3>Contacts</h3>
      <div className={styles.secondary}>
        <List>
          <List.Item>
            <List.Icon name="envelope" size="large" verticalAlign="middle" />
            <List.Content verticalAlign="middle">
              {clientDetails.contact.email}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="phone" size="large" verticalAlign="middle" />
            <List.Content verticalAlign="middle">
              {clientDetails.contact.phone}
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
                clientDetails.address.country,
                clientDetails.address.city,
                clientDetails.address.street,
                clientDetails.address.zipCode,
              ].join(", ")}
            </List.Content>
          </List.Item>
        </List>
      </div>
    </div>
  );
};

export default ClientDetails;
