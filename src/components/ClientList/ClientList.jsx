import React from 'react';
import SearchForm from './SearchForm';
import ListItem from './ListItem';
import styles from './ClientList.module.css';


const ClientList = () => {
    return(
        <div className={styles.container}>
        <SearchForm />
        <ListItem avatar="https://news.northeastern.edu/wp-content/uploads/2019/06/Moganasundaram_001-750x0-c-default.jpg" firstName="Alex" lastName="Crooks" job="Enginer"/>
        <ListItem avatar="https://news.northeastern.edu/wp-content/uploads/2019/06/Moganasundaram_001-750x0-c-default.jpg" firstName="Alex" lastName="Crooks" job="Enginer"/>
 
        </div>
    )
}

export default ClientList;