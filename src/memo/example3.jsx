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

const MemoListItem = React.memo(ListItem, 
  // function(prevProps, nextProps){
  //   return prevProps.id === nextProps.id && prevProps.name === nextProps.name
  // }
)

function List(props) {
  const numbers = props.data;
  return (
    <ul>
      {numbers.map((number) => (
        <MemoListItem key={number.id.toString()} value={number} />
      ))}
    </ul>
  );
}

function Title(props) {
  const text = props.text;
  console.log('render title')
  return (
    <span>{text}</span>
  );
}

export default function ReactMemoExample3() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
  
  function addItemClick() {
    const item = { id: id, name: "test1" };
    setId(id + 1);
    const newData = data.map(c=>({ id: c.id, name: c.name}));
    setData([...newData, item]);
  }

  return (
    <React.Fragment>
      <Title text={'DEMO'}/>
      <button onClick={addItemClick}>add</button>
      <List data={data} />
    </React.Fragment>
  );
}


