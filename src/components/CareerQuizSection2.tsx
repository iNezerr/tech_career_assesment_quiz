import { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: {
    value: string;
    label: string;
    domain: string;
  }[];
}

const questions: Question[] = [
  {
    id: 6,
    text: "Your strongest natural abilities are:",
    options: [
      { value: "A", label: "Mathematical and logical thinking", domain: "TC" },
      { value: "B", label: "Strategic planning and analysis", domain: "BM" },
      { value: "C", label: "Understanding people's needs", domain: "HS" },
      { value: "D", label: "Visual and creative expression", domain: "CD" },
      { value: "E", label: "Technical problem-solving", domain: "ED" },
      { value: "F", label: "Communication and persuasion", domain: "MC" }
    ]
  },
  {
    id: 7,
    text: "When analyzing information, you excel at:",
    options: [
      { value: "A", label: "Finding patterns in data", domain: "TC" },
      { value: "B", label: "Connecting market signals and ROI potential", domain: "BM" },
      { value: "C", label: "Recognizing care patterns", domain: "HS" },
      { value: "D", label: "Visualizing user flows", domain: "CD" },
      { value: "E", label: "Detecting technical issues", domain: "ED" },
      { value: "F", label: "Understanding consumer behavior signals", domain: "MC" }
    ]
  },
  {
    id: 8,
    text: "Your approach to learning new skills is:",
    options: [
      { value: "A", label: "Deep technical immersion", domain: "TC" },
      { value: "B", label: "Business scenario analysis", domain: "BM" },
      { value: "C", label: "Through practice scenarios", domain: "HS" },
      { value: "D", label: "By experimenting creatively", domain: "CD" },
      { value: "E", label: "Through technical documentation", domain: "ED" },
      { value: "F", label: "Industry trend research", domain: "MC" }
    ]
  },
  {
    id: 9,
    text: "In challenging situations, you typically:",
    options: [
      { value: "A", label: "Troubleshoot systematically", domain: "TC" },
      { value: "B", label: "Assess risks and opportunities", domain: "BM" },
      { value: "C", label: "Focus on people's wellbeing", domain: "HS" },
      { value: "D", label: "Try different approaches", domain: "CD" },
      { value: "E", label: "Build step-by-step solutions", domain: "ED" },
      { value: "F", label: "Find consensus and alignment", domain: "MC" }
    ]
  },
  {
    id: 10,
    text: "Your problem-solving strength is:",
    options: [
      { value: "A", label: "Test hypotheses and isolate issues", domain: "TC" },
      { value: "B", label: "Model scenarios and calculate risks", domain: "BM" },
      { value: "C", label: "Balance patient and staff needs", domain: "HS" },
      { value: "D", label: "Push boundaries and explore edges", domain: "CD" },
      { value: "E", label: "Design systems and scale processes", domain: "ED" },
      { value: "F", label: "Study behaviors and drive actions", domain: "MC" }
    ]
  }
];

interface CareerQuizSection2Props {
  onNext?: (answers: Record<number, string>) => void;
  onBack?: () => void;
}

export default function CareerQuizSection2({ onNext, onBack }: CareerQuizSection2Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const allQuestionsAnswered = questions.every(q => answers[q.id]);

  const handleNext = () => {
    if (allQuestionsAnswered && onNext) {
      onNext(answers);
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Path Assessment</h1>
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Section 2: Skills & Abilities</h2>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full w-2/4"></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">Question 6-10 of 20</p>
      </div>

      {/* Questions */}
      <div className="space-y-8">
        {questions.map((question) => (
          <div key={question.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {question.id}. {question.text}
            </h3>
            
            <div className="space-y-3">
              {question.options.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-sm ${
                    answers[question.id] === option.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option.value}
                    checked={answers[question.id] === option.value}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <div className="flex-1">
                    <span className="text-gray-900 font-medium mr-2">({option.value})</span>
                    <span className="text-gray-700">{option.label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="px-6 py-3 rounded-lg font-medium border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:ring-4 focus:ring-gray-200"
          >
            ← Back to Section 1
          </button>
          
          <div className="text-sm text-gray-500">
            {Object.keys(answers).length} of {questions.length} questions answered
          </div>
        </div>
        
        <button
          onClick={handleNext}
          disabled={!allQuestionsAnswered}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
            allQuestionsAnswered
              ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Next Section →
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Section 2 Focus:</strong> These questions assess your natural abilities and how you approach learning and problem-solving. 
          Select the option that best reflects your strongest natural tendencies and preferred methods.
        </p>
      </div>
    </div>
  );
}
