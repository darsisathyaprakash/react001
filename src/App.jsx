import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NizamAI from './pages/NizamAI';
import FloatingAIButton from './components/FloatingAIButton';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'nizam-ai' && <NizamAI />}
      </main>

      {currentPage !== 'nizam-ai' && (
        <FloatingAIButton onClick={() => setCurrentPage('nizam-ai')} />
      )}
    </div>
  );
}

export default App;
