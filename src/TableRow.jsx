import React from "react";

function TableRow({ index, country, handleDeleteCountry }) {
  return (
    <div className="table-row">
      <div>{index + 1}</div>
      <div>{country.name}</div>
      <div>{country.gold}</div>
      <div>{country.silver}</div>
      <div>{country.bronze}</div>
      <div>{country.gold + country.silver + country.bronze}</div>
      <div>
        <button
          className="button-Delete"
          onClick={() => handleDeleteCountry(country.name)}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default TableRow;
