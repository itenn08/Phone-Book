import React from "react";
import { Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { searchClient } from "../../redux/actions/client.actions";

const SearchForm = () => {
  const dispatch = useDispatch();

  return (
    <Input
      icon={{ name: "search", circular: true, link: true }}
      placeholder="Search..."
      onChange={(e) => {
        if (e.target.value.length < 3 && e.target.value.length !== 0) return;
        dispatch(searchClient(e.target.value));
      }}
      fluid
    />
  );
};

export default SearchForm;
