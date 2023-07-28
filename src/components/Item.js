import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleAddToCart() {
    setInCart(!inCart);
  }

  const appClass = inCart ? "in-cart" : ""

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{inCart ? "Remove from cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
