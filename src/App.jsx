import React, { useState } from 'react';
import { PROFILE_DATA } from './constants';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-darkBg text-slate-900 dark:text-white transition-colors duration-300">
        
        {/* Navigation */}
        <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="font-bold text-xl tracking-tighter">PAM.dev</h1>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>

        {/* Hero Section */}
        <main className="max-w-4xl mx-auto mt-20 px-6 text-center">
          <p className="text-brand font-mono mb-4 text-sm">Hi, my name is</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {PROFILE_DATA.name}.
          </h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-slate-500 dark:text-slate-400 mb-8">
            I build robust systems for the web.
          </h3>
          <p className="max-w-xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10">
            I'm a {PROFILE_DATA.role} specializing in backend architecture, 
            cryptography, and scalable applications. Currently focused on building 
            enterprise-level solutions.
          </p>
          
          <div className="flex gap-4 justify-center">
            <a 
              href={PROFILE_DATA.resumeUrl} 
              download
              className="px-8 py-3 bg-brand text-white rounded-lg font-medium hover:bg-blue-600 transition"
            >
              Download Resume
            </a>
            <button className="px-8 py-3 border border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              View Projects
            </button>
          </div>
        </main>

        <footer className="mt-20 py-10 text-center text-sm text-slate-500">
          © {PROFILE_DATA.copyrightYear} {PROFILE_DATA.name} | Built with React & Tailwind
        </footer>
      </div>
    </div>
  );
}

export default App;