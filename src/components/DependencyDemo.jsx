import { useState, useEffect } from "react";
function DependencyDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Efekt reaguje tylko na zmiany count
  useEffect(() => {
    document.title = `${name} kliknął ${count} razy `;
    console.log("Zaktualizowano tytuł");
  }, [count, name]); // Tylko gdy count się zmieni

  return (
    <div>
      <p>K1iknięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>Zwiększ licznik</button>
      <input onChange={(e) => setName(e.target.value)} placeholder="Wpisz imię" />
    </div>
  );
}

export default DependencyDemo;
