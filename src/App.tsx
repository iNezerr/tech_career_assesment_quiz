import { useState } from 'react'
import CareerQuizSection1 from './components/CareerQuizSection1'
import CareerQuizSection2 from './components/CareerQuizSection2'
import CareerQuizSection3 from './components/CareerQuizSection3'
import CareerQuizSection4 from './components/CareerQuizSection4'
import QuizResults from './components/QuizResults'

// Domain scoring system
interface DomainScores {
  TC: number; // Technical
  BM: number; // Business
  HS: number; // Healthcare
  CD: number; // Creative
  ED: number; // Engineering
  MC: number; // Marketing
}

const initialScores: DomainScores = {
  TC: 0,
  BM: 0,
  HS: 0,
  CD: 0,
  ED: 0,
  MC: 0
};

function App() {
  const [currentSection, setCurrentSection] = useState(1);
  const [allAnswers, setAllAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [finalScores, setFinalScores] = useState<DomainScores>(initialScores);

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
    const scores = { ...initialScores };
    Object.values(finalAnswers).forEach(answer => {
      // Map answer letters to domains based on the pattern A=TC, B=BM, etc.
      const domainMap: Record<string, keyof DomainScores> = {
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
      scores[a[0] as keyof DomainScores] > scores[b[0] as keyof DomainScores] ? a : b
    );
    
    console.log('Top Domain:', topDomain[0], 'with score:', topDomain[1]);
    
    setFinalScores(scores);
    setIsComplete(true);
  };

  const resetQuiz = () => {
    setCurrentSection(1);
    setAllAnswers({});
    setIsComplete(false);
    setFinalScores(initialScores);
  };

  const handleBackToSection1 = () => setCurrentSection(1);
  const handleBackToSection2 = () => setCurrentSection(2);
  const handleBackToSection3 = () => setCurrentSection(3);

  if (isComplete) {
    return <QuizResults scores={finalScores} resetQuiz={resetQuiz} />;
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
