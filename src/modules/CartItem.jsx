import { useState } from "react";
import { API_URL } from "../const";
import { useCart } from "../context/CartContext";

export const CartItem = ({ data }) => {
  const [itemQuantity, setItemQuantity] = useState(data.quantity);
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    const newQuantity = itemQuantity - 1;
    if (newQuantity > 0) {
      setItemQuantity(newQuantity);
      updateQuantity(data.id, newQuantity);
    } else {
      removeFromCart(data.id);
    }
  };
  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    updateQuantity(data.id, newQuantity);
  };

  return (
    <li className="cart-item">
      <img
        className="cart-item__image"
        src={`${API_URL}${data.img}`}
        alt={data.title}
      />

      <div className="cart-item__info">
        <h3 className="cart-item__title">{data.title}</h3>
        <div className="cart-item__quantity">
          <button
            className="cart-item__quantity-button cart-item__quantity-button_minus"
            onClick={handleDecrease}></button>
          <input
            className="cart-item__quantity-input"
            type="number"
            value={data.quantity}
            readOnly
          />
          <button
            className="cart-item__quantity-button cart-item__quantity-button_plus"
            onClick={handleIncrease}></button>
        </div>
        <p className="cart-item__price">{data.price * data.quantity}&nbsp;₽</p>
      </div>
    </li>
  );
};
