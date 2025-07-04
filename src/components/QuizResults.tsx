import { useMemo } from 'react';

interface DomainScores {
  TC: number; // Technical
  BM: number; // Business
  HS: number; // Healthcare
  CD: number; // Creative
  ED: number; // Engineering
  MC: number; // Marketing
}

interface CareerData {
  domain: string;
  title: string;
  summary: string;
  keySkills: string[];
  dailyTasks: string[];
  growthPath: string[];
  learningPaths: string[];
}

// Career data based on the system prompt and sample data
const careerMap: Record<string, CareerData> = {
  TC: {
    domain: "Technical",
    title: "Software Developer",
    summary: "Builds applications and software solutions using programming languages and system design principles. Creates digital products that solve real-world problems.",
    keySkills: ["Programming languages (JavaScript, Python, Java)", "System design and architecture", "Algorithms and data structures", "Version control (Git)", "Problem-solving and debugging"],
    dailyTasks: ["Writing and reviewing code", "Testing and debugging applications", "Collaborating with team members", "Designing system architecture", "Learning new technologies"],
    growthPath: ["Junior Developer", "Software Developer", "Senior Developer", "Technical Lead", "Engineering Manager", "CTO"],
    learningPaths: ["Meta Back-End Developer Professional Certificate", "IBM Full Stack Software Developer Professional Certificate", "freeCodeCamp", "Codecademy Pro"]
  },
  BM: {
    domain: "Business",
    title: "Strategy Manager",
    summary: "Develops and executes organizational growth strategies through market analysis, strategic planning, and stakeholder management.",
    keySkills: ["Market analysis and research", "Strategic planning and execution", "Financial modeling and analysis", "Stakeholder management", "Data-driven decision making"],
    dailyTasks: ["Conducting market research", "Developing strategic plans", "Managing stakeholder relationships", "Analyzing business performance", "Leading strategic initiatives"],
    growthPath: ["Business Analyst", "Strategy Analyst", "Strategy Manager", "Strategy Director", "VP of Strategy", "COO"],
    learningPaths: ["Business Strategy Specialization", "Strategic Leadership and Management Specialization", "MBA programs", "McKinsey Insights courses"]
  },
  HS: {
    domain: "Healthcare",
    title: "Clinical Team Lead",
    summary: "Guides clinical teams while developing talent and ensuring quality patient care through leadership and clinical expertise.",
    keySkills: ["Medical knowledge and clinical expertise", "Leadership and team management", "Quality management and improvement", "Patient care coordination", "Staff development and training"],
    dailyTasks: ["Leading clinical team meetings", "Coaching and mentoring staff", "Overseeing patient care quality", "Developing care protocols", "Managing team performance"],
    growthPath: ["Clinical Specialist", "Senior Clinician", "Team Lead", "Clinical Manager", "Clinical Director", "Chief Medical Officer"],
    learningPaths: ["Healthcare Organization Operations Specialization", "Clinical Leadership courses", "Healthcare Management programs", "Quality Improvement certifications"]
  },
  CD: {
    domain: "Creative",
    title: "UX/UI Designer",
    summary: "Creates intuitive digital experiences through user research, interface design, and iterative testing to solve user problems.",
    keySkills: ["User experience research and testing", "Interface design and wireframing", "Design software (Figma, Adobe Creative Suite)", "Prototyping and interaction design", "Visual design principles"],
    dailyTasks: ["Conducting user research", "Creating wireframes and prototypes", "Designing user interfaces", "Testing designs with users", "Collaborating with developers"],
    growthPath: ["Junior Designer", "UX/UI Designer", "Senior Designer", "Lead Designer", "Design Manager", "UX Director"],
    learningPaths: ["Google UX Design Certificate", "UI/UX Design Specialization", "Interaction Design Foundation", "Adobe Certified Expert programs"]
  },
  ED: {
    domain: "Engineering",
    title: "Systems Engineer",
    summary: "Designs and optimizes complex systems and infrastructure, focusing on scalability, reliability, and performance.",
    keySkills: ["System architecture and design", "Infrastructure management", "Scalability and performance optimization", "Technical documentation", "Cross-functional collaboration"],
    dailyTasks: ["Designing system architecture", "Optimizing system performance", "Managing infrastructure", "Creating technical specifications", "Troubleshooting complex issues"],
    growthPath: ["Junior Engineer", "Systems Engineer", "Senior Systems Engineer", "Systems Architect", "Principal Engineer", "Engineering Director"],
    learningPaths: ["Systems Engineering Specialization", "Cloud Architecture certifications", "DevOps and Infrastructure courses", "Technical leadership programs"]
  },
  MC: {
    domain: "Marketing",
    title: "Digital Marketing Manager",
    summary: "Drives digital engagement and growth through analytics, content creation, and strategic campaign management across digital channels.",
    keySkills: ["Digital marketing strategy", "Analytics and data interpretation", "Content creation and management", "Social media management", "Campaign optimization"],
    dailyTasks: ["Planning marketing campaigns", "Creating and managing content", "Analyzing campaign performance", "Managing social media presence", "Optimizing digital channels"],
    growthPath: ["Marketing Coordinator", "Digital Marketing Specialist", "Digital Marketing Manager", "Senior Marketing Manager", "Marketing Director", "CMO"],
    learningPaths: ["Google Digital Marketing & E-commerce Professional Certificate", "Meta Social Media Marketing Certificate", "HubSpot Academy certifications", "Digital Marketing Institute courses"]
  }
};

