import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import processImg1 from '../assets/processImg1.png';
import processImg2 from '../assets/processImg2.png';
import processImg3 from '../assets/processImg3.png';
import processImg4 from '../assets/processImg4.png';

const TeamMember = () => {
  return (
    <section className="w-4/6 mx-auto">
      <div className="mb-14">
        <h1 className="font-thin">Our Team</h1>
        <div className="flex justify-between text-2xl font-semibold">
          <h1>Awesome team members</h1>
          <div className="flex gap-3">
            <button className="hover:text-red-500">
              <FaArrowRight />{" "}
            </button>
            <button className="hover:text-red-500">
              <FaArrowLeft />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <img src={processImg1} alt="No image" />
        <img src={processImg2} alt="No image" />
        <img src={processImg3} alt="No image" />
        <img src={processImg4} alt="No image" />
      </div>
    </section>
  );
};

export default TeamMember;
