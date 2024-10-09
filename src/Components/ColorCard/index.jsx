import "./Color.css";
import Button from "../Button/Button";
import { useState } from "react";
export default function ColorCard({ color, onDeleteColor }) {
  const [confirmDelete, setConfirmDelete] = useState(false);

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
      {confirmDelete ? (
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
        <Button
          onClick={() => {
            setConfirmDelete(true);
          }}
        >
          DELETE
        </Button>
      )}
    </div>
  );
}
