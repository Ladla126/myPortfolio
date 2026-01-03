import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/samiullahsami/', label: 'LinkedIn' },
        { icon: FaTwitter, href: 'https://www.facebook.com/sami.ullah.sami.442522', label: 'Twitter' },
        { icon: FaGithub, href: 'https://github.com/Samihaiderkhan', label: 'GitHub' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3"
        >
            <div className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl ${scrolled ? 'bg-white/60 backdrop-blur-xl shadow-lg border border-white/30' : 'bg-white/40 backdrop-blur-md'
                }`}>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14 md:h-16">
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            onClick={(e) => handleNavClick(e, '#home')}
                            className="text-xl md:text-2xl font-bold text-gray-900 cursor-pointer flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-primary-600">[</span>
                            <span>Code.</span>
                            <span className="text-primary-600">]</span>
                        </motion.a>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`relative text-sm font-medium transition-colors duration-300 ${activeSection === link.href.substring(1)
                                            ? 'text-primary-600'
                                            : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    whileHover={{ y: -2 }}
                                >
                                    {link.name}
                                    {activeSection === link.href.substring(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600"
                                        />
                                    )}
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Icons - Desktop */}
                        <div className="hidden md:flex items-center gap-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                                        aria-label={social.label}
                                    >
                                        <Icon className="text-lg" />
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-gray-900 text-xl focus:outline-none"
                        >
                            {isOpen ? <HiX /> : <HiMenu />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/70 backdrop-blur-xl border-t border-white/20 rounded-b-2xl mt-2 shadow-xl"
                    >
                        <div className="px-6 py-6 space-y-4">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`block text-lg font-medium transition-colors duration-300 ${activeSection === link.href.substring(1)
                                        ? 'text-primary-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            {/* Mobile Social Icons */}
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-200/50">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileTap={{ scale: 0.9 }}
                                            className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                                            aria-label={social.label}
                                        >
                                            <Icon className="text-xl" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
