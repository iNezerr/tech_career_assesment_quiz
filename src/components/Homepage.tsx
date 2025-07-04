interface HomepageProps {
  onStartQuiz: () => void;
}

export default function Homepage({ onStartQuiz }: HomepageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career Path Finder
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover your ideal career path with our simple 20-question assessment designed for students and professionals
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Find Your Perfect Career Match
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Not sure what career to choose? Our career assessment helps you discover careers that match 
                your interests, skills, and values. Get personalized recommendations and learning paths to 
                start your journey.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">20 simple questions in clear English</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Takes only 5-10 minutes to complete</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Get personalized career recommendations</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Free learning paths and course recommendations</span>
                </div>
              </div>

              <button
                onClick={onStartQuiz}
                className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Career Assessment
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 text-center">
                <div className="mb-6">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">6 Career Domains</h3>
                  <p className="text-gray-600 text-sm">We'll match you to one of these areas</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="text-lg mb-1">💻</div>
                    <div className="font-medium text-gray-800">Technical</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="text-lg mb-1">📊</div>
                    <div className="font-medium text-gray-800">Business</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="text-lg mb-1">🏥</div>
                    <div className="font-medium text-gray-800">Healthcare</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="text-lg mb-1">🎨</div>
                    <div className="font-medium text-gray-800">Creative</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="text-lg mb-1">⚙️</div>
                    <div className="font-medium text-gray-800">Engineering</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="text-lg mb-1">📢</div>
                    <div className="font-medium text-gray-800">Marketing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Answer Questions</h3>
              <p className="text-gray-600 text-sm">
                Answer 20 simple questions about your work style, skills, interests, and values
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Your Match</h3>
              <p className="text-gray-600 text-sm">
                We analyze your answers and match you to the best career domain for your personality
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Learning</h3>
              <p className="text-gray-600 text-sm">
                Get specific career recommendations, growth paths, and free learning resources
              </p>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl mb-2">🎓</div>
              <h3 className="font-semibold text-gray-900 mb-1">Students and Graduates</h3>
              <p className="text-gray-600 text-sm">Discover your career path during and after school</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🔄</div>
              <h3 className="font-semibold text-gray-900 mb-1">Career Changers</h3>
              <p className="text-gray-600 text-sm">Find a new career direction that fits you</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🤔</div>
              <h3 className="font-semibold text-gray-900 mb-1">Undecided Students</h3>
              <p className="text-gray-600 text-sm">Get clarity on your career direction</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p className="mb-3">Free career guidance for Ghanaian students and professionals</p>
          <div className="border-t border-gray-200 pt-6">
            <p>Built by <span className="font-semibold text-gray-700">Ebenezer Agbekeye</span>, Program Lead, <a href="https://mycodedge.africa" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors">myCodeEdge</a></p>
            <p className="mt-1">A platform for learning tech skills and advancing your career</p>
          </div>
        </div>
      </div>
    </div>
  );
}
