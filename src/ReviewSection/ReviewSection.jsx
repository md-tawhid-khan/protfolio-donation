import { IoStarSharp } from "react-icons/io5";
import reviewImg1 from "../assets/reviewImg1.png";
import reviewImg2 from "../assets/reviewImg2.png";
import reviewImg3 from "../assets/reviewImg3.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const ReviewSection = () => {
  return (
    <section className="my-11 h-[600px] grid grid-cols-2 place-items-center px-20 bg-gray-200 pt-9">
      <div className="relative">
        <div className="flex gap-x-28 items-center justify-center">
          <img src={reviewImg2} alt="No Image" />
          <img src={reviewImg1} alt="No Image" />
        </div>
        <div className="absolute -top-5 left-32">
        <img src={reviewImg3} alt="No Image" />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-7">
          <p>
            Enhance your approach to gathering customer feedback with these
            expertly designed review request templates for text messaging. They
            are tailored to prompt customer interaction and boost response
            rates, offering valuable perspectives to improve your business.
          </p>
          <p className="flex gap-2">
            <IoStarSharp className="text-red-600" />
            <IoStarSharp className="text-red-600" />
            <IoStarSharp className="text-red-600" />
            <IoStarSharp className="text-red-600" />
            <IoStarSharp className="text-red-300" />
          </p>
        </div>

        <div className="flex justify-between items-center mt-10">
          <div>
            <h1 className="font-semibold text-2xl ">Jane Smith</h1>
            <p>CEO at tech</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3 border border-black text-2xl z-1">
              <IoIosArrowRoundBack />
            </button>
            <button className="px-3 border border-black text-2xl">
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
