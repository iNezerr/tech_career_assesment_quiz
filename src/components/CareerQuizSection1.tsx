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
    text: "Where do you like to work best? (Think about the place that makes you feel comfortable and productive)",
    options: [
      { value: "A", label: "Quiet places where I can focus alone", domain: "TC" },
      { value: "B", label: "Meeting rooms where important decisions are made", domain: "BM" },
      { value: "C", label: "Hospitals or clinics helping sick people", domain: "HS" },
      { value: "D", label: "Creative spaces where I can design and create", domain: "CD" },
      { value: "E", label: "Workshop or lab where I can build things", domain: "ED" },
      { value: "F", label: "Open offices where I work with many people", domain: "MC" }
    ]
  },
  {
    id: 2,
    text: "When you have a problem, how do you like to solve it? (Choose your natural way of fixing things)",
    options: [
      { value: "A", label: "Break it down step by step to find what's wrong", domain: "TC" },
      { value: "B", label: "Look at numbers and data to understand patterns", domain: "BM" },
      { value: "C", label: "Talk to people to understand what they need", domain: "HS" },
      { value: "D", label: "Draw or sketch different ideas to solve it", domain: "CD" },
      { value: "E", label: "Start with small tests and build up the solution", domain: "ED" },
      { value: "F", label: "Ask others for their opinions and ideas", domain: "MC" }
    ]
  },
  {
    id: 3,
    text: "What kind of work makes you feel most excited and energetic? (Think about what motivates you)",
    options: [
      { value: "A", label: "Solving difficult computer or technical problems", domain: "TC" },
      { value: "B", label: "Making businesses grow and become more successful", domain: "BM" },
      { value: "C", label: "Helping patients get better and feel well", domain: "HS" },
      { value: "D", label: "Creating new designs and beautiful things", domain: "CD" },
      { value: "E", label: "Building systems and making things work better", domain: "ED" },
      { value: "F", label: "Influencing people and changing market trends", domain: "MC" }
    ]
  },
  {
    id: 4,
    text: "When working in a team, what do you naturally do? (Your automatic role in group work)",
    options: [
      { value: "A", label: "Find problems in systems and point out what's wrong", domain: "TC" },
      { value: "B", label: "Help the team decide what's most important to do first", domain: "BM" },
      { value: "C", label: "Make sure everyone works well together", domain: "HS" },
      { value: "D", label: "Come up with creative ideas and new ways to do things", domain: "CD" },
      { value: "E", label: "Design practical solutions that actually work", domain: "ED" },
      { value: "F", label: "Tell stories and convince people about ideas", domain: "MC" }
    ]
  },
  {
    id: 5,
    text: "What are you naturally good at handling? (Your strongest skill area)",
    options: [
      { value: "A", label: "Complex technical puzzles that need deep thinking", domain: "TC" },
      { value: "B", label: "Making important decisions for groups or organizations", domain: "BM" },
      { value: "C", label: "Taking care of people's health and well-being", domain: "HS" },
      { value: "D", label: "Pushing creative limits and trying new artistic ideas", domain: "CD" },
      { value: "E", label: "Building systems and structures that last long", domain: "ED" },
      { value: "F", label: "Understanding trends and how people's opinions change", domain: "MC" }
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <strong>How to answer:</strong> Choose the option that feels most natural to you. 
          There are no right or wrong answers - pick what describes you best at work or school.
        </p>
      </div>
    </div>
  );
}
