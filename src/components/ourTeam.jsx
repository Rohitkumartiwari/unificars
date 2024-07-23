
import img1 from "../../public/Rectangle 755.png";
import { TiSocialLinkedinCircular, TiSocialTwitterCircular } from "react-icons/ti";
import { FiArrowRightCircle } from "react-icons/fi";

const teamMembers = [
  {
    name: "Leona Raine",
    role: "Licensed Psychologist",
  },
  {
    name: "Leona Raine",
    role: "Licensed Psychologist",
  },
  {
    name: "Leona Raine",
    role: "Licensed Psychologist",
  },
];

const OurTeam = () => {
  return (
    <div className="py-5 container">
      <p className="orange text-center font-medium text-xs">OUR TEAM</p>
      <h4 className="text-black text-center font-medium text-3xl my-3" style={{ fontFamily: "Castoro" }}>
        Meet Our Therapists
      </h4>
      <div className="flex flex-wrap justify-center mt-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
            <div className="bg-cover bg-center h-80 relative rounded-lg text-white flex flex-col justify-end py-2" style={{ backgroundImage: `url(${img1})` }}>
              <h1>{member.name}</h1>
              <h6 className="text-xs my-2">{member.role}</h6>
              <div className="flex justify-between px-3 align-middle">
                <div className="flex gap-2 px-3">
                  <TiSocialLinkedinCircular size={25} />
                  <TiSocialTwitterCircular size={25} />
                </div>
                <div className="flex align-middle gap-1">
                  <h6 className="text-xs">View Profile</h6>
                  <FiArrowRightCircle />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
