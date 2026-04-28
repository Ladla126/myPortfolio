// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const skills = [
        { name: 'React Native', level: 85, color: 'from-primary-500 to-indigo-600' },
        { name: 'React.js', level: 90, color: 'from-accent-400 to-primary-500' },
        { name: 'JavaScript', level: 88, color: 'from-amber-400 to-orange-500' },
        { name: 'TypeScript', level: 80, color: 'from-blue-500 to-indigo-600' },
        { name: 'Tailwind CSS', level: 95, color: 'from-sky-400 to-accent-500' },
        { name: 'Node.js', level: 75, color: 'from-emerald-400 to-teal-500' },
        { name: 'Firebase', level: 85, color: 'from-orange-400 to-amber-500' },
        { name: 'Git & GitHub', level: 90, color: 'from-slate-700 to-slate-900' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    const barVariants = {
        hidden: { width: 0 },
        visible: (level) => ({
            width: `${level}%`,
            transition: { duration: 1, ease: 'easeOut', delay: 0.3 },
        }),
    };

    return (
        <section id="skills" className="section-container relative overflow-hidden">
            {/* Background Watermark Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <h2 className="text-[12rem] md:text-[20rem] font-bold text-slate-200 dark:text-slate-800/20 opacity-30 select-none tracking-tighter">
                    SKILLS
                </h2>
            </div>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={containerVariants}
                className="relative z-10"
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <p className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2 font-sans">
                        My Expertise
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                        Mastered <span className="gradient-text">Technologies</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto mb-6" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life with precision and efficiency.
                    </p>
                </motion.div>

                {/* Skills Progress Bars */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            className="glass-effect dark:glass-effect-dark rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 space-y-3 border border-white/20 dark:border-slate-800"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                                    {skill.name}
                                </h3>
                                <span className="text-lg font-black gradient-text">
                                    {skill.level}%
                                </span>
                            </div>

                            {/* Progress Bar Background */}
                            <div className="h-4 bg-slate-100 dark:bg-slate-900/80 rounded-full overflow-hidden backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-inner">
                                {/* Progress Bar Fill */}
                                <motion.div
                                    custom={skill.level}
                                    variants={barVariants}
                                    initial="hidden"
                                    animate={isInView ? 'visible' : 'hidden'}
                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative shadow-lg`}
                                >
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 text-center"
                >
                    <p className="text-slate-500 dark:text-slate-500 text-lg max-w-2xl mx-auto italic">
                        "Learning is a lifelong process, and I'm dedicated to refining my craft every single day."
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
