import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import SellerBuyers from "../../assets/SellerBuyer.png";

const SellerBuyer = () => {
  const navigate = useNavigate();
  const questionSets = [
    {
      question: "Who are You?",
      options: ["Buyer", "Seller"],
      multiSelect: false, 
    },
  ];

  const [currentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const progress = ((currentQuestionIndex + 1) / questionSets.length) * 100;

  const currentQuestion = questionSets[currentQuestionIndex];
  const isMultiSelect = currentQuestion.multiSelect;

  const handleSelect = (option) => {
    // For single selection, just set the option directly
    setSelectedOptions({
      [currentQuestionIndex]: [option],
    });
  };

  const handleNext = () => {
    const selectedOption = selectedOptions[currentQuestionIndex]?.[0];

    if (selectedOption === "Seller") {
      navigate("/Seller");
    } else if (selectedOption === "Buyer") {
      navigate("/Buyer");
    }
  };

  const isOptionSelected = (option) => {
    return (selectedOptions[currentQuestionIndex] || []).includes(option);
  };

  return (
    <>
      <Navbar />
      <section className="hidden sm:flex relative w-full h-relative md:min-h-[55vh] lg:min-h-[85vh] items-center justify-start overflow-hidden capitalize">
        <div className="absolute inset-0 w-[90%] h-[95%] ml-16 rounded-3xl bg-slate-100 object-cover z-0">
          <div >
            <img
              src={SellerBuyers}
              alt="icon"
              className="absolute mt-10 ml-16 w-[90%] h-[95%] rounded-3xl inset-0 object-cover z-0 "
            />

            <div className="flex items-center justify-center md:w-1/3 mb-6 md:mb-0">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-500">
                Meso Lawsuit
              </h1>
            </div>

            <div className="flex flex-col md:w-1/2">
              <div className="flex items-center space-x-3 mb-8">
                <button
                  className="p-2 rounded-full bg-white shadow"
                  disabled 
                >
                  <ArrowLeft size={30} />
                </button>
                <div className="flex-1 h-1 bg-gray-300 rounded-full">
                  <div
                    className="h-1 bg-black rounded-full transition-all "
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <h2 className="text-[32px] mb-6">{currentQuestion.question}</h2>
              <div className="flex flex-wrap gap-3 mb-10">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`px-4 py-2 rounded-full border text-sm md:text-base ${
                      isOptionSelected(option)
                        ? "bg-black text-white border-black transition-all duration-500 ease-[cubic-bezier(.65,.05,.36,1)] group-hover:h-full"
                        : "bg-transparent border-gray-400 text-black"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="flex space-x-4 ml-72">
                <button
                  onClick={handleNext}
                  className={`px-6 py-2 rounded ${
                    !selectedOptions[currentQuestionIndex]?.length
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black text-white"
                  }`}
                  disabled={!selectedOptions[currentQuestionIndex]?.length}
                >
                  Continue
                </button>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerBuyer;
