import React, { useState } from "react";
import axios from "axios";

const API_URL =
  "https://findrental-r84tg.ondigitalocean.app/api/rental/get_in_touch/";

function ContactForm() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data object to send to the backend API
    const data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      subject: subject,
      message: message,
    };

    // Make the API call
    axios
      .post(API_URL, data)
      .then((response) => {
        // Handle the response from the API if needed
        alert("Message submitted successfully.");
        // Clear the input fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        alert("Message submission failed: " + error.message);
        console.error(error);
      });
  };

  return (
    <>
      <form action="#" className="my-14" onSubmit={handleSubmit}>
        <div className="mb-5">
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="w-full">
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="First name"
                required
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div class="w-full">
              <input
                type="last_name"
                id="last_name"
                name="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Last name"
                required
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            id="subject"
            name="subject"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Let us know how we can help you"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <textarea
            id="message"
            name="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
        >
          Send message
        </button>
      </form>
    </>
  );
}

export default ContactForm;