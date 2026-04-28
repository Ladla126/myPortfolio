// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiMysql } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const coretech = [
        { name: 'HTML5', icon: SiHtml5, color: '#E34C26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'React.js', icon: FaReact, color: '#61DAFB' },
        { name: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'MySQL', icon: SiMysql, color: '#00758F' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="about" className="section-container relative">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2 font-sans">
                        About Me
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                        Passionate <span className="gradient-text">Developer</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: My Journey Card */}
                    <motion.div variants={itemVariants}>
                        <div className="glass-effect dark:glass-effect-dark rounded-3xl h-full p-8 md:p-10">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">My Journey</h3>
                            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                <p>
                                    I'm a passionate full-stack developer with a keen eye for design and a love for creating
                                    seamless user experiences. With over a year of experience in modern web technologies, I transform
                                    ideas into beautiful, functional applications.
                                </p>
                                <p>
                                    My journey in web development started with a curiosity about how digital products are built, and it
                                    has evolved into a professional career focused on building scalable, performant, and accessible
                                    mobile and web applications.
                                </p>
                                <p>
                                    I believe in writing clean, maintainable code and staying at the forefront of the latest
                                    industry trends. I'm always looking for new challenges that push my boundaries and help me grow.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                                <div>
                                    <p className="text-4xl font-extrabold gradient-text">1+</p>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Years Exp</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-extrabold gradient-text">15+</p>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Projects</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Core Technologies */}
                    <motion.div variants={itemVariants}>
                        <div className="glass-effect dark:glass-effect-dark rounded-3xl h-full p-8 md:p-10">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">Core Tech Stack</h3>
                            <div className="grid grid-cols-3 gap-6">
                                {coretech.map((tech, index) => {
                                    const Icon = tech.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-white/20 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                                        >
                                            <Icon
                                                className="text-4xl mb-4"
                                                style={{ color: tech.color }}
                                            />
                                            <p className="text-xs font-bold text-slate-700 dark:text-slate-300 text-center uppercase tracking-tighter">
                                                {tech.name}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
