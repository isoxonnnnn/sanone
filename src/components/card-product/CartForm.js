import React, { useState, useRef, memo } from "react";

// controlled and uncontrolled form(component)
// controlled form =,useState
// uncontrolled form = useRef

const BOT_TOKEN = "6576986248:AAHZ3e22GlJKhGrkFg0nL4U7Mf_gWcMj-GQ";
const CHAT_ID = -4142342556;
const USER_ID = 5299695339;

// https://api.telegram.org/bot6576986248:AAHZ3e22GlJKhGrkFg0nL4U7Mf_gWcMj-GQ/getUpdates

function CartForm({ data }) {
  const [fullName, setFullName] = useState("");
  const tel = useRef();
  const address = useRef();
  const message = useRef();

  const hendleSubmit = (e) => {
    e.preventDefault();
    let text = "Buyurtma %0A%0A";
    text += `Ism: ${fullName} %0A`;
    text += `Tel: ${tel.current.value} %0A`;
    text += `Manzil: ${address.current.value} %0A`;
    text += `Xabar: ${message.current.value} %0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };

  return (
    <div className="input__reg">
      <h3>Ma'lumotlarni to'ldiring:</h3>
      <form onSubmit={hendleSubmit} action="">
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="To'liq ismingiz"
        />
        <input ref={tel} type="text" placeholder="+998 00-000-00-00" />
        <input ref={address} type="text" placeholder="Manzilingiz" />
        <input
          ref={message}
          required
          type="text"
          placeholder="Habar yo'llash"
        />
        <div className="total">
          <p>Umumiy narx:</p>
          <b>
            {data?.reduce((a, b) => a + b.price * b.quantity, 0)?.brm()}
            so'm
          </b>
        </div>
        <button className="btn-reg"> Rasmiylashtirishga o'tish</button>
      </form>
    </div>
  );
}

export default memo(CartForm);
