import { FaStar } from "react-icons/fa";

function TestimonialCard({ testimonial }) {
  return (
    <>
      <div className="w-5/5  mx-8 py-4 bg-white border mb-8 border-gray-200">
        <div>
          <div className="px-28 py-2">
            <img
              src="../avatar.jpg"
              className="text-center w-70 rounded-full h-16 bg-gray-200"
              alt="avatar"
            />
          </div>
          <div className="px-28 py-2 font-bold">
            <h4>{testimonial.full_name}</h4>
          </div>
          <div className="inline-flex ml-28">
            <FaStar className="px-1" />
            <FaStar className="px-1" />
            <FaStar className="px-1" />
            <FaStar className="px-1" />
            <FaStar className="px-1" />
          </div>
        </div>
        <div className="px-3 py-2">{testimonial.message}</div>
      </div>
    </>
  );
}

export default TestimonialCard;