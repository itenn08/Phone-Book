import React from "react";
import { Input } from "semantic-ui-react";

const SearchForm = () => (
	<Input
		icon={{ name: "search", circular: true, link: true }}
		placeholder="Search..."
	/>
);

export default SearchForm;
