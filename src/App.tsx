import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResumeProvider } from './contexts/ResumeContext';
import Navbar from './components/Layout/Navbar';
import HomePage from './pages/HomePage';
import BuilderPage from './pages/BuilderPage';
import TemplatesPage from './pages/TemplatesPage';
import AIEnhancePage from './pages/AIEnhancePage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <ResumeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/builder" element={<BuilderPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/ai-enhance" element={<AIEnhancePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </Router>
    </ResumeProvider>
  );
}

export default App;