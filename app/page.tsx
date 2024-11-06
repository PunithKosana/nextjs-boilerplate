export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
            Welcome to DevOps Teachings!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A simple homepage to learn DevOps!
          </p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-indigo-500 text-2xl mb-4">🚀</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                Fast Deployment
              </h2>
              <p className="text-gray-600">
                Deploy quickly with Vercel&apos;s seamless platform
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-indigo-500 text-2xl mb-4">🎨</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                Tailwind CSS
              </h2>
              <p className="text-gray-600">
                Beautiful, responsive design made simple
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-indigo-500 text-2xl mb-4">⚡</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                Auto Updates
              </h2>
              <p className="text-gray-600">
                Changes deploy automatically via CI/CD
              </p>
            </div>
          </div>
          {/* Call to Action */}
          <div className="mt-16">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
