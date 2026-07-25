import React, { useState } from 'react';
import { useSubmitApplication, type IApplicationPayload } from '../api_service/career_api/careerApi';
import Input from '../shared/ui/Input';

const CareerForm: React.FC = () => {
  const { mutateAsync, isPending, isError, error } = useSubmitApplication();
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<IApplicationPayload>({
    name: '',
    mobile: '',
    email: '',
    position: '',
    qualification: '',
    experience: '',
    coverLetter: '',
    resume: null,
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof IApplicationPayload, string>>>({});

  // Handler for text inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (formErrors[name as keyof IApplicationPayload]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handler for the File Input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));

    if (formErrors.resume) {
      setFormErrors((prev) => ({ ...prev, resume: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof IApplicationPayload, string>> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
      isValid = false;
    }

    const digitsOnly = formData.mobile.replace(/\D/g, '');
    const indianMobileRegex = /^[6-9]\d{9}$/;
    
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!indianMobileRegex.test(digitsOnly)) {
      errors.mobile = 'Enter a valid 10-digit Indian mobile number';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Enter a valid email address';
      isValid = false;
    }

    if (!formData.position.trim()) {
      errors.position = 'Please specify the position';
      isValid = false;
    }

    if (!formData.qualification.trim()) {
      errors.qualification = 'Highest qualification is required';
      isValid = false;
    }

    if (!formData.experience.trim()) {
      errors.experience = 'Experience details are required';
      isValid = false;
    }

    // if (!formData.resume) {
    //   errors.resume = 'Please upload your resume';
    //   isValid = false;
    // }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await mutateAsync(formData);
      setIsSuccess(true);
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  // --- Success State UI ---
  if (isSuccess) {
    return (
      <div className="bg-surface border border-border-soft rounded-3xl p-10 text-center shadow-lg transition-all duration-500">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/10 mb-6">
          <i className="fa-solid fa-check text-3xl text-success" aria-hidden="true"></i>
        </div>
        <h3 className="text-foreground text-3xl font-bold mb-3">Application Submitted!</h3>
        <p className="text-muted text-lg leading-relaxed max-w-md mx-auto">
          Thank you, {formData.name}. Our HR team will review your profile for the <strong>{formData.position}</strong> role and contact you at {formData.email}.
        </p>
      </div>
    );
  }

  // --- Form UI ---
  return (
    <div className="relative bg-surface border border-border-soft rounded-3xl shadow-xl overflow-hidden">
      
      {/* Modern Top-Right Design Elements */}
      {/* <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-soft rounded-full blur-3xl opacity-60 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 bg-primary text-inverse text-xs font-bold px-4 py-2 rounded-bl-2xl shadow-sm z-10 flex items-center gap-2">
        <i className="fa-solid fa-briefcase" aria-hidden="true"></i> Hiring Now
      </div> */}

      <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-soft rounded-full blur-3xl opacity-60 pointer-events-none" aria-hidden="true"></div>
      
      {/* 2. Layered Abstract Geometric Shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none overflow-hidden rounded-tr-3xl" aria-hidden="true">
        {/* Large transparent ring */}
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full border-[10px] border-primary-soft/50"></div>
        
        {/* Solid colored accent circle */}
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/10 rounded-full flex items-end justify-start p-3">
           {/* Optional: A very subtle icon fading into the background. 
               Use fa-briefcase for Career, fa-paper-plane for Inquiry */}
           {/* <i className="fa-solid fa-paper-plane text-primary/30 text-lg transform -rotate-12"></i> */}
           <i className="fa-solid fa-briefcase text-primary/30 text-lg transform -rotate-12"></i>
        </div>
        
        {/* Tiny floating accent dot */}
        {/* <div className="absolute top-10 right-10 w-2.5 h-2.5 bg-primary rounded-full shadow-sm"></div> */}
      </div> 

      <form 
        onSubmit={handleSubmit} 
        className="relative z-10 p-6 sm:p-10"
        noValidate
      >
        <div className="mb-8">
          <h3 className="text-foreground text-3xl font-bold mb-2">Join Our Team</h3>
          <p className="text-muted text-sm">Submit your credentials below to apply for a position.</p>
        </div>

        {isError && (
          <div aria-live="polite" className="mb-6 p-4 rounded-2xl bg-danger/10 border border-danger/20 text-danger text-sm flex items-start gap-3">
            <i className="fa-solid fa-circle-exclamation mt-0.5" aria-hidden="true"></i>
            <span>{error instanceof Error ? error.message : 'Something went wrong.'}</span>
          </div>
        )}

        <div className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              icon="fa-regular fa-user"
              mandatory
              error={formErrors.name}
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              icon="fa-regular fa-envelope"
              mandatory
              error={formErrors.email}
              autoComplete="email"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="Mobile Number"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              icon="fa-solid fa-phone"
              mandatory
              error={formErrors.mobile}
              maxLength={12}
              autoComplete="tel"
            />

            <Input
              label="Position Applying For"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              placeholder="e.g. Primary Teacher, HR Admin"
              icon="fa-solid fa-chalkboard-user"
              mandatory
              error={formErrors.position}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="Highest Qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              placeholder="e.g. M.Ed, B.Sc, Ph.D"
              icon="fa-solid fa-graduation-cap"
              mandatory
              error={formErrors.qualification}
            />

            <Input
              label="Total Experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              placeholder="e.g. 5 Years, Fresher"
              icon="fa-solid fa-briefcase"
              mandatory
              error={formErrors.experience}
            />
          </div>

          {/* Custom Styled Resume Upload Field */}
          <div>
            <label htmlFor="resume" className="block text-sm font-bold text-foreground mb-2">
              Upload Resume (PDF only) <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,application/pdf"
                onChange={handleFileChange}
                className={`block w-full text-sm text-foreground transition-all duration-300
                  file:mr-4 file:py-3.5 file:px-6 file:rounded-2xl file:border-0
                  file:text-sm file:font-bold file:bg-primary-soft file:text-primary
                  hover:file:bg-primary hover:file:text-inverse focus:outline-none focus:ring-2 focus:ring-primary/20
                  ${formErrors.resume ? 'border border-danger rounded-2xl bg-mainBg' : ''}
                `}
                aria-invalid={!!formErrors.resume}
              />
            </div>
            {formErrors.resume && (
              <p aria-live="polite" className="mt-2 text-xs font-bold text-danger flex items-center gap-1">
                <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {formErrors.resume}
              </p>
            )}
          </div>

          {/* Cover Letter Textarea */}
          <div>
            <label htmlFor="coverLetter" className="block text-sm font-bold text-foreground mb-2">
              Cover Letter / Brief Intro
            </label>
            <div className="relative">
              <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-muted">
                <i className="fa-regular fa-comment-dots" aria-hidden="true"></i>
              </div>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows={4}
                value={formData.coverLetter}
                onChange={handleInputChange}
                className="w-full rounded-2xl border border-border bg-mainBg py-3.5 pl-11 pr-4 text-foreground transition-all duration-300 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                placeholder="Why do you want to join Rams Public School?"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={isPending}
            className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-primary hover:bg-primary-hover active:bg-brand-hover text-inverse px-10 py-4 text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
          >
            {isPending ? (
              <>
                <i className="fa-solid fa-circle-notch fa-spin" aria-hidden="true"></i>
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;