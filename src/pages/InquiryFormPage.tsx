import React from 'react';
import { SCHOOL_NAME } from '../utils/constants'; // Adjust path as needed
import InquiryForm from './InquiryForm';

const InquiryFormPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-mainBg relative overflow-hidden flex flex-col justify-center py-16 md:py-24">
      
      {/* CSS-Only Modern Background Design (Zero Performance Cost) */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-sub-header to-transparent pointer-events-none" aria-hidden="true"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-soft rounded-full blur-[100px] opacity-50 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary-soft rounded-full blur-[120px] opacity-30 pointer-events-none" aria-hidden="true"></div>

      <section 
        aria-labelledby="inquiry-page-heading"
        className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Get in Touch
            </span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h1 
            id="inquiry-page-heading"
            className="text-foreground text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Admissions & Inquiries
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about the admission process or want to book a campus tour at {SCHOOL_NAME}? Fill out the form below and our dedicated team will reach out to you instantly.
          </p>
        </div>

        {/* The Form Component */}
        <InquiryForm />

      </section>
    </main>
  );
};

export default InquiryFormPage;