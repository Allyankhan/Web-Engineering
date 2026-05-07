const Ternary = (props) => {
  return (
    <>
      <h1>
        {props.name === "Allyan Khan"
          ? "Welcome, Allyan Khan!"
          : "Welcome, Guest!"}
      </h1>
    </>
  );
}

export default Ternary;