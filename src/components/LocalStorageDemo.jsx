import { useState, useEffect } from "react";

function LocalStorageDemo() {
  // Inicjalizacja stanu z loca1Storage lub wartością domyślną
  const [name, setName] = useState(() => {
    // Ta funkcja wykonuje się tylko RAZ przy inicjalizacji
    const savedName = localStorage.getItem("name");
    return savedName || "";
  });
  // Efekt zapisujący do loca1Storage przy zmianie name
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Wpisz swoje imię" />
      <p>Twoje imię: {name}</p>
      <p>Odśwież stronę - dane pozostaną!</p>
    </div>
  );
}

export default LocalStorageDemo;
