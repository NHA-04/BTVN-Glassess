import React from "react";

export default function Kinh({ glasses, selectedGlass, onGlassSelect }) {
  return (
    <div className="glasses-container">
      <div className="glasses-list bg-success d-flex flex-wrap mt-5">
        {glasses.map((glass) => (
          <div
            key={glass.id}
            className={`glass-item ${
              selectedGlass && selectedGlass.id === glass.id ? "selected" : ""
            }`}
            onClick={() => onGlassSelect(glass)}
          >
            <img src={glass.url} alt={glass.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
