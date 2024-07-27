import "./App.css";
import Hello from "./components/Hello";

function App() {
  const seatNumbers = [1, 4, 7];

  return (
    <>
      <Hello name="Miraj" seatNumbers={seatNumbers} />
      <Hello name="Boby" />
      <Hello name="Zahin" />
    </>
  );
}

export default App;
