import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaGitAlt, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const skills = [
        { name: 'React Native', level: 85, icon: TbBrandReactNative, color: '#61DAFB' },
        { name: 'React.js', level: 90, icon: FaReact, color: '#61DAFB' },
        { name: 'JavaScript', level: 88, icon: FaJs, color: '#F7DF1E' },
        { name: 'TypeScript', level: 80, icon: SiTypescript, color: '#3178C6' },
        { name: 'Tailwind CSS', level: 95, icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Node.js', level: 75, icon: FaNodeJs, color: '#339933' },
        { name: 'Firebase', level: 85, icon: SiFirebase, color: '#FFCA28' },
        { name: 'Git & GitHub', level: 90, icon: FaGitAlt, color: '#F05032' },
        { name: 'HTML5', level: 95, icon: FaHtml5, color: '#E34C26' },
        { name: 'CSS3', level: 92, icon: FaCss3, color: '#1572B6' },
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section id="skills" className="section-container relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <h2 className="text-[10rem] md:text-[18rem] font-bold text-slate-200 dark:text-slate-800/10 opacity-20 select-none tracking-tighter">
                    EXPERTISE
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
                    <p className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2">
                        My Expertise
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                        Mastered <span className="gradient-text">Technologies</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto mb-6" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building high-performance web and mobile applications.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="glass-effect dark:glass-effect-dark rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group border border-white/20 dark:border-slate-800/50 hover:border-primary-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl"
                            >
                                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                    <Icon className="text-5xl" style={{ color: skill.color }} />
                                </div>
                                <h3 className="text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-1">
                                    {skill.name}
                                </h3>
                                <div className="text-[10px] font-bold text-primary-500/80 uppercase">
                                    {skill.level}% Proficiency
                                </div>
                            </motion.div>
                        );
                    })}
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

