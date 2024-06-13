import React from "react";
import Products from "../../components/products/Products";
function Home({ data }) {
  return (
    <div>
      <Products title="Arzon narxlar" data={data} />
    </div>
  );
}

export default Home;
