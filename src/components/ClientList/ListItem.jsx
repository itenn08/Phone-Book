import React from 'react';
import { Image, Item } from 'semantic-ui-react';
import styles from './ListItem.module.css';

const ListItem = (props) => {
    return(
        <Item className={styles.item}>
            <Item.Image size='tiny' src={props.avatar} />

            <Item.Content>
            <Item.Header as='a'>{props.firstName} {props.lastName}</Item.Header>
            <Item.Meta></Item.Meta>
            <Item.Description>
            {props.job}
            </Item.Description>
            </Item.Content>
        </Item>
        
    )
}

export default ListItem;