import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './TableOfContents.css';

export function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`toc-container ${isOpen ? 'is-open' : ''}`}>
      <button 
        className="toc-toggle-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Table of Contents"
      >
        {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </button>
      
      <div className="toc-content">
        <h3 className="toc-header">Table of Contents</h3>
        <nav className="toc-nav">
          <a href="#home" className="toc-link" onClick={() => setIsOpen(false)}>
            <span className="toc-num">1</span> Overview
          </a>
          <a href="#problem" className="toc-link" onClick={() => setIsOpen(false)}>
            <span className="toc-num">2</span> The Problem
          </a>
          <a href="#platform" className="toc-link" onClick={() => setIsOpen(false)}>
            <span className="toc-num">3</span> Tool Overview
          </a>
          <a href="#how-it-works" className="toc-link" onClick={() => setIsOpen(false)}>
            <span className="toc-num">4</span> How it Works
          </a>
          <a href="#integrations" className="toc-link" onClick={() => setIsOpen(false)}>
            <span className="toc-num">5</span> Integrations
          </a>
          <a href="#pitch" className="toc-link" onClick={() => setIsOpen(false)}>
            <span className="toc-num">6</span> Join Us
          </a>
        </nav>
      </div>
    </div>
  );
}
