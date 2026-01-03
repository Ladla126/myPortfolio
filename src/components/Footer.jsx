import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/Samihaiderkhan', label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/samiullahsami/', label: 'LinkedIn' },
        { icon: FaTwitter, url: 'https://www.facebook.com/sami.ullah.sami.442522', label: 'Twitter' },
    ];

    return (
        <footer className="relative py-12 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-6"
                >
                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-4">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-gray-100 rounded-lg hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <Icon className="text-xl text-gray-700 group-hover:text-white transition-colors duration-300" />
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <div className="space-y-2">
                        <p className="text-gray-600 flex items-center justify-center gap-2 flex-wrap">
                            <span>© {currentYear} SAMI ULLAH KHAN.</span>
                            <span className="flex items-center gap-1">
                                Full Stack Developer & AI Engineer
                            </span>
                        </p>
                        <p className="text-gray-500 text-sm">
                            Crafted with passion and attention to detail
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Decorative gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />
        </footer>
    );
};

export default Footer;
