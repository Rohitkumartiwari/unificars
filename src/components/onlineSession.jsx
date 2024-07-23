import img1 from "../../public/Rectangle 766.png";

const OnlineSession = () => {
  return (
    <div
      className="bg-cover text-start py-12 flex items-center text-white "
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="container mx-auto text-center">
      <div className="flex flex-col md:flex-row justify-center items-center  inset-0">
  <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 p-8 text-center md:text-start">
    <p className="orange text-xs font-medium">
      PSYCHOTHERAPISTS ONLINE
    </p>
    <h4 className="text-4xl font-medium my-3 " style={{ fontFamily: "Castoro" }}>
      Schedule Your Online <br />
      Session Today
    </h4>
    <h6 className="text-xs my-2 text-white">
      Therapists have a minimum of 7 years experience, are accredited <br />
      and insured to practice privately.
    </h6>
  </div>

  <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 p-8">
    <div className="border border-solid border-white rounded-lg overflow-hidden p-4 bg-gray-300 bg-opacity-30">
      <input
        type="text"
        className="focus:outline-none border-b-2 border-white placeholder-white text-white my-2 w-full bg-transparent bg-opacity-30"
        placeholder="Name"
      />
      <input
        type="text"
        className="focus:outline-none border-b-2 border-white placeholder-white text-white my-2 w-full bg-transparent bg-opacity-30"
        placeholder="Email"
      />
      <input
        type="text"
        className="focus:outline-none border-b-2 border-white placeholder-white text-white w-full my-2 bg-transparent bg-opacity-30"
        placeholder="Services"
      />
      <button className="border border-solid border-orange-500 bg-orange-500 rounded-full py-1 md:px-4 mt-2 md:mt-0 w-full">
        Booking a Session
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default OnlineSession;
