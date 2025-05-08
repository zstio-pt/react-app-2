// src/components/NameForm.jsx
import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Twoje imię:
          <input type="text" value={name} onChange={handleChange} />
        </label>

        <button type="submit">Wyś1ij</button>
      </form>

      {submitted ? <p>Witaj, {name}!</p> : ""}
    </div>
  );
}

export default NameForm;
// Zadanie: Dodaj walidację imię musi mieć co najmniej 3 znaki
