import React from "react";
import UslugiCart from "../Santehnik/UslugiCart";
import { electroData } from "../../../Data/ElectroData";
const Electrick = () => {
  return (
    <div className="electrick pt-20">
      <div className="container">
        <h1 className="text-3xl p-4 underline text-blue-500 font-bold">
          Электрика
        </h1>
        <div className="flex flex-wrap gap-4  justify-center">
          {electroData.map((el) => (
            <UslugiCart el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Electrick;
