import React from "react";
import "./SearchField.css";
import { BiSearch } from "react-icons/bi";
const SearchField = () => {
  return <div className="search__wrapper">
    <input type="text" className="search__input" placeholder="Search" />
    <i className="search__icon"> <BiSearch/> </i>
  </div>;
};

export default SearchField;
