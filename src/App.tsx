import ListGroup from "./components/ListGroup";
import { useState } from "react";
import axios from "axios";

function App() {
  let items = ["AAPL", "GOOGL", "TSLA", "AMZN", "MSFT"];
  const [responseData, setResponseData] = useState<string | null>(null); // State to store API response

  const handleSelectItem = (item: string) => {
    axios
      .get("https://financialmodelingprep.com/stable/search-symbol", {
        params: {
          query: item,
          apikey: import.meta.env.VITE_API_KEY,
        },
      })
      .then((response) => {
        const name = response.data[0]?.name || "No data found";
        setResponseData(name); // Update state with the response
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
        setResponseData("Error fetching data"); // Handle error
      });
  };

  const handleInputSubmit = (inputValue: string) => {
    axios
      .get("https://financialmodelingprep.com/stable/search-symbol", {
        params: {
          query: inputValue,
          apikey: import.meta.env.VITE_API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data[0]);
        const name = response.data[0]?.name || "No data found";
        setResponseData(name); // Update state with the response
      })
      .catch((error) => {
        console.log(error);
        setResponseData("Error fetching data"); // Handle error
      });
  };

  //return <div><Message></Message></div>
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <ListGroup
            items={items}
            heading="Popular Stocks"
            onSelectItem={handleSelectItem}
            onInputSubmit={handleInputSubmit}
          />
          <div className="mt-3">
            <h5>Full Name:</h5>
            <p>{responseData}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
