import React, { useState } from "react";
import axios from "axios";
import "./index.scss";
const TelegramForm = ({ setBlock }) => {
  const TOKEN = "6673147008:AAEv7UyST7R9AmQJWWt4bOlMAehrK6Akck4";
  const CHAT_ID = "-1001779671235";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const [name, setName] = useState("");
  const [messages, setMessages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !messages) {
      alert("Пожалуйста, заполните все поля формы.");
      return;
    }

    let message = `<b>Заявка сайта</b>\n`;
    message += `<b>Имя отправителя:</b> ${name}\n`;
    message += `<b>сообщения:</b> ${messages}\n`;

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((response) => {
        console.log("Сообщение успешно отправлено:", response.data);
      })
      .catch((error) => {
        console.error("Произошла ошибка при отправке запроса:", error);
      });
  };

  return (
    <div className="form">
      <h2 onClick={() => setBlock(false)}>X</h2>
      <h1>Оставить заявку</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>Имя:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>Сообщение:</label>
          <textarea
            rows="4"
            name="messages"
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
            cols="50"
          />
        </div>
        <button type="submit">отправить</button>
      </form>
    </div>
  );
};

export default TelegramForm;
