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
    text: "What are you naturally best at? (Your strongest natural ability)",
    options: [
      { value: "A", label: "Math and logical thinking - solving problems step by step", domain: "TC" },
      { value: "B", label: "Planning and analyzing - making good business plans", domain: "BM" },
      { value: "C", label: "Understanding people's feelings and what they need", domain: "HS" },
      { value: "D", label: "Visual and creative expression - drawing, designing, art", domain: "CD" },
      { value: "E", label: "Technical problem-solving - fixing things that are broken", domain: "ED" },
      { value: "F", label: "Communication and convincing people to agree with you", domain: "MC" }
    ]
  },
  {
    id: 7,
    text: "When you study information or data, what do you do best? (How you understand information)",
    options: [
      { value: "A", label: "Finding patterns in numbers and data", domain: "TC" },
      { value: "B", label: "Understanding market trends and business opportunities", domain: "BM" },
      { value: "C", label: "Recognizing patterns in how to care for people", domain: "HS" },
      { value: "D", label: "Seeing how users will move through websites or apps", domain: "CD" },
      { value: "E", label: "Spotting technical problems in systems", domain: "ED" },
      { value: "F", label: "Understanding why people buy things or change opinions", domain: "MC" }
    ]
  },
  {
    id: 8,
    text: "How do you like to learn new skills? (Your preferred way of learning)",
    options: [
      { value: "A", label: "Deep technical study - learning everything about technology", domain: "TC" },
      { value: "B", label: "Business case studies - learning from real business examples", domain: "BM" },
      { value: "C", label: "Practice scenarios - learning by doing real situations", domain: "HS" },
      { value: "D", label: "Creative experiments - trying new artistic techniques", domain: "CD" },
      { value: "E", label: "Reading technical manuals and following instructions", domain: "ED" },
      { value: "F", label: "Studying industry trends and what's popular now", domain: "MC" }
    ]
  },
  {
    id: 9,
    text: "When facing difficult situations, what do you usually do? (Your natural response to challenges)",
    options: [
      { value: "A", label: "Troubleshoot step by step - find and fix problems systematically", domain: "TC" },
      { value: "B", label: "Think about risks and opportunities before deciding", domain: "BM" },
      { value: "C", label: "Focus on people's wellbeing and how they feel", domain: "HS" },
      { value: "D", label: "Try different creative approaches until something works", domain: "CD" },
      { value: "E", label: "Build solutions step by step following a plan", domain: "ED" },
      { value: "F", label: "Find agreement and get everyone to work together", domain: "MC" }
    ]
  },
  {
    id: 10,
    text: "What is your strongest problem-solving skill? (How you solve problems best)",
    options: [
      { value: "A", label: "Testing ideas and isolating issues - like a scientist", domain: "TC" },
      { value: "B", label: "Creating different scenarios and calculating risks", domain: "BM" },
      { value: "C", label: "Balancing patient needs with staff needs fairly", domain: "HS" },
      { value: "D", label: "Pushing boundaries and exploring new creative edges", domain: "CD" },
      { value: "E", label: "Designing systems that can grow and handle more work", domain: "ED" },
      { value: "F", label: "Studying people's behavior and motivating them to act", domain: "MC" }
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onNext(answers);
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
          <strong>About this section:</strong> These questions are about your natural abilities and how you like to learn and solve problems. 
          Choose what feels most true about how you naturally think and work.
        </p>
      </div>
    </div>
  );
}
