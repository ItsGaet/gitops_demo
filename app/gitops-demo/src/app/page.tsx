import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg sm:text-xl text-gray-600">
          A modern and minimalistic Next.js app.
        </p>
      </header>
      <main className="flex flex-col items-center gap-8">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={40}
          className="dark:invert"
        />
        <div className="flex gap-4">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white text-sm px-6 py-3 rounded-full shadow hover:bg-blue-600 transition"
          >
            Get Started
          </a>
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-gray-800 text-sm px-6 py-3 rounded-full shadow hover:bg-gray-300 transition"
          >
            Deploy Now
          </a>
        </div>
      </main>
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>
          Powered by{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Vercel
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
