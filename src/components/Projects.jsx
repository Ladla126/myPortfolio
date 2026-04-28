import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const projectVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="projects" className="section-container relative">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                {/* Section Header */}
                <motion.div variants={projectVariants} className="text-center mb-16">
                    <p className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2 font-sans">
                        My Portfolio
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto mb-6" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A showcase of my recent work, blending design aesthetics with technical complexity.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={projectVariants}
                            whileHover={{ y: -10 }}
                            className="group h-full"
                        >
                            <div className="glass-effect dark:bg-slate-900/40 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 shadow-sm border border-white dark:border-slate-800 h-full flex flex-col">
                                {/* Project Image */}
                                <div className="relative overflow-hidden h-60 bg-slate-100 dark:bg-slate-900">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay with Buttons */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 backdrop-blur-[2px]">
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                            className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-slate-900 dark:text-white shadow-xl"
                                        >
                                            <FiExternalLink className="text-2xl" />
                                        </motion.a>
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, rotate: -360 }}
                                            transition={{ duration: 0.5 }}
                                            className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-slate-900 dark:text-white shadow-xl"
                                        >
                                            <FiGithub className="text-2xl" />
                                        </motion.a>
                                    </div>

                                    {/* Project Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase text-slate-800 dark:text-slate-200 border border-white/20 dark:border-slate-700 shadow-lg tracking-widest">
                                            Product
                                        </span>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-8 flex-1 flex flex-col font-sans">
                                    <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 uppercase tracking-tighter">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 text-[10px] font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/50 rounded-lg uppercase tracking-tighter"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More */}
                <motion.div
                    variants={projectVariants}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="https://github.com/Ladla126/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>View All Projects</span>
                        <FiGithub className="text-xl" />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
