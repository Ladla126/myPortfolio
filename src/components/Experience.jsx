// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLaptopCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const experiences = [
        {
            id: 1,
            title: 'Crossplatform App Developer',
            company: 'Quantam Labs AI',
            period: '2025 - Present',
            description: 'Leading development of enterprise-level web applications using React, React Native, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
            tech: ['React', 'React Native', 'Node.js', 'MongoDB', 'TypeScript','firebase','Nativewind','AysyncStorage','DB'],
            icon: FaLaptopCode,
        },
        {
            id: 2,
            title: 'Frontend Developer',
            company: 'Maxtec',
            period: '2023 - 2024',
            description: 'Built modern, responsive user interfaces for SaaS products. Implemented pixel-perfect designs and optimized performance.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Firebase'],
            icon: FaLaptopCode,
        },
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
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="experience" className="section-container relative">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <p className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2 font-sans">
                        My Pathway
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                        Professional <span className="gradient-text">Journey</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto mb-6" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        My professional journey and the organizations I've contributed to.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 transform md:-translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={isInView ? { height: '100%' } : { height: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="bg-gradient-to-b from-primary-500 to-accent-500 w-full"
                        />
                    </div>

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            const Icon = exp.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={exp.id}
                                    variants={itemVariants}
                                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                        } flex-row`}
                                >
                                    {/* Timeline Icon */}
                                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10 -translate-x-1/2">
                                        <div className="w-16 h-16 bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center shadow-xl">
                                            <Icon className="text-2xl text-primary-600 dark:text-primary-400" />
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        className={`ml-28 md:ml-0 w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-16 text-right font-sans' : 'md:ml-auto md:pl-16 text-left font-sans'
                                            }`}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className="glass-effect dark:glass-effect-dark rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-slate-800"
                                        >
                                            <div className="mb-4">
                                                <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 uppercase tracking-tighter">
                                                    {exp.title}
                                                </h3>
                                                <div className="flex items-center gap-2 justify-start md:justify-end">
                                                     {!isEven && <span className="w-2 h-2 rounded-full bg-primary-500" />}
                                                     <p className="text-slate-900 dark:text-white font-bold text-lg">
                                                        {exp.company}
                                                    </p>
                                                     {isEven && <span className="w-2 h-2 rounded-full bg-primary-500" />}
                                                </div>
                                            </div>

                                            <p className="text-sm text-primary-600 dark:text-primary-400 mb-4 font-bold uppercase tracking-widest">
                                                {exp.period}
                                            </p>

                                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                                                {exp.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                                {exp.tech.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-4 py-1.5 text-[10px] font-black uppercase text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:border-primary-500 transition-colors duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
