// FAQuestion.tsx
'use client'
import React, { useState } from 'react';

const FAQuestion = ({ question, answer }: { question: string; answer: string }) => {
  const [expanded, setExpanded] = useState(false); // Default to not expanded

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-5">
      <div
        className="flex items-center cursor-pointer transition"
        onClick={toggleExpand}
        role="button"
        aria-expanded={expanded}
        aria-controls="answer"
      > 
        <div className={`font-light text-2xl mb-5 mr-10 ${expanded ? 'text-white-300' : 'text-black'} transition`}>{question}</div>
        <div className={`mr-2 font-light ml-auto mb-4 ${expanded ? 'ml-auto' : ''} transition`}>{expanded ? '▼' : '▶'}</div>
      </div>
      {expanded && <div className="mt-2 ml-6 mb-6 text-white-800 text-lg mr-10" id="answer">{answer}</div>}
    </div>
  );
};

export default FAQuestion;