
import img1 from "../../public/g10.png";

const processData = [
  {
    title: "Couples Therapy",
    description:
      "All of us want to feel loved and when we feel disconnected or stuck in a relationship it colors our want to when we feel entire lookout.",
  },
  {
    title: "Family Therapy",
    description:
      "Family therapy involves counseling to address issues affecting the health and functioning of a family.",
  },
  {
    title: "Group Therapy",
    description:
      "Group therapy involves one or more therapists working with several people at the same time.",
  },
];

const TheProcess = () => {
  return (
    <div className="gray  py-5">
      <div className="container">
      <p className=" orange text-center font-medium text-xs">THE PROCESS</p>
      <h4 className="text-black text-center font-medium text-3xl my-3" style={{ fontFamily: "Castoro" }}>
        How We Can Benefit You!
      </h4>
      <div className="flex flex-wrap justify-center mt-4">
        {processData.map((process, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
            <div className="p-4 text-center">
              <div className="flex  justify-center">
              <img src={img1} alt="img not found" height="px" width={140} />
              </div>
             
              <h5 className="text-black text-lg mb-2">{process.title}</h5>
              <p className="text-xs text-center my-2 text-black">{process.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default TheProcess;
