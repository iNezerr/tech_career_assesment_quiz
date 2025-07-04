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
    text: "When do you feel most proud and accomplished? (What makes you feel successful)",
    options: [
      { value: "A", label: "When I solve difficult computer or technical problems", domain: "TC" },
      { value: "B", label: "When I help a business grow and reach its goals", domain: "BM" },
      { value: "C", label: "When I help patients get better and improve their health", domain: "HS" },
      { value: "D", label: "When I create something unique and beautiful", domain: "CD" },
      { value: "E", label: "When I build something that works well and lasts long", domain: "ED" },
      { value: "F", label: "When I influence people and help them make decisions", domain: "MC" }
    ]
  },
  {
    id: 17,
    text: "What motivates you to work hard? (What drives you to do your best)",
    options: [
      { value: "A", label: "Solving complex problems that challenge my mind", domain: "TC" },
      { value: "B", label: "Achieving big goals and being successful in business", domain: "BM" },
      { value: "C", label: "Making people's lives better and healthier", domain: "HS" },
      { value: "D", label: "Having freedom to be creative and express myself", domain: "CD" },
      { value: "E", label: "Creating new systems and innovations that help society", domain: "ED" },
      { value: "F", label: "Having impact on markets and influencing many people", domain: "MC" }
    ]
  },
  {
    id: 18,
    text: "What kind of work do you value most? (What type of work feels meaningful to you)",
    options: [
      { value: "A", label: "Work that pushes technology forward and breaks new ground", domain: "TC" },
      { value: "B", label: "Work that drives change in organizations and business", domain: "BM" },
      { value: "C", label: "Work that strengthens community health and helps people", domain: "HS" },
      { value: "D", label: "Work that redefines what's possible and creates new things", domain: "CD" },
      { value: "E", label: "Work that creates solid foundations for the future", domain: "ED" },
      { value: "F", label: "Work that shapes outcomes and influences how things turn out", domain: "MC" }
    ]
  },
  {
    id: 19,
    text: "What would your ideal project look like? (Your dream work project)",
    options: [
      { value: "A", label: "Building new innovative computer systems or software", domain: "TC" },
      { value: "B", label: "Helping successful businesses grow even bigger", domain: "BM" },
      { value: "C", label: "Transforming how patients experience healthcare", domain: "HS" },
      { value: "D", label: "Designing breakthrough concepts that change everything", domain: "CD" },
      { value: "E", label: "Creating important solutions that solve major problems", domain: "ED" },
      { value: "F", label: "Shaping popular stories and influencing public opinion", domain: "MC" }
    ]
  },
  {
    id: 20,
    text: "What does success mean to you? (How you define a successful life)",
    options: [
      { value: "A", label: "Finding elegant solutions to difficult technical problems", domain: "TC" },
      { value: "B", label: "Delivering measurable results and achieving clear goals", domain: "BM" },
      { value: "C", label: "Improving quality of life for many people", domain: "HS" },
      { value: "D", label: "Making lasting impact through creative work", domain: "CD" },
      { value: "E", label: "Building something important that lasts for generations", domain: "ED" },
      { value: "F", label: "Moving people to action and changing their behavior", domain: "MC" }
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onSubmit(answers);
    }
  };

  const handleBack = () => {
    if (onBack) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <strong>Final section:</strong> These questions are about your values and what motivates you at work. 
          Choose the options that match what you really care about and what makes you feel fulfilled.
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
                <strong>Assessment Complete!</strong> You've answered all 20 questions. Click "Submit Assessment" to see your career recommendations based on your answers.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
