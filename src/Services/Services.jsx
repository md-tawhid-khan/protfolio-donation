import marketingImg from '../assets/Mask group.png';
import uiUximg from '../assets/uidesign.png';
import technologyImg from '../assets/technology.png';
import reactImg from '../assets/reactdev.png';


const Services = () => {
    return (
        <section className="relative  mt-48 w-4/6  h-[320px]">
            <div className="absolute top-2 left-52 p-3 flex flex-col gap-5 ">
                <h5>What can We do</h5>
                <h1 className="font-bold text-2xl">Services we can <br/>
                help you with</h1>
                <button className="bg-[#FF4A17] text-[#FFFFFF] p-2 rounded-xl hover:bg-red-700">see all services</button>
            </div>
            {/*  picture per absolute */}
            <div className="absolute top-1 right-36 p-3 w-[150px] h-[150px] flex items-center justify-center rounded-lg"
            style={{
                backgroundImage:`url(${marketingImg})`
            }}>
               <h1 className='text-white'>Digital Marketing</h1>
            </div>
            <div className="absolute top-1 -right-52 p-3 w-[150px] h-[150px] flex items-center justify-center rounded-lg"
            style={{
                backgroundImage:`url(${uiUximg})`
            }}>
               <h1 className='text-white'>Digital Marketing</h1>
            </div>
            <div className="absolute  bottom-1 right-72 p-3 w-[150px] h-[150px] flex items-center justify-center rounded-lg"
            style={{
                backgroundImage:`url(${technologyImg})`
            }}>
               <h1 className='text-white'>Digital Marketing</h1>
            </div>
            <div className="absolute  bottom-1 -right-4 p-3 w-[150px] h-[150px] flex items-center justify-center rounded-lg"
            style={{
                backgroundImage:`url(${reactImg})`
            }}>
               <h1 className='text-white'>Digital Marketing</h1>
            </div>

            
            
        </section>
    );
};

export default Services;