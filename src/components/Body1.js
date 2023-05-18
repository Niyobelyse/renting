import React from "react";
import { Link } from "react-router-dom";
import { FaBath, FaBed, FaStar } from "react-icons/fa";
import Selectarea from "./Selectarea";
import Properttype from "./Properttype";
import Bedrooms from "./Bedrooms";
import Bathrooms from "./Bathrooms";
import Pricerange from "./Pricerange";
import PropertyContainer from "./PropertyContainer";
import Testimonial from "./Testimonial"

const Home = () => {
  return (
    <>
      <div className="Bodyimage">
        <div class="animate__animated animate__bounce animate__repeat-2 text-center pt-48  font-bold text-4xl text-white">
          Find your dream Rental in Kigali
        </div>
        <div className=" border-r-2 border-l-2 bg-white border-b-2 border-gray-200 mt-16 inline-flex px-12 w-5/5 mx-24 h-24  mb-8 rounded-lg ">
          <div className=" px-8 py-4 mt-2">
            <span className="text-black font-bold">Location</span>
            <Selectarea className="px-4" />
          </div>
          <div className="px-10 py-4 mt-2">
            <span className="text-black font-bold">Type of property</span>
            <Properttype />
          </div>
          <div className="px-8 py-4 mt-2">
            <span className="text-black font-bold">Bedrooms</span>
            <Bedrooms />
          </div>
          <div className="px-8 py-4 mt-1">
            <span className="text-black font-bold">Bathrooms</span>
            <Bathrooms />
          </div>
          <div className="px-10 py-4 mt-2">
            <span className="text-black font-bold">Pricerange</span>
            <Pricerange />
          </div>
          <div className="px-8 mt-1 py-4 ">
            <label class=" relative inline-flex">
              <input
                class=" bg-blue-900 w-28 rounded-md  py-2 placeholder:text-white shadow-sm outline-none placeholder:px-2 h-12"
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
      </div>

      <PropertyContainer />

      <Testimonial />
    </>
  );
};

export default Home;
