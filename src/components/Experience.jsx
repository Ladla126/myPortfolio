import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLaptopCode, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const experiences = [
        {
            id: 1,
            title: 'Crossplatform App Developer',
            company: 'Quantam Labs AI',
            period: '2025 - Present',
            description: 'Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
            tech: ['React', 'Node.js', 'React Native', 'MongoDB', 'TypeScript','firebase','Nativewind','AysyncStorage','DB'],
            icon: FaLaptopCode,
        },
        {
            id: 2,
            title: 'Full Stack Developer',
            company: 'Freelancer',
            period: '2024 - Present',
            description: 'Developed and maintained multiple client projects, focusing on responsive web design and API integration. Collaborated with cross-functional teams.',
            tech: ['React', 'Node.js', 'Next.js','Tailwind css','Firebase','Sql', 'MongoDB', 'TypeScript','Express'],
            icon: FaBriefcase,
        },
        {
            id: 3,
            title: 'Frontend Developer',
            company: 'StartUp Hub',
            period: '2025 - 2026',
            description: 'Built modern, responsive user interfaces for SaaS products. Implemented pixel-perfect designs and optimized performance.',
            tech: ['html', 'css', 'javascript', 'Tailwind CSS', 'Firebase'],
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
        <section id="experience" className="section-container">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
                        Experience
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto mb-6" />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        My professional journey and the companies I've worked with
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-accent-400 transform md:-translate-x-1/2" />

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
                                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                                            <Icon className="text-2xl text-white" />
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        className={`ml-28 md:ml-0 w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                                            }`}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className="card p-6 bg-white"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                        {exp.title}
                                                    </h3>
                                                    <p className="text-primary-600 font-semibold">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-sm text-gray-500 mb-4 font-medium">
                                                {exp.period}
                                            </p>

                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tech.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-200"
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
