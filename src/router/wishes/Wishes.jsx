import React from "react";
import { useEffect } from "react";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import { useParams } from "react-router-dom";

function Wishes() {
  const params = useParams();
  let wishes = useSelector((state) => state.wishes.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);
  return (
    <div className="h-70">
      {wishes.length ? (
        <Products title="Sevimlilar" data={wishes} />
      ) : (
        <Empty
          title="Sizga yoqanini qo'shing"
          desc="Maxsulotdagi belgisini bosin. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
          btnTitle="Akkauntga kirish"
          Link="/login"
        />
      )}
    </div>
  );
}

export default Wishes;
