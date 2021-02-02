import React from "react";
import { Item } from "semantic-ui-react";
import styles from "./ListItem.module.css";
const ListItem = (props) => {
  const shortName = (firstName, lastName) =>
    [firstName, lastName]
      .filter(Boolean)
      .map((item) => item[0])
      .join("");
  return (
    <Item className={styles.item}>
      <div className={styles.short_name}>
        {shortName(
          props.client.general.firstName,
          props.client.general.lastName
        )}
      </div>
      <Item.Content>
        <Item.Header as="a">
          {props.client.general.firstName} {props.client.general.lastName}
        </Item.Header>
      </Item.Content>
    </Item>
  );
};

export default ListItem;
