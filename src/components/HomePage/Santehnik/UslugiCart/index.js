import React from "react";
import { Link } from "react-router-dom";

const UslugiCart = ({ el }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-gray-900">
      <Link to={"#"}>
        <img className="rounded-t-lg" src={el.image} alt="" />
      </Link>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
            {el.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
          {el.description}
        </p>
        <a
          href="tel:+996501597022"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          позвонить
        </a>
      </div>
    </div>
  );
};

export default UslugiCart;
