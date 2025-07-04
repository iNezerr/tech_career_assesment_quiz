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
    id: 1,
    text: "Your ideal work environment is one where:",
    options: [
      { value: "A", label: "Quiet focused spaces", domain: "TC" },
      { value: "B", label: "Strategy rooms and boardrooms", domain: "BM" },
      { value: "C", label: "Care-centered facilities", domain: "HS" },
      { value: "D", label: "Open creative studios", domain: "CD" },
      { value: "E", label: "Hands-on technical workspaces", domain: "ED" },
      { value: "F", label: "Team collaboration hubs", domain: "MC" }
    ]
  },
  {
    id: 2,
    text: "When solving problems, you prefer to:",
    options: [
      { value: "A", label: "Take things apart to find the source of the problem", domain: "TC" },
      { value: "B", label: "Look at the numbers and track down patterns", domain: "BM" },
      { value: "C", label: "Talk to people to understand what they need", domain: "HS" },
      { value: "D", label: "Draw out or map different possible solutions", domain: "CD" },
      { value: "E", label: "Start small and test each piece of the solution", domain: "ED" },
      { value: "F", label: "Gather feedback to find the best approach", domain: "MC" }
    ]
  },
  {
    id: 3,
    text: "You're most energized when:",
    options: [
      { value: "A", label: "Working through complex code", domain: "TC" },
      { value: "B", label: "Optimizing business performance", domain: "BM" },
      { value: "C", label: "Improving patient outcomes", domain: "HS" },
      { value: "D", label: "Exploring design concepts", domain: "CD" },
      { value: "E", label: "Building working solutions", domain: "ED" },
      { value: "F", label: "Shaping market trends", domain: "MC" }
    ]
  },
  {
    id: 4,
    text: "In team settings, you naturally:",
    options: [
      { value: "A", label: "Find system weaknesses", domain: "TC" },
      { value: "B", label: "Guide team priorities", domain: "BM" },
      { value: "C", label: "Foster collaboration", domain: "HS" },
      { value: "D", label: "Drive creative vision", domain: "CD" },
      { value: "E", label: "Design solutions", domain: "ED" },
      { value: "F", label: "Craft compelling stories", domain: "MC" }
    ]
  },
  {
    id: 5,
    text: "You excel at handling:",
    options: [
      { value: "A", label: "Complex technical puzzles", domain: "TC" },
      { value: "B", label: "Making key decisions", domain: "BM" },
      { value: "C", label: "People's wellbeing needs", domain: "HS" },
      { value: "D", label: "Pushing creative limits", domain: "CD" },
      { value: "E", label: "Developing systems and structures", domain: "ED" },
      { value: "F", label: "Analyzing trend shifts and changes", domain: "MC" }
    ]
  }
];

interface CareerQuizSection1Props {
  onNext?: (answers: Record<number, string>) => void;
}

export default function CareerQuizSection1({ onNext }: CareerQuizSection1Props) {
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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Path Assessment</h1>
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Section 1: Work Style & Environment</h2>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full w-1/4"></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">Question 1-5 of 20</p>
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
      <div className="mt-10 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {Object.keys(answers).length} of {questions.length} questions answered
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
          <strong>Instructions:</strong> Select the option that best describes your work style and preferences. 
          There are no right or wrong answers - choose what feels most natural to you.
        </p>
      </div>
    </div>
  );
}
