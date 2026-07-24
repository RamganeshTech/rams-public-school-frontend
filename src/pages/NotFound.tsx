import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <main className="min-h-screen bg-mainBg flex items-center justify-center relative overflow-hidden px-4">
      
      {/* CSS-Only Background Decorations for Premium Feel */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-soft rounded-full blur-[100px] opacity-40 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-soft rounded-full blur-[120px] opacity-30 pointer-events-none" aria-hidden="true"></div>

      <div className="relative z-10 text-center max-w-lg mx-auto w-full">
        
        {/* Massive 404 Text */}
        <h1 
          className="text-foreground font-black text-[8rem] sm:text-[10rem] leading-none tracking-tighter drop-shadow-sm mb-4"
          aria-label="404 Error"
        >
          4<span className="text-primary animate-pulse inline-block">0</span>4
        </h1>
        
        {/* Content Card */}
        <div className="bg-surface border border-border-soft rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          
          {/* Decorative Corner Accent */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary-soft rounded-full blur-xl opacity-60 pointer-events-none" aria-hidden="true"></div>

          <div className="relative z-10">
            <div className="h-16 w-16 bg-primary-soft rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-compass text-3xl text-primary" aria-hidden="true"></i>
            </div>
            
            <h2 className="text-foreground text-2xl font-bold mb-3">
              Page Not Found
            </h2>
            
            <p className="text-muted text-base mb-8 leading-relaxed max-w-sm mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
            </p>
            
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-primary hover:bg-primary-hover active:bg-brand-hover text-inverse px-8 py-4 text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <i className="fa-solid fa-house" aria-hidden="true"></i>
              Back to Homepage
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
};

export default NotFound;