import React, { useState } from "react";

function ListItem(props) {
    const { id, name } = props.value;
    console.log("render", id);
    return (
      <li>
        {id}-{name}
      </li>
    );
  }
  
function List(props) {
    const numbers = props.data;
    return (
      <ul>
        {numbers.map((number) => (
          <ListItem key={number.id.toString()} value={number} />
        ))}
      </ul>
    );
  }
  
export default function ReactReferenceExample1() {
    const [data, setData] = useState([]);
    const [id, setId] = useState(1);
    
    function addItemClick() {
      const item = { id: id, name: "test1" };
      setId(id + 1);
      setData([...data, item]);
    }
  
    return (
      <React.Fragment>
        <button onClick={addItemClick}>add</button>
        <List data={data} />
      </React.Fragment>
    );
  }
  
  