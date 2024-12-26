import processImg from "../assets/process.png"

const ProcessSection = () => {
    return (
        <div className="my-10 w-4/6 mx-auto">
            <h3 className="font-semibold text-2xl text-center p-20">Our agile process is ability to adapt and respond
to change. Agile organizations view change as an
opportunity, not a threat.</h3>           
            <img src={processImg} alt="no image" />
        </div>
    );
};

export default ProcessSection;
