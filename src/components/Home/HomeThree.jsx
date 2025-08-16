import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from '../Navbar/Navbar';

const HomeThree = () => {
  const questionSets = [
    {
      question: "What is your primary reason for considering business acquisition?",
      options: [
        "Retirement exit",
        "Financial distress",
        "No demand",
        "Pivot to new venture",
        "Other",
      ],
      multiSelect: true
    },
    {
      question: "What industries are you interested in?",
      options: [
        "Technology",
        "Healthcare",
        "Manufacturing",
        "Retail",
        "Food & Beverage",
        "Other",
      ],
      multiSelect: true
    },
    {
      question: "How much capital are you willing to invest?",
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
      question: "What's your timeline for acquisition?",
      options: [
        "Immediately",
        "Within 3 months",
        "3-6 months",
        "6-12 months",
        "1+ years",
      ],
      multiSelect: false
    },
    {
      question: "Select all that apply to your experience:",
      options: [
        "First-time buyer",
        "1-2 previous acquisitions",
        "3-5 previous acquisitions",
        "More than 5 acquisitions",
        "Corporate acquisition experience",
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
    if (isMultiSelect) {
      setSelectedOptions(prev => {
        const newSelection = { ...prev };
        if (newSelection[currentQuestionIndex]?.includes(option)) {
          newSelection[currentQuestionIndex] = newSelection[currentQuestionIndex].filter(
            item => item !== option
          );
        } else {
          newSelection[currentQuestionIndex] = [
            ...(newSelection[currentQuestionIndex] || []),
            option
          ];
        }
        return newSelection;
      });
    } else {
      setSelectedOptions(prev => ({
        ...prev,
        [currentQuestionIndex]: [option]
      }));
    }
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
        <div className="absolute inset-0 w-[90%] h-[95%] ml-16 rounded-3xl bg-slate-100 object-cover z-0 ">
          <div className="absolute inset-0 w-[90%] h-[95%] ml-16 rounded-3xl bg-[] mt-6 object-cover z-0 ">
            <div className="flex flex-col md:flex-row h-[95%] rounded-3xl bg-gray-200 px-4 md:px-16 py-8 space-x-20">
              <div className="flex items-center justify-center md:w-1/3 mb-6 md:mb-0">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-500">Meso Lawsuit</h1>
              </div>

              <div className="flex flex-col md:w-1/2">
                <div className="flex items-center space-x-3 mb-8">
                  <button
                    className="p-2 rounded-full bg-white shadow"
                    onClick={handlePrevious}
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
                      className={`px-4 py-2 rounded-full border text-sm md:text-base ${isOptionSelected(option)
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
                    className={`px-6 py-2 rounded ${(!isMultiSelect && !selectedOptions[currentQuestionIndex]?.length) ||
                      (isMultiSelect && currentQuestionIndex === questionSets.length - 1 && !selectedOptions[currentQuestionIndex]?.length)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black text-white"
                      }`}
                    disabled={
                      (!isMultiSelect && !selectedOptions[currentQuestionIndex]?.length) ||
                      (isMultiSelect && currentQuestionIndex === questionSets.length - 1 && !selectedOptions[currentQuestionIndex]?.length)
                    }
                  >
                    {currentQuestionIndex === questionSets.length - 1 ? "Submit" : "Next"}
                  </button>
                  {currentQuestionIndex !== questionSets.length - 1 && (
                    <button
                      onClick={handleSkip}
                      className="bg-black text-white px-6 py-2 rounded"
                    >
                      Skip
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeThree;