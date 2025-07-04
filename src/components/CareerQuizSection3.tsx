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
    id: 11,
    text: "You most enjoy learning about:",
    options: [
      { value: "A", label: "How things work", domain: "TC" },
      { value: "B", label: "What drives success", domain: "BM" },
      { value: "C", label: "Ways to improve wellbeing", domain: "HS" },
      { value: "D", label: "New creative techniques", domain: "CD" },
      { value: "E", label: "Building better solutions", domain: "ED" },
      { value: "F", label: "Why people make choices", domain: "MC" }
    ]
  },
  {
    id: 12,
    text: "When reading for work, you prefer:",
    options: [
      { value: "A", label: "Code documentation and developer guides", domain: "TC" },
      { value: "B", label: "Financial reports and industry news", domain: "BM" },
      { value: "C", label: "Patient care studies and protocols", domain: "HS" },
      { value: "D", label: "Design portfolios and style guides", domain: "CD" },
      { value: "E", label: "System specifications and manuals", domain: "ED" },
      { value: "F", label: "Consumer data and market research", domain: "MC" }
    ]
  },
  {
    id: 13,
    text: "You're most likely to take courses in:",
    options: [
      { value: "A", label: "Software development and code languages", domain: "TC" },
      { value: "B", label: "Financial modeling and business administration", domain: "BM" },
      { value: "C", label: "Clinical management", domain: "HS" },
      { value: "D", label: "User experience and design thinking", domain: "CD" },
      { value: "E", label: "Structure design and systems architecture", domain: "ED" },
      { value: "F", label: "Campaign design and digital strategy", domain: "MC" }
    ]
  },
  {
    id: 14,
    text: "Your internet browsing often includes:",
    options: [
      { value: "A", label: "Code libraries and dev forums", domain: "TC" },
      { value: "B", label: "Investment trends", domain: "BM" },
      { value: "C", label: "Healthcare discoveries and research", domain: "HS" },
      { value: "D", label: "Creative inspiration galleries", domain: "CD" },
      { value: "E", label: "New technologies and inventions", domain: "ED" },
      { value: "F", label: "Marketing trends and social data", domain: "MC" }
    ]
  },
  {
    id: 15,
    text: "In work discussions, you focus on:",
    options: [
      { value: "A", label: "System improvements and efficiencies", domain: "TC" },
      { value: "B", label: "Business opportunities and strategies", domain: "BM" },
      { value: "C", label: "Patient experience and outcomes", domain: "HS" },
      { value: "D", label: "Creative concepts and solutions", domain: "CD" },
      { value: "E", label: "Project challenges and approaches", domain: "ED" },
      { value: "F", label: "Audience engagement and impact", domain: "MC" }
    ]
  }
];

interface CareerQuizSection3Props {
  onNext?: (answers: Record<number, string>) => void;
  onBack?: () => void;
}

export default function CareerQuizSection3({ onNext, onBack }: CareerQuizSection3Props) {
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
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Section 3: Knowledge & Interests</h2>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">Question 11-15 of 20</p>
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
            ← Back to Section 2
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
          <strong>Section 3 Focus:</strong> These questions explore your learning interests and knowledge preferences. 
          Choose the options that align with what genuinely excites and motivates you to learn and engage.
        </p>
      </div>
    </div>
  );
}
