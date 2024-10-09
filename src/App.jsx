import { initialColors } from "./lib/colors";
import ColorCard from "./Components/ColorCard";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([{ ...newColor, id: nanoid() }, ...colors]);
  }
  function handleDeleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }
  function handleEditColor(updatedColor, id) {
    console.log("updatedColor: ", updatedColor);

    setColors(
      colors.map((color) => {
        return color.id === id ? { ...updatedColor, id: id } : color;
      })
    );
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm
        color={{
          id: "1",
          hex: "#123456",
          contrastText: "#fdcba9",
          role: "primary",
        }}
        onSubmit={handleAddColor}
      />
      {colors.length === 0 ? (
        <p>no colors in pallett. Please create some</p>
      ) : (
        colors.map((color) => {
          return (
            <ColorCard
              key={color.id}
              color={color}
              onDeleteColor={handleDeleteColor}
              onEditColor={handleEditColor}
            />
          );
        })
      )}
    </>
  );
}

export default App;
