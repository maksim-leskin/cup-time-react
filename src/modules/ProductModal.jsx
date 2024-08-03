import Modal from "react-modal";
import { API_URL } from "../const";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import s from "./ProductModal.module.css";

Modal.setAppElement("#root");

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!data) {
    return null;
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(data, quantity);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modal}
      overlayClassName={s.overlay}
      contentLabel={data.title}>
      <img className={s.image} src={`${API_URL}${data.img}`} alt={data.title} />

      <div className={s.content}>
        <div className={s.header}>
          <h2 className={s.title}>
            {data.title}({data.id})
          </h2>
          <p className={s.price}>{data.price}&nbsp;₽</p>
        </div>

        <ul className={s.list}>
          {Object.entries(data.additional).map(([key, value]) => (
            <li key={key} className={s.item}>
              <span className={s.field}>{key}:</span>
              <span className={s.value}>{value}</span>
            </li>
          ))}
        </ul>

        <div className={s.footer}>
          <div className={s.count}>
            <button className={s.btn} onClick={handleDecrease}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="0.5"
                  y="0.5"
                  width="35"
                  height="35"
                  rx="3.5"
                  stroke="#B8B8B8"
                />
                <rect x="12" y="17" width="12" height="2" fill="#1D1C1D" />
              </svg>
            </button>
            <input
              className={s.number}
              type="number"
              value={quantity}
              readOnly
            />
            <button className={s.btn} onClick={handleIncrease}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="0.5"
                  y="0.5"
                  width="35"
                  height="35"
                  rx="3.5"
                  stroke="#B8B8B8"
                />
                <rect x="12" y="17.25" width="12" height="1.5" fill="#1D1C1D" />
                <rect
                  x="17.25"
                  y="24"
                  width="12"
                  height="1.5"
                  transform="rotate(-90 17.25 24)"
                  fill="#1D1C1D"
                />
              </svg>
            </button>
          </div>

          <button className={s.btnAddCart} onClick={handleAddToCart}>
            Добавить
          </button>
        </div>
      </div>

      <button className={s.btnCloseCard} onClick={onRequestClose}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="5.71228"
            y="14.1975"
            width="12"
            height="1.5"
            transform="rotate(-45 5.71228 14.1975)"
            fill="#B8B8B8"
          />
          <rect
            x="14.1976"
            y="15.2582"
            width="12"
            height="1.5"
            transform="rotate(-135 14.1976 15.2582)"
            fill="#B8B8B8"
          />
        </svg>
      </button>
    </Modal>
  );
};
