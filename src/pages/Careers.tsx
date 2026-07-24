import React from 'react';
import CareerForm from './CareerForm'; // Adjust path based on your folder structure
import { SCHOOL_NAME } from '../utils/constants';

const Careers: React.FC = () => {
  // Data for the Work Culture section to keep the JSX clean
  const cultureBenefits = [
    {
      id: 1,
      title: 'Continuous Growth',
      description: 'We invest in our educators through regular workshops, skill-building sessions, and leadership mentorship programs.',
      icon: 'fa-arrow-trend-up',
    },
    {
      id: 2,
      title: 'Modern Campus',
      description: 'Teach using state-of-the-art smart classrooms, fully equipped labs, and premium digital resources.',
      icon: 'fa-building-columns',
    },
    {
      id: 3,
      title: 'Collaborative Spirit',
      description: 'Join a warm, inclusive community of passionate educators who support each other’s success and well-being.',
      icon: 'fa-users-rays',
    },
    {
      id: 4,
      title: 'Work-Life Balance',
      description: 'We respect your personal time. Enjoy structured schedules, wellness programs, and comprehensive leave policies.',
      icon: 'fa-scale-balanced',
    },
  ];

  return (
    <main className="bg-mainBg min-h-screen">
      
      {/* 1. Page Header Section */}
      <section 
        aria-labelledby="careers-heading" 
        className="bg-surface border-b border-border-soft pt-16 pb-20 md:pt-24 md:pb-28 text-center px-4"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Join Our Faculty
            </span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h1 
            id="careers-heading" 
            className="text-foreground text-4xl sm:text-5xl font-bold tracking-tight mb-6"
          >
            Build the Future with <span className="text-primary">{SCHOOL_NAME}</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            We are always looking for passionate, innovative, and dedicated professionals to join our academic and administrative teams. Discover a workplace where your ideas matter.
          </p>
        </div>
      </section>

      {/* 2. Work Culture Section */}
      <section 
        aria-labelledby="culture-heading"
        className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h2 id="culture-heading" className="text-foreground text-3xl font-bold mb-4">
            Why Work With Us?
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto">
            A school is only as good as its teachers. We provide an environment that empowers our staff to do their best work every single day.
          </p>
        </div>

        {/* Culture Cards Grid (Responsive: 1 col mobile, 2 col tablet, 4 col desktop) */}
        <ul 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          aria-label="Work culture and benefits"
        >
          {cultureBenefits.map((benefit) => (
            <li 
              key={benefit.id}
              className="bg-surface border border-border-soft rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="h-14 w-14 bg-primary-soft rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <i className={`fa-solid ${benefit.icon} text-2xl text-primary group-hover:text-inverse transition-colors duration-300`} aria-hidden="true"></i>
              </div>
              <h3 className="text-foreground text-xl font-bold mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Application Form Section */}
      <section 
        aria-labelledby="application-heading"
        className="bg-surface border-t border-border-soft py-16 md:py-24 relative overflow-hidden"
      >
        {/* Decorative background blurs to tie the design together */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-soft rounded-full blur-3xl opacity-30 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-soft rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 id="application-heading" className="text-foreground text-3xl font-bold mb-3">
              Open Application
            </h2>
            <p className="text-muted text-base">
              Don't see a specific role listed? Submit your resume below and we will contact you when a fitting opportunity arises.
            </p>
          </div>
          
          {/* Injecting the highly optimized Career Form */}
          <CareerForm />
          
        </div>
      </section>

    </main>
  );
};

export default Careers;