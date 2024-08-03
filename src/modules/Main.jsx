import { Navigate, Route, Routes } from "react-router-dom";
import { Products } from "./Products";
import { Promo } from "./Promo";
import { Order } from "./Order";
import { Cart } from "./Cart";

export const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Navigate to="/products?category=tea" />} />
        <Route
          path="/products"
          element={
            <>
              <Promo />
              <Products />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Cart />
              <Order />
            </>
          }
        />
      </Routes>
    </main>
  );
};
