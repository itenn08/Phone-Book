import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../redux/actions/sidebar.actions";
import styles from "./ListItem.module.css";

const ListItem = ({ client }) => {
  const shortName = (firstName, lastName) =>
    [firstName, lastName]
      .filter(Boolean)
      .map((item) => item[0])
      .join("");

  const dispatch = useDispatch();

  return (
    <Link to={`/client/${client.id}`} onClick={() => dispatch(closeSidebar())}>
      <Item className={styles.item}>
        <div className={styles.avatar}>
          {shortName(client.general.firstName, client.general.lastName)}
        </div>
        <Item.Content className={styles.content}>
          <Item.Header className={styles.title}>
            {`${client.general.firstName} ${client.general.lastName}`}
          </Item.Header>
          <Item.Meta className={styles.subtitle}>{client.job.title}</Item.Meta>
        </Item.Content>
      </Item>
    </Link>
  );
};

ListItem.propTypes = {
  client: PropTypes.object,
};

export default ListItem;
