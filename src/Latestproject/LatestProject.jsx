import laptopImg1 from "../assets/laptopImgForPortfolio.png";
import laptopImg2 from "../assets/laptopImgForPortfolio2.png";
import laptopImg3 from "../assets/lapTopImgForPortfolio3.png";
import ellips1 from '../assets/Ellipse 1.png';
import ellips2 from "../assets/Ellipse 2.png";

const LatestProject = () => {
    return (
        <div className="my-9">
            <div className="flex flex-col gap-4 items-center " >
            <p>Latest Projects</p>
            <h1 className="text-2xl font-semibold mb-12">Portfolio to Explore</h1>
        </div>

        <div className=" flex overflow-hidden  items-center justify-center gap-3 mb-14">           
            <img  src={laptopImg1} alt="No Img" />
            <img src={laptopImg3} alt="No Img" />
            <img  src={laptopImg2} alt="No Img" />
        </div>
        <div className="flex gap-3 items-center justify-center ">
                 <img src={ellips1} alt="" />
                 <img src={ellips1} alt="" />
                 <img src={ellips2} alt="" />
                 <img src={ellips1} alt="" />
                 </div>
        </div>
        
    );
};

export default LatestProject;