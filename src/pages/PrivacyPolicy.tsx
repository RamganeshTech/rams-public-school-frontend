import React from 'react';
import { SCHOOL_PHONENO } from '../constants/constants';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="bg-mainBg min-h-screen py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Legal
            </span>
          </div>
          <h1 className="text-foreground text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted text-base">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Policy Content */}
        <article className="bg-surface border border-border-soft rounded-3xl p-8 sm:p-12 shadow-sm text-foreground leading-relaxed space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted mb-4">
              At <strong>Rams Public School</strong>, we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us through our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Information We Collect</h2>
            <p className="text-muted mb-4">
              We only collect personal information that you voluntarily provide to us when interacting with our website. Specifically, data is collected through the following channels:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li>
                <strong> Inquiry Form:</strong> Name, mobile number, email address, grade applying for, and any custom message you submit.
              </li>
              <li>
                <strong>Career Application Form:</strong> Name, mobile number, email address, qualifications, professional experience, and uploaded resume files.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted mb-4">
              The information we collect is strictly used for the purpose it was provided:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li>To respond to your admission inquiries and provide relevant information regarding school programs.</li>
              <li>To evaluate and process job applications for open positions at our school.</li>
              <li>To contact you via phone or email regarding your specific requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Sharing and Disclosure</h2>
            <p className="text-muted mb-4">
              We highly value your trust. <strong>We do not sell, rent, trade, or otherwise share your personal data with any third parties</strong> for marketing or commercial purposes. Your data remains strictly confidential and is only accessible by authorized school administration and human resources personnel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Retention and Deletion Request</h2>
            <p className="text-muted mb-4">
              We retain your personal information only for as long as is necessary to fulfill the purposes outlined in this Privacy Policy. You have the right to request the complete deletion of your personal data from our systems at any time.
            </p>
            <div className="bg-primary-soft/30 border border-primary/20 rounded-2xl p-6 mt-4">
              <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                <i className="fa-solid fa-trash-can" aria-hidden="true"></i> How to Request Data Deletion
              </h3>
              <p className="text-muted text-sm">
                If you wish to have your inquiry or application data permanently removed from our records, please send an email to <a href="mailto:ramstechcircle@gmail.com" className="text-primary hover:underline font-bold">ramstechcircle@gmail.com</a> with the subject line <strong>"Data Deletion Request"</strong>. 
                <br /><br />
                We will process and complete your deletion request within <strong>three (3) working days</strong> of receiving your email.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Security</h2>
            <p className="text-muted mb-4">
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. Changes to This Privacy Policy</h2>
            <p className="text-muted mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
            </p>
          </section>

          <hr className="border-border-soft my-8" />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Contact Us</h2>
            <p className="text-muted">
              If you have any questions or suggestions about our Privacy Policy, please contact us at:
            </p>
            <ul className="mt-4 space-y-2 text-muted">
              <li><strong>Email:</strong> <a href="mailto:ramstechcircle@gmail.com" className="hover:text-primary transition-colors">ramstechcircle@gmail.com</a></li>
              <li><strong>Phone:</strong> +91 {SCHOOL_PHONENO}
              </li>
            </ul>
          </section>

        </article>
      </div>
    </main>
  );
};

export default PrivacyPolicy;