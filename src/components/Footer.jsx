import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/Ladla126', label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/khalil-ullah12/', label: 'LinkedIn' },
        { icon: FaTwitter, url: 'https://x.com/KhalilLadla1?t=uNaHbevc5IRYdUTZhKgBrg&s=09', label: 'Twitter' },
    ];

    return (
        <footer className="relative py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8"
                >
                    {/* Logo/Brand */}
                    <div className="flex items-center justify-center gap-2">
                         <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent uppercase tracking-tighter">[ Code. ]</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-6">
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
                                    className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-800 group"
                                    aria-label={social.label}
                                >
                                    <Icon className="text-xl" />
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Copyright & Info */}
                    <div className="space-y-3 font-sans">
                        <p className="text-slate-900 dark:text-white flex items-center justify-center gap-2 flex-wrap font-black uppercase tracking-widest text-xs">
                            <span>© {currentYear} Khalil Ullah</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="flex items-center gap-1.5">
                                Web & Mobile App Developer <FaHeart className="text-red-500 animate-pulse" />
                            </span>
                        </p>
                        <p className="text-slate-500 dark:text-slate-500 text-sm font-medium italic">
                            Handcrafted with precision and passion. Always striving for excellence.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
            <div className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.05)_0%,_transparent_70%)] -z-10" />
        </footer>
    );
};

export default Footer;
