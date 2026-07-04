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
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Force the browser to start at the top of the page on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app-wrapper">
      <Loader />
      <TableOfContents />
      <Header />
      <Hero />
      <Reveal><ProblemSpace /></Reveal>
      <Reveal><Platform /></Reveal>
      {/* <Reveal><Stats /></Reveal> */}
      <Reveal><ValueProps /></Reveal>
      <Reveal><Integrations /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      {/* <Reveal><Architecture /></Reveal> */}
      <Reveal><Pitch /></Reveal>
    </div>
  );
}

export default App;
