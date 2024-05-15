import React from "react";
// import Book1 from "../../assets/books/book1.jpg";
// import Book2 from "../../assets/books/book2.jpg";
// import Book3 from "../../assets/books/book3.jpg";
import Img1 from "../../assets/books/event24.jpg";
import { FaStar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";

const booksData = [
  {
    id: 1,
    img: Img1,
    title: "Hybrid Event",
    speaker:"Dr. Murenzi Eric",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      location:<IoLocationSharp />,
      time: <CiClock1 />,
      date: <MdDateRange />
  },
  {
    id: 2,
    img: Img1,
    title: "Hybrid Event",
    speaker:"Dr. Murenzi Eric",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      location:<IoLocationSharp />,
      time: <CiClock1 />,
      date: <MdDateRange />
  },
  {
    id: 3,
    img: Img1,
    title: "Hybrid Event",
    speaker:"Dr. Murenzi Eric",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      location:<IoLocationSharp />,
      time: <CiClock1 />,
      date: <MdDateRange />
  },
  {
    id: 4,
    img: Img1,
    title: "Hybrid Event",
    speaker:"Dr. Murenzi Eric",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      location:<IoLocationSharp />,
      time: <CiClock1 />,
      date: <MdDateRange />
  },
  {
    id: 5,
    img: Img1,
    title: "Hybrid Event",
    speaker:"Dr. Murenzi Eric",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      location:<IoLocationSharp />,
      time: <CiClock1 />,
      date: <MdDateRange />
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Past Events
            </p>
            <h1 className="text-3xl font-bold text-red-500">Nolonger there</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map((item, index) => (
                <div key={index} className="div space-y-3">
                  <img
                    src={item.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-700">Guest:{item.speaker}</p>
                    <div className="flex items-center gap-1"> 
                      <span>{item.description}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="flex gap-1 text-xl font-bold">{item.location} Kirehe</span>
                    </div>
                    <div className="">
                      
                      <span className="flex gap-1 text-xl font-bold">{item.time} 3:00Pm</span>
                      <span className="flex gap-1 text-xl font-bold">{item.date} 3:00Pm</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
