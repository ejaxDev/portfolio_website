// src/components/CodeBlock.tsx
import React, { useState } from 'react';

interface CodeBlockProps {
  label: string;
  description: string;
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ label, description, code, language = 'python' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden mb-6">
      {/* Header */}
      <div className="bg-slate-800 px-6 py-4 border-b border-slate-600">
        <h3 className="text-lg font-bold text-white mb-1">{label}</h3>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>

      {/* Code */}
      <div className="relative">
        <pre className="px-6 py-4 overflow-x-auto text-sm text-slate-200 bg-slate-900">
          <code>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;