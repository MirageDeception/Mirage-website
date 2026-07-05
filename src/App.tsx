import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSpace } from './components/ProblemSpace';
import { Platform } from './components/Platform';
import { ValueProps } from './components/ValueProps';
import { Integrations } from './components/Integrations';
import { HowItWorks } from './components/HowItWorks';
import { Pitch } from './components/Pitch';
import { Reveal } from './components/Reveal';
import { Loader } from './components/Loader';
import { TableOfContents } from './components/TableOfContents';
import { ComingSoon } from './components/ComingSoon';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'coming-soon'>('home');

  useEffect(() => {
    // Force the browser to start at the top of the page on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [currentPage]); // Scroll to top when page changes

  return (
    <div className="app-wrapper">
      <Loader />
      {currentPage === 'home' && <TableOfContents />}
      <Header setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Reveal><ProblemSpace /></Reveal>
          <Reveal><Platform /></Reveal>
          {/* <Reveal><Stats /></Reveal> */}
          <Reveal><ValueProps /></Reveal>
          <Reveal><Integrations /></Reveal>
          <Reveal><HowItWorks /></Reveal>
          {/* <Reveal><Architecture /></Reveal> */}
          <Reveal><Pitch /></Reveal>
        </>
      ) : (
        <Reveal><ComingSoon onBack={() => setCurrentPage('home')} /></Reveal>
      )}
    </div>
  );
}

export default App;
