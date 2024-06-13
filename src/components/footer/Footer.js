import React from "react";
import "./Footer.css";
import {
  FaApple,
  FaGooglePlay,
  FaSquareInstagram,
  FaTelegram,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer__and container">
      <div className="footer">
        <div className="footer__title">
          <h1>san+one</h1>
          <p>+998 88 413 00 00</p>
        </div>
        <div className="footer__title">
          <p className="footer__icons">
            <FaGooglePlay />

            <FaSquareInstagram />

            <FaTelegram />
          </p>
        </div>
        <div className="footer__title">
          <b>Biz haqimmizda</b>
          <p>Lorem ipsum dolor sit</p>
        </div>
        <div className="footer__title">
          <b>eng kop sotilgan</b>
          <p>eng kop korilgan</p>
          <p>yangiliklar</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
