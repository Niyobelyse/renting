import React, { useEffect, useState } from "react";
import axios from "axios";

import TestimonialCard from "./TestimonialCard";
import TestimonialForm from "./TestimonialForm";

const API_URL =
  "https://findrental-r84tg.ondigitalocean.app/api/rental/testimonials/";

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // get all items in card
  const TestimonialList = ({ testimonials }) => {
    return (
      <>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </>
    );
  };

  return (
    <>
      <div className="container mx-auto py-5">
        <div className="text-3xl font-bold text-center py-3 mr-24">
          Testimonials
        </div>
        <div className="text-3xl font-bold text-center py-3 mr-24">
          Our happy clients
        </div>
        <div className="grid grid-cols-3 px-24 mt-10">
          <TestimonialList testimonials={testimonials} />
        </div>
      </div>

      <TestimonialForm />
    </>
  );
}

export default Testimonial;