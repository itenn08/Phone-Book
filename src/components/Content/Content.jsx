import React from "react";
import PropTypes from "prop-types";
import styles from "./Content.module.css";
import { List } from "semantic-ui-react";

/*eslint linebreak-style: ["error", "windows"]*/
const Content = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.avatar}>
          <img
            width="100%"
            height="100%"
            src="https://semantic-ui.com/images/avatar2/small/elyse.png"
          />
        </div>
        <div className={styles.general}>
          <div className={styles.name}>
            <span>
              {props.content.general.firstName} {props.content.general.lastName}
            </span>
          </div>
          <div className={styles.job}>
            <span>
              {props.content.job.company} - {props.content.job.title}
            </span>
          </div>
        </div>
      </div>
      <h3>Contacts</h3>
      <div className={styles.item}>
        <List>
          <List.Item>
            <List.Icon name="envelope" size="large" verticalAlign="middle" />
            <List.Content verticalAlign="middle">
              {props.content.contact.email}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="phone" size="large" verticalAlign="middle" />
            <List.Content verticalAlign="middle">
              {props.content.contact.phone}
            </List.Content>
          </List.Item>
        </List>
      </div>
      <div className={styles.item}>
        <List floated="left">
          <List.Item floated="left">
            <List.Icon
              name="map marker alternate"
              size="large"
              verticalAlign="middle"
            />
            <List.Content verticalAlign="middle">
              {props.content.address.country}, {props.content.address.city},
              {props.content.address.street}, {props.content.address.zipCode}
            </List.Content>
          </List.Item>
        </List>
      </div>
    </div>
  );
};

Content.propTypes = {
  content: PropTypes.string,
};

export default Content;
