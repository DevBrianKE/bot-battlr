import React from "react";

function FilterBar({ selectedClasses, onFilterChange }) {
  const handleChange = (e) => {
    const { value, checked } = e.target;
    onFilterChange(value, checked);
  };

  return (
    <div className="ui menu">
      {["Support", "Medic", "Assault", "Defender", "Captain", "Witch"].map(cls => (
        <div key={cls} className="ui item">
          <input
            type="checkbox"
            value={cls}
            checked={selectedClasses.includes(cls)}
            onChange={handleChange}
          />
          {cls}
        </div>
      ))}
    </div>
  );
}

export default FilterBar;
