function ConditionalExample({ isLoggedIn }) {
  return <div>
    {isLoggedIn ? 
    <button onClick={() => console.log("Wyloguj")}>Wyloguj</button> 
    : 
    <button onClick={() => console.log("Zaloguj")}>Zaloguj</button>}
    </div>;
}

export default ConditionalExample;
