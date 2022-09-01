import React from "react";
import WorkImg from "../assests/workImg.jpeg";
import DeFi from "../assests/Defi.png";
import Power from "../assests/Power.png";
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb=8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:gid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${DeFi})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*hover efx*/}
            <div className=" opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  {" "}
                  Html, CSS, React Website{" "}
                </span>
                <div pt-8 text-center>
                  <a href="/">
                    <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      <a
                        href="https://fluffy-blini-7c77f8.netlify.app/"
                        target="_blank"
                      >
                        Demo
                      </a>
                    </button>
                  </a>
                  <a href="/">
                    <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      <a
                        href="https://ubiquitous-fairy-e2e328.netlify.app/"
                        target="_blank"
                      >
                        Code
                      </a>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Power})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*hover efx*/}
            <div className=" opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  {" "}
                  Html, CSS, React Website{" "}
                </span>
                <div pt-8 text-center>
                  <a href="/">
                    <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      <a
                        href="https://ubiquitous-fairy-e2e328.netlify.app/"
                        target="_blank"
                      >
                        Demo
                      </a>
                    </button>
                  </a>
                  <a href="/">
                    <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      <a
                        href="https://github.com/AnthonyW15/Power"
                        target="_blank"
                      >
                        Code
                      </a>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
