import React, { useState } from "react";

const StateExample = () => {
  const [number, setNumber] = useState(0);
  const [id, setId] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const increase = () => {
    setNumber((prev) => prev + 1);
  };
  const increaseAsync = () => {
    setTimeout(() => {
      setNumber((prev) => prev + 1);
    }, 2000);
  };
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hangleSubmitProduct = () => {
    const tempProduct = {
      id: id,
      name: product,
      quantity: 0,
    };
    setProducts((prev) => [...prev, tempProduct]);
    setProduct("");
    setId((prev) => prev + 1);
  };

  const changeQuantity = (currentId, bool) => {
    setProducts((prev) => {
      return prev.map((prod) => {
        if (prod.id == currentId) {
          return {
            ...prod,
            quantity: bool ? prod.quantity + 1 : prod.quantity - 1,
          };
        } else return prod;
      });
    });
  };

  return (
    <div>
      <div className="m-4 p-4">
        <h2>{number}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={increaseAsync}>Increase Async</button>
        <hr className="my-3" />
        <h2>User</h2>
        <span>Username is {user?.name}</span>
        <br />
        <br />
        <input
          type="text"
          value={user.name}
          onChange={handleChange}
          placeholder="name"
          name="name"
        />
        <br />
        <br />
        <input
          type="email"
          value={user.email}
          onChange={handleChange}
          placeholder="email"
          name="email"
        />
        <br />
        <br />
        <input
          type="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
          name="password"
        />
        <br />
        <br />
        <button>submit</button>
        <br />
        <br />
        <hr className="my-3" />
        <div>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Add product"
            name="product"
          />
          <br />
          <br />
          <button onClick={hangleSubmitProduct}>Add</button>
        </div>
        <hr className="my-3" />
        <div>
          <div>
            <div>Products</div>
            {products.length ? (
              products.map((obj, index) => {
                return (
                  <div key={index} className="my-3">
                    <div className="m-3">
                      {obj.name}{" "}
                      <button
                        className="ms-3"
                        value={obj.id}
                        onClick={() => setSelectedId(obj.id)}
                      >
                        Choose
                      </button>
                    </div>
                    <div className="my-2">
                      <button
                        className="me-4 px-3"
                        onClick={() => changeQuantity(obj.id, false)}
                      >
                        -
                      </button>
                      {obj.quantity}
                      <button
                        className="ms-4 px-3"
                        onClick={() => changeQuantity(obj.id, true)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No products availible!</div>
            )}
          </div>
          <hr className="my-3" />
          <div>Selected Products</div>
          {selectedId ? (
            products.map((obj, index) => {
              if (obj.id === selectedId) {
                return (
                  <div key={index} className="d-flex">
                    <div className="m-2 p-2">{obj.name}:</div>
                    <div className="m-2 p-2">{obj.quantity}</div>
                  </div>
                );
              }
            })
          ) : (
            <div>No product selected</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StateExample;
