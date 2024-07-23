import img1 from "../../public/Rectangle 755.png";
import { TiSocialLinkedinCircular,TiSocialTwitterCircular } from "react-icons/ti";

import { FiArrowRightCircle } from "react-icons/fi";
const OurTeam = () => {
  return (
    <div className="my-3 container">
      <p className="orange text-center font-medium text-xs">OUR TEAM</p>
      <h4
        className="text-black text-center font-medium text-3xl"
        style={{ fontFamily: "Castoro" }}
      >
        Meet Our Therapists
      </h4>
      <div className="flex flex-wrap justify-center mt-4">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
          <div
            className="bg-cover bg-center h-80 relative rounded-lg text-white flex flex-col justify-end py-2"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <h1>Leona Raine</h1>
            <h6 className="text-xs my-2">Licensed Psychologist</h6>
            <div className="flex justify-between px-3 align-middle">
              <div className="flex gap-2 px-3">
                <div><TiSocialLinkedinCircular size={25}/></div>
                <div><TiSocialTwitterCircular size={25}/></div>
              </div>
              <div className="flex align-middle gap-1">
              <h6 className="text-xs">View Profile</h6>
              <FiArrowRightCircle/>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
          <div
            className="bg-cover bg-center h-80 relative rounded-lg text-white flex flex-col justify-end py-2"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <h1>Leona Raine</h1>
            <h6 className="text-xs my-2">Licensed Psychologist</h6>
            <div className="flex justify-between px-3 align-middle">
              <div className="flex gap-2 px-3">
                <div><TiSocialLinkedinCircular size={25}/></div>
                <div><TiSocialTwitterCircular size={25}/></div>
              </div>
              <div className="flex align-middle gap-1">
              <h6 className="text-xs">View Profile</h6>
              <FiArrowRightCircle/>
              </div>
              
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
          <div
            className="bg-cover bg-center h-80 relative rounded-lg text-white flex flex-col justify-end py-2"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <h1>Leona Raine</h1>
            <h6 className="text-xs my-2">Licensed Psychologist</h6>
            <div className="flex justify-between px-3 align-middle">
              <div className="flex gap-2 px-3">
                <div><TiSocialLinkedinCircular size={25}/></div>
                <div><TiSocialTwitterCircular size={25}/></div>
              </div>
              <div className="flex align-middle gap-1">
              <h6 className="text-xs">View Profile</h6>
              <FiArrowRightCircle/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
