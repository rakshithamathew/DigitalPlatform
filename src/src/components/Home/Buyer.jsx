/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Buyers from "../../assets/Buyers.png";

const Buyer = () => {
   const questionSets = [
      {
        question: "How would you describe your startup?",
        options: [
          "Saas",
          "Ecommerce",
          "Shopify",
          "Mobile App",
          "Other",
        ],
        multiSelect: true
      },
      {
        question: "How are you selling your startup?",
        options: [
          "Individual",
          "As a Company"
        ],
        multiSelect: true
      },
      {
        question: "How much revenue have you made in the last 12 months?",
        options: [
          "Under $100,000",
          "$100,000 - $500,000",
          "$500,000 - $1,000,000",
          "$1,000,000 - $5,000,000",
          "Over $5,000,000",
        ],
        multiSelect: false
      },
      {
        question: "How many active customers do you have?",
        options: [
          "Under 10",
          "10 - 50",
          "50 - 100",
          "100 - 500",
          "Over 500",
        ],
        multiSelect: false
      },
      {
        question: "Why are you selling?",
        options: [
          "Lifestyle change",
          "Health reasons",
          "Family needs",
          "Others",
        ],
        multiSelect: true
      },
    ];
  
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [answers, setAnswers] = useState({});
    const progress = ((currentQuestionIndex + 1) / questionSets.length) * 100;
  
    const currentQuestion = questionSets[currentQuestionIndex];
    const isMultiSelect = currentQuestion.multiSelect;
  
  const handleSelect = (option) => {
      setSelectedOptions(prev => {
        const currentSelections = prev[currentQuestionIndex] || [];
        
        if (isMultiSelect) {
          return {
            ...prev,
            [currentQuestionIndex]: currentSelections.includes(option)
              ? currentSelections.filter(item => item !== option)
              : [...currentSelections, option]
          };
        } else {
          return {
            ...prev,
            [currentQuestionIndex]: currentSelections.includes(option) ? [] : [option]
          };
        }
      });
    };
  
    const handleNext = () => {
      const currentAnswer = selectedOptions[currentQuestionIndex] || [];
      setAnswers({
        ...answers,
        [currentQuestionIndex]: {
          question: currentQuestion.question,
          answer: currentAnswer,
        },
      });
  
      if (currentQuestionIndex < questionSets.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert("All questions completed! Answers");
      }
    };
  
    const handleSkip = () => {
      if (currentQuestionIndex < questionSets.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOptions(prev => ({ ...prev, [currentQuestionIndex + 1]: [] }));
      } else {
        alert("All questions completed! Answers: " + JSON.stringify(answers, null, 2));
      }
    };
  
    const handlePrevious = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
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
          <img
            src={Buyers}
            alt="icon"
            className="absolute w-[97%] h-[97%] mt-20 rounded-3xl inset-0 object-cover z-0"
          />

          <div className="flex items-center space-x-3 mb-8 w-[40%] mt-5" style={{ marginLeft: "50%" }}>
            <button
              className="p-2 rounded-full bg-white shadow"
              onClick={handlePrevious}
            >
              <ArrowLeft size={30} />
            </button>
            <div className="flex-1 h-1 bg-gray-300 rounded-full">
              <div
                className="h-1 bg-black rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="absolute flex flex-col md:w-1/2" style={{ marginLeft: "47%" }}>
            <h2 className="text-[32px] mb-6 mt-12">{currentQuestion.question}</h2>
            <div className="flex flex-wrap gap-3 mt-10">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`px-4 py-2 rounded-full border text-sm md:text-base transition-colors ${
                    isOptionSelected(option)
                      ? "bg-black text-white border-black"
                      : "bg-transparent border-gray-400 text-black hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex space-x-4 ml-60 mt-16">
              <button
                onClick={handleNext}
                className={`px-6 py-2 rounded ${
                  (!isMultiSelect && !selectedOptions[currentQuestionIndex]?.length) ||
                  (isMultiSelect && currentQuestionIndex === questionSets.length - 1 && 
                   !selectedOptions[currentQuestionIndex]?.length)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black text-white"
                }`}
                disabled={
                  (!isMultiSelect && !selectedOptions[currentQuestionIndex]?.length) ||
                  (isMultiSelect && currentQuestionIndex === questionSets.length - 1 && 
                   !selectedOptions[currentQuestionIndex]?.length)
                }
              >
                {currentQuestionIndex === questionSets.length - 1
                  ? "Submit"
                  : "Next"}
              </button>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Buyer;