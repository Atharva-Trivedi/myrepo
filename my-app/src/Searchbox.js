import React from "react";

const SearchBox = ({searchChange}) =>
{
    return (
        <input 
        className="tc pa3 ba b--green bg-light-blue"
        type='search' 
        placeholder="Search Robots"
        onChange={searchChange}/>
    );
}
export default SearchBox ;