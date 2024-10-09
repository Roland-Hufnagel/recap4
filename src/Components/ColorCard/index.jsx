import "./Color.css";
import Button from "../Button/Button";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
export default function ColorCard({ color, onDeleteColor, onEditColor }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {isEditMode ? (
        <>
          <ColorForm
            color={color}
            onSubmit={(newColor) => {
              setIsEditMode(false);
              onEditColor(newColor, color.id);
            }}
          />
          <Button
            color={color}
            onClick={() => {
              setIsEditMode(false);
            }}
          >
            CANCEL
          </Button>
        </>
      ) : confirmDelete ? (
        <>
          <span className="color-card-headline">really delete?</span>
          <Button
            onClick={() => {
              setConfirmDelete(false);
            }}
          >
            CANCEL
          </Button>
          <Button onClick={() => onDeleteColor(color.id)}>DELETE</Button>
        </>
      ) : (
        <>
          <Button
            onClick={() => {
              setConfirmDelete(true);
            }}
          >
            DELETE
          </Button>
          <Button
            onClick={() => {
              setIsEditMode(true);
            }}
          >
            EDIT
          </Button>
        </>
      )}
    </div>
  );
}
