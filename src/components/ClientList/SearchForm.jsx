import React, { useCallback } from "react";
import { Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { searchClient } from "../../redux/actions/client.actions";
import throttle from "lodash.throttle";

const SearchForm = () => {
  const dispatch = useDispatch();

  const search = useCallback(
    throttle((value) => {
      dispatch(searchClient(value));
      console.log(value);
    }, 500),
    []
  );

  return (
    <Input
      icon={{ name: "search", circular: true, link: true }}
      placeholder="Search..."
      onChange={(e) => search(e.target.value)}
      fluid
    />
  );
};

export default SearchForm;
