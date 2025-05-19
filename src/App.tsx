import ListGroup from "./components/ListGroup";
import DividendGraph from "./components/DividendGraph"; // Import the graph component
import { useState } from "react";
import axios from "axios";

function App() {
  let items = ["AAPL", "GOOGL", "TSLA", "AMZN", "MSFT"];
  const [responseData, setResponseData] = useState<string | null>(null);
  const [responsePayDate, setResponsePayDate] = useState<string | null>(null);
  const [dividendData, setDividendData] = useState<number[]>([]);

  const fetchData = async (symbol: string) => {
    try {
      const searchResponse = await axios.get(
        "https://financialmodelingprep.com/stable/search-symbol",
        {
          params: {
            query: symbol,
            apikey: import.meta.env.VITE_API_KEY,
          },
        }
      );
      console.log("Search Symbol Response:", searchResponse.data[0]); // Log the search symbol response
      const name = searchResponse.data[0]?.name || "No data found";
      setResponseData(name);

      const dividendResponse = await axios.get(
        "https://financialmodelingprep.com/stable/dividends",
        {
          params: {
            symbol: symbol,
            apikey: import.meta.env.VITE_API_KEY,
          },
        }
      );
      console.log("Dividend Response:", dividendResponse.data); // Log the dividend response

      if (dividendResponse.data?.length > 0) {
        const latestDividends = dividendResponse.data
          .slice(0, 5)
          .map((item: { dividend: number }) => item.dividend);
        setDividendData(latestDividends);
      } else {
        console.log("No dividend data found.");
        setDividendData([]);
      }

      const paymentDate =
        dividendResponse.data[0]?.paymentDate ||
        "No data found. This company/ETF may not distribute dividends or is a premium symbol (pay subscription to get data)";
      setResponsePayDate(paymentDate);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponseData("Error fetching data");
      setResponsePayDate("Error fetching data");
      setDividendData([]);
    }
  };

  const handleSelectItem = (item: string) => {
    fetchData(item);
  };

  const handleInputSubmit = (inputValue: string) => {
    fetchData(inputValue);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3" id="header">
          <ListGroup
            items={items}
            heading="Popular Stocks"
            onSelectItem={handleSelectItem}
            onInputSubmit={handleInputSubmit}
          />
          <div className="mt-3">
            <h5>Full Name:</h5>
            <p id="fullName">{responseData}</p>
            <br />
            <h5>Payment date:</h5>
            <p id="paymentDate">{responsePayDate}</p>
          </div>
          {dividendData.length > 0 && ( // Conditionally render the graph
            <div className="mt-5">
              <h5 id="graph">Dividend Graph:</h5>
              <DividendGraph dividendData={dividendData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
