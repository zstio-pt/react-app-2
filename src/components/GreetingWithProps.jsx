function GreetingWithProps({ name, role }) {
  return (
    <div>
      <h2>Cześć, {name}!</h2>
      <p>Rola: {role}</p>
    </div>
  );
}

export default GreetingWithProps;
