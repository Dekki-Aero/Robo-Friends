import React from "react";

const SearchBox = ({serchChange}) => {
  return (
    <div className="pa2">
      <input
        onChange={serchChange}
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder="Search Robo Friends"
      />
    </div>
  );
};

export default SearchBox;
