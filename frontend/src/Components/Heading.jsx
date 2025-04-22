import HorizontalBorder from "../assets/bar/HorizontalBorder.png";
const Heading = ({ heading_text, align = "left" }) => {
    const alignmentClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    };
  
    const imageAlignment = {
      left: "",
      center: "mx-auto pl-[2rem]",
      right: "ml-auto",
    };
  
    return (
      <div className={alignmentClasses[align]}>
        <h5 className="text-[#FE6204] md:text-md lg:text-xl text-base font-medium">
          {heading_text}
        </h5>
        <img src={HorizontalBorder} className={`mt-[-1rem] ${imageAlignment[align]}`} />
      </div>
    );
  };
  export default Heading