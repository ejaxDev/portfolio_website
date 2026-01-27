import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      // Replace with your actual form submission endpoint
      const response = await fetch('https://formspree.io/f/mbdobjoj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
            </h1>
            <p className="text-xl text-slate-300">
              Have a question or want to work together? I'd love to hear from you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                  placeholder="What is this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200"
              >
                {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-400">ericjack@udel.edu</p>
            </div>

            {/* LinkedIn */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-slate-400">linkedin.com/in/eric-jackson27</p>
            </div>

            {/* GitHub */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-slate-400">github.com/yourprofile</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;