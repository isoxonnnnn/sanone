import React, { useEffect } from "react";
import "./SingleRoute.css";
import { PRODUCTS } from "../../static/index";
import { useParams } from "react-router-dom";
import Notfound from "../not-found/Notfound";
import Products from "../../components/products/Products";

function SingleRoute() {
  const params = useParams();
  const data = PRODUCTS;
  const item = data.find((item) => item._id === params._id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);
  if (!item) {
    return <Notfound />;
  }
  return (
    <>
      <div className="container">
        <div className="single-route">
          <div className="single-route-left">
            <div className="column_images">
              <img src={item.url} alt="related_images" />
              <img src={item.url} alt="related_images" />
              <img src={item.url} alt="related_images" />
              <img src={item.url} alt="related_images" />
              <img src={item.url} alt="related_images" />
            </div>
            <div className="main_image">
              <img src={item.url} alt="" />
            </div>
          </div>
          <div className="single-route-right">
            <h4 className="single-route-title">{item.title}</h4>
            <div className="sell">
              <span>Sotuvchi:</span>
              <span>Mobile Outlet</span>
            </div>
            <div className="delivery">
              <span>Yetkazib berish:</span>
              <span>1 kun, bepul</span>
            </div>
            <hr className="single-route-hr" />
            <div className="color">
              <span>Rang:</span>
              <div className="color_item">
                <img src={item.url} alt="" />
                <img src={item.url} alt="" />
              </div>
            </div>
            <div className="single_amount">
              <span>Miqdor</span>
              <div className="single_amount_item">
                <button>-</button>
                <button>1</button>
                <button>+</button>
                <p>Sotuvda 450 dona bor</p>
              </div>
            </div>
            <div className="single_cost">
              <span>Narx</span>
              <div className="single_cost_item">
                <b>dan {item.price?.brm()}</b>
                <del>{(item.price * 1.5)?.brm()} so'm</del>
                <span className="single_discount">Aksiya</span>
              </div>
            </div>
            <div className="credit_cost">
              <mark>oyiga {((item.price * 1.5) / 12)?.brm()} so'mdan</mark>
              <span>Muddatli to'lov</span>
            </div>
            <div className="single-page_buttons">
              <button>Savatga qo'shish</button>
              <button>Tugmani bir bosishda xarid qilish</button>
            </div>
          </div>
        </div>
      </div>
      <Products data={PRODUCTS.slice(0, 5)} title="Eng so'ngi mahsulotlar" />
    </>
  );
}

export default SingleRoute;
