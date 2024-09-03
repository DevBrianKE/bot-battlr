import React from "react";

function SortBar({ onSort }) {
  return (
    <div className="ui menu">
      <div className="ui item" onClick={() => onSort("health")}>Sort by Health</div>
      <div className="ui item" onClick={() => onSort("damage")}>Sort by Damage</div>
      <div className="ui item" onClick={() => onSort("armor")}>Sort by Armor</div>
    </div>
  );
}

export default SortBar;
