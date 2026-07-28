import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../constants/constants';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* 
        Header adjustments: 
        bg-white (white background) 
        border-black (black line) 
      */}
            <header className="bg-white sticky top-0 z-50 w-full border-b border-border-soft shadow-sm transition-colors duration-300">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">

                        {/* Left: Logo & Brand */}
                        {/* <div className="flex flex-shrink-0 items-center h-full">
                            <Link to="/" className="flex items-center gap-2" aria-label="Rams Public School Home">
                                <img
                                    src={LOGO}
                                    alt="Rams Public School Logo"
                                    className="h-full w-20"
                                    loading="lazy"
                                />
                                <span className="text-primary text-xl font-bold tracking-tight">
                                    Rams Public School
                                </span>
                            </Link>
                        </div> */}


                        <div className="flex flex-shrink-0 items-center h-full">
                            <Link to="/" className="flex items-center gap-2" aria-label="Rams Public School Home">
                                <img
                                    src={LOGO}
                                    alt="Rams Public School Logo"
                                    /* 
                                      Changes made:
                                      1. Removed w-20
                                      2. Set a fixed height (h-12 or h-14 depending on your navbar height)
                                      3. Set w-auto so the width scales naturally with the height
                                      4. Added object-contain for safety
                                    */
                                    className="h-12 w-auto object-contain"
                                    loading="lazy"
                                />
                                {/* School name in Red (text-primary) */}
                                {/* <span className="text-primary text-xl font-bold tracking-tight">
            Rams Public School
        </span> */}
                            </Link>
                        </div>

                        {/* Right: Desktop Navigation */}
                        <nav aria-label="Main Navigation" className="hidden md:block">
                            <ul className="flex items-center space-x-8">
                                <li>
                                    <Link to="/" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <a href="/#about-us" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/#academics-extracurriculars" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                                        Academics
                                    </a>
                                </li>

                                <li>
                                    <Link to="/inquiry-form" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                                        {/* <i className="fa-solid fa-angle-right text-xs"></i>  */}
                                        Inquriy Form

                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className="bg-primary hover:bg-primary-hover text-inverse px-5 py-2 rounded-md transition-colors duration-200 font-medium shadow-sm">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Mobile Menu Toggle Button */}
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                type="button"
                                className="text-foreground hover:text-primary focus:outline-none p-2 rounded-md transition-colors"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen}
                                aria-label="Open navigation menu"
                            >
                                <i className="fa-solid fa-bars text-2xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- Mobile Menu Drawer --- */}

            {/* Dark Overlay (Clicking it closes the menu) */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Left-Side Sliding Drawer */}
            <div
                id="mobile-menu"
                className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white z-50 border-r border-black shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Drawer Header (Logo & Close Button) */}
                <div className="flex items-center justify-between h-16 px-4 border-b border-border-soft">
                    <span className="text-primary text-lg font-bold">Rams Public School</span>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-foreground hover:text-primary focus:outline-none p-2"
                        aria-label="Close navigation menu"
                    >
                        <i className="fa-solid fa-xmark text-2xl"></i>
                    </button>
                </div>

                {/* Drawer Links */}
                <nav className="flex-1 px-4 pt-6 space-y-2 overflow-y-auto">
                    <Link
                        to="/"
                        className="text-foreground hover:bg-primary-soft hover:text-primary block px-4 py-3 rounded-lg text-lg font-medium transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-foreground hover:bg-primary-soft hover:text-primary block px-4 py-3 rounded-lg text-lg font-medium transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/academics"
                        className="text-foreground hover:bg-primary-soft hover:text-primary block px-4 py-3 rounded-lg text-lg font-medium transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Academics
                    </Link>
                </nav>

                {/* Drawer Footer / Sticky CTA */}
                <div className="p-4 border-t border-border-soft">
                    <Link
                        to="/contact"
                        className="flex justify-center w-full bg-primary hover:bg-primary-hover text-inverse px-4 py-3 rounded-md text-lg font-bold transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;