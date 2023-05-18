import { Link } from "react-router-dom";
import { FaBath, FaBed } from "react-icons/fa";

function PropertyCard({ item }) {
  return (
    <>
      <div className="max-w-1xl px-5 bg-white  rounded-lg dark:border-gray-700 mb-4">
        <Link to="#">
          <img
            className="rounded-t-lg w-full h-60"
            src={item.images[0].property_image}
            alt={item.title}
          />
        </Link>
        <div className="border max-w-100">
          <div className="p-5">
            <Link to="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 text-blue-900">
                {item.title}
              </h5>
            </Link>
          </div>
          <div className="grid grid-cols-2  px-4">
            <div className="inline-flex flex py-2">
              <span className="px-1 text-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  rokewidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <span className="mr-4">{item.sector}</span>
            </div>
            <div className="inline-flex flex px-3 py-2 ">
              <span className="px-1 text-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  rokewidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </span>
              <span>{item.property_type}</span>
            </div>
          </div>

          <div className="grid grid-cols-2  px-4">
            <div className="inline-flex py-2">
              <span className="px-1 text-blue-900">
                <FaBed />
              </span>
              <span>{item.bedrooms}</span>&nbsp;
              <span className="mr-4">Bedrooms</span>
            </div>
            <div className="inline-flex px-3 py-2">
              <span className="px-1 text-blue-900">
                <FaBath />
              </span>
              <span>{item.bathrooms}</span>&nbsp;
              <span>Bathrooms</span>
            </div>
          </div>

          <div className="grid grid-cols-2  px-4">
            <div className="inline-flex py-2">
              <span className="px-1 text-lg font-bold text-blue-900">
                {item.renting_price}frw
              </span>
            </div>
            <div className="inline-flex px-11 ">
              <span className="px-4 text-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  rokewidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </span>
              <span className="px-4 text-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  rokewidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyCard;