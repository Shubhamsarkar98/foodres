import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Redux/cartSlice";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (pro) => {
    dispatch(remove(pro));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartwrapper">
        {products.map((product) => (
          <div className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.name}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
