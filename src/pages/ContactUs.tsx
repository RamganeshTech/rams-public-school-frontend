import React from 'react';
import { SCHOOL_NAME } from '../utils/constants'; // Adjust path if needed
import InquiryForm from './InquiryForm';

const ContactUs: React.FC = () => {
  return (
    <main className="bg-mainBg min-h-screen py-16 md:py-24 relative overflow-hidden">
      
      {/* Background Decor (Zero Performance Cost) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-soft rounded-full blur-[120px] opacity-20 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-soft rounded-full blur-[100px] opacity-30 pointer-events-none" aria-hidden="true"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Get In Touch
            </span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h1 className="text-foreground text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Contact {SCHOOL_NAME || 'Us'}
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you have questions about admissions, want to schedule a campus tour, or simply want to say hello, our team is here and ready to help.
          </p>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Details & Map */}
          <div className="space-y-8">
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Phone Card */}
              <div className="bg-surface border border-border-soft rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-primary-soft rounded-xl flex items-center justify-center mb-6">
                  <i className="fa-solid fa-phone-volume text-2xl text-primary" aria-hidden="true"></i>
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">Call Us</h3>
                {/* <p className="text-muted text-sm mb-4">Mon - Sat, 8:00 AM to 5:00 PM</p> */}
                <a 
                  href="tel:+918825922099" 
                  className="text-primary font-bold text-lg hover:underline transition-all"
                  aria-label="Call us at +91 88259 22099"
                >
                  +91 88259 22099
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-surface border border-border-soft rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-primary-soft rounded-xl flex items-center justify-center mb-6">
                  <i className="fa-solid fa-envelope-open-text text-2xl text-primary" aria-hidden="true"></i>
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">Email Us</h3>
                {/* <p className="text-muted text-sm mb-4">We'll respond within 24 hours</p> */}
                <a 
                  href="mailto:ramstechcircle@gmail.com" 
                  className="text-primary font-bold text-base hover:underline transition-all break-words"
                  aria-label="Email us at ramstechcircle@gmail.com"
                >
                  ramstechcircle@gmail.com
                </a>
              </div>
            </div>

            {/* Address & Location Card */}
            <address className="bg-surface border border-border-soft rounded-3xl p-8 shadow-sm not-italic flex flex-col sm:flex-row gap-6 items-start">
              <div className="h-12 w-12 bg-primary-soft rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-map-location-dot text-2xl text-primary" aria-hidden="true"></i>
              </div>
              <div>
                <h3 className="text-foreground font-bold text-lg mb-2">Visit Our Campus</h3>
                <p className="text-muted text-base leading-relaxed mb-4">
                  123 Education Lane,<br />
                  School District, City Name<br />
                  State, PIN 123456
                </p>
                <a 
                  href="https://maps.google.com" // Replace with your actual Google Maps URL
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-hover transition-colors"
                >
                  Get Directions <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
                </a>
              </div>
            </address>

            {/* Map iframe (Optimized with loading="lazy") */}
            {/* <div className="rounded-3xl overflow-hidden border border-border-soft shadow-sm h-[250px] w-full bg-surface">
              <iframe
                title="Rams Public School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9547530639967!2d78.11874281533215!3d9.925200992898492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475fc19bea4a0!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1684305884931!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}

          </div>

          {/* Right Column: Embedded Form */}
          <div className="lg:pl-8 h-full">
             {/* We embed your existing form here so you don't rewrite code */}
            <InquiryForm />
          </div>

        </div>
      </div>
    </main>
  );
};

export default ContactUs;