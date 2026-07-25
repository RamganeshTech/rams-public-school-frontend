import React from 'react';
// import { Link } from 'react-router-dom';
import { SCHOOL_NAME } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <section className="bg-mainBg relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 text-left">
            
            {/* Main Headings */}
            <h1 className="text-foreground text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Welcome to <br className="hidden sm:block" />
              <span className="text-primary">{SCHOOL_NAME}</span>
            </h1>
            
            <h2 className="text-foreground/90 text-xl sm:text-2xl font-bold">
              Nurturing Character, Inspiring Excellence.
            </h2>

            {/* Simplified Subtext */}
            <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed">
              Give your child the foundation they deserve. We provide a dynamic educational environment focused on academic success, all-round student growth, and essential skills for the future.
            </p>

            {/* Call to Action Button */}
            <div className="pt-4 w-full sm:w-auto">
              <a 
                href="/#academics-extracurriculars" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-primary hover:bg-primary-hover text-inverse px-8 py-3.5 text-base font-bold shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                Apply Now
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image/Graphics */}
          <div className="w-full lg:w-1/2 relative">
            
            {/* Cleaned up shadow & image container */}
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-border-soft aspect-video lg:aspect-[4/3] bg-surface">
              
              {/* Working Image Link */}
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop" 
                alt="Students actively learning in a classroom" 
                className="h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Floating Stats Card overlay */}
              {/* <div className="absolute bottom-6 left-6 bg-surface/95 backdrop-blur-sm p-4 rounded-xl shadow-md border border-border-soft items-center gap-4 hidden sm:flex">
                <div className="bg-primary/10 p-3 rounded-full">
                  <i className="fa-solid fa-user-graduate text-primary text-xl"></i>
                </div>
                <div>
                  <p className="text-foreground font-bold text-lg">100%</p>
                  <p className="text-muted text-xs font-bold">Passing Rate</p>
                </div>
              </div> */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;