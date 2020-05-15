import React, { useState } from "react";

function SearchBox({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  function handleChange(event) {
    const search = event.target.value;
    console.log(search);
    setSearchText(search);
  }

  function handleSubmit(event) {
    onSearch(searchText);
    event.preventDefault();
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search images"
          value={searchText}
        />
        <button type="submit" className="btn btn-primary">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
