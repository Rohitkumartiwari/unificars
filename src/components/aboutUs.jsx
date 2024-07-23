import img1 from "../../public/aboutUsImage.png";
import img2 from "../../public/Vector 2.png";
import img3 from "../../public/↳Color.png"

import { FiArrowRightCircle } from "react-icons/fi";
const AboutUs = () => {
  return (
    <div
      className="bg-cover bg-center  relative"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className=" inset-0 bg-opacity-50 flex items-center justify-center container py-7">
        <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 p-8">
          <div className=" text-white text-start">
            <h4 className="text-sm text-start">About Us</h4>
            <h5
              className="mt-2 text-start text-black font-medium text-3xl"
              style={{ fontFamily: "Castoro" }}
            >
              Licensed, Professional <br />
              Therapists That You
              <br />
              Can <span className="font-style: italic">Trust</span>
            </h5>
            <p className="text-xs text-start my-2 text-black">
              At “Unfazed”, we recognize that not all wounds are visible, and we
              are dedicated to healing the unseen. In world, all individuals
              face challenges in their professional and personal lives, and we
              aim to support them by helping them overcome mental health
              challenges.
            </p>

            <div className="row flex gap-5 my-4">
              <div className="col-md-6">
                <div className="text-start flex items-center justify-center">
                  <div className="">
                    <img src={img3} alt="img not found" height={15} width={15}/>
                  </div>

                  <div className="text-black text-xs ms-1 font-medium">
                    Individual Therapy
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-start flex items-center justify-center">
                  <div className="">
                  <img src={img3} alt="img not found" height={15} width={15}/>
                  </div>

                  <div className="text-black text-xs ms-1 font-medium">
                    Individual Therapy
                  </div>
                </div>
              </div>
            </div>
            <div className="row flex my-5 gap-5">
              <div className="col-md-6">
                <div className="text-start flex items-center justify-center">
                  <div className="">
                  <img src={img3} alt="img not found" height={15} width={15}/>
                  </div>

                  <div className="text-black text-xs ms-1 font-medium">
                    Individual Therapy
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-start flex items-center justify-center">
                  <div className="">
                  <img src={img3} alt="img not found" height={15} width={15}/>
                  </div>

                  <div className="text-black text-xs ms-1 font-medium">
                    Individual Therapy
                  </div>
                </div>
              </div>
            </div>

            <button className="rounded-full green px-3 py-2 text-xs text-start flex align-middle gap-1">
              Get To Know Our Therapists
              <FiArrowRightCircle size={20}/>{" "}
            </button>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 lg:w-1/2 xl:w-1/2 items-center justify-center">
          <img
            src={img2}
            className="max-w-96"
            alt="Image2"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
