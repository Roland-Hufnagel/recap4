import { initialColors } from "./lib/colors";
import ColorCard from "./Components/ColorCard";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(color) {
    setColors([color, ...colors]);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      {colors.map((color) => {
        return <ColorCard key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
