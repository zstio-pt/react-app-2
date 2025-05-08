function Button() {
  const handleClick = () => {
    console.log("Przycisk został kliknięty!");
  };

  return <button onClick={handleClick}>Kliknij mnie</button>;
}

export default Button;