interface QuizResultsProps {
  scores: DomainScores;
  resetQuiz: () => void;
}

export default function QuizResults({ scores, resetQuiz }: QuizResultsProps) {
  const topCareer = useMemo(() => {
    // Find the domain with the highest score
    const topDomain = Object.entries(scores).reduce((a, b) => 
      scores[a[0] as keyof DomainScores] > scores[b[0] as keyof DomainScores] ? a : b
    );
    
    return {
      domain: topDomain[0],
      score: topDomain[1],
      career: careerMap[topDomain[0]]
    };
  }, [scores]);

  const handleResetQuiz = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    resetQuiz();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="text-center mb-8">
            <div className="mb-4">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Career Assessment Results</h1>
            <p className="text-lg text-gray-600">Based on your responses, we've identified your top career match</p>
          </div>

          {/* Top Career Match */}
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">
                🎯 Best Match: {topCareer.career.domain} Domain
              </h2>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Recommended Career: {topCareer.career.title}
              </h3>
              <div className="bg-white rounded-lg p-4 inline-block">
                <div className="text-sm text-gray-600 mb-1">Your Score</div>
                <div className="text-2xl font-bold text-blue-600">{topCareer.score}/50</div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="space-y-8">
            {/* Role Summary */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                Role Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">{topCareer.career.summary}</p>
            </div>

            {/* Key Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                Key Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {topCareer.career.keySkills.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Tasks */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                Daily Tasks
              </h3>
              <div className="space-y-2">
                {topCareer.career.dailyTasks.map((task, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Potential */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                Career Growth Path
              </h3>
              <div className="flex flex-wrap gap-2">
                {topCareer.career.growthPath.map((role, index) => (
                  <div key={index} className="flex items-center">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      {role}
                    </span>
                    {index < topCareer.career.growthPath.length - 1 && (
                      <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Paths */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                Recommended Learning Paths
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topCareer.career.learningPaths.map((path, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      <span className="text-gray-700 font-medium">{path}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Domain Scores */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Complete Domain Scores</h3>
          <div className="space-y-4">
            {Object.entries(scores).map(([domain, score]) => {
              const domainNames = {
                TC: 'Technical',
                BM: 'Business', 
                HS: 'Healthcare',
                CD: 'Creative',
                ED: 'Engineering',
                MC: 'Marketing'
              };
              const percentage = (score / 50) * 100;
              const isTop = domain === topCareer.domain;
              
              return (
                <div key={domain} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`font-medium ${isTop ? 'text-blue-600' : 'text-gray-700'}`}>
                      {domainNames[domain as keyof typeof domainNames]}
                      {isTop && ' (Your Match!)'}
                    </span>
                    <span className={`text-sm ${isTop ? 'text-blue-600 font-bold' : 'text-gray-500'}`}>
                      {score}/50
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        isTop ? 'bg-blue-600' : 'bg-gray-400'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <button
            onClick={handleResetQuiz}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
          >
            🔄 Retake Assessment
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Your career assessment results provide a starting point, not a final destination. 
            Use them to inform your choices while remaining open to evolving opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
