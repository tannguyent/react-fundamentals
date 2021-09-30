import React from "react";

const users = [
  { id: "1", name: "test 1" },
  { id: "2", name: "test 2" },
];

const UseMemoExample = () => {
  const [text, setText] = React.useState("");
  const [search, setSearch] = React.useState("");

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSearchClick = () => {
    setSearch(text);
  };

//   const filteredUsers = users.filter((user) => {
//     console.log('Filter function is running ...');
//     return user.name.toLowerCase().includes(search.toLowerCase());
//   });

  const filteredUsers = React.useMemo(
    () =>
      users.filter((user) => {
        console.log('Filter function is running ...');
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  return (
    <div>
      <input type="text" value={text} onChange={onTextChange} />
      <button type="button" onClick={onSearchClick}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

const List = ({ list }) => {
    return (
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    );
};
  
const ListItem = ({ item }) => {
    return <li>{item.name}</li>;
};

export default UseMemoExample;
