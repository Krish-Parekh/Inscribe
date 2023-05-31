import React from "react";
import "./ColorPallet.css"
const colorButton = [
  {
    id: 1,
    color: "#C2C5FF",
  },
  {
    id: 2,
    color: "#FFCCD9",
  },
  {
    id: 3,
    color: "#FFF1D6",
  },
  {
    id: 4,
    color: "#B3DFFF",
  },
];
const ColorPallet = () => {
  return (
    <div className="color__pallet">
      {colorButton.map((color) => {
        return (
          <div
            className="color__button"
            key={color.id}
            style={{ backgroundColor: color.color }}
          ></div>
        );
      })}
    </div>
  );
};

export default ColorPallet;
