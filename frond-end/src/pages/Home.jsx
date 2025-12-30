const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* Header */}
      <header className="bg-indigo-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        <p className="mt-4 text-lg">Built with React & Tailwind CSS</p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row justify-center gap-6 p-8">
        
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-gray-600">
            This is a simple home page created using Tailwind CSS in React.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Fast Development</li>
            <li>Responsive Design</li>
            <li>Modern UI</li>
          </ul>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        © 2025 My Website
      </footer>

    </div>
  );
};

export default Home;
