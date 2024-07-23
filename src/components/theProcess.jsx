import img1 from "../../public/g10.png";
const TheProcess = () => {
  return (
    <div className="gray container py-5">
      <p className="orange text-center font-medium text-xs">THE PROCESS</p>
      <h4
        className="text-black text-center font-medium text-3xl"
        style={{ fontFamily: "Castoro" }}
      >
        How We Can Benefit You!
      </h4>
      <div className="flex flex-wrap justify-center mt-4">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
          <div className="  p-4 text-center">
            <img src={img1} alt="img not found" height="px" width={140} />
            <h5 className="text-black text-lg  mb-2">Couples Therapy</h5>

            <p className="text-xs text-center my-2 text-black">
              All of us want to feel loved and when we feel disconnected or
              stuck in a relationship it colors our want to when we feel entire
              lookout.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
          <div className="  p-4 text-center">
            <img src={img1} alt="img not found" height="px" width={140} />
            <h5 className="text-black text-lg  mb-2">Couples Therapy</h5>

            <p className="text-xs text-center my-2 text-black">
              All of us want to feel loved and when we feel disconnected or
              stuck in a relationship it colors our want to when we feel entire
              lookout.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
          <div className="  p-4 text-center">
            <img src={img1} alt="img not found" height="px" width={140} />
            <h5 className="text-black text-lg  mb-2">Couples Therapy</h5>

            <p className="text-xs text-center my-2 text-black">
              All of us want to feel loved and when we feel disconnected or
              stuck in a relationship it colors our want to when we feel entire
              lookout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheProcess;
