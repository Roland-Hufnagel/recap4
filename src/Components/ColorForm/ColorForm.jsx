import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { nanoid } from "nanoid";

export default function ColorForm({ onAddColor }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.id = nanoid();
    console.log("data: ", data);
    onAddColor(data);
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="role">Role:</label>
      <input type="text" name="role" required />
      <label htmlFor="color">Color Hex Code:</label>
      <ColorInput name="hex" initialColor="#123456" />
      <label htmlFor="contrast">Contrast Hex Code:</label>
      <ColorInput name="contrastText" initialColor="#fcdba9" />
      <button>Submit</button>
    </form>
  );
}
