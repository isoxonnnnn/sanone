import React from "react";
import "./Products.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { incCart } from "../../context/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishes, removeFromWishes } from "../../context/wishesSlice";
import { NavLink } from "react-router-dom";

function Products({ data, title }) {
  const dispatch = useDispatch();
  let wishes = useSelector((state) => state.wishes.value);
  return (
    <div className="container">
      <h2 className="product__heading">
        {title}
        <span>&#10095;</span>
      </h2>
      <div className="wrapper">
        {data?.map((el) => (
          <div key={el._id} className="card">
            <div className="card__image">
              <NavLink to={`/SingleRoute/${el._id}`}>
                <img src={el.url[0]} alt="rasm" />
              </NavLink>
              {wishes?.some((item) => item._id === el._id) ? (
                <div
                  onClick={() => dispatch(removeFromWishes(el))}
                  className="card__heart"
                >
                  <FaHeart />
                </div>
              ) : (
                <div
                  onClick={() => dispatch(addToWishes(el))}
                  className="card__heart"
                >
                  <FaRegHeart />
                </div>
              )}
            </div>

            <div className="card__body">
              <h3 title={el.title} className="card__title">
                {el.title}
              </h3>
              <mark>{((el.price * 1.5) / 12)?.brm()} so'm</mark>
              <div className="card__price">
                <div className="card__price-item">
                  <del>{(el.price * 1.2)?.brm()}</del>
                  <p>{el.price?.brm()} so'm</p>
                </div>

                <div
                  onClick={() => dispatch(incCart(el))}
                  className="card__cart"
                >
                  <FiShoppingCart />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
