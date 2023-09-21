import React from "react";
import { santehData } from "../../../Data/SantehData";
import UslugiCart from "./UslugiCart";
import { FaWhatsappSquare } from "react-icons/fa";
import "./index.scss";
const Santehnik = () => {
  console.log(santehData);
  return (
    <div className="santehnik py-20">
      <div className="container">
        <h1 className="text-3xl p-4 underline text-blue-500 font-bold">
          Сантехника
        </h1>
        <div className="bottom-10 right-[10%] fixed w-20 text-6xl text-green-400">
          <a href="tel:+996501597022" className="animated-icon">
            <FaWhatsappSquare />
          </a>
        </div>

        <div className="flex flex-wrap gap-4  justify-center">
          {santehData.map((el) => (
            <UslugiCart el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Santehnik;
