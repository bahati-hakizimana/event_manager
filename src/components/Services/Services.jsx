import React from "react";
import Img1 from "../../assets/books/event24.jpg";
// import Img2 from "../../assets/books/book1.jpg";
// import Img3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "Hybrid Event",
    speaker: "Dr. Murenzi Eric",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: <IoLocationSharp />,
    time: <CiClock1 />,
    date: <MdDateRange />
  },
  {
    id: 2,
    img: Img1,
    title: "Hybrid Event",
    speaker: "Dr. Murenzi Eric",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: <IoLocationSharp />,
    time: <CiClock1 />,
    date: <MdDateRange />
  },
  {
    id: 3,
    img: Img1,
    title: "Hybrid Event",
    speaker: "Dr. Murenzi Eric",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: <IoLocationSharp />,
    time: <CiClock1 />,
    date: <MdDateRange />

  },
];

const Services = ({ handleOrderPopup }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Trending Events
            </p>
            <h1 className="text-3xl font-bold">Up comming Events</h1>
            <p className="text-xs text-gray-400">
              Energy Private Developer’s association is a registered professional association in Rwanda, regrouping private companies operating in the energy sector
            </p>
            
          </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">

            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px] ">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <h1 className="text-xl font-bold">Guest: {service.speaker}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <p className=" flex gap-2 justify-center items-center group-hover:text-white duration-high text-sm line-clamp-2">
                    <div>
                      <span className="flex gap-2 justify-center items-center text-xl">{service.location}Kigali</span>
                    </div>
                    <div>
                      <span className="flex gap-1 justify-center items-center text-2xl text-black">{service.time} 10:30Pm</span>
                    </div>

                  </p>
                  <p className=" flex gap-2 justify-center items-center group-hover:text-white duration-high text-sm line-clamp-2">
                    <div>
                      <span className="flex gap-2 justify-center items-center text-2xl">{service.date}25-5-2024</span>
                    </div>


                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    Book your sit
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          
        </div>
      </div>
    </>
  );
};

export default Services;
