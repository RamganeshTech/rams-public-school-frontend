import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer id='footer' className="bg-white border-t border-border pt-16 pb-8 mt-auto">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Main Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: Brand & Description */}
                    <div className="flex flex-col space-y-5 lg:pr-4">
                        <Link to="/" className="flex items-center gap-2" aria-label="Rams Public School Home">
                            <img
                                src="/logo.png"
                                alt="Rams Public School Logo"
                                className="h-12 w-auto"
                                loading="lazy"
                            />
                            <span className="text-primary text-xl font-bold tracking-tight">
                                Rams Public School
                            </span>
                        </Link>
                        <p className="text-muted text-sm leading-relaxed">
                            Empowering students with knowledge, discipline, and character. We build the foundation for a brighter, more innovative tomorrow.
                        </p>
                        {/* Social Icons */}
                        <div className="flex space-x-5 pt-2">
                            <a href="#" aria-label="Facebook" className="text-muted hover:text-primary transition-colors duration-200">
                                <i className="fa-brands fa-facebook fa-xl"></i>
                            </a>
                            {/* <a href="#" aria-label="Twitter" className="text-muted hover:text-primary transition-colors duration-200">
                <i className="fa-brands fa-x-twitter fa-xl"></i>
              </a> */}
                            <a href="#" aria-label="Instagram" className="text-muted hover:text-primary transition-colors duration-200">
                                <i className="fa-brands fa-instagram fa-xl"></i>
                            </a>
                            <a href="#" aria-label="YouTube" className="text-muted hover:text-primary transition-colors duration-200">
                                <i className="fa-brands fa-youtube fa-xl"></i>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Explore */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-foreground font-bold text-lg border-b border-border-soft pb-2 inline-block w-max">
                            Explore
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="/#about-us" className="text-muted hover:text-primary transition-colors duration-200 flex items-center gap-2">
                                    <i className="fa-solid fa-angle-right text-xs"></i> About Us
                                </a>
                            </li>
                            <li>
                                <a href="/#academics-extracurriculars" className="text-muted hover:text-primary transition-colors duration-200 flex items-center gap-2">
                                    <i className="fa-solid fa-angle-right text-xs"></i> Academics
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-foreground font-bold text-lg border-b border-border-soft pb-2 inline-block w-max">
                            Resources
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/inquiry-form" className="text-muted hover:text-primary transition-colors duration-200 flex items-center gap-2">
                                    <i className="fa-solid fa-angle-right text-xs"></i> Inquriy Form
                                </Link>
                            </li>
                            <li>
                                <Link to="/careers" className="text-muted hover:text-primary transition-colors duration-200 flex items-center gap-2">
                                    <i className="fa-solid fa-angle-right text-xs"></i> Careers & Hiring
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-foreground font-bold text-lg border-b border-border-soft pb-2 inline-block w-max">
                            Get in Touch
                        </h3>
                        <ul className="space-y-4 text-sm text-muted">
                            <li className="flex items-start gap-3">
                                <div className="bg-primary-soft p-2 rounded-md text-primary mt-1">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <span className="leading-relaxed">123 Education Lane,<br />School District,<br />City Name 12345</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-primary-soft p-2 rounded-md text-primary flex-shrink-0">
                                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                                </div>
                                <a
                                    href="tel:+918825922099"
                                    className="font-bold text-foreground hover:text-primary transition-colors duration-200"
                                    aria-label="Call us at +91 88259 22099"
                                >
                                    +91 88259 22099
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-primary-soft p-2 rounded-md text-primary">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <a href="mailto:ramstechcircle@gmail.com" className="hover:text-primary transition-colors">
                                    ramstechcircle@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <div className="border-t border-border-soft pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
                    <p className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Rams Public School. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/account-deletion" className="hover:text-primary transition-colors">Information Deletion</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;