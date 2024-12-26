import { FaArrowRight } from "react-icons/fa";
import bannerImage from "../../assets/laptopimg.jpg";
import polygon2 from "../../assets/Polygon 2.png";
import polygon3 from "../../assets/Polygon 3.png";
import polygon4 from "../../assets/Polygon 4.png";
import vector from '../../assets/Vector 1.png'

const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen relative mt-3"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-95"></div>

        <div className="absolute top-[200px] left-28">
          <h1 className="font-extrabold text-5xl text-[#FFFFFF]">
            Creativity In Our <br />
            Blood Line{" "}
          </h1>
          <button className="flex items-center gap-3 mt-12 bg-[#FF4A17] w-[181px] h-11 rounded-xl hover:bg-red-700">
            <span className="mx-auto flex items-center gap-3 text-white">
              Get a Quote
              <FaArrowRight />
            </span>
          </button>
        </div>

        <div className="absolute top-[350px] right-36">
          <p className="text-[#666666]">
            We deliver best problem solving solution for our client and provide
            finest finishing <br /> product in present and upcoming future.
          </p>
        </div>

        <div className="absolute bottom-24 left-96 ">
          <img  src={polygon2} alt="" />
        </div>
        <div className="absolute top-56 left-20">
          <img src={polygon3} alt="" />
        </div>
        <div className="absolute top-72 right-32">
          <img src={polygon4} alt="" />
        </div>
        {/* fun fact section  */}
        <div className="absolute -bottom-32 border-4 bg-white p-8  grid grid-cols-3 gap-7 w-4/6 rounded-xl " style={{
            backgroundImage:`url(${vector})`
        }}>
          <div>
            <h1 className="text-2xl text-black">Our fun fact</h1>
            <p className="text-sm">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium, totam rem aperiam, 
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-4xl">40K</h1>
              </div>
              <div>
                <p className="text-red-500">+</p>
                <p className="text-sm">Global Happy Client</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-4xl">245</h1>
              </div>
              <div>
                <p className="text-red-500">+</p>
                <p className="text-sm">Team members</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-4xl">50K</h1>
              </div>
              <div>
                <p className="text-red-500">+</p>
                <p className="text-sm">project Complete</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-4xl">500</h1>
              </div>
              <div>
                <p className="text-red-500">+</p>
                <p className="text-sm">Digital Product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
