import img1 from "../../public/Artboard 1@4x-8 1.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
// import { GoArrowRight } from "react-icons/go";
const Footer = () => {
  return (
    <div>
      <div className="container py-7">
        <div className="flex flex-col md:flex-row inset-0 bg-opacity-50   justify-between p-8 md:p-0">
          <div className=" md:w-.5/2 lg:w-.5/2 xl:w-.5/2 ">
            <div className="  text-start">
              <img src={img1} className="  h-10 " alt="Image2" />
              <h6 className="text-xs my-2 text-black">
                Center for psychology & counseling.
              </h6>
              <div className="flex gap-1">
                <BsFacebook size={20} color="#469BAF" className="cursor-pointer" />
                <AiFillTwitterCircle size={22} color="#469BAF" className="cursor-pointer" />
                <TiSocialLinkedinCircular size={25} color="#469BAF" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="   lg:w-1/2 xl:w-1/2 items-start  justify-between">
            <h4
              className="text-black  font-medium text-2xl my-2 text-start"
              style={{ fontFamily: "Castoro" }}
            >
              Career Opportunities
            </h4>
            <h4
              className="text-black  font-medium text-2xl my-2 text-start"
              style={{ fontFamily: "Castoro" }}
            >
              Our Approach
            </h4>
            <div className="flex justify-between">
              <div className="text-start text-sm">
                <h4 className="  orange mb-2">LINKS</h4>
                <p className="font-light mb-1 cursor-pointer ">About</p>
                <p className="font-light mb-1 cursor-pointer ">Services</p>
                <p className="font-light mb-1 cursor-pointer ">Terms & Condition</p>
                <p className="font-light mb-1 cursor-pointer ">Join Our Team</p>
              </div>
              <div className="text-start text-sm">
                <h4 className="  orange mb-2">ADDRESS</h4>
                <p className="font-light mb-1 cursor-pointer ">A: NRI City, Kanpur</p>
                <p className="font-light mb-1 cursor-pointer ">Uttar Pradesh, India</p>
              </div>
              <div className="text-start text-sm">
                <h4 className="  orange mb-2">CONTACT</h4>
                <p className="font-light mb-1 cursor-pointer ">T: +91-6392975097</p>
                <p className="font-light mb-1 cursor-pointer ">E: contact@unfazed.co.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
