import React from "react";
import TableRow from "./TableRow";

function Table({ countries, handleDeleteCountry }) {
  const sortedCountries = countries.sort(
    (a, b) =>
      b.gold - a.gold ||
      b.silver - a.silver ||
      b.bronze - a.bronze ||
      a.name.localeCompare(b.name)
  );

  return (
    <div className="medal-table">
      <div className="table-header">
        <div>순위</div>
        <div>국가</div>
        <div>금메달</div>
        <div>은메달</div>
        <div>동메달</div>
        <div>총합</div>
        <div>삭제</div>
      </div>
      {sortedCountries.map((country, index) => (
        <TableRow
          key={index}
          index={index}
          country={country}
          handleDeleteCountry={handleDeleteCountry}
        />
      ))}
    </div>
  );
}

export default Table;
