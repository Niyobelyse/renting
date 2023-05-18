import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaBath, FaBed } from "react-icons/fa";

import PropertyContainer from "./PropertyContainer";
import Footer from "../Footer";
function Rentallists() {
  return (
    <>
      <Navbar />
      <div className=" border-r-2 border-l-2 border-b-2 border-gray-200 mt-24 inline-flex px-12 w-5/5 mx-24 h-16  mb-8 rounded-lg ">
        <div className=" px-2 mt-2">
          <span className="text-black font-bold">Location</span>
          <select className="outline-none bg-transparent text-black">
            <option>select the area</option>
          </select>
        </div>
        <div className="px-2 mt-2">
          <span className="text-black font-bold">Type of property</span>
          <select className="outline-none bg-transparent text-black">
            <option>All type</option>
            <option>house</option>
          </select>
        </div>
        <div className="px-2 mt-2">
          <span className="text-black font-bold">Bedrooms</span>
          <select className="outline-none bg-transparent text-black">
            <option>number of Bedrooms</option>
          </select>
        </div>
        <div className="px-2 mt-1">
          <span className="text-black font-bold">Bathrooms</span>
          <select className="outline-none bg-transparent text-black">
            <option>number of Bathrooms</option>
          </select>
        </div>
        <div className="px-2 mt-2">
          <span className="text-black font-bold">Pricerange</span>
          <select className="outline-none bg-transparent text-black">
            <option>min and max</option>
          </select>
        </div>
        <div className="mt-1">
          <label class=" relative inline-flex">
            <input
              class=" bg-blue-700 w-28 rounded-md py-2 placeholder:text-white shadow-sm outline-none placeholder:px-2 h-10"
              placeholder="Search"
              type="text"
              name="search"
            />
            <span class="absolute inset-y-0  text-white flex items-center px-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                />
              </svg>
            </span>
          </label>
        </div>
      </div>

      <PropertyContainer />

      <Footer />
    </>
  );
}

export default Rentallists;
