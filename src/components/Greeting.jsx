function Greeting() {
  const user = { name: "Jan", role: "Developer" };
  const isAdmin = false;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Rola: {user.role.toUpperCase()}</p>
      {/* {isAdmin ? <AdminPanel /> : <UserPanel />} */}
      <p style={{ color: "blue", fontSize: "16px", marginTop: "20px" }}>Dziś jest: {new Date().toLocaleDateString()}</p>
    </div>
  );
}

export default Greeting;
