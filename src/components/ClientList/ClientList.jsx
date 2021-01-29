import React from 'react';
import SearchForm from './SearchForm';
import ListItem from './ListItem';
import styles from './ClientList.module.css';
import clients from '../../json/clients.json';


const ClientList = () => {
    return(
        <div className={styles.container}>
        <SearchForm />
        {clients.map((client, key) =>
           <ListItem key={key} client={client}/>
        )
        }
        </div>
    )
}

export default ClientList;