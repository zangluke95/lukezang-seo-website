import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'' | 'success' | 'error'>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally you'd submit via API route or formspree here.
    setStatus('success');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Contact Me</h1>
      <p className="text-lg text-slate-600 mb-10 leading-relaxed">
        I'm always open to discussing tech, collaborating on AI projects, or sharing insights on college admissions. Fill out the form below or reach me on my social channels.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-50 text-green-800 rounded-lg text-sm font-medium">
                Thanks for reaching out! I'll get back to you shortly.
              </div>
            )}
          </form>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 h-fit">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Other Ways to Connect</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Email</h3>
              <a href="mailto:contact@lukezang.com" className="text-slate-900 font-medium hover:text-blue-600">contact@lukezang.com</a>
            </div>
            
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Twitter / X</h3>
              <a href="https://twitter.com/luke_zang" target="_blank" rel="noreferrer" className="text-slate-900 font-medium hover:text-blue-600">@luke_zang</a>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Location</h3>
              <p className="text-slate-900 font-medium">New Jersey, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
