
import img1 from "../../public/handshake 1.png";

const serviceData = [
  {
    title: "Couples Therapy",
    description:
      "All of us want to feel loved and when we feel disconnected or stuck in a relationship it colors our want to when we feel entire lookout.",
  },
  {
    title: "Individual Therapy",
    description:
      "Individual therapy focuses on one person meeting with a therapist in a safe and confidential environment to explore their feelings, beliefs, or behaviors.",
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
  {
    title: "Group Therapy",
    description:
      "Group therapy involves one or more therapists working with several people at the same time.",
  },
  {
    title: "Group Therapy",
    description:
      "Group therapy involves one or more therapists working with several people at the same time.",
  }
];

const OurServices = () => {
  return (
    <div className="py-5 container">
      <p className="orange text-center font-medium text-xs">Our Services</p>
      <h4 className="text-black text-center font-medium text-3xl my-3" style={{ fontFamily: "Castoro" }}>Our Session Types</h4>
      <div className="flex flex-wrap justify-center mt-4">
        {serviceData.map((service, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
            <div className="bg-white rounded-lg p-4 text-start">
              <p className="orange font-medium text-xs">COUPLE</p>
              <div className="flex gap-3 my-2">
                <img src={img1} alt="img not found" height="10px" width={30} />
                <h5 className="text-black text-lg mb-2">{service.title}</h5>
              </div>
              <p className="text-xs text-start my-2 text-black">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
