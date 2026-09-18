import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center px-6">
      <div className="w-full max-w-3xl">
        <div className="rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl p-8 md:p-12 text-center">
          
          {/* Badge */}
          <div className="inline-block mb-5 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            🚀 DevOps Project
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Version 2.0
          </h1>

          {/* Subtitle */}
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            Welcome to My DevOps Project!
          </h2>

          {/* Description */}
          <p className="mt-5 text-lg leading-8 text-gray-600">
            This project showcases the latest features and improvements in our
            application. We have implemented new functionalities, enhanced
            performance, and improved the overall user experience.
          </p>

          {/* Feature Cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-blue-50 p-5">
              <div className="text-3xl">⚡</div>
              <h3 className="mt-2 font-bold text-blue-700">
                Performance
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Faster and optimized application.
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-5">
              <div className="text-3xl">🔧</div>
              <h3 className="mt-2 font-bold text-purple-700">
                Improvements
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Better features and functionality.
              </p>
            </div>

            <div className="rounded-2xl bg-pink-50 p-5">
              <div className="text-3xl">🚀</div>
              <h3 className="mt-2 font-bold text-pink-700">
                DevOps
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Continuous development and deployment.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8">
            <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              ● Project Running Successfully
            </span>
          </div>

        </div>
      </div>
    </main>
  );
}

