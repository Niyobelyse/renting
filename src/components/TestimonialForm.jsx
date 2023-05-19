import React, { useState } from "react";
import axios from "axios";

const API_URL =
  "https://findrental-r84tg.ondigitalocean.app/api/rental/testimonials/";

function TestimonialForm() {
  const [full_name, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data object to send to the backend API
    const data = {
      full_name: full_name,
      message: message,
      rating: rating,
    };

    // Make the API call
    axios
      .post(API_URL, data)
      .then((response) => {
        // Handle the response from the API if needed
        alert("Feedback submitted successfully.");
        // Clear the input fields
        setFullName("");
        setMessage("");
        setRating("");
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        alert("Feedback submission failed: " + error.message);
        console.error(error);
      });
  };

  return (
    <>
      <div className="container mx-auto py-5">
        <div className="bg-blue-900  w-5/5 mx-32 py-14 mt-14 mb-14 justify-center">
          <h3 className="font-bold text-white text-lg text-center py-4">
            {" "}
            would you like to share your feedback?
          </h3>
          <div className="mx-auto w-3/5">
            <form className="mb-10" onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="full_name"
                  className="block mb-2 text-white text-lg font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  className="shadow-sm bg-white-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Your Name"
                  required
                  value={full_name}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="comment"
                  className="block mb-2 text-white text-lg font-medium text-gray-900 dark:text-white"
                >
                  Comment
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Leave a comment..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-5">
                <fieldset className="py-0 rating">
                  <legend className="block mb-2 text-white text-lg font-medium text-gray-900 dark:text-white">
                    Please rate:
                  </legend>
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    value="5"
                    checked={rating === "5"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <label htmlFor="star5">5 stars</label>
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    value="4"
                    checked={rating === "4"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <label htmlFor="star4">4 stars</label>
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    value="3"
                    checked={rating === "3"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <label htmlFor="star3">3 stars</label>
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    value="2"
                    checked={rating === "2"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <label htmlFor="star2">2 stars</label>
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    value="1"
                    checked={rating === "1"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <label htmlFor="star1">1 stars</label>
                </fieldset>
                <br />
              </div>

              <div className="mb-6 block">
                <button
                  type="submit"
                  className="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialForm;