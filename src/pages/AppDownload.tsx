import React from 'react';
import { SCHOOL_NAME } from '../utils/constants';

const AppDownload: React.FC = () => {
  const appFeatures = [
    { id: 1, text: 'Real-time daily attendance tracking', icon: 'fa-calendar-check' },
    { id: 2, text: 'Secure online fee collection', icon: 'fa-credit-card' },
    { id: 3, text: 'Instant access to student records', icon: 'fa-folder-open' },
  ];

  return (
    <section 
      aria-labelledby="app-download-heading" 
      className="bg-surface border-t border-border-soft py-16 md:py-24 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-primary-soft/30 rounded-[2.5rem] border border-primary/10 overflow-hidden shadow-sm flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Side: Content & CTA */}
          <article className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center text-center lg:text-left">
            
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="bg-primary text-inverse text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                New Release
              </span>
            </div>

            <h2 
              id="app-download-heading" 
              className="text-foreground text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight"
            >
              Stay Connected With The <br className="hidden sm:block"/>
              <span className="text-primary">{SCHOOL_NAME} App</span>
            </h2>

            <p className="text-muted text-base sm:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Everything you need to manage your child's education is now in your pocket. Experience a seamless digital ecosystem designed for modern parents.
            </p>

            {/* Feature List (Accessible for Screen Readers) */}
            <ul aria-label="App Features" className="space-y-4 mb-10 text-left max-w-md mx-auto lg:mx-0">
              {appFeatures.map((feature) => (
                <li key={feature.id} className="flex items-center gap-4 text-foreground font-medium">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-surface shadow-sm border border-border flex items-center justify-center text-primary">
                    <i className={`fa-solid ${feature.icon} text-sm`} aria-hidden="true"></i>
                  </div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* Custom Google Play Button */}
            <div className="flex justify-center lg:justify-start">
              <a 
                href="#" // Replace with actual Play Store link later
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="inline-flex items-center gap-4 bg-foreground hover:bg-black text-inverse px-6 py-3 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
              >
                <i className="fa-brands fa-google-play text-3xl" aria-hidden="true"></i>
                <div className="flex flex-col text-left">
                  <span className="text-xs uppercase tracking-wide opacity-80 font-medium">Get it on</span>
                  <span className="text-lg font-bold leading-none">Google Play</span>
                </div>
              </a>
            </div>

          </article>

          {/* Right Side: Abstract App Mockup / Visual */}
          <figure className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full flex justify-center lg:justify-end items-end pt-10 lg:pt-0 pr-0 lg:pr-16">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true"></div>
            
            {/* Using aspect ratio wrapper to prevent CLS */}
            <div className="relative w-64 md:w-80 aspect-[9/19] bg-surface rounded-[2.5rem] border-8 border-foreground shadow-2xl overflow-hidden transform translate-y-8 lg:translate-y-12">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" 
                alt="Mobile app interface preview" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              {/* Optional UI overlay to make it look like a school app */}
              <div className="absolute inset-x-0 top-0 h-16 bg-surface/90 backdrop-blur-md rounded-t-4xl border-b border-border flex items-center justify-center shadow-sm">
                <span className="text-foreground font-bold text-sm">{SCHOOL_NAME}</span>
              </div>
            </div>

          </figure>

        </div>
      </div>
    </section>
  );
};

export default AppDownload;