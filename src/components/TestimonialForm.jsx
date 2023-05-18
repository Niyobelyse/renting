function TestimonialForm() {
    return (
      <>
        <div className="container mx-auto py-5">
          <div className=" bg-blue-900  w-5/5 mx-32 py-6 mt-14 mb-6 justify-center">
            <h3 className="font-bold text-white text-lg text-center py-4">
              {" "}
              would you like to share your feedback?
            </h3>
            <div className="mx-72">
              <label
                for="full_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Names
              </label>
              <input
                className="block p-2.5 w-full mb-2 bg-white rounded-md py-4 px-2 shadow-sm outline-none"
                placeholder="Your Email"
                type="text"
                name="full_name"
              />
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Leave a comment..."
              ></textarea>
              <button
                type="submit"
                className="mt-3 bg-white text-lg rounded-sm  w-20 h-8 text-blue-900"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default TestimonialForm;