import { useState } from "react";
import Button from "../Button/Button";

export default function CopyToClipboard({ hex }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  return (
    <>
      {!showConfirmation ? (
        <Button
          onClick={() => {
            setShowConfirmation(true);
            navigator.clipboard.writeText(hex);
            setTimeout(() => {
              setShowConfirmation(false);
            }, 3000);
          }}
        >
          COPY
        </Button>
      ) : (
        <p>copied hex code...</p>
      )}
    </>
  );
}
