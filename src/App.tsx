import ListGroup from "./components/ListGroup";

function App() {
  let items = ["London", "Paris", "Cracow", "Rome", "Athens"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  //return <div><Message></Message></div>
  return (
    <div>
      <ListGroup
        items={items}
        heading="Visited cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
