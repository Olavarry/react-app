import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const getMessage = () => (items.length === 0 ? <p>No items found</p> : null);

  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>

    //another way to implent this could be:
    // explanation: when using an expression like  'true && 1' or "true && 'Luis'"" the result will e the second value
    //in above cases the result will be 1 and Luis, respectively
    //If the expression is something like 'false && 1' or "false && 'Luis'" the reult will be false and if this is inside Jsx code
    //nothing will be rendered, so it is better than returning null

    // return (
    //     <>
    //       <h1>List</h1>
    //       {items.length === 0 && <p>No items found</p>}
    //       <ul className="list-group">
    //         {items.map((item) => (
    //           <li key={item}>{item}</li>
    //         ))}
    //       </ul>
    //     </>
  );
}

export default ListGroup;
