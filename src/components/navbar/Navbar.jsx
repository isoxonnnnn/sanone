  import React, { useState, useEffect } from "react";
  import "./Navbar.css";
  import { IoMenu, IoSearch } from "react-icons/io5";
  import { FaRegUser, FaRegHeart, FaCartArrowDown } from "react-icons/fa";
  import { IoHome } from "react-icons/io5";
  import { NavLink } from "react-router-dom";
  

  function Navbar({ data }) {
    // const state = useState();
    const [value, setValue] = useState("");
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
      if (value.trim()) {
        let filterData = data.filter((el) =>
          el.title.toLowerCase().includes(value.toLowerCase().trim())
        );
        setSearchData(filterData);
      } else {
        setSearchData([]);
      }
    }, [value]);
    return (
      <div className="navbar__wrapper">
        <div className="container">
          <div className="navbar">
            <NavLink to={"/"} className="navbar__logo">
              <h1>san+one</h1>
            </NavLink>
            <button className="navbar__category-btn">
              <IoMenu />
              <span>Katalog</span>
            </button>
            <span>BIz haqimizda</span>
            <div className="navbar__search">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Search..."
              />
              <button>
                <IoSearch />
              </button>
              {value.trim() && (
                <div className="nav__search-drop">
                  <p>Bu harfga oid: {searchData.length} mahsulot bor</p>
                  {searchData?.slice(0, 5)?.map((el) => (
                    // <NavLink to={`/SingleRoute/${el._id}`}>
                    <div key={el._id} className="nav__search-item">
                      <img src={el.url} alt="" />
                      <div>
                        <p>{el.title}</p>
                        <b>{el.price}</b>
                      </div>
                    </div>
                    /* </NavLink> */
                  ))}
                </div>
              )}
            </div>
            <div className="navbar__collection">
              <NavLink to={"/"} className="navbar__item">
                <IoHome />
             
              </NavLink>
              <NavLink to={"/login"} className="navbar__item">
                <FaRegUser />
               
              </NavLink>
              <NavLink to={"/wishes"} className="navbar__item">
                <FaRegHeart />
              
              </NavLink>
              <NavLink to={"/cart"} className="navbar__item">
                <FaCartArrowDown />
               
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Navbar;
