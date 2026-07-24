import React from 'react';
import { SCHOOL_NAME } from '../utils/constants'; // Adjust path as needed
import CareerForm from './CareerForm';

const CareerFormPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-mainBg relative overflow-hidden flex flex-col justify-center py-16 md:py-24">
      
      {/* CSS-Only Modern Background Design (Zero Performance Cost) */}
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-sub-header to-transparent pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 w-[600px] h-[600px] bg-primary-soft rounded-full blur-[120px] opacity-40 pointer-events-none" aria-hidden="true"></div>

      <section 
        aria-labelledby="career-page-heading"
        className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Careers
            </span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h1 
            id="career-page-heading"
            className="text-foreground text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Submit Your Application
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Join the academic faculty and support staff at {SCHOOL_NAME}. We are looking for passionate individuals ready to shape the next generation.
          </p>
        </div>

        {/* The Form Component */}
        <CareerForm />

      </section>
    </main>
  );
};

export default CareerFormPage;