const Fruitlist = (props) => {

  return (
    <div>
      <h1>Fruit List</h1>

      <ul>
        {props.fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fruitlist;