// src/components/CodeBlock.tsx
import React, { useState } from 'react';

interface CodeBlockProps {
  label: string;
  description: string;
  code: string;
  summary?: string;
  highlights?: string[];
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ label, description, code, summary, highlights, language = 'python' }) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden mb-6">
      {/* Header (clickable, sticky when expanded) */}
      <div
        className={`bg-slate-800 px-6 py-4 border-b border-slate-600 flex items-center justify-between cursor-pointer ${expanded ? 'sticky top-0 z-20 shadow-lg' : ''}`}
        onClick={handleToggle}
        tabIndex={0}
        role="button"
        aria-expanded={expanded}
        style={{ userSelect: 'none' }}
      >
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{label}</h3>
          <p className="text-slate-300 text-sm">{description}</p>
        </div>
        <span className="ml-4 px-3 py-1 bg-slate-600 hover:bg-slate-500 text-white text-xs rounded transition-colors select-none">
          {expanded ? 'Collapse' : 'Expand'}
        </span>
      </div>

      {/* Summary and Highlights */}
      {expanded && (
        <div className="relative">
          {summary && (
            <div className="px-6 pt-6 pb-2">
              <div className="text-slate-200 text-base font-semibold mb-2">Summary</div>
              <div className="text-slate-300 text-sm mb-2">{summary}</div>
            </div>
          )}
          {highlights && highlights.length > 0 && (
            <div className="px-6 pb-2">
              <div className="text-slate-200 text-base font-semibold mb-1">Highlights</div>
              <ul className="list-disc list-inside text-slate-300 text-sm">
                {highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}
          <pre className="px-6 py-4 overflow-x-auto text-sm text-slate-200 bg-slate-900">
            <code>{code}</code>
          </pre>
          <button
            onClick={(e) => { e.stopPropagation(); handleCopy(); }}
            className="absolute top-3 right-3 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors"
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;