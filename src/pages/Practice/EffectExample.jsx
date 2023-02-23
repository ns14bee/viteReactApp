import React, { useEffect, useState } from "react";

const EffectExample = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const [user, setUser] = useState({
    name: "",
    selected: false,
  });
  const handleAddUser = () => {
    setUser((prev) => ({ ...prev, name: name }));
  };
  const handleSelectUser = () => {};

  useEffect(() => {
    document.title = "Effect";
    console.log("useEffect");
  }, []);
  return (
    <div>
      <div className="m-4 p-4">
        <h2>You clicked {number} times</h2>
        <button
          className="m-2 p-4"
          onClick={() => setNumber((prev) => prev + 1)}
        >
          Increase
        </button>
      </div>
      <hr className="my-3" />
      <div className="m-4 p-4">
        <h2>User</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setUser(e.target.value)}
          placeholder="name"
          name="name"
        />
        <br />
        <br />
        <button onClick={handleAddUser}>Add user</button>
        <button onClick={handleOnSelect}>select</button>
        {`{name: ${user.name}, selected:${user.selected.toString()}}`}
      </div>
    </div>
  );
};

export default EffectExample;
