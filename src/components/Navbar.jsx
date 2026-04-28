import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

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
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/khalil-ullah12/', label: 'LinkedIn' },
        { icon: FaTwitter, href: 'https://x.com/KhalilLadla1?t=uNaHbevc5IRYdUTZhKgBrg&s=09', label: 'Twitter' },
        { icon: FaGithub, href: 'https://github.com/Ladla126', label: 'GitHub' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const navLinksList = [
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
            ];
            const sections = navLinksList.map(link => link.href.substring(1));
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
            <div className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl ${scrolled ? 'glass-effect shadow-2xl' : 'bg-white/40 backdrop-blur-md border border-white/20'
                }`}>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14 md:h-16">
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            onClick={(e) => handleNavClick(e, '#home')}
                            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>[</span>
                            <span>Code.</span>
                            <span>]</span>
                        </motion.a>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`relative text-sm font-medium transition-colors duration-300 ${activeSection === link.href.substring(1)
                                            ? 'text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text'
                                            : 'text-gray-700 hover:text-gray-900'
                                        }`}
                                    whileHover={{ y: -2 }}
                                >
                                    {link.name}
                                    {activeSection === link.href.substring(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
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
                                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                        aria-label={social.label}
                                    >
                                        <Icon className="text-xl" />
                                    </motion.a>
                                );
                            })}
                            <div className="pl-2 border-l border-slate-200 dark:border-slate-700 ml-2">
                                <ThemeToggle />
                            </div>
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
                        className="md:hidden glass-effect border-t border-white/20 rounded-b-2xl mt-2 shadow-xl"
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
                                        ? 'text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text'
                                        : 'text-gray-700 hover:text-gray-900'
                                        }`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            {/* Mobile Social Icons */}
                            <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileTap={{ scale: 0.9 }}
                                            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                            aria-label={social.label}
                                        >
                                            <Icon className="text-2xl" />
                                        </motion.a>
                                    );
                                })}
                                <div className="ml-auto">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
