function InlineFunctionExample() {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        console.log("Kliknięto!", e.target);
      }}
    >
      Kliknij mnie
    </button>
  );
}

export default InlineFunctionExample;
