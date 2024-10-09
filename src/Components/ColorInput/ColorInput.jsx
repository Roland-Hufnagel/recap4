import { useState } from "react";

export default function ColorInput({ name, initialColor }) {
  const [color, setColor] = useState(initialColor);
  function handleChangeColor(event) {
    setColor(event.target.value);
  }
  return (
    <div>
      <input
        id={name}
        type="text"
        value={color}
        onChange={handleChangeColor}
        name={name}
        required
      />
      <input type="color" value={color} onChange={handleChangeColor} />
    </div>
  );
}
