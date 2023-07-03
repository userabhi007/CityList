import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Bengaluru", "Mysore", "Delhi", "Mumbai"];

  const handleSelectCity = (city: string) => {
    console.log(city);
  };

  return (
    <div>
      <ListGroup
        cities={cities}
        heading="City List"
        onSelectCity={handleSelectCity}
      />
    </div>
  );
}

export default App;
