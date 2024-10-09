import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm({ color, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data: ", data);
    onSubmit(data);
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="role">Role:</label>
      <input type="text" name="role" defaultValue={color.role} />
      <label htmlFor="color">Color Hex Code:</label>
      <ColorInput name="hex" initialColor={color.hex} />
      <label htmlFor="contrast">Contrast Hex Code:</label>
      <ColorInput name="contrastText" initialColor={color.contrastText} />
      <button>Submit</button>
    </form>
  );
}
