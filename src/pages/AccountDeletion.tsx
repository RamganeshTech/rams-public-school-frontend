import React from 'react';
import { SCHOOL_NAME } from '../utils/constants'; // Adjust path if needed

const AccountDeletion: React.FC = () => {
  return (
    <main className="bg-mainBg min-h-screen py-16 md:py-24 relative overflow-hidden flex flex-col justify-center">
      
      {/* Soft CSS Background Enhancements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-danger/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-soft rounded-full blur-[100px] opacity-40 pointer-events-none" aria-hidden="true"></div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Data Privacy
            </span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h1 className="text-foreground text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Data Deletion Request
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            We believe in your right to privacy. Follow the instructions below to have your information permanently removed from our systems.
          </p>
        </div>

        {/* Content Card */}
        <article className="bg-surface border border-border-soft rounded-3xl p-8 sm:p-12 shadow-md text-foreground">
          
          <div className="h-16 w-16 bg-danger/10 rounded-2xl flex items-center justify-center mb-8">
            <i className="fa-solid fa-user-xmark text-3xl text-danger" aria-hidden="true"></i>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">1. How We Store Your Data</h2>
            <p className="text-muted leading-relaxed">
              At {SCHOOL_NAME || 'our institution'}, we do not require users to create standard accounts with passwords. The only personal data we store is the information you explicitly provide when submitting an <strong>Inquiry Form</strong> or a <strong>Career Application Form</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">2. The Deletion Process</h2>
            <p className="text-muted leading-relaxed mb-4">
              If you would like us to permanently delete your submitted form data (including your name, contact details, and uploaded documents), please send a request to our administration team.
            </p>
            <ul className="space-y-3 text-muted bg-mainBg rounded-2xl p-6 border border-border-soft">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-primary mt-1" aria-hidden="true"></i>
                <span>Send an email to <strong>ramstechcircle@gmail.com</strong> from the email address you used to submit the form.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-primary mt-1" aria-hidden="true"></i>
                <span>Use the subject line: <strong>"Data Deletion Request"</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-primary mt-1" aria-hidden="true"></i>
                <span>State clearly whether you are requesting the deletion of an Inquiry or a Job Application.</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">3. Processing Time</h2>
            <p className="text-muted leading-relaxed">
              Once we receive your email, we will manually verify the request to ensure data security. Your information will be completely and permanently wiped from our databases within <strong>3 working days</strong>. You will receive a final confirmation email once the deletion is complete.
            </p>
          </section>

          {/* Call to Action Button */}
          <div className="pt-6 border-t border-border-soft">
            <a 
              href="mailto:ramstechcircle@gmail.com?subject=Data%20Deletion%20Request&body=Hello%2C%0D%0A%0D%0AI%20would%20like%20to%20request%20the%20complete%20deletion%20of%20my%20data%20from%20your%20records.%0D%0A%0D%0AName%3A%20%0D%0AForm%20Type%20(Inquiry%2FCareer)%3A%20%0D%0A%0D%0AThank%20you."
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-foreground hover:bg-black text-inverse px-8 py-4 text-base font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5 focus:ring-2 focus:ring-foreground focus:ring-offset-2"
              aria-label="Send automated data deletion email"
            >
              <i className="fa-solid fa-envelope-open-text text-lg" aria-hidden="true"></i>
              Draft Deletion Email
            </a>
            <p className="text-xs text-muted mt-4">
              Clicking the button above will automatically open your default email client with a pre-filled deletion request template.
            </p>
          </div>

        </article>
      </div>
    </main>
  );
};

export default AccountDeletion;