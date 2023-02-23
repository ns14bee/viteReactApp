import React, { useState } from "react";

const Data = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const SearchBar = ({
  inStock,
  inputValue,
  HandleInStock,
  HandleInputValue,
}) => {
  const HandleOnChangeInput = (e) => {
    HandleInputValue(e.target.value);
  };
  const HandleOnChangeCheckbox = (e) => {
    HandleInStock(e.target.value);
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={HandleOnChangeInput}
        placeholder="Search..."
      />
      <lable>
        <input
          type="checkbox"
          value={inStock}
          onChange={HandleOnChangeCheckbox}
        />{" "}
        Only show products in stock
      </lable>
    </div>
  );
};

const ProductTabel = ({ inStock, inputValue }) => {
  const rows = [];
  let lastCategory = null;

  Data.forEach((product) => {
    if (product.name.indexOf(inputValue) === -1) {
      return;
    }
    if (inStock && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProdctRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

const ProdctRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const FilterableProductTable = () => {
  const [inStock, setInstock] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const HandleInStock = (vlaue) => {
    setInstock(vlaue);
  };
  const HandleInputValue = (vlaue) => {
    setInputValue(vlaue);
  };
  return (
    <div className="main-body">
      <SearchBar
        inStock={inStock}
        inputValue={inputValue}
        HandleInStock={HandleInStock}
        HandleInputValue={HandleInputValue}
      />
      <ProductTabel inStock={inStock} inputValue={inputValue} />
    </div>
  );
};

export default FilterableProductTable;
