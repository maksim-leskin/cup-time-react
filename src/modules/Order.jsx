import { useOrder } from "../context/OrderContext";

export const Order = () => {
  const { orderDetails, updateOrderDetails } = useOrder();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateOrderDetails(name, value);
  };

  return (
    <section className="order">
      <div className="container">
        <h2 className="order__title">Доставка</h2>

        <form className="order__form">
          <input
            className="order__input"
            type="text"
            name="name"
            placeholder="Имя"
            value={orderDetails.name}
            onChange={handleChange}
          />
          <input
            className="order__input"
            type="text"
            name="phone"
            placeholder="Телефон"
            value={orderDetails.phone}
            onChange={handleChange}
          />
          <input
            className="order__input order__input_address"
            type="text"
            name="address"
            placeholder="Адрес"
            value={orderDetails.address}
            onChange={handleChange}
          />

          <fieldset className="order__payment">
            <h3 className="order__payment-title">Оплата:</h3>

            <label className="order__payment-label">
              <input
                className="order__radio"
                type="radio"
                name="payment"
                value="card"
                checked={orderDetails.payment === "card"}
                onChange={handleChange}
              />
              Картой
            </label>

            <label className="order__payment-label">
              <input
                className="order__radio"
                type="radio"
                name="payment"
                value="cash"
                checked={orderDetails.payment === "cash"}
                onChange={handleChange}
              />
              Наличные
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
