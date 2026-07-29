import React from 'react';
import { SCHOOL_NAME } from '../utils/constants';
import { SCHOOL_EMAIL, SCHOOL_PHONENO } from '../constants/constants';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="bg-mainBg relative overflow-hidden py-16 sm:py-20 lg:py-24">
            {/* Background decor */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-soft rounded-full blur-[120px] opacity-20 pointer-events-none" aria-hidden="true"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary-hover px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide mb-5">
                        <i className="fa-solid fa-comments"></i>
                        Get in Touch
                    </span>
                    <h2 className="font-display text-foreground text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-4">
                        We&rsquo;d Love to <span className="text-primary">Hear From You</span>
                    </h2>
                    <p className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed">
                        Have questions about admissions or want to know more about {SCHOOL_NAME}?
                        Reach out to us &mdash; we&rsquo;re happy to help.
                    </p>
                </div>

                {/* Contact cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
                    {/* Phone Card */}
                    <div className="bg-surface border border-border-soft rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
                        <div className="h-12 w-12 bg-info/10 rounded-xl flex items-center justify-center mb-5">
                            <i className="fa-solid fa-phone-volume text-xl text-info" aria-hidden="true"></i>
                        </div>
                        <h3 className="text-foreground font-bold text-base mb-2">Call Us</h3>
                        <a
                            href={`tel:+91${SCHOOL_PHONENO}`}
                            className="text-primary font-bold text-sm sm:text-base hover:underline transition-all"
                            aria-label={`Call us at +91 ${SCHOOL_PHONENO}`}
                        >
                            +91 {SCHOOL_PHONENO}
                        </a>
                    </div>

                    {/* Email Card */}
                    <div className="bg-surface border border-border-soft rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
                        <div className="h-12 w-12 bg-success/10 rounded-xl flex items-center justify-center mb-5">
                            <i className="fa-solid fa-envelope-open-text text-xl text-success" aria-hidden="true"></i>
                        </div>
                        <h3 className="text-foreground font-bold text-base mb-2">Email Us</h3>
                        <a
                            href={`mailto:${SCHOOL_EMAIL}`}
                            className="text-primary font-bold text-xs sm:text-sm hover:underline transition-all break-words"
                            aria-label={`Email us at ${SCHOOL_EMAIL}`}
                        >
                            {SCHOOL_EMAIL}
                        </a>
                    </div>

                    {/* Address Card */}
                    <div className="bg-surface border border-border-soft rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
                        <div className="h-12 w-12 bg-primary-soft rounded-xl flex items-center justify-center mb-5">
                            <i className="fa-solid fa-map-location-dot text-xl text-primary" aria-hidden="true"></i>
                        </div>
                        <h3 className="text-foreground font-bold text-base mb-2">Visit Us</h3>
                        {/* <a
            //   href="https://www.google.com/maps/dir/?api=1&origin=9.9146781,78.157552&destination=Rams+Public+School&destination_place_id=ChIJ1dIeYxljUjoRqWiwV9mx54A"
                  href="https://www.google.com/maps/dir/?api=1&origin=9.9146781,78.157552&destination=Rams+Public+School&destination_place_id=ChIJ1dIeYxljUjoRqWiwV9mx54A"

              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold text-sm sm:text-base hover:underline transition-all"
            >
              Get Directions
            </a> */}

                        <a

                            href="https://www.google.com/maps/search/?api=1&query=Rams+Public+School&query_place_id=ChIJ1dIeYxljUjoRqWiwV9mx54A"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-bold text-sm sm:text-base hover:underline transition-all"
                        >
                            View on Map
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ContactSection;