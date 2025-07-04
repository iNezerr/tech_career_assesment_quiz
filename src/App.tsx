import { useState } from 'react'
import CareerQuizSection1 from './components/CareerQuizSection1'
import CareerQuizSection2 from './components/CareerQuizSection2'
import CareerQuizSection3 from './components/CareerQuizSection3'
import CareerQuizSection4 from './components/CareerQuizSection4'

// Domain scoring system
const domainScores = {
  TC: 0, // Technical
  BM: 0, // Business
  HS: 0, // Healthcare
  CD: 0, // Creative
  ED: 0, // Engineering
  MC: 0  // Marketing
};

function App() {
  const [currentSection, setCurrentSection] = useState(1);
  const [allAnswers, setAllAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleSection1Complete = (answers: Record<number, string>) => {
    console.log('Section 1 answers:', answers);
    setAllAnswers(prev => ({ ...prev, ...answers }));
    setCurrentSection(2);
  };

  const handleSection2Complete = (answers: Record<number, string>) => {
    console.log('Section 2 answers:', answers);
    setAllAnswers(prev => ({ ...prev, ...answers }));
    setCurrentSection(3);
  };

  const handleSection3Complete = (answers: Record<number, string>) => {
    console.log('Section 3 answers:', answers);
    setAllAnswers(prev => ({ ...prev, ...answers }));
    setCurrentSection(4);
  };

  const handleQuizSubmit = (answers: Record<number, string>) => {
    const finalAnswers = { ...allAnswers, ...answers };
    setAllAnswers(finalAnswers);
    
    // Calculate domain scores
    const scores = { ...domainScores };
    Object.values(finalAnswers).forEach(answer => {
      // Map answer letters to domains based on the pattern A=TC, B=BM, etc.
      const domainMap: Record<string, keyof typeof domainScores> = {
        'A': 'TC', 'B': 'BM', 'C': 'HS', 'D': 'CD', 'E': 'ED', 'F': 'MC'
      };
      const domain = domainMap[answer];
      if (domain) {
        scores[domain] += 2.5; // Each answer worth 2.5 points (20 questions * 2.5 = 50 max per domain)
      }
    });

    console.log('Final Quiz Results:');
    console.log('All Answers:', finalAnswers);
    console.log('Domain Scores:', scores);
    
    // Find highest scoring domain
    const topDomain = Object.entries(scores).reduce((a, b) => 
      scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b
    );
    
    console.log('Top Domain:', topDomain[0], 'with score:', topDomain[1]);
    
    setIsComplete(true);
    // TODO: Navigate to results page or show results component
  };

  const handleBackToSection1 = () => setCurrentSection(1);
  const handleBackToSection2 = () => setCurrentSection(2);
  const handleBackToSection3 = () => setCurrentSection(3);

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Assessment Complete!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for completing the Career Path Assessment. Your personalized career recommendations are being prepared.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Next Steps:</strong> Check the browser console to see your quiz results and domain scores. 
                The results component will be implemented next to show your personalized career recommendations.
              </p>
            </div>
            <button 
              onClick={() => {
                setCurrentSection(1);
                setAllAnswers({});
                setIsComplete(false);
              }}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {currentSection === 1 && (
        <CareerQuizSection1 onNext={handleSection1Complete} />
      )}
      {currentSection === 2 && (
        <CareerQuizSection2 
          onNext={handleSection2Complete}
          onBack={handleBackToSection1}
        />
      )}
      {currentSection === 3 && (
        <CareerQuizSection3 
          onNext={handleSection3Complete}
          onBack={handleBackToSection2}
        />
      )}
      {currentSection === 4 && (
        <CareerQuizSection4 
          onSubmit={handleQuizSubmit}
          onBack={handleBackToSection3}
        />
      )}
    </div>
  )
}

export default App
