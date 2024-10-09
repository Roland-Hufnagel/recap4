import "./Color.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard";
export default function ColorCard({ color, onDeleteColor, onEditColor }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [contrast, setContrast] = useState(null);

  useEffect(() => {
    async function postFetch() {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          method: "POST",
          body: JSON.stringify({ colors: [color.hex, color.contrastText] }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("data: ", data);

      setContrast(data.overall);
    }
    postFetch();
  }, [color]);
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <CopyToClipboard hex={color.hex} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <p>Overall contrast score: {contrast}</p>

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
