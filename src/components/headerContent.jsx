import img1 from "../../public/Rectangle 748-1.png";

const Header = () => {
  return (
    <div
      className="bg-cover bg-center h-96 flex items-center text-white"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="container mx-auto text-center">
        <h1 className="font-medium text-4xl leading-tight text-start">
          Congratulation ! You’re <br />
          already ahead of 16 crore <br />
          People
        </h1>
        <div className="text-start hidden md:flex">
          <button className="border border-solid border-orange-500 bg-orange-500 rounded-lg p-2 md:px-4  my-3">
            Booking Session Now
          </button>
        </div>
        <div className=" hidden md:flex border border-solid border-gray-200 bg-white/40  rounded-lg overflow-hidden p-4  flex-col md:flex-row md:gap-1 justify-around ">
          <input
            type="text"
            className="focus:outline-none border-b-2 border-white   md:mr-1 placeholder-white text-white my-2  bg-transparent bg-opacity-30"
            placeholder="Name"
          />
          <input
            type="text"
            className="focus:outline-none border-b-2 placeholder:text-white border-white   md:mr-1 placeholder-white text-white my-2  bg-transparent bg-opacity-30"
            placeholder="Email"
          />
          <input
            type="text"
            className="focus:outline-none border-b-2 border-white   md:mr-1 placeholder-white text-white my-2  bg-transparent bg-opacity-30"
            placeholder="Services"
          />
          <button className="border border-solid border-orange-500 bg-orange-500 rounded-lg p-2 md:px-4 mt-2 md:mt-0">
            Booking Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
