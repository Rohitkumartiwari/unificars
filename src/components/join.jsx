import img2 from "../../public/image 1.png";

import { FiArrowRightCircle } from "react-icons/fi";
const Join = () => {
  return (
    <div className="container py-7">
      <div className=" inset-0 bg-opacity-50 flex items-center justify-center">
        <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 p-8">
          <div className=" text-white text-start">
            <p className="orange  font-medium text-xs">
              PSYCHOTHERAPISTS ONLINE
            </p>
            <h4
              className="text-black  font-medium text-4xl my-5"
              style={{ fontFamily: "Castoro" }}
            >
              Together We Can Make Great Progress
            </h4>

            <button className="rounded-full green px-7 py-2 text-sm text-start flex align-middle gap-1">
              Apply Today
              <FiArrowRightCircle size={20} />{" "}
            </button>
          </div>
        </div>

        <div className="hidden md:flex  lg:w-1/2 xl:w-1/2 items-center justify-center">
          <img
            src={img2}
            className="h-full md:h-80 lg:h-80 xl:h-24 transform -skew-y-3"
            alt="Image2"
          />
        </div>
      </div>
    </div>
  );
};

export default Join;
