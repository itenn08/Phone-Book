import React from "react";
import { Input } from "semantic-ui-react";

/*eslint linebreak-style: ["error", "windows"]*/

const SearchForm = () => (
  <Input
    icon={{ name: "search", circular: true, link: true }}
    placeholder="Search..."
    fluid
  />
);

export default SearchForm;
