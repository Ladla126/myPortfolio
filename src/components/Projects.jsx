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
        <section id="projects" className="section-container bg-white">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                {/* Section Header */}
                <motion.div variants={projectVariants} className="text-center mb-16">
                    <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
                        Projects
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto mb-6" />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A showcase of my recent work and personal projects
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={projectVariants}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-primary-300 transition-all duration-300 shadow-lg">
                                {/* Project Image */}
                                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-100 to-accent-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Overlay with Buttons */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300"
                                        >
                                            <FiExternalLink className="text-xl text-gray-900" />
                                        </motion.a>
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300"
                                        >
                                            <FiGithub className="text-xl text-gray-900" />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-200"
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
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com/Samihaiderkhan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View More on GitHub
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
