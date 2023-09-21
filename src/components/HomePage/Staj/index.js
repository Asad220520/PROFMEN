import React, { useState } from "react";
import "./index.scss";
import santexnik from "../../../img/santehnik.png";
import TelegramForm from "../../TelegramForm";
const Staj = () => {
  const [block, setBlock] = useState(false);
  return (
    <div id="staj">
      <div className="container">
        <div className="staj">
          <div className="staj__title">
            <h1>
              -электрика, <br /> -сантехника, <br /> -чистка канализации, <br />{" "}
              -Подключение бытовой техники 24/7
            </h1>
            <p>
              Любые виды Сантехнических и Электромонтажных работ в Бишкеке Выезд
              мастера за 30 минут !
            </p>
            <button onClick={() => setBlock(!block)}>Оставить заявку</button>
            <div
              className="staj__title-z"
              style={{
                display: block ? "block" : "none",
              }}
            >
              <TelegramForm setBlock={setBlock} />
            </div>
          </div>
          <div className="staj__img">
            <img src={santexnik} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staj;
