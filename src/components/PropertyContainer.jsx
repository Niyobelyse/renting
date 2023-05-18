import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

import PropertyCard from "./PropertyCard";

const API_URL =
  "https://findrental-r84tg.ondigitalocean.app/api/rental/rental_list/";

function PropertySample() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // get all items in card
  const CardList = ({ items }) => {
    return (
      <>
        {items.map((item) => (
          <PropertyCard key={item.id} item={item} />
        ))}
      </>
    );
  };

  return (
    <>
      <div className="container mx-auto py-5 mt-5">
        <div className=" px-24 grid grid-cols-2 gaps-3 mx-2 w-5/5">
          <div className="mt-4">
            <h2 className="text-2xl text-black font-bold m-0">
              Find a property
            </h2>
            <span className="links">Browse your House</span>
          </div>
          <div className="ml-auto mt-4 ">
            <Link to="#" className=" px-2">
              Apartment
            </Link>
            <Link to="#" className="links px-2">
              House
            </Link>
            <Link to="#" className="links px-2">
              Office
            </Link>
            <Link to="#" className="links px-2">
              <select>
                <option>ViewAll</option>
                <option></option>
              </select>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3  py-12 px-20">
          <CardList items={items} />
        </div>
      </div>
    </>
  );
}

export default PropertySample;