import discussImg from '../assets/discussImg.png';

const DisscussSection = () => {
    return (
        <section className='my-11'>
        <div className="text-center w-4/6 mx-auto flex flex-col gap-9 justify-center items-center h-[400px]"
        style={{
            backgroundImage:`url(${discussImg})`
        }}>
            
            <h1 className='font-semibold text-3xl '>Let us discuses make something cool together</h1>
            <p className='bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-700'>apply for  meaning</p>
        </div>
        </section>
    );
};

export default DisscussSection;