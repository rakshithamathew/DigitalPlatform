import { useNavigate } from "react-router-dom";
import home from "../../assets/home.png";
import chat from "../../assets/chat.png";


const HomeOne = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="hidden sm:flex relative w-full h-relative md:min-h-[55vh] lg:min-h-[85vh] items-center justify-start overflow-hidden capitalize">
        <div>
          <img
            src={home}
            alt="icon"
            className="absolute w-[95%] h-[95%] ml-10 rounded-3xl inset-0 object-cover z-0 "
          />
        </div>
        <div className="absolute inset-0 z-10" />
        <div className="relative z-20 flex flex-col items-start w-full px-6 md:px-16 lg:px-24 py-8">
          <h1 className="text-[#7E7E7E] font-[500] text-[48px] leading-[1.2] font-[\'Instrument Sans\']">
            Find Business Match with
            <br></br>
            <div className="text-black ">
              {" "}
              Personal <span className="text-[#2828FE]">AI Agent !</span>
            </div>
          </h1>
          <h2 className="text-sm sm:text-base md:text-xs lg:text-xl leading-[1.2] font-[\'Instrument Sans\'] text-gray-500 mb-6 font-medium drop-shadow text-left leading-relaxed">
            If you’ve been harmed by a dangerous drug, medical device,
            <br />
            who put your recovery first.
          </h2>
          <div className="flex flex-row space-x-4">
            <button
              onClick={() => navigate("/Buyer")}
              className="relative overflow-hidden border-2 border-black bg-transparent text-black font-semibold px-6 md:px-8 py-3 md:py-4 rounded-md group"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                I'm a Buyer
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-black transition-all duration-500 ease-[cubic-bezier(.65,.05,.36,1)] group-hover:h-full"></span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black/10 rounded-full -translate-x-1/2 transition-all duration-700 group-hover:w-[200%] group-hover:h-[20px] group-hover:bottom-4"></span>
            </button>
            <button
              onClick={() => navigate("/Seller")}
              className="relative overflow-hidden border-2 border-black bg-transparent text-black font-semibold px-6 md:px-8 py-3 md:py-4 rounded-md group"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                I'm a Seller
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-black transition-all duration-500 ease-[cubic-bezier(.65,.05,.36,1)] group-hover:h-full"></span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black/10 rounded-full -translate-x-1/2 transition-all duration-700 group-hover:w-[200%] group-hover:h-[20px] group-hover:bottom-4"></span>
            </button>
          </div>
          <img
            src={chat}
            alt="icon"
            className="fixed w-[5%] rounded-3xl object-cover bottom-12 right-12 z-0"
          />
        </div>
      </section>
    </>
  );
};

export default HomeOne;
