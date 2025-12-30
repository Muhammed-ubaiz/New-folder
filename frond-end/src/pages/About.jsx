import React from 'react'

function About() {
  return (
    <>
    <section className="max-w-5xl mx-auto mt-16 bg-white rounded-xl shadow-lg p-8 md:p-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        About Our Project
      </h1>

      <p className="text-center text-gray-500 mb-8">
        Modern React-style UI built using Tailwind CSS
      </p>

      <p className="text-lg leading-relaxed text-gray-700 mb-10 text-justify">
        This project focuses on creating a modern, clean, and responsive user interface
        inspired by React applications. Tailwind CSS is used to ensure fast development
        and scalable design.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          "🎯 Simple UI",
          "📱 Responsive",
          "⚡ Fast",
          "💡 Modern Design",
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default About
