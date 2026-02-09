import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);

const addItem = () => {
    const value = document.getElementById("item").value;
    if (value === "") return;
    setList([...list, value]);
    document.getElementById("item").value = "";
  };

const deleteItem = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div>
      <h2>TODO List</h2>

      <input id="item" placeholder="Enter Item" />
      <button onClick={addItem}>Add</button>

      {list.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => deleteItem(index)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default App;
