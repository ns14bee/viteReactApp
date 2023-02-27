import React, { useEffect, useMemo, useState } from "react";

const MemoExample = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [country, setCountry] = useState("");
  const expensive_function = (n) => {
    let total = 0;
    console.log("here");
    for (let i = 0; i < n; i++) {
      total += i;
    }
    return total;
  };
  const total = useMemo(() => expensive_function(number), [number]);
  const userType = useMemo(
    () => ({
      underAge: age < 18 ? true : false,
      citizen: country == "USA" ? true : false,
    }),
    [age, country]
  );
  const ExpensiveFunction = () => {
    let total = 0;
    for (let i = 0; i < 1000; i++) {
      total += i;
    }
    console.log("expensive function");
    return <div>Expensive Function</div>;
  };
  const BgProvider = ({ children }) => {
    const [backGroundColor, setBackGroundColor] = useState("");
    console.log("BgProvider");
    console.log(backGroundColor);
    return (
      <div style={{ background: backGroundColor }}>
        <input
          onChange={(e) => setBackGroundColor(e.target.value)}
          placeholder="Enter a text"
        />
        {children}
      </div>
    );
  };
  useEffect(() => {
    console.log("component re-rendered");
  }, [userType]);
  return (
    <div>
      <div className="m-4 p-4">
        <input
          type="text"
          name="text"
          placeholder="text"
          className="m-4 p-4"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          name="number"
          placeholder="number"
          className="m-4 p-4"
          onChange={(e) => setNumber(e.target.value)}
        />
        Total : {total}
      </div>
      <hr className="my-3" />
      <div className="m-4 p-4">
        <input
          className="my-2"
          type="name"
          placeholder="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="my-2"
          type="number"
          placeholder="age"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <div>
          <p>Country</p>
          <select
            className="my-2"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="sneakers">USA</option>
            <option value="shirts">India</option>
            <option value="shirts">UK</option>
            <option value="bags">Japan</option>
          </select>
        </div>
      </div>
      <hr className="my-2" />
      <div className="m-4 p-4">
        <BgProvider>
          <ExpensiveFunction />
        </BgProvider>
      </div>
    </div>
  );
};

export default MemoExample;
