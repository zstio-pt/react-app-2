function ClassNameExample({ isActive, isDisabled }) {
  const btnClass = `${isActive ? "btn-active" : ""} ${isDisabled ? "btn-disabled" : ""}`;

  return <button className={btnClass}>Przycisk</button>;
}

export default ClassNameExample;
