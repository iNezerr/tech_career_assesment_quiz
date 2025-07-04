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
    id: 16,
    text: "You feel most accomplished when:",
    options: [
      { value: "A", label: "Cracking tough code", domain: "TC" },
      { value: "B", label: "Exceeding growth targets", domain: "BM" },
      { value: "C", label: "Advancing patient care", domain: "HS" },
      { value: "D", label: "Creating something unique", domain: "CD" },
      { value: "E", label: "Building functional solutions", domain: "ED" },
      { value: "F", label: "Driving decisions", domain: "MC" }
    ]
  },
  {
    id: 17,
    text: "Your work motivation comes from:",
    options: [
      { value: "A", label: "Solving complex problems", domain: "TC" },
      { value: "B", label: "Achieving ambitious goals", domain: "BM" },
      { value: "C", label: "Making people's lives better", domain: "HS" },
      { value: "D", label: "Creative freedom", domain: "CD" },
      { value: "E", label: "System innovation", domain: "ED" },
      { value: "F", label: "Market impact", domain: "MC" }
    ]
  },
  {
    id: 18,
    text: "You value work that:",
    options: [
      { value: "A", label: "Pushes technical boundaries", domain: "TC" },
      { value: "B", label: "Drives organizational change", domain: "BM" },
      { value: "C", label: "Strengthens community health", domain: "HS" },
      { value: "D", label: "Redefines possible", domain: "CD" },
      { value: "E", label: "Creates solid foundations", domain: "ED" },
      { value: "F", label: "Shapes outcomes", domain: "MC" }
    ]
  },
  {
    id: 19,
    text: "Your ideal project would involve:",
    options: [
      { value: "A", label: "Building innovative systems", domain: "TC" },
      { value: "B", label: "Scale successful ventures", domain: "BM" },
      { value: "C", label: "Transforming patient experience", domain: "HS" },
      { value: "D", label: "Designing breakthrough concepts", domain: "CD" },
      { value: "E", label: "Crafting pivotal solutions", domain: "ED" },
      { value: "F", label: "Shaping popular narratives", domain: "MC" }
    ]
  },
  {
    id: 20,
    text: "Success to you means:",
    options: [
      { value: "A", label: "Finding elegant solutions", domain: "TC" },
      { value: "B", label: "Delivering measurable results", domain: "BM" },
      { value: "C", label: "Improving quality of life", domain: "HS" },
      { value: "D", label: "Making lasting impact", domain: "CD" },
      { value: "E", label: "Building something that lasts", domain: "ED" },
      { value: "F", label: "Moving people to action", domain: "MC" }
    ]
  }
];

interface CareerQuizSection4Props {
  onSubmit?: (answers: Record<number, string>) => void;
  onBack?: () => void;
}

export default function CareerQuizSection4({ onSubmit, onBack }: CareerQuizSection4Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const allQuestionsAnswered = questions.every(q => answers[q.id]);

  const handleSubmit = () => {
    if (allQuestionsAnswered && onSubmit) {
      onSubmit(answers);
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
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Section 4: Values & Motivations</h2>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full w-full"></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">Question 16-20 of 20 - Final Section!</p>
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
            ← Back to Section 3
          </button>
          
          <div className="text-sm text-gray-500">
            {Object.keys(answers).length} of {questions.length} questions answered
          </div>
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={!allQuestionsAnswered}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
            allQuestionsAnswered
              ? 'bg-green-600 text-white hover:bg-green-700 focus:ring-4 focus:ring-green-300 shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {allQuestionsAnswered ? '🎉 Submit Assessment' : 'Complete All Questions'}
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Final Section:</strong> These questions explore your core values and what motivates you at work. 
          Select the options that resonate most deeply with your personal values and aspirations.
        </p>
      </div>

      {/* Completion Message */}
      {allQuestionsAnswered && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-800">
                <strong>Assessment Complete!</strong> You've answered all 20 questions. Click "Submit Assessment" to see your personalized career recommendations.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
