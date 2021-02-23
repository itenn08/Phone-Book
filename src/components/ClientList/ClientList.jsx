import React from "react";
import { Loader } from "semantic-ui-react";
import { useSelector } from "react-redux";
import SearchForm from "./SearchForm";
import ListItem from "./ListItem";

const ClientList = () => {
  const { clientsFiltered, loading } = useSelector((state) => state.clientList);

  return (
    <div>
      <SearchForm />
      {loading ? (
        <Loader active inline="centered" />
      ) : (
        <div>
          {clientsFiltered.map((client) => (
            <ListItem key={client.id} client={client} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientList;
