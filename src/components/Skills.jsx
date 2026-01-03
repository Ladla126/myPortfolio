import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const skills = [
        { name: 'React / Next.js', level: 95, color: 'from-primary-500 to-primary-600' },
        { name: 'React Native', level: 88, color: 'from-accent-500 to-accent-600' },
        { name: 'TypeScript / JavaScript', level: 90, color: 'from-primary-500 to-primary-600' },
        { name: 'Node.js / Express', level: 85, color: 'from-accent-500 to-accent-600' },
        { name: 'Python', level: 82, color: 'from-primary-500 to-primary-600' },
        { name: 'Tailwind CSS / Styling', level: 92, color: 'from-accent-500 to-accent-600' },
        { name: 'MongoDB / PostgreSQL', level: 80, color: 'from-primary-500 to-primary-600' },
        { name: 'Firebase', level: 85, color: 'from-accent-500 to-accent-600' },
        { name: 'Git / DevOps', level: 88, color: 'from-primary-500 to-primary-600' },
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
                <h2 className="text-[12rem] md:text-[20rem] font-bold text-gray-100 opacity-50 select-none">
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
                    <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
                        Skills
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Mastered <span className="gradient-text">Technologies</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto mb-6" />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                {/* Skills Progress Bars */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            className="space-y-2"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {skill.name}
                                </h3>
                                <span className="text-lg font-bold gradient-text">
                                    {skill.level}%
                                </span>
                            </div>

                            {/* Progress Bar Background */}
                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                {/* Progress Bar Fill */}
                                <motion.div
                                    custom={skill.level}
                                    variants={barVariants}
                                    initial="hidden"
                                    animate={isInView ? 'visible' : 'hidden'}
                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
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
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Always learning and exploring new technologies to stay ahead in the ever-evolving web development landscape.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
