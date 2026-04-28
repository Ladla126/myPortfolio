import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaPython, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const floatingIcons = [
        { Icon: FaReact, color: '#61DAFB', delay: 0, position: 'top-10 left-10' },
        { Icon: SiTypescript, color: '#3178C6', delay: 0.5, position: 'top-20 right-20' },
        { Icon: FaNodeJs, color: '#339933', delay: 1, position: 'bottom-20 left-20' },
        { Icon: SiNextdotjs, color: '#000000', delay: 1.5, position: 'bottom-10 right-10' },
        { Icon: FaJs, color: '#F7DF1E', delay: 2, position: 'top-1/2 left-5' },
        { Icon: SiTailwindcss, color: '#06B6D4', delay: 2.5, position: 'top-1/3 right-5' },
    ];

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl dark:bg-primary-900/10"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl dark:bg-accent-900/10"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-left"
                    >
                        <motion.p
                            variants={itemVariants}
                            className="text-slate-600 dark:text-slate-400 text-lg mb-4 font-medium"
                        >
                            Hi, I'm
                        </motion.p>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white text-shadow-lg"
                        >
                            KHALIL ULLAH 
                        </motion.h1>

                        <motion.h2
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6"
                        >
                            <span className="gradient-text">
                                Web & Mobile App Developer
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed"
                        >
                            Passionate about creating beautiful, functional, and user-friendly applications.
                            I specialize in building modern web experiences with cutting-edge technologies.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center gap-4"
                        >
                                <motion.a
                                    href="/KhalilUllahCV.pdf"
                                    download="KhalilUllahCV.pdf"
                                    className="btn-primary inline-flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>Download Resume</span>
                                    <FiDownload className="text-xl" />
                                </motion.a>
                            <motion.button
                                onClick={() => handleScroll('contact')}
                                className="btn-secondary dark:bg-slate-800 dark:text-white dark:border-slate-700"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Me
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right: Profile Image with Floating Icons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Floating Tech Icons */}
                        <div className="absolute inset-0">
                            {floatingIcons.map((item, index) => {
                                const { Icon, color, delay, position } = item;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: delay, duration: 0.5 }}
                                        className={`absolute ${position} hidden md:block`}
                                    >
                                        <motion.div
                                            animate={{
                                                y: [0, -15, 0],
                                            }}
                                            transition={{
                                                duration: 3 + index * 0.5,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                            className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 dark:border-slate-700"
                                        >
                                            <Icon className="text-3xl" style={{ color }} />
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Profile Image Container */}
                        <div className="relative">
                            {/* Glow Effect Behind Image */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.7, 0.5],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur-2xl opacity-50 dark:from-primary-600 dark:to-accent-600"
                            />

                            {/* Profile Image */}
                            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
                                <img
                                    src="/profile.png"
                                    alt="KHALIL ULLAH"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => handleScroll('about')}
            >
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest font-sans">Scroll Down</span>
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="w-5 h-8 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center p-1"
                >
                    <motion.div className="w-1 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
