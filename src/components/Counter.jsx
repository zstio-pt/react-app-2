import { useState } from "react";

function Counter() {
  // Deklaracja zmiennej stanu
  // count -aktualna wartość stanu
  // setCount -funkcja do aktualizacji stanu

  const [count, setCount] = useState(0); // 0 to wartość początkowa

  return (
    <div>
      <p>K1iknięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>Zwiększ licznik</button>
    </div>
  );
}
export default Counter;

// W tym przykładzie używamy useState do zarządzania stanem licznika.
// Funkcja setCount jest wywoływana, gdy użytkownik klika przycisk, co powoduje zwiększenie wartości licznika o 1.
