import ListGroup from "./components/ListGroup";
import axios from "axios";

function App() {
  let items = [
    "Leanne Graham",
    "Clementina DuBuque",
    "Nicholas Runolfsdottir V",
    "Kurtis Weissnat",
    "Chelsey Dietrich",
  ];

  const handleSelectItem = (item: string) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?name=" + item)
      .then((response) => {
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //return <div><Message></Message></div>
  return (
    <div>
      <ListGroup
        items={items}
        heading="Get users info"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
