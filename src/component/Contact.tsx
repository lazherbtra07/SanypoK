"use client";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export const Contact: React.FC = () => {
  return (
    <section className="container py-10  " id="contact">
      <h1 className="text-3xl font-bold py-5">Contact Us</h1>
      <div className="lg:flex ">
        <div className="lg:w-1/2 mb-8 lg:mb-0 ">
          <div className="flex  ">
            <div className="flex justify-center items-center w-fit h-fit p-4 rounded bg-[#F08C00]">
              <FaClock
                size={20}
                color="white
            "
              />
            </div>
            <div className=" ml-5 mt-5">
              <h3 className=" text-lg font-medium  text-gray-900 ">
                Working hours
              </h3>
              <p className="text-gray-600 dark:text-slate-400">
                Monday - Friday: 08:00 - 17:00
              </p>
              <p className="text-gray-600 dark:text-slate-400">
                Saturday &amp; Sunday: 08:00 - 12:00
              </p>
            </div>
          </div>
          <div className="flex  ">
            <div className="flex justify-center items-center w-fit h-fit p-4 rounded bg-[#F08C00]">
              <FiPhoneCall
                size={20}
                color="white
            "
              />
            </div>
            <div className=" ml-5 mt-5">
              <h3 className=" text-lg font-medium  text-gray-900 ">Contact</h3>
              <p className="text-gray-600 dark:text-slate-400">
                Mobile: +1 (123) 456-7890
              </p>
              <p className="text-gray-600 dark:text-slate-400">
                Email: Rorompok@gmail.com
              </p>
            </div>
          </div>
          <div className="flex  ">
            <div className="flex justify-center items-center w-fit h-fit p-4 rounded bg-[#F08C00]">
              <FaLocationDot
                size={20}
                color="white
            "
              />
            </div>
            <div className=" ml-5 mt-5">
              <h3 className=" text-lg font-medium  text-gray-900 ">
                Our Address
              </h3>
              <p className="text-gray-600 dark:text-slate-400">
                1230 Maecenas Street Donec Road
              </p>
              <p className="text-gray-600 dark:text-slate-400">
                New York, EEUU
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="card h-fit max-w-6xl ">
            <h2 className="mb-4 text-2xl font-bold ">Ready to talk</h2>
            <form id="contactForm">
              <div className="mb-6">
                <div className="mx-0 mb-1 sm:mb-4">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label className="pb-1 text-xs uppercase tracking-wider"></label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      name="name"
                    />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label className="pb-1 text-xs uppercase tracking-wider"></label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      name="email"
                    />
                  </div>
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label className="pb-1 text-xs uppercase tracking-wider"></label>
                  <textarea
                    id="textarea"
                    name="textarea"
                    placeholder="Write your message..."
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-[#F08C00] hover:bg-[#f5a12b] text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};
