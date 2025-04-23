import ListGroup from "./components/ListGroup";
import axios from "axios";

function App() {
  let items = ["AAPL", "GOOGL", "TSLA", "AMZN", "MSFT"];

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

  const handleInputSubmit = (inputValue: string) => {
    axios
      .get("https://financialmodelingprep.com/stable/search-symbol", {
        params: {
          query: inputValue,
          apikey: "awsqzdvlpugFQrdxr6ao1ukzFuborA4k",
        },
      })
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
        heading="Popular Stocks"
        onSelectItem={handleSelectItem}
        onInputSubmit={handleInputSubmit}
      />
    </div>
  );
}

export default App;
