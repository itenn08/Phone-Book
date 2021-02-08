import React from "react";
import { selectClient } from "../../redux/actions/client-actions";
import { useDispatch } from "react-redux";
import { Item } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.css";

const ListItem = ({ client }) => {
  const dispatch = useDispatch();
  const shortName = (firstName, lastName) =>
    [firstName, lastName]
      .filter(Boolean)
      .map((item) => item[0])
      .join("");
  return (
    <Item
      className={styles.item}
      onClick={() => dispatch(selectClient(client))}
    >
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
};

export default ListItem;
