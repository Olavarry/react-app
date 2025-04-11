import ListGroup from "./components/ListGroup";

function App() {
  let items = ["London", "Paris", "Cracow", "Rome", "Athens"];

  //return <div><Message></Message></div>
  return (
    <div>
      <ListGroup items={items} heading="Visited cities" />
    </div>
  );
}

export default App;
