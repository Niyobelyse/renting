import React from "react";
import Navbar from "./Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "https://findrental-r84tg.ondigitalocean.app/api/rental/get_in_touch/",
        formData
      );
      console.log("message successful");
      alert("message successful!");
    } catch (error) {
      console.error("message failed",error);
      alert("message failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="Bodyimagecontact d-flex">
        <div className="py-16">
          <h3 className="text-white text-center mt-4">
            We want to hear from you, Get In Touch with us
          </h3>
          <div className="bg-blue-900 mx-72 w-3/5 rounded-lg">
            <div className="px-8 py-8">
              <div className="text-sm w-4/4  mx-2 placeholder:text-sm  bg-white rounded-lg grid grid-cols-2  ">
                <div className=" mx-12">
                  <div className="inline-flex mt-4 px-4">
                    <input
                      className="block w-28 px-2 py-1 mt-2 text-black bg-white border rounded-md placeholder:px-1 placeholder:py-2 placeholder:text-black  outline-none "
                      placeholder="First name"
                      type="text"
                      name="first_name"
                      onChange={handleInputChange}
                    />
                    <input
                      className="block w-28 px-2 ml-2 py-1 mt-2 text-black bg-white border rounded-md placeholder:px-1 placeholder:py-2 placeholder:text-black  outline-none "
                      placeholder="Last name"
                      type="text"
                      name="last_name"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="inline-flex mt-4 px-4">
                    <input
                      className="block w-28 px-2 py-1  mt-2 text-black bg-white border rounded-md placeholder:px-1 placeholder:py-2 placeholder:text-black  outline-none "
                      placeholder="Email"
                      type="email"
                      name="email"
                      onChange={handleInputChange}
                    />
                    <input
                      className="block w-28 px-2 py-1  mt-2 ml-2 text-black bg-white border rounded-md placeholder:px-1 placeholder:py-2 placeholder:text-black  outline-none "
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <textarea
                      wrap="off"
                      rows="3"
                      cols="23"
                      placeholder="Type your message here"
                      className="mt-8 placeholder:text-black   ml-4 text-black  text-lg border outline-none"
                      name="message"
                      type="text"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-60  mx-4 h-12 mt-4 rounded-sm bg-blue-600 text-white"
                      onClick={handleSubmit}
                    >
                      Send
                    </button>
                  </div>
                </div>

                <div className="d-flex  w-3/4">
                  <div className="border border  h-24 w-12/12 my-6 d-flex">
                    <h1 className="text-lg font-bold text-black px-2 mt-2">
                      Company Email/Phone
                    </h1>
                    <div className=" text-1xl px-2 inline-flex">
                      <span>
                        <FaPhoneAlt className="text-blue-700 w-4" />
                      </span>
                      &nbsp;&nbsp;:<span>&nbsp;&nbsp;0788000000</span>
                    </div>
                    <div className=" text-1xl  px-2 inline-flex">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="text-blue-900 span  w-4 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                      </span>
                      &nbsp;:
                      <span className="text-1xl">
                        &nbsp;&nbsp;kigalihouserenting@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className="border border h-24 my-4">
                    <h3 className="text-1xl font-bold text-black px-2 mt-2">
                      Address/ Working hour
                    </h3>
                    <span className="text-black text-1xl px-2">
                      Nyarugenge/kigali
                    </span>
                    <p className="text-black text-1xl px-2 py-2">
                      8:00AM-5:00PM Everyday{" "}
                    </p>
                  </div>
                  <div className="border border  h-28  my-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15950.022021294664!2d30.14444191429443!3d-1.950978579612319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1682023997371!5m2!1sen!2srw"
                      style={{ border: 0 }}
                      title="map"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      className="h-full w-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-60 text-center border border-t-gray py-4">
        &copy;&nbsp;&nbsp;All Right Reserved By{" "}
        <span className="text-blue-700 ">Kigali House Renting ltd 2023</span>
      </div>
    </>
  );
};

export default Contact;
