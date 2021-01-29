import React from 'react';
import { Image, Item } from 'semantic-ui-react';
import styles from './ListItem.module.css';

const ListItem = (props) => {
    const shortName = (firstName, lastName) => firstName.substr(1,1) + lastName.substr(1,1);

    return(
        <Item className={styles.item}>
            <div className={styles.short_name}>{shortName(props.client.general.firstName,props.client.general.lastName)}</div>
            <Item.Content>
            <Item.Header as='a'>{props.client.general.firstName} {props.client.general.lastName}</Item.Header>
            </Item.Content>
        </Item>
        
    )
}

export default ListItem;