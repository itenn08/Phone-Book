import React from "react";
import { Item } from "semantic-ui-react";
import styles from "./ListItem.module.css";
import PropTypes from "prop-types";
/*eslint linebreak-style: ["error", "windows"]*/
const ListItem = (props) => {
  const shortName = (firstName, lastName) =>
    [firstName, lastName]
      .filter(Boolean)
      .map((item) => item[0])
      .join("");
  return (
    <Item className={styles.item} onClick={props.onClick}>
      <div className={styles.short_name}>
        {shortName(
          props.client.general.firstName,
          props.client.general.lastName
        )}
      </div>
      <Item.Content className={styles.content}>
        <Item.Header as="a" className={styles.name}>
          {props.client.general.firstName} {props.client.general.lastName}
        </Item.Header>
        <Item.Meta className={styles.job}>
          <span> {props.client.job.title}</span>
        </Item.Meta>
      </Item.Content>
    </Item>
  );
};

ListItem.propTypes = {
  client: PropTypes.string,
  onClick: PropTypes.string,
};

export default ListItem;
