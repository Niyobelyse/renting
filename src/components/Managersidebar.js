import { Link } from "react-router-dom";

function Managersidebar() {
  return (
    <div className="flex flex-col bg-blue-800 w-72 p-8 h-screen">
      <div className="flex py-4">
        <div>
          <img
            src="../profile.jpg"
            alt="dashboardporofile"
            className="w-14 h-14 text-white font-bold text-lg  rounded-full"
          />
          <p className="text-white font-bold text-lg py-2">Niyo Belyse</p>
        </div>
      </div>

      <div className="flex-1 ">
        <div className="flex gap-2 items-center py-4 px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm-2 2V9l8-6l8 6v12h-7v-6h-2v6H4Zm8-8.75Z"
            />
          </svg>
          <span className="text-lg text-white ">
            <Link to="/" className="text-white hover:text-white">
              Home
            </Link>
          </span>
        </div>
        <div className="flex gap-2 items-center py-4 px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
            wideth="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"
            />
          </svg>
          <span className="text-lg text-white ">
            <Link to="/managerlayout" className="text-white hover:text-white">
              Dashboard
            </Link>
          </span>
        </div>
        <div className="flex gap-2 items-center py-4 px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
            wideth="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4Z"
              
            />
          </svg>
          <span className="text-1xl text-white ">
            <Link
              to="/managerlayout/landlordaccount"
              className="text-white hover:text-white"
            >
             Landlord's Account
            </Link>
          </span>
        </div>

        <div className="flex gap-2 items-center py-4 px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2Z"
            />
          </svg>
          <span className="text-1xl text-white">
            <Link to="/contactus" className="text-white hover:text-white">
              Feedback
            </Link>
          </span>
        </div>
        <div className="flex gap-2 items-center py-4 px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z"
            />
          </svg>
          <span className="text-lg text-white ">
            <Link to="/dashbordlayout" className="text-white hover:text-white">
              Transaction History
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Managersidebar;
