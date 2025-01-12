export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
          GitOps Demo
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Experience the future of automated workflows with GitOps. Declarative,
          automated, and versioned.
        </p>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center gap-20">
        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl text-center">
          <div className="relative group bg-gray-900 p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              Versioned Configurations
            </h3>
            <p className="text-gray-400">
              Keep every configuration versioned in Git for a reliable workflow.
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-20 rounded-xl transition"></div>
          </div>
          <div className="relative group bg-gray-900 p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-purple-400 mb-4">
              Automated Pipelines
            </h3>
            <p className="text-gray-400">
              Deploy changes instantly with automated CI/CD pipelines.
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-0 group-hover:opacity-20 rounded-xl transition"></div>
          </div>
          <div className="relative group bg-gray-900 p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              System Reconciliation
            </h3>
            <p className="text-gray-400">
              Ensure your system always matches the desired state in Git.
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 rounded-xl transition"></div>
          </div>
        </section>

        {/* Call-to-Actions */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <a
            href="https://github.com/ItsGaet"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-10 py-4 rounded-full shadow-xl transform hover:scale-110 hover:shadow-2xl transition"
          >
            View Repository
          </a>
        </div>
      </main>
    </div>
  );
}
