import React, { useEffect } from "react";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import CardProduct from "../../components/card-product/CardProduct";

function Cart() {
  const carts = useSelector((state) => state.carts.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-70">
      {carts.length ? (
        <CardProduct data={carts} />
      ) : (
        <Empty
          title="Hech narsa topilmadi"
          desc="Bosh sahifadagi to'plamlardan boshlang yoki kerakli maxsulotni qidiruv orqali toping"
          btnTitle="Bosh sahifa"
          Link="/"
        />
      )}
    </div>
  );
}

export default Cart;
