import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const getMessage = () => (items.length === 0 ? <p>No items found</p> : null);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);   this can be added to li  onClick={handleClick}

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
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
