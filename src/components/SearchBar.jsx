import React, { useState } from "react";
import { Search } from "@mui/icons-material";

const SearchBar = ({ onSearch, onClearSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search relative">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="searchTerm"
        placeholder="Search for products, categories, brands"
      />

      <button type="button" onClick={handleSearch} className="searchButton">
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
