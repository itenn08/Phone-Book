import React from "react";
import { Item } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.css";

const ListItem = ({ client, onClick }) => {
  const shortName = (firstName, lastName) =>
    [firstName, lastName]
      .filter(Boolean)
      .map((item) => item[0])
      .join("");
  return (
    <Item className={styles.item} onClick={onClick}>
      <div className={styles.avatar}>
        {shortName(client.general.firstName, client.general.lastName)}
      </div>
      <Item.Content className={styles.content}>
        <Item.Header as="a" className={styles.title}>
          {`${client.general.firstName} ${client.general.lastName}`}
        </Item.Header>
        <Item.Meta className={styles.subtitle}>{client.job.title}</Item.Meta>
      </Item.Content>
    </Item>
  );
};

ListItem.propTypes = {
  client: PropTypes.object,
  onClick: PropTypes.func,
};

export default ListItem;
