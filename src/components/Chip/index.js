import React from "react";

function Chip({ name, id }) {
  return (
    <div
      className="flex items-center justify-center gap-2 border rounded p-2 w-fit"
      key={id}
    >
      <p className="text-white text-xs overflow-hidden">{name}</p>
    </div>
  );
}

export default Chip;
