import React from 'react';
import { Input } from 'semantic-ui-react'

const SearchForm = () => {
    return(
        <div>
          <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' />
        </div>
    )
}

export default SearchForm;